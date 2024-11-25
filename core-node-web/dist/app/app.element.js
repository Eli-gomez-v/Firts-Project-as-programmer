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
var AppElement = /** @class */ (function (_super) {
    __extends(AppElement, _super);
    function AppElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppElement.prototype.connectedCallback = function () {
        this.innerHTML = "<header class=\"main-header\">\n        <h1 id=\"mi_id\">Aprende Urban Sketching</h1>\n    </header>\n    <section class=\"page-content\">\n        <div class=\"sketchbook-border\">\n            <h2 class=\"subtitulo\">\u00BFQu\u00E9 es el Urban Sketching?</h2>\n            <p>El Urban Sketching es una t\u00E9cnica de dibujo que consiste en capturar la esencia de la ciudad a trav\u00E9s de dibujos r\u00E1pidos y espont\u00E1neos. En esta secci\u00F3n encontrar\u00E1s tutoriales y consejos para mejorar tus habilidades como dibujante urbano.</p>\n            <p>El Urban Sketching es una t\u00E9cnica de dibujo que consiste en capturar la esencia de la ciudad a trav\u00E9s de dibujos r\u00E1pidos y espont\u00E1neos. Los dibujantes urbanos suelen salir a la calle con su cuaderno y su material de dibujo para plasmar en papel los rincones m\u00E1s emblem\u00E1ticos de la ciudad.</p>\n            <h2 class=\"subtitulo\">Consejos para dibujar en la calle</h2>\n            <p>Si quieres iniciarte en el Urban Sketching, aqu\u00ED te dejamos algunos consejos para que tus dibujos sean todo un \u00E9xito:</p>\n        <ul>\n            <li>Sal a la calle con un cuaderno y un bol\u00EDgrafo. No necesitas mucho material para dibujar en la calle, lo importante es capturar la esencia del lugar.</li>\n            <li>Elige un lugar tranquilo y c\u00F3modo para sentarte a dibujar. Puedes elegir un banco en un parque o una terraza con vistas a la ciudad.</li>\n            <li>Observa el entorno y elige un punto de vista interesante. Antes de empezar a dibujar, t\u00F3mate unos minutos para observar el lugar y decidir qu\u00E9 es lo que quieres plasmar en tu dibujo.</li>\n            <li>No te preocupes por los detalles. El Urban Sketching se trata de capturar la esencia del lugar, no de dibujar cada detalle de forma precisa. No te preocupes por los errores, lo importante es disfrutar del proceso de dibujo.</li>\n            <li>Experimenta con diferentes t\u00E9cnicas y estilos. El Urban Sketching es una t\u00E9cnica muy vers\u00E1til que te permite experimentar con diferentes estilos y t\u00E9cnicas de dibujo. No tengas miedo de probar cosas nuevas y descubrir tu propio estilo.</li>\n        </ul>\n        <nav class=\"main-nav\">\n            <a href=\"index.html\">Volver a la p\u00E1gina principal</a>\n            <a href=\"docs/1 canon-8-cabezas-fusionado (1).pdf\">PDF T\u00E9cnicas de dibujar</a>\n            <a href=\"docs/La l\u00EDnea, la textura y los materiales como expresi\u00F3n de sentimientos.pdf\">PDF T\u00E9cnicas</a>\n            <a href=\"docs/l\u00EDnea, textura, composici\u00F3n y materiales.pdf\">PDF Composici\u00F3n</a>\n        </nav>\n        </div>\n    </section>\n    <footer class=\"main-footer\">\n        <p>El Mundo del Urban Sketch</p>";
    };
    return AppElement;
}(HTMLElement));
customElements.define('app-root', AppElement);
