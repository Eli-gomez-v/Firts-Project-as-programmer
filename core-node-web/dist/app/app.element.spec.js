"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UniqueAppElement = /** @class */ (function (_super) {
    __extends(UniqueAppElement, _super);
    function UniqueAppElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniqueAppElement.prototype.connectedCallback = function () {
        this.innerHTML = "<!-- Header -->\n    <header class=\"main-header\">\n        <h1 id=\"mi_id\">El Urban Sketching</h1>\n    </header>\n    <section class=\"welcome-section\">\n        <h2 class=\"subtitulo\">Bienvenido a la comunidad del Urban Sketching</h2>\n        <div class=\"welcome-message\">\n        <p>El Urban Sketching es una forma de dibujo que se realiza in situ, en el lugar donde se encuentra el objeto a dibujar. \n            Es una t\u00E9cnica que se ha popularizado en los \u00FAltimos a\u00F1os gracias a la facilidad de compartir los dibujos en redes sociales.\n            En esta p\u00E1gina encontrar\u00E1s recursos para aprender y mejorar tus habilidades, as\u00ED como eventos y exposiciones relacionados con el Urban Sketching.</p>\n        </div>\n\n    <!-- Navigation -->\n    <nav class=\"main-nav\">\n        <a href=\"aprende.html\">\n            <img src=\"images/aprende.jpg\" alt=\"Aprende Icono\">\n            Aprende\n        </a>\n        <a href=\"aprende.html\">\n            <img src=\"images/inspiracion.jpg\" alt=\"Inspiraci\u00F3n Icono\">\n            Inspiraci\u00F3n\n        </a>\n        <a href=\"eventos.html\">\n            <img src=\"images/eligomve_qr.png\" alt=\"Eventos Icono\">\n            Escanea el c\u00F3digo QR\n        </a>\n        <a href=\"contacto.html\">\n            <img src=\"images/contacto.jpg\" alt=\"Contacto Icono\">\n            Contacto\n        </a>\n    </nav>\n    \n    <!-- main Content -->\n        <div class=\"grid-container\">\n            <aside class=\"sidebar sidebar-left\"></aside>\n            <p>Accede a manuales, tutoriales y eventos relevantes para mejorar tus habilidades</p>\n      \n    <aside class=\"Sidebar sidebar-right\"></aside>\n    </div>\n\n\n    <!-- Footer -->\n    <footer class=\"main-footer\">\n        creado y producido por Eli_gomez\n    </footer>\n    </section>\n";
    };
    return UniqueAppElement;
}(HTMLElement));
customElements.define('app-root', UniqueAppElement);
