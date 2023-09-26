const STATIC_CACHE = "static";
//Se declara un vector con la ubicacion y el nombre de los archivos que forman parte del proyecto necesarios para su ejecución
const APP_SHELL =[
"/",
"index.html",
"css/styles.css",
"css/tabs2.css",
"css/splidejs.css",
"js/main.js",
"js/arriba.js",
"js/autoslider.js",
"js/autoslider2.js",
"js/autoslider3.js",
"js/denuncia.js",
"js/modal.js",
"js/recaptcha.js",
"js/slide.js",
"js/slidejs.js",
"js/tooltip.js",
"img/logo_osfags.png",
"Contacto/index.html",
"Bienvenida/index.html",
"Comités-y-Órganos/index.html",
"Comités-y-Órganos/Actualización.html",
"Comités-y-Órganos/grupo.html",
"Informe-Auditorías/index.html",
"Informe-Auditorías/Actualización.html",
"Programas-y-Servicios/index.html",
"Programas-y-Servicios/Actualización.html",
"Programas-y-Servicios/Opinión-Técnica.html",
"Programas-y-Servicios/Programas.html",
"Responsabilidades-Administrativas/index.html",
"Responsabilidades-Administrativas/Actualización",
"Quiénes-Somos/index.html",
"Sitios-Interés/index.html",
"Denuncia/index.html",
"Denuncia/denunciaAnonima.html",
"Sobre-el-OSFAGS/index.html",
"Temas-Interés/index.html",
"Sistema-Estatal-Fiscalizacion/index.html",
"Transparencia/index.html",
"Transparencia/avisos.html",
"Transparencia/Disciplina-Financiera.html",
"Transparencia/Otras-Obligaciones.html",
"Transparencia/SEVAC.html",
"Transparencia/I-Transparencia.html",
"Transparencia/II-Transparencia.html",
"Transparencia/III-Transparencia.html",
"Transparencia/IV-Transparencia.html",
"Transparencia/V-Transparencia.html",
"Transparencia/VI-Transparencia.html",
"Transparencia/VII-Transparencia.html",
"Transparencia/VIII-Transparencia.html",
"Transparencia/IX-Transparencia.html",
"Transparencia/X-Transparencia.html",
"Transparencia/XI-Transparencia.html",
"Transparencia/XII-Transparencia.html",
"Transparencia/XIII-Transparencia.html",
"Transparencia/XIV-Transparencia.html",
"Transparencia/XV-Transparencia.html",
"Transparencia/XVI-Transparencia.html",
"Transparencia/XVII-Transparencia.html",
"Transparencia/XVIII-Transparencia.html",
"Transparencia/XIX-Transparencia.html",
"Transparencia/XX-Transparencia.html",
"Transparencia/XXI-Transparencia.html",
"Transparencia/XXII-Transparencia.html",
"Transparencia/XXIII-Transparencia.html",
"Transparencia/XXIV-Transparencia.html",
"Transparencia/XXV-Transparencia.html",
"Transparencia/XXVI-Transparencia.html",
"Transparencia/XXVII-Transparencia.html",
"Transparencia/XXVIII-Transparencia.html",
"Transparencia/XXIX-Transparencia.html",
"Transparencia/XXX-Transparencia.html",
"Transparencia/XXXI-Transparencia.html",
"Transparencia/XXXII-Transparencia.html",
"Transparencia/XXXIII-Transparencia.html",
"Transparencia/XXXIV-Transparencia.html",
"Transparencia/XXXV-Transparencia.html",
"Transparencia/XXXVI-Transparencia.html",
"Transparencia/XXXVII-Transparencia.html",
"Transparencia/XXXVIII-Transparencia.html",
"Transparencia/XXXIX-Transparencia.html",
"Transparencia/XL-Transparencia.html",
"Transparencia/XLI-Transparencia.html",
"Transparencia/XLII-Transparencia.html",
"Transparencia/XLIII-Transparencia.html",
"Transparencia/XLIV-Transparencia.html",
"Transparencia/XLV-Transparencia.html",
"Transparencia/XLVI-Transparencia.html",
"Transparencia/XLVII-Transparencia.html",
"Transparencia/XLVIII-Transparencia.html",
"Transparencia/XLIX-Transparencia.html",

"img/BANERS/comites.png",
"img/BANERS/Contacto.png",
"img/BANERS/Contacto2.png",
"img/BANERS/denuncia_2.png",
"img/BANERS/informe.png",
"img/BANERS/mensaje.png",
"img/BANERS/programas.png",
"img/BANERS/PROTECCION.png",
"img/BANERS/quienes_somos.png",
"img/BANERS/resp_adm.png",
"img/BANERS/sistema_estatal.png",
"img/BANERS/sitios_interes.png",
"img/BANERS/sobre_osfags.png",

"img/menu/Bienvenidaok01.png",
"img/menu/Comitesok.png",
"img/menu/Comitésok.png",
"img/menu/contacto2.png",
"img/menu/Contactok.png",
"img/menu/denunciaok.png",
"img/menu/estatal.png",
"img/menu/estatalok.png",
"img/menu/Informeok01.png",
"img/menu/Interésok.png",
"img/menu/Programasok.png",
"img/menu/proteccionok01.png",
"img/menu/Sistema.png",
"img/menu/sobreok01.png",
"img/menu/sobreosfags.png",
"img/menu/Somosok01.png",
"img/logo_osfags.png",
"img/logo2.png",
"img/somos/auditor3.jpeg",


"assets/casa-corazón.mp4",
"assets/hogar-de-la-niña-web.mp4",
"assets/pdf/AVISO.pdf",
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
"https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/css/uikit.min.css",
"cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js",
"https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit-icons.min.js",
"https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v17.0",


"https://code.jquery.com/jquery-3.6.0.min.js",
"https://cdn.userway.org/widget.js",
"https://www.google.com/recaptcha/api.js",
"https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",
"https://www.google.com/maps/place/Organo+Superior+de+Fiscalizaci%C3%B3n+del+Estado+de+Aguascalientes/@21.912196,-102.311548,15z/data=!4m6!3m5!1s0x8429ee74809cca13:0x20d6cf878d49c6de!8m2!3d21.9121957!4d-102.3115484!16s%2Fg%2F11b6qws0sv?hl=en-US&entry=ttu"

];
//Se agrega links de bootstrap, css y js

//En el evento install se agregan los archivos a la caché, se ejecuta cuando se abre la app automático
self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});
//En el evento fetch se envian los archivos a la pagina web o páginas, se ejecutan cuando lo solicita la página
self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
});