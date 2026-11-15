# Portafolio: publicación y verificación final

Publicación aprobada y completada el 14 de noviembre de 2026. Commit de aplicación `0f1f86bb430715b0f7bdc9a02d61e725a4beeb1b`, publicado en `origin/main`. Worker existente `enrique-personal-web`, versión `877e789a-de25-4493-88d9-67be398defa2`. Se realizó un único envío real del formulario y Enrique confirmó su recepción en la bandeja de entrada. No se agregaron dependencias ni se cambió DNS.

Las secciones de preparación conservan el registro de las revisiones anteriores. El apartado final de resultados de producción sustituye sus estados pendientes. El cierre autorizado modifica exclusivamente este documento: sin otro despliegue, correos adicionales, cambios de diseño o código.

## Resultado y regresiones

Se conservan fondo oscuro, Geist, acentos teal y violeta y animaciones sutiles. La home presenta Hero, Selected Work, Experience, About, Other Projects, Skills, Education & Credentials y Contact. Los casos están en `/projects/passly`, `/projects/rlvo` y `/projects/orqentic-ai`.

Se comparó el árbol local con HEAD. Se mantienen formulario e integración Resend, enlaces sociales y de credenciales, navegación por secciones, menú móvil y cambio de idioma. Se restauraron Email en el hero, CTA de contacto desktop, indicador de sección activa y el antiguo fragmento `#featured`, dirigido a Selected Work. La preferencia automática y persistente de idioma se resuelve ahora en servidor mediante cookie y Accept-Language, sustituyendo localStorage para mantener coherencia SSR.

## Contenido y fechas definitivas

Los diccionarios EN y ES siguen siendo la fuente principal. Se muestran meses completos en ambos idiomas:

- Softtek: August 2025 - July 2026 / Agosto 2025 - Julio 2026.
- Escalando Fronteras freelance: February 2025 - October 2025 / Febrero 2025 - Octubre 2025.
- Escalando Fronteras voluntariado: February 2024 - June 2024 / Febrero 2024 - Junio 2024.
- Tec de Monterrey: August 2022 - June 2026 / Agosto 2022 - Junio 2026.
- RLVO: August 2026 - Present / Agosto 2026 - Actualidad.
- Passly: September 2026 - Present / Septiembre 2026 - Actualidad.
- TOEFL iBT: emitido January 2025 / Enero 2025; vence January 2027 / Enero 2027. Puntuación 74/120, CEFR B2.

Ambos CVs se leyeron y renderizaron. Coinciden empleo remunerado, educación, Passly y RLVO. El intervalo de voluntariado y la vigencia TOEFL proceden de la confirmación explícita de Enrique; no se atribuyen a información ausente de los PDFs. Los originales no se modificaron.

La auditoría de fuentes y HTML en ambos idiomas no encontró em dashes, caracteres Unicode de formato innecesarios, CS Student, Current Softtek Intern ni afirmaciones de empleo actual en Softtek. El título histórico Software Developer Intern conserva un periodo cerrado.

Credenciales conservadas y verificadas durante la actualización principal contra LinkedIn, Credly y Codecademy:

- AWS Academy Graduate - Cloud Foundations - Training Badge: junio de 2026; Credly confirmó emisión el 9 de junio. Es una insignia de formación, no AWS Certified Cloud Practitioner.
- Learn Git & GitHub Course, Codecademy: mayo de 2025.
- OpenAI API Coding with JavaScript Course, Codecademy: mayo de 2025.
- Learn MongoDB Course, Codecademy: septiembre de 2024.

Fuente pública consultada: <https://www.linkedin.com/in/enrique-macias-lopez/>. Responsabilidades, fechas definitivas y estados también proceden de las instrucciones de Enrique.

## Casos de estudio y confidencialidad

Cada caso incluye Overview, My Role, Product, Architecture, Engineering Challenges, Testing y Current Status, con traducción al español.

- Passly: único desarrollador; multi-tenant, RLS, ledger, procesamiento asíncrono y reintentos descritos como trabajo implementado. MVP avanzado validado en staging. Testing refleja pruebas de base de datos, integración y Wallet en dispositivos documentadas en el perfil público. Lanzamiento público pendiente, declarado expresamente. Sin demo inventada.
- RLVO: Co-founder & CTO y único desarrollador entre tres fundadores. Verificación institucional, moderación con IA, administración e infraestructura. Se distinguen staging, pruebas automatizadas y preparación de releases del lanzamiento público, aún pendiente. Sin resultados comerciales inventados.
- Orqentic AI: proyecto personal independiente, separado del trabajo en Softtek, con aproximadamente 40 tipos de nodo y capacidades confirmadas. Enlace a demo real. No se afirma cobertura automatizada sin documentación; puede ampliarse Testing cuando se proporcione.

Los gráficos dicen explícitamente diagrama conceptual, no captura de producto. No se incorporaron interfaces inventadas, clientes, usuarios, ingresos ni métricas de impacto. No se agregaron código privado, documentos internos, credenciales o capturas confidenciales. Softtek se limita al resumen profesional autorizado.

