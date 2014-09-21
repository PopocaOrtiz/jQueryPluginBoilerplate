!function ($) {
    "use strict";
    var plugin;

    var Class = function (el, options) {
        plugin = this;
        this.$element = $(el);
        this.$lis = this.$element.find('li');

        // Declaramos los valores por defecto de nuestro plugin.
        var defaults = {
            background: 'blue',
            bold: false
        };

        // Aqui se mezclan las opciones por defecto y las definidas por el usuario.
        // .options es la fuente desde la que leeremos los parametros a usar internamente.
        this.options = $.extend(defaults, options);

        init();
    };


    Class.prototype = {
        /**
         * Usamos un metodo publico para permitir
         * que se modifique el color de fondo
         */
        cambiarColor: function (nuevoColor) {
            // Antes de llamar al metodo que cambia el color,
            // podriamos hacer comprobaciones aquí mismo.
            setColor(nuevoColor);
        }
    };

    /**
     * Establecemos el color y el estilo de fuente al invocarse el plugin.
     */
    function init() {
        plugin.$lis.css({
            'background': plugin.options.background,
            'font-weight': (plugin.options.bold ? 'bold' : 'normal')
        });
    }

    /**
     * Establece el color de un elemento
     */
    function setColor(color) {
        plugin.$lis.css('background', color);
    }

    // Esponemos nuestro plugin en "formato" jQuery plugin
    $.fn.demojQueryPlugin = function (options) {

        var args = Array.prototype.slice.call(arguments);
        args.shift();

        return this.each(function () {
            var $element = $(this);
            var data = $element.data("demojQueryPlugin");
            if (!data) $element.data("demojQueryPlugin", (data = new Class(this, options)));
            if (typeof options == 'string') data[options].apply(this, args);
        })
    };

    $.fn.demojQueryPlugin.Constructor = Class;
}(window.jQuery);
