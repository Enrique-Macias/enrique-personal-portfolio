# Portafolio: revisión final de prepublicación

Contenido, estructura, diseño e ilustraciones aprobados por Enrique. Preparación de publicación revisada el 14 de noviembre de 2026. Commit, push, despliegue y prueba real de correo pendientes de autorización explícita. No se realizaron esas acciones ni cambios de configuración de producción. No se agregaron dependencias.

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

Pruebas con proveedor simulado: validación, honeypot, origen completo, configuración ausente, HTML, destinatario, cuota/expiración, fallos HTTP, red y timeout. En navegador solo se envió un formulario vacío, bloqueado por validación cliente. No se verificó entrega real. La comprobación posterior de configuración remota se detalla en la preparación de publicación del 14 de noviembre.

### Procedimiento para un único envío real, pendiente de autorización

1. Confirmar credencial de Resend presente en el entorno elegido, destinatario y dominio remitente verificado. No copiar valores secretos a logs o repositorio.
2. Elegir un solo entorno. Si es producción, esperar autorización y despliegue. No probar automáticamente en ambos.
3. Completar nombre `Enrique - prueba final`, correo propio y mensaje identificable con fecha/hora.
4. Pulsar Enviar una sola vez y esperar. Si falla, diagnosticar antes de solicitar otro envío.
5. Verificar un único correo en bandeja o spam, remitente, asunto, contenido y reply-to.

Procedimiento preparado, no ejecutado.

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

Incluyen la actualización principal y esta revisión, aún sin commit:

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
- [ ] Confirmar dominio verificado en Resend y entrega real; presencia de DNS y secreto no prueba entrega.
- [ ] Autorizar y realizar un único envío real con el procedimiento anterior.
- [ ] Valorar protección global de abuso; cambios requieren aprobación separada.
- [ ] Autorizar explícitamente commit, push y despliegue según el flujo elegido.
- [ ] Tras publicar: dominio, ocho URLs, ambos CVs, imágenes OG y vista previa social pública.

## Despliegue en Cloudflare Workers, solo después de aprobación

Con autenticación y entorno confirmados:

```sh
npm run lint
npm run deploy
```

El script existente ejecuta typecheck, build y Wrangler. El plugin Vite genera la configuración de salida que Wrangler utiliza para publicar Worker y assets. No hay que alterar producción para estos cambios. Referencia oficial: <https://developers.cloudflare.com/workers/vite-plugin/deploying/>.

Los comandos de despliegue no se ejecutaron. Tampoco se crearon commits ni se envió código al remoto.

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

Sin commits, push, despliegues ni cambios a configuración de producción.

## Preparación definitiva de publicación, 14 de noviembre de 2026

Se revisaron el diff completo contra HEAD y los archivos nuevos, incluidos los recursos binarios. El conjunto preparado contiene 38 rutas: 21 cambios sobre archivos versionados, incluida la eliminación de FeaturedProject, y 17 archivos nuevos. Corresponden a contenido y CVs bilingües, casos de estudio, navegación, SSR/SEO, contacto, accesibilidad, ilustraciones, recursos sociales, verificación y este reporte. En esta fase solo se actualizó este documento; no se cambió código, diseño, dependencias o configuración de producción.

Los dos PDFs están presentes y forman parte del conjunto que se incorporará al commit. Actualmente siguen sin versionar, junto con los demás archivos nuevos. Hashes SHA-256 comprobados contra los archivos servidos por el build final:

- EN: `27c7f58764c8ed2f1ae3c5515e2070dd650ed3d930cf86c9e612db516a8c40c1`.
- ES: `dd20d7763a2bef141b5e95fa8326370e028bf673c25ef0c52d2afed78822a028`.

No se detectaron claves de proveedores, claves privadas, contraseñas de conexión, valores secretos configurados, enlaces simbólicos ni archivos temporales entre las 38 rutas. Tampoco se detectó el valor del secreto local en `dist/client`. Se revisó el texto extraído de los CVs sin encontrar identificadores oficiales, datos bancarios o domicilio particular; conservan los datos profesionales de contacto proporcionados por Enrique. Los originales siguen intactos. Este control combina lectura y patrones y no pretende certificar ausencia absoluta de cualquier dato sensible.