## CVs y descargas

- `public/cv/Enrique_Macias_CV_EN.pdf`: 43,519 bytes, una página.
- `public/cv/Enrique_Macias_CV_ES.pdf`: 43,935 bytes, una página.
- Idioma seleccionado determina enlace y atributo `download`, con el nombre original.
- El botón aparece únicamente si existe el archivo correspondiente al compilar. También se probó el archivo ausente mediante inventarios controlados.
- Ambos endpoints: 200, `application/pdf`, bytes idénticos a los originales sobre el Worker compilado.
- Ambas descargas se completaron en Chrome. El navegador añadió `(1)` por archivos ya existentes en Descargas; la aplicación solicita los nombres originales.

Agregar, quitar o sustituir CVs requiere volver a compilar.

## SEO, idioma y accesibilidad

Títulos, descripciones, Open Graph, Twitter e idioma HTML actualizados por página e idioma. Una sola canonical por página, alternates EN, ES y x-default. Origen `https://enriquemacias.dev`, coherente con los CVs y el dominio ya configurado, sin cambiar producción. Cada variante incluye `?lang=en` o `?lang=es`.

`public/og/portfolio-en.png` y `portfolio-es.png`: 1200 × 630, nombre y especialización con Geist y la identidad existente. Composiciones tipográficas profesionales, sin interfaces inventadas. Fuente reproducible: `scripts/generate-social-preview.swift`, para Swift en macOS; no participa del runtime de Cloudflare.

El idioma explícito en URL manda sobre preferencias. Sin parámetro, se utiliza cookie y después Accept-Language, con fallback inglés. Se probaron redirecciones en las cuatro rutas. Contenido y metadatos coinciden desde SSR; el selector conserva el fragmento.

Se revisaron foco visible, salto al contenido, encabezados, labels, errores, teclado, menú con Escape y retorno del foco, campos de 16 px, contraste y vistas a 320, 390 y 1440 px. No se observaron recortes en las vistas revisadas. La revisión móvil es emulación Chrome, no dispositivos físicos ni auditoría WCAG completa.

La emulación de movimiento reducido detectó estilos iniciales distintos entre SSR y cliente. Se corrigió con `useSyncExternalStore`, una instantánea inicial común y actualización de la preferencia tras hidratar. Carga repetida sin errores de hidratación. Se conservan MotionConfig y media query CSS; el aviso de desarrollo de Motion sobre movimiento reducido es esperado.

## Contacto y protección contra abuso

Se conserva la función de servidor y el proveedor Resend. Cambios acotados:

- Validación cliente/servidor: nombre 1 a 100 caracteres, correo válido hasta 255, mensaje 5 a 2000.
- Destinatario fijo, reply-to del visitante y escape de HTML.
- Origin exacto con protocolo y puerto; rechazo cross-site.
- Honeypot fuera del foco y del árbol accesible.
- Cinco intentos por diez minutos por cliente dentro de cada isolate; memoria acotada y expiración. Sin persistir ni registrar IPs.
- Timeout de diez segundos, sin reintentos automáticos. Errores localizados sin nombres de secretos ni respuestas internas.
- Configuración ausente: mensaje útil y alternativa por email.

El límite en memoria no es global: varios isolates pueden atender al mismo cliente y un reinicio elimina contadores. Para mayor protección distribuida conviene valorar una regla de rate limiting de Cloudflare. No se configuró infraestructura ni se afirma protección global.

Pruebas de la revisión previa con proveedor simulado: validación, honeypot, origen completo, configuración ausente, HTML, destinatario, cuota/expiración, fallos HTTP, red y timeout. En esa fase, en navegador solo se envió un formulario vacío, bloqueado por validación cliente, sin verificar entrega real. La comprobación posterior de configuración remota se detalla en la preparación de publicación del 14 de noviembre y la entrega confirmada consta en los resultados finales.

### Procedimiento para un único envío real, pendiente de autorización

1. Confirmar credencial de Resend presente en el entorno elegido, destinatario y dominio remitente verificado. No copiar valores secretos a logs o repositorio.
2. Elegir un solo entorno. Si es producción, esperar autorización y despliegue. No probar automáticamente en ambos.
3. Completar nombre `Enrique - prueba final`, correo propio y mensaje identificable con fecha/hora.
4. Pulsar Enviar una sola vez y esperar. Si falla, diagnosticar antes de solicitar otro envío.
5. Verificar un único correo en bandeja o spam, remitente, asunto, contenido y reply-to.

Procedimiento preparado durante la revisión previa. Posteriormente se ejecutó una única prueba autorizada con el identificador `Portfolio production verification test`; los resultados constan al final. No repetir el envío.

## Las siete advertencias de lint

Todas son `react-refresh/only-export-components`. ESLint se ejecutó sobre HEAD y árbol local: archivos idénticos, una advertencia cada uno en ambos estados.

- `src/components/ui/badge.tsx:32`
- `src/components/ui/button.tsx:49`
- `src/components/ui/form.tsx:163`
- `src/components/ui/navigation-menu.tsx:111`
- `src/components/ui/sidebar.tsx:743`
- `src/components/ui/toggle.tsx:42`
- `src/router.tsx:5`

