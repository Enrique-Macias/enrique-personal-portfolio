"""Read-only local release checks. Never submits the contact form or sends email."""
from urllib.request import urlopen, Request, build_opener, HTTPRedirectHandler
from urllib.error import HTTPError
from html.parser import HTMLParser
from pathlib import Path
import hashlib
import re
import struct
import sys

BASE = sys.argv[1].rstrip('/') if len(sys.argv) > 1 else 'http://127.0.0.1:5173'
SITE = 'https://enriquemacias.dev'

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lang = None
        self.meta = {}
        self.links = []
        self.ids = set()
        self.title = ''
        self.in_title = False
        self.anchors = []
        self.text = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html':
            self.lang = attrs.get('lang')
        if tag == 'meta':
            key = attrs.get('name', attrs.get('property'))
            if key:
                self.meta.setdefault(key, []).append(attrs.get('content'))
        if tag == 'link':
            self.links.append(attrs)
        if tag == 'a':
            self.anchors.append(attrs)
        if tag == 'title':
            self.in_title = True
        if 'id' in attrs:
            self.ids.add(attrs['id'])

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        self.text.append(data)


def fetch(path):
    with urlopen(BASE + path, timeout=30) as response:
        return response.status, response.headers, response.read()


for lang in ['en', 'es']:
    filename = f'Enrique_Macias_CV_{lang.upper()}.pdf'
    cv_url = f'/cv/{filename}'
    for path in ['/', '/projects/passly', '/projects/rlvo', '/projects/orqentic-ai']:
        status, headers, body = fetch(f'{path}?lang={lang}')
        assert status == 200
        html = body.decode()
        page = Page()
        page.feed(html)
        assert page.lang == lang, (path, page.lang)
        assert 'Software Engineer' in page.title
        for key in ['description', 'og:title', 'og:description', 'og:locale', 'og:url', 'og:image', 'og:image:alt', 'twitter:title', 'twitter:description', 'twitter:image']:
            assert len(page.meta.get(key, [])) == 1, (path, key, page.meta.get(key))
        canonical = [link['href'] for link in page.links if link.get('rel') == 'canonical']
        expected_url = f'{SITE}{path}?lang={lang}'
        assert canonical == [expected_url], (path, canonical)
        alternatives = {link.get('hreflang'): link['href'] for link in page.links if link.get('rel') == 'alternate'}
        assert alternatives == {'en': f'{SITE}{path}?lang=en', 'es': f'{SITE}{path}?lang=es', 'x-default': f'{SITE}{path}?lang=en'}, (path, alternatives)
        assert page.meta['og:url'] == [expected_url]
        assert page.meta['og:title'] == [page.title]
        assert page.meta['twitter:title'] == [page.title]
        assert page.meta['og:locale'] == ['es_MX' if lang == 'es' else 'en_US']
        assert page.meta['twitter:card'] == ['summary_large_image']
        assert page.meta['og:image'] == [f'{SITE}/og/portfolio-{lang}.png']
        assert not re.search(r'CS Student|Current Softtek Intern|final-year|último año|—|[\u200b-\u200f\ufeff]', html)
        assert not any('RESEND_API_KEY' in item or 'TO_EMAIL' in item for item in page.text)
        if path == '/':
            expected = ['selected-work', 'experience', 'about', 'projects', 'skills', 'certifications', 'contact']
            assert all(item in page.ids for item in expected)
            assert all(html.index(f'id="{a}"') < html.index(f'id="{b}"') for a, b in zip(expected, expected[1:]))
            assert 'featured' in page.ids
            assert [a['href'] for a in page.anchors if a.get('download') == filename] == [cv_url]
            assert not any(a.get('href', '').endswith('.pdf') and a['href'] != cv_url for a in page.anchors)
            for slug in ['passly', 'rlvo', 'orqentic-ai']:
                assert any(a.get('href') == f'/projects/{slug}?lang={lang}' for a in page.anchors)
            for date in (['August 2025 - July 2026', 'February 2025 - October 2025', 'February 2024 - June 2024', 'August 2022 - June 2026', 'August 2026 - Present', 'September 2026 - Present', 'Issued January 2025', 'Expires January 2027'] if lang == 'en' else ['Agosto 2025 - Julio 2026', 'Febrero 2025 - Octubre 2025', 'Febrero 2024 - Junio 2024', 'Agosto 2022 - Junio 2026', 'Agosto 2026 - Actualidad', 'Septiembre 2026 - Actualidad', 'Expedido en enero de 2025', 'Vence en enero de 2027']):
                assert date in html, (lang, date)
        else:
            assert all(item in page.ids for item in ['overview', 'myRole', 'product', 'architecture', 'challenges', 'testing', 'currentStatus'])
        print(f'PASS {path} [{lang}]: SSR, content, canonical, alternates, social metadata, links')
    status, headers, content = fetch(cv_url)
    assert status == 200 and content.startswith(b'%PDF-')
    assert 'application/pdf' in headers['Content-Type']
    assert hashlib.sha256(content).digest() == hashlib.sha256(Path('public' + cv_url).read_bytes()).digest()
    print(f'PASS {cv_url}: PDF MIME type and identical bytes ({len(content)} bytes)')
    status, headers, image = fetch(f'/og/portfolio-{lang}.png')
    assert status == 200 and 'image/png' in headers['Content-Type']
    assert image[:8] == b'\x89PNG\r\n\x1a\n' and struct.unpack('>II', image[16:24]) == (1200, 630)
    print(f'PASS social image [{lang}]: PNG, 1200x630')

for path in ['/projects/unknown', '/unknown', '/cv/missing.pdf']:
    try:
        urlopen(BASE + path, timeout=30)
        raise AssertionError(f'Expected HTTP 404: {path}')
    except HTTPError as error:
        assert error.code == 404, (path, error.code)
        print(f'PASS {path}: HTTP 404')
class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None

opener = build_opener(NoRedirect)
for path in ['/', '/projects/passly', '/projects/rlvo', '/projects/orqentic-ai']:
    for headers, language in [({'Accept-Language': 'es-MX,es;q=0.9,en;q=0.8'}, 'es'), ({'Accept-Language': 'en-US'}, 'en'), ({'Accept-Language': 'es-MX', 'Cookie': 'portfolio-language=en'}, 'en')]:
        try:
            opener.open(Request(BASE + path, headers=headers), timeout=30)
            raise AssertionError('Expected language redirect')
        except HTTPError as error:
            assert error.code in (302, 307), (path, error.code)
            assert f'lang={language}' in error.headers['Location'], (path, error.headers['Location'])
    print(f'PASS {path}: server language detection and stored preference')
print('All HTTP checks passed. No contact request submitted.')