`.env`, `dist/server/.dev.vars` y `.wrangler/deploy/config.json` están ignorados por Git. Los archivos de revisión auxiliares permanecen en `/private/tmp`. El único em dash encontrado en los scripts es el patrón deliberado que detecta ese carácter prohibido en `scripts/verify-portfolio.py`; no es texto del sitio y se conserva como comprobación. No se encontraron caracteres de formato innecesarios ni em dashes en el contenido público.

### Cloudflare y correo: comprobaciones de solo lectura

La configuración fuente y la generada por el build apuntan a `enrique-personal-web`, con dominios personalizados `enriquemacias.dev` y `www.enriquemacias.dev`, `workers_dev: false` y `preview_urls: false`. `.wrangler/deploy/config.json` selecciona `dist/server/wrangler.json`; los assets públicos proceden de `dist/client`. No hay Workers auxiliares.

La API de Cloudflare confirmó que ambos dominios pertenecen al servicio `enrique-personal-web`, entorno production. Se confirmó autenticación, disponibilidad del Worker existente y presencia de su secreto de Resend. El remitente remoto coincide con `Portfolio <hello@enriquemacias.dev>` y el destinatario con `enriquemaciaslpz@gmail.com`. No se leyeron ni imprimieron valores secretos, ni se alteraron bindings, DNS o despliegues. La versión anterior observada, todavía activa antes de esta publicación, es `f6f9e4ea-ff50-49ce-ba6b-eb968f8e635c`, desplegada el 9 de junio de 2026.

Resend respondió a una consulta GET de dominios con HTTP 401, nombre `restricted_api_key` y mensaje de clave restringida únicamente a envío. Esto confirma la restricción de permisos de la clave local, pero impide consultar el estado del dominio mediante esa clave. No se envió correo para probarla. No es posible comparar su valor con el secreto remoto de Cloudflare, cuyo contenido no es legible.

Se encontraron registros públicos TXT de DKIM en `resend._domainkey.enriquemacias.dev`, TXT en `send.enriquemacias.dev` y MX en `send.enriquemacias.dev`. Su presencia no demuestra el estado de verificación en Resend ni la entrega. Antes de la prueba real se debe confirmar el dominio verificado en el panel de Resend, sin ampliar permisos de la clave de envío. La entrega al correo profesional sigue pendiente y no se declara validada.

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

### Commit y secuencia de publicación preparados, sin ejecutar

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

### Producción de la nueva versión: pendiente de despliegue autorizado

No se ha publicado esta versión. No se afirma que las siguientes comprobaciones de producción hayan pasado:

- [ ] Registrar versión y resultado real del despliegue en el Worker existente.
- [ ] Abrir `https://enriquemacias.dev` y verificar home en inglés y español, incluyendo preferencia y selector.
- [ ] Verificar Passly, RLVO y Orqentic AI en ambos idiomas.
- [ ] Descargar ambos CVs, comprobar bytes y nombres originales.
- [ ] Revisar ilustraciones y navegación en desktop y emulación móvil, además de reduced motion.
- [ ] Abrir enlaces externos y comprobar los destinos conservados.
- [ ] Comprobar metadatos SSR, canonical, alternates, imágenes OG y vista previa pública.
- [ ] Revisar consola, hidratación, rutas y respuestas 404.
- [ ] Comprobar validación y mensajes del formulario sin envío real.
- [ ] Tras autorización específica y dominio Resend verificado, realizar un único envío y confirmar recepción.
- [ ] Registrar aquí resultados reales y pendientes; no crear otro commit sin autorización.

Primera comprobación HTTP de producción, después del despliegue:

```sh
python3 scripts/verify-portfolio.py https://enriquemacias.dev
```

Este script es de solo lectura y no envía el formulario. Las comprobaciones visuales, consola, enlaces externos y entrega requieren las revisiones separadas anteriores. No faltan recursos de diseño o CVs para preparar el release; permanecen pendientes las autorizaciones y la verificación de correo indicada.