Afectan límites de Fast Refresh durante desarrollo por exportaciones mixtas o infraestructura. No indican fallo del bundle de producción. No conviene reorganizar estas APIs antes de publicar solo para silenciarlas. Se mantienen como deuda menor, sin suprimir reglas ni refactors. Cero errores y cero advertencias nuevas.

## Archivos locales modificados o incorporados

Inventario de la actualización principal y sus revisiones, incorporado al commit de aplicación publicado:

- Contenido: `src/i18n/types.ts`, `src/i18n/dictionaries/en.ts`, `src/i18n/dictionaries/es.ts`.
- Idioma/SSR: `src/i18n/LanguageProvider.tsx`, `src/server/language.functions.ts`, `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/projects.$slug.tsx`, `src/routeTree.gen.ts` generado.
- SEO: `src/lib/metadata.ts`, `public/og/portfolio-en.png`, `public/og/portfolio-es.png`, `public/favicon.svg`.
- Secciones: `src/components/sections/Hero.tsx`, `SelectedWork.tsx`, `Projects.tsx`, `Experience.tsx`, `Certifications.tsx`, `Contact.tsx`. `FeaturedProject.tsx` se elimina al sustituirse por SelectedWork.
- Navegación: `src/components/layout/Navbar.tsx`, `Footer.tsx`.
- Visuales: `src/components/ui/ProjectVisual.tsx`, `RevealOnScroll.tsx`, `src/data/projects.ts`, `src/hooks/use-reduced-motion.ts`, `src/styles.css`.
- Contacto: `src/server/contact.functions.ts`.
- PDFs proporcionados por Enrique: `public/cv/Enrique_Macias_CV_EN.pdf`, `public/cv/Enrique_Macias_CV_ES.pdf`.
- Verificación: `scripts/verify-contact.cjs`, `scripts/verify-cv.cjs`, `scripts/verify-portfolio.py`.
- Recursos y reporte: `scripts/generate-social-preview.swift`, `docs/portfolio-update.md`.

Sin cambios a package.json, lockfile, wrangler.jsonc, vite.config.ts ni secretos. Los scripts de verificación no son dependencias del sitio o Worker.

## Validaciones ejecutadas

- `npm run typecheck`: correcto, salida 0.
- `npm run lint`: salida 0, cero errores y siete advertencias preexistentes.
- `npm run build`: correcto, cliente y Worker SSR de Cloudflare.
- `node scripts/verify-contact.cjs`: correcto, ningún correo enviado.
- `node scripts/verify-cv.cjs`: correcto, descarga EN/ES y ocultamiento por archivo ausente.
- `python3 scripts/verify-portfolio.py http://127.0.0.1:4173`: correcto sobre build servido por `npm run preview`, además de comprobaciones previas en dev.
- Ocho páginas 200: home y tres casos en ambos idiomas; fechas, siete secciones por caso, metadatos sin duplicados, canonical y alternates.
- Dos PDFs íntegros y dos PNG de 1200 × 630. Proyecto desconocido, ruta desconocida y PDF inexistente: 404.
- Detección y preferencia de idioma en las cuatro rutas.
- Enlaces internos, CVs y selector revisados en navegador. GitHub, LinkedIn, Credly, Codecademy y demo Orqentic se abrieron durante la actualización principal y conservan esas URLs.
- Home y tres casos revisados en desktop y emulación móvil. Revisión adicional del Worker compilado: hero, casos, selector, menú, formulario vacío y carga sin errores de hidratación con movimiento reducido.
- Auditoría de texto fuente y HTML sin em dashes, caracteres de formato innecesarios ni referencias profesionales desactualizadas.
- `git diff --check`: correcto.

Comandos para repetir:

```sh
npm run typecheck
npm run lint
node scripts/verify-contact.cjs
node scripts/verify-cv.cjs
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

En otra terminal con la vista previa activa:

```sh
python3 scripts/verify-portfolio.py http://127.0.0.1:4173
```

## Recursos pendientes y checklist

No faltan CVs ni imagen social. Capturas reales autorizadas son opcionales; los diagramas actuales están identificados. Documentación de pruebas Orqentic permitiría ampliar Testing, sin inventar cobertura. La revisión local no certifica entrega de correo ni vista previa social pública. La comprobación DNS posterior se detalla al final.

- [x] Contenido y fechas definitivas EN/ES.
- [x] CVs accesibles, idioma y nombres de descarga.
- [x] Casos sin lanzamientos o resultados comerciales inventados.
- [x] SEO SSR, canonical, alternates e imágenes sociales.
- [x] Rutas, menú, enlaces, formulario inválido y movimiento reducido.
- [x] Typecheck, lint, build y verificaciones locales.
- [x] Siete advertencias preexistentes documentadas.
- [x] Enrique aprueba contenido, estructura, diseño e ilustraciones.
- [x] Confirmar configuración remota de remitente, destinatario y presencia del secreto de correo.
- [x] Enrique confirma dominio Verified y Sending habilitado en Resend.
- [x] Autorizar y realizar un único envío real; Enrique confirma recepción en bandeja de entrada.
- [ ] Valorar protección global de abuso; cambios requieren aprobación separada.
- [x] Autorizar y completar commit, push y despliegue.
- [x] Tras publicar: ambos dominios, páginas bilingües, ambos CVs, metadatos e imágenes OG.
- [ ] Comprobar manualmente la tarjeta de vista previa en plataformas sociales; no se utilizó un inspector de tarjetas.

## Despliegue en Cloudflare Workers, solo después de aprobación

Con autenticación y entorno confirmados:

```sh
npm run lint
npm run deploy
```

El script existente ejecuta typecheck, build y Wrangler. El plugin Vite genera la configuración de salida que Wrangler utiliza para publicar Worker y assets. No hay que alterar producción para estos cambios. Referencia oficial: <https://developers.cloudflare.com/workers/vite-plugin/deploying/>.

Estos comandos estaban pendientes al redactar la preparación. Su ejecución autorizada y los identificadores publicados constan en el registro final de producción.

## Recuperación visual de ilustraciones

Se recuperó el lenguaje SVG del historial local sin restaurar los textos antiguos. Selected Work tiene tres ilustraciones diferentes: dashboard y passes de loyalty para Passly, móvil con listings y verificación para RLVO, y el modelo de nodos/conexiones de NodeCanvas adaptado a Orqentic AI. Los casos de estudio conservan sus diagramas y contenido anteriores a este ajuste.

Other Projects recupera el teléfono con medicamentos y scanner, el documento con detalles de IA y la tarjeta de reservas con cancha de tenis/pádel. WORKSENSE incorpora un tablero Scrum propio. Las cuatro miniaturas tienen una altura común de 112 px, próxima a los 110 px del SVG original. Cada visual se asocia por `visualKind`, nunca por índice. No contienen etiquetas Flutter u OpenAI ni sustituyen las tecnologías vigentes de los diccionarios.

Archivos de este ajuste:

- `src/components/ui/ProjectIllustration.tsx`: siete composiciones SVG, asociación tipada y observación de visibilidad.
- `src/components/ui/NodeCanvas.tsx`: reutiliza el modelo original de nodos y curvas, elimina loops de Framer e incorpora identificador de gradiente estable por instancia.
- `src/components/ui/project-illustration.css`: paleta existente, glow estático, flotación de pocos píxeles, trazado e indicadores sutiles.
- `src/components/ui/ProjectVisual.tsx`: opción ilustrada para destacados y miniaturas, manteniendo el diagrama por defecto de los casos.
- `src/components/sections/SelectedWork.tsx`: activa únicamente la variante ilustrada.
- `docs/portfolio-update.md`: registro de esta mejora.

Las animaciones duran 4.8 segundos, una sola vez por montaje, y se pausan fuera de pantalla. Después quedan estáticas. Se declaran únicamente dentro de `prefers-reduced-motion: no-preference`, por lo que con `reduce` no se crean animaciones. No se introducen condiciones de preferencia en el marcado SSR. Los SVG son decorativos, sin foco ni información profesional exclusiva. No hay imágenes raster, nuevas dependencias, solicitudes de datos ni canvas de renderizado continuo.

Validaciones de esta mejora: typecheck correcto; lint sin errores y las mismas siete advertencias preexistentes; build de cliente y Worker correcto; ocho documentos SSR, SEO, rutas, idioma y PDFs comprobados por HTTP; verificación del botón de CV correcta. Se compararon hashes de diccionarios, rutas, metadatos, Hero, LanguageProvider y ambos PDFs con el inicio de esta tarea: idénticos. Auditoría CSS: las cuatro familias de animación requieren no-preference, no tienen repeticiones infinitas y terminan antes de cinco segundos. Sin em dashes ni caracteres de formato en los archivos visuales.

Revisión visual cerrada el 14 de noviembre de 2026: desktop comprobado en Chrome para las tres visuales destacadas y las cuatro miniaturas. Se resolvieron los problemas de enfoque de Chrome y se completó la emulación del sitio real a 390 y 320 px. También se revisaron las siete composiciones aisladas con los mismos SVG y CSS a sus anchos móviles. No se observaron recortes; las miniaturas mantienen su altura común y las visuales principales escalan dentro de las tarjetas.

Con `prefers-reduced-motion: reduce` activo se repitió la carga SSR en el navegador. Consola sin errores de hidratación. Una consulta de solo lectura confirmó `matchMedia` en true, viewport de 320 px, ausencia de desbordamiento horizontal y cero animaciones creadas dentro de cada una de las siete ilustraciones mediante `getAnimations({subtree:true})`. Se restauró la emulación de movimiento y se cerró la pestaña temporal. Las páginas de revisión auxiliares se mantuvieron en /private/tmp, fuera del producto. No se midieron Core Web Vitals ni se probaron dispositivos físicos.

Esta fase de recuperación visual concluyó antes del commit, push y despliegue autorizados posteriormente.

## Preparación definitiva de publicación, 14 de noviembre de 2026

Se revisaron el diff completo contra HEAD y los archivos nuevos, incluidos los recursos binarios. El conjunto preparado contiene 38 rutas: 21 cambios sobre archivos versionados, incluida la eliminación de FeaturedProject, y 17 archivos nuevos. Corresponden a contenido y CVs bilingües, casos de estudio, navegación, SSR/SEO, contacto, accesibilidad, ilustraciones, recursos sociales, verificación y este reporte. En esta fase solo se actualizó este documento; no se cambió código, diseño, dependencias o configuración de producción.

En la preparación, los dos PDFs estaban presentes como archivos nuevos pendientes de versionar. Ahora están incluidos en el commit de aplicación publicado. Hashes SHA-256 comprobados contra los archivos servidos por el build final y posteriormente en producción:

- EN: `27c7f58764c8ed2f1ae3c5515e2070dd650ed3d930cf86c9e612db516a8c40c1`.
- ES: `dd20d7763a2bef141b5e95fa8326370e028bf673c25ef0c52d2afed78822a028`.

No se detectaron claves de proveedores, claves privadas, contraseñas de conexión, valores secretos configurados, enlaces simbólicos ni archivos temporales entre las 38 rutas. Tampoco se detectó el valor del secreto local en `dist/client`. Se revisó el texto extraído de los CVs sin encontrar identificadores oficiales, datos bancarios o domicilio particular; conservan los datos profesionales de contacto proporcionados por Enrique. Los originales siguen intactos. Este control combina lectura y patrones y no pretende certificar ausencia absoluta de cualquier dato sensible.

`.env`, `dist/server/.dev.vars` y `.wrangler/deploy/config.json` están ignorados por Git. Los archivos de revisión auxiliares permanecen en `/private/tmp`. El único em dash encontrado en los scripts es el patrón deliberado que detecta ese carácter prohibido en `scripts/verify-portfolio.py`; no es texto del sitio y se conserva como comprobación. No se encontraron caracteres de formato innecesarios ni em dashes en el contenido público.

### Cloudflare y correo: comprobaciones de solo lectura

La configuración fuente y la generada por el build apuntan a `enrique-personal-web`, con dominios personalizados `enriquemacias.dev` y `www.enriquemacias.dev`, `workers_dev: false` y `preview_urls: false`. `.wrangler/deploy/config.json` selecciona `dist/server/wrangler.json`; los assets públicos proceden de `dist/client`. No hay Workers auxiliares.

La API de Cloudflare confirmó que ambos dominios pertenecen al servicio `enrique-personal-web`, entorno production. Se confirmó autenticación, disponibilidad del Worker existente y presencia de su secreto de Resend. El remitente remoto coincide con `Portfolio <hello@enriquemacias.dev>` y el destinatario con `enriquemaciaslpz@gmail.com`. No se leyeron ni imprimieron valores secretos, ni se alteraron bindings, DNS o despliegues. La versión anterior observada, todavía activa antes de esta publicación, es `f6f9e4ea-ff50-49ce-ba6b-eb968f8e635c`, desplegada el 9 de junio de 2026.

Resend respondió a una consulta GET de dominios con HTTP 401, nombre `restricted_api_key` y mensaje de clave restringida únicamente a envío. Esto confirma la restricción de permisos de la clave local, pero impide consultar el estado del dominio mediante esa clave. No se envió correo para probarla. No es posible comparar su valor con el secreto remoto de Cloudflare, cuyo contenido no es legible.

Se encontraron registros públicos TXT de DKIM en `resend._domainkey.enriquemacias.dev`, TXT en `send.enriquemacias.dev` y MX en `send.enriquemacias.dev`. Su presencia por sí sola no demuestra el estado en Resend ni la entrega. Posteriormente Enrique confirmó en el dashboard el dominio Verified con Sending habilitado, y confirmó la recepción de la única prueba real. No se ampliaron permisos de la clave de envío.

La prueba preparada utilizará producción, después de autorizar el despliegue y autorizar por separado el envío. Destinatario fijo: `enriquemaciaslpz@gmail.com`. Nombre: `Enrique - prueba final`. Correo del visitante: el mismo correo profesional. Mensaje: `Prueba controlada del formulario de enriquemacias.dev, [fecha y hora UTC]. Verificar contenido y reply-to. Un único envío autorizado.` Se reemplaza la fecha al ejecutarla, se pulsa Enviar una sola vez y se registra el resultado. Ante error o demora, primero se revisa el diagnóstico del proveedor, sin reintento automático. Confirmar bandeja/spam y reply-to antes de marcar entrega correcta.

### Validaciones finales ejecutadas en esta preparación

- `npm run typecheck`: salida 0.
- `npm run lint`: salida 0, cero errores y siete advertencias `react-refresh/only-export-components`.
- `npm run build`: salida 0, build de cliente y Worker SSR correcto.
- Comparación ESLint contra HEAD: los siete archivos señalados siguen idénticos y producen una advertencia cada uno en ambos estados. Pendientes no bloqueantes de Fast Refresh en desarrollo; sin refactors ni reglas silenciadas.
- `node scripts/verify-contact.cjs`: correcto, proveedor simulado y ningún correo enviado.
- `node scripts/verify-cv.cjs`: correcto, EN/ES, nombres originales y ocultamiento por archivo ausente.
- `python3 scripts/verify-portfolio.py http://127.0.0.1:4173`: correcto, sobre el build final servido por `npm run preview`. Ocho páginas SSR, contenido, metadatos, canonical, alternates, enlaces internos, preferencia de idioma, ambos PDFs íntegros, imágenes OG y tres respuestas 404. Ninguna solicitud al formulario.
- La vista previa temporal se detuvo tras la comprobación. El aviso de puerto de inspector ocupado se resolvió automáticamente usando otro puerto y no afectó las pruebas.
- La revisión visual desktop, móvil a 390/320 px y reduced motion descrita arriba corresponde al mismo código aprobado. En esta preparación no se repitió una sesión visual ni se probaron dispositivos físicos. No se atribuyen esos resultados a producción.
- `git diff --check`: correcto al cerrar el reporte.

### Commit y secuencia de publicación: registro de preparación

Rama local: `main`. Remoto: `git@github-personal:Enrique-Macias/enrique-personal-portfolio.git`. La consulta remota de `main` devolvió `0b22a9cadb16518f3f0df3daffe5dc5c46307a44`. Es ancestro del HEAD local `0b9615f059cff6d7382523e3b75b049e89b061aa`: cero commits remotos nuevos y un commit local anterior, sobre enlaces de certificaciones. Un push normal también incluirá ese commit existente. No hay divergencia observada y no se necesita force push. Se volverá a contrastar la referencia antes de publicar si cambia el remoto.

Mensaje preparado:

```text
feat(portfolio): showcase professional experience and bilingual case studies

Update English and Spanish content with confirmed experience, project status,
credentials and language-specific CV downloads.

Add Passly, RLVO and Orqentic AI case studies, restore project illustrations,
and improve SSR metadata, navigation, reduced motion and contact handling.

Document release checks and retain the existing Cloudflare Worker configuration.
```

Se prepararon fuera del repositorio un manifiesto de las 38 rutas revisadas y el mensaje anterior. No se ejecutó `git add`. Si esos archivos temporales ya no existen, se debe reconstruir el manifiesto a partir del inventario revisado antes de continuar, evitando incorporar archivos nuevos ajenos a esta publicación.

Solo después de recibir autorización para commit, push y despliegue, y confirmar que el árbol sigue siendo el revisado:

```sh
git add --pathspec-from-file=/private/tmp/portfolio-release-paths.txt
git diff --cached --check
git diff --cached --stat
git commit --file=/private/tmp/portfolio-release-commit-message.txt
git push origin main
npm run deploy
```

Se ejecutará cada paso por separado y se detendrá ante un fallo o cambio inesperado. `npm run deploy` utiliza el script existente: typecheck, build y `wrangler deploy`, sobre el Worker y dominios ya confirmados. No crear otro Worker, cambiar DNS ni agregar flags que sustituyan el destino. Autorización de despliegue no equivale a autorización de correo.

## Resultados finales de publicación y producción

### Commit, push y despliegue

- Commit de aplicación publicado: `0f1f86bb430715b0f7bdc9a02d61e725a4beeb1b`.
- Mensaje: `feat(portfolio): showcase professional experience and bilingual case studies`.
- `git push origin main`: correcto. La referencia remota se consultó después y coincidió con ese hash.
- Antes del commit, las 38 rutas coincidían exactamente con el inventario aprobado y sus hashes. `git diff --cached --check` pasó y el índice contenía exclusivamente esas rutas.
- Se revisó íntegramente el commit local anterior `0b9615f059cff6d7382523e3b75b049e89b061aa`: agregó la insignia AWS Academy, su enlace y el soporte para enlaces de certificaciones. La actualización final conserva los títulos y textos corregidos. Ese commit también quedó incluido en el push normal, sin reescribir historial.
- `npm run deploy`: salida 0. Ejecutó nuevamente typecheck y build antes de Wrangler.
- Worker publicado: `enrique-personal-web`.
- Versión publicada: `877e789a-de25-4493-88d9-67be398defa2`.
- Wrangler confirmó ambos custom domains: `enriquemacias.dev` y `www.enriquemacias.dev`. Se utilizó la configuración generada existente. No se creó otro Worker ni se cambió DNS o la configuración de producción.
- `npm run lint` se repitió durante la publicación: salida 0, cero errores y las mismas siete advertencias preexistentes.

### HTTP, idiomas, rutas, CVs y SEO

Se ejecutó el verificador existente `scripts/verify-portfolio.py` contra ambos orígenes públicos. El primer intento con el User-Agent predeterminado de Python recibió HTTP 403. Chrome y Node recibían 200. Al repetir mediante un opener de urllib con User-Agent `Mozilla/5.0`, el verificador completo pasó en ambos dominios; no se modificó el script del repositorio ni se alteraron reglas de seguridad. No se atribuye una causa concreta al 403 más allá de la diferencia de cliente observada.

URLs principales verificadas con HTTP 200 y contenido SSR correcto:

- `https://enriquemacias.dev/?lang=en`
- `https://enriquemacias.dev/?lang=es`
- `https://enriquemacias.dev/projects/passly?lang=en`
- `https://enriquemacias.dev/projects/passly?lang=es`
- `https://enriquemacias.dev/projects/rlvo?lang=en`
- `https://enriquemacias.dev/projects/rlvo?lang=es`
- `https://enriquemacias.dev/projects/orqentic-ai?lang=en`
- `https://enriquemacias.dev/projects/orqentic-ai?lang=es`

Se repitieron las mismas ocho rutas bajo `https://www.enriquemacias.dev`. Ambas variantes sirven el sitio; no se observó una redirección de www al dominio principal en las URLs con idioma explícito. Sus canonical y `og:url` apuntan a `https://enriquemacias.dev`, conservando la ruta y el idioma. Es la estrategia canonical existente, sin cambios a DNS ni nuevas redirecciones.

En ambos orígenes pasaron títulos y descripciones, idioma HTML, Open Graph, Twitter, canonical única, alternates EN/ES/x-default y los siete apartados de cada caso. También pasaron detección de idioma por Accept-Language y preferencia por cookie en las cuatro rutas. Passly y RLVO conservan su estado en staging y no se presentan como lanzados públicamente.

Los endpoints `/cv/Enrique_Macias_CV_EN.pdf` y `/cv/Enrique_Macias_CV_ES.pdf` respondieron 200, con MIME `application/pdf` y bytes idénticos a los originales versionados, en ambos dominios. El texto extraído de ambos PDFs no contiene teléfono personal y los originales permanecen intactos. Desde el hero publicado se descargaron ambos en Chrome, seleccionando el idioma. El navegador registró estado Done para los dos y añadió `(2)` por archivos previos con igual nombre en Descargas; los atributos `download` solicitan los nombres originales correctos.

Ambas imágenes OG respondieron como PNG de 1200 × 630. No se ejecutó un inspector de tarjetas de redes sociales, por lo que su presentación dentro de esas plataformas sigue como comprobación manual opcional.

`/projects/unknown`, `/unknown` y `/cv/missing.pdf` devolvieron 404 en ambos dominios. El verificador HTTP no envió solicitudes al formulario.

### Navegador, responsive, ilustraciones y consola

Se revisaron home y los tres casos en Chrome desktop. En emulación móvil se revisaron home, navegación, selector de idioma, los tres casos y las siete ilustraciones de Selected Work y Other Projects. Se comprobaron las vistas de 390 y 320 px. No se observaron recortes que impidieran leer o navegar; las consultas de layout registraron ausencia de desbordamiento horizontal en las vistas comprobadas.

El selector actualizó contenido y URL, incluido Passly de inglés a español. El menú móvil abrió, permitió navegar a Projects y se cerró; también se probó Escape. La consola de la home con movimiento normal identificó los siete `data-visual` y sus animaciones CSS, correspondientes a wallet, marketplace, workflow, legal, scrum, medication y coach.

Con `prefers-reduced-motion: reduce`, a 320 px se confirmó `matchMedia` en true y cero animaciones mediante `getAnimations({subtree:true})` en las siete ilustraciones. Se repitió una carga SSR de la home en español con esa preferencia activa y el resultado se mantuvo, sin desbordamiento horizontal ni errores de hidratación observados. También se revisaron Passly y RLVO a 320 px con la preferencia activa. Después se restauraron la preferencia de movimiento y la emulación móvil.

No se observaron errores de ejecución de la aplicación ni de hidratación en las consolas revisadas. Sí apareció un error de integridad del beacon externo de Cloudflare Analytics, detallado abajo; por ello no se declara una consola completamente libre de errores. No se probaron dispositivos físicos ni se midieron Core Web Vitals. La sesión de navegación se detuvo antes del cierre de LinkedIn; no se atribuyen a esa sesión comprobaciones visuales posteriores que no llegaron a ejecutarse.

### Enlaces externos

Las consultas GET de los destinos publicados devolvieron 200 para GitHub, Credly, los tres certificados de Codecademy y la demo de Orqentic AI. La demo redirigió a su ruta `/workflows`.

LinkedIn devolvió HTTP 999 a la verificación automatizada. No se completó la comprobación visual y deberá realizarla Enrique manualmente en `https://www.linkedin.com/in/enrique-macias-lopez/`. No se intentará evadir las restricciones de LinkedIn ni se interpreta el 999 como prueba de que el enlace esté roto.

### Único envío real del formulario

Enrique autorizó expresamente un único envío y confirmó en el dashboard de Resend `Verified` y `Sending` habilitado para el dominio. La comprobación previa de Cloudflare había confirmado remitente, destinatario y presencia del secreto. No se solicitaron ni expusieron credenciales adicionales.

Se completó y envió una sola vez el formulario de `https://enriquemacias.dev/?lang=en#contact`:

- Nombre: `Portfolio production verification test`.
- Email del visitante y destinatario fijo: `enriquemaciaslpz@gmail.com`.
- Mensaje: `Portfolio production verification test. Single authorized production form submission on 2026-11-14. Please verify receipt and reply-to manually. No automatic retries.`
- Asunto que construye el servidor: `Portfolio message from Portfolio production verification test`.

El formulario se vació y mostró el mensaje de éxito. Según la implementación de servidor revisada, esa respuesta implica aceptación HTTP exitosa de Resend; no se capturó un identificador del proveedor ni se afirma un código HTTP específico. No se recibió un error de envío y no hubo reintentos ni solicitudes adicionales de prueba.

Enrique confirmó manualmente `Recibido en bandeja de entrada` y volvió a confirmar la recepción al autorizar este cierre. La entrega final está confirmada por el destinatario, no solo por la respuesta de la API. No se inspeccionaron los encabezados del correo ni se realizó una respuesta para probar reply-to.

### Pendientes no bloqueantes

1. **Fast Refresh:** permanecen las siete advertencias `react-refresh/only-export-components` ya enumeradas. Son preexistentes, sin errores nuevos de lint y sin impacto observado en producción. No se hicieron refactors ni se silenciaron reglas.
2. **Cloudflare Analytics:** Chrome bloqueó el beacon servido desde `https://static.cloudflareinsights.com/beacon.min.js/…` porque el digest calculado no coincidía con el atributo `integrity`. Mientras el beacon estaba bloqueado funcionaron navegación, idiomas, casos, CVs y el envío real confirmado. Se clasifica como no bloqueante para esas funciones; puede faltar telemetría de los navegadores afectados.
3. **LinkedIn:** comprobación visual manual pendiente tras HTTP 999 automatizado. Sin intentos adicionales ni evasión.
4. **Alcance de QA:** tarjeta social dentro de plataformas, dispositivos físicos y Core Web Vitals no comprobados. El rate limit del formulario sigue limitado a cada isolate, como ya estaba documentado; no se configuró protección distribuida.

Posible origen del beacon, como inferencia: no se encontró su inclusión en `src`, `public`, `wrangler.jsonc`, `vite.config.ts` ni `package.json`. Cloudflare documenta que la inyección automática incorpora `integrity`, por lo que una inserción en el edge es compatible con lo observado. El error demuestra un desajuste de bytes frente al hash esperado; no identifica su causa. Una caché desincronizada entre HTML y script o una transformación por intermediarios/extensiones son hipótesis, no causas confirmadas. Referencia: [Cloudflare Web Analytics, SRI](https://developers.cloudflare.com/web-analytics/faq/#how-can-i-enforce-subresource-integrity-sri-with-the-js-beacon).

Recomendación para una revisión posterior autorizada: reproducir en un perfil limpio y otra red, contrastar en Network la URL y el hash esperado con los bytes recibidos e inspeccionar en Web Analytics si el snippet se inyecta automáticamente. Si se confirma una respuesta desactualizada, corregir la caché o el origen de la transformación y comprobar nuevamente; si persiste en la inyección administrada, escalar a Cloudflare con la evidencia de red. No sustituir el hash a ciegas ni eliminar la comprobación de integridad como parche. No se cambió configuración de producción, caché, CSP, DNS o analítica durante este cierre.

### Recuperación de la versión anterior

La versión activa anterior registrada antes de publicar era `f6f9e4ea-ff50-49ce-ba6b-eb968f8e635c`, del 9 de junio de 2026. La versión nueva es `877e789a-de25-4493-88d9-67be398defa2`. Si fuera necesario revertir, confirmar primero en Cloudflare la disponibilidad de la versión anterior y autorizar la reversión. Desde este repositorio, con la sesión de Cloudflare correcta:

```sh
npx wrangler rollback f6f9e4ea-ff50-49ce-ba6b-eb968f8e635c --name enrique-personal-web
```

Este comando se documenta, no se ejecutó. Publicaría un nuevo despliegue de la versión seleccionada para los dominios del Worker, sin revertir Git. Después habría que repetir las comprobaciones públicas. No se eliminó ninguna versión ni se probó una reversión. Referencia: [Cloudflare, rollback de Workers](https://developers.cloudflare.com/workers/wrangler/commands/workers/#rollback).

### Cierre de documentación

Al iniciar este cierre, `main` estaba en el commit de aplicación publicado y el árbol de trabajo estaba limpio. El único archivo modificado para este cierre es `docs/portfolio-update.md`. El commit de documentación autorizado usa el mensaje `docs(portfolio): record production release and verification results`; no cambia los assets ni el Worker desplegado. El hash del commit de documentación se entrega en el resumen de cierre y puede consultarse en el historial de este archivo.

No se repitieron typecheck, lint, build o verificaciones de producción durante este cierre documental; los resultados anteriores describen las ejecuciones reales de la publicación. Para este cambio se comprueban diff, espacios en blanco, caracteres de formato y alcance exclusivo del archivo. No se ejecutará otro despliegue ni se enviarán más correos.
