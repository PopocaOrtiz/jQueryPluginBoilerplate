/* ====================================================
 * jQuery plugin template ("boilerplate")
 * https://github.com/capynet/jQueryPluginBoilerplate
 * jQuery 1.3+
 * Marcelo Iván Tosco (capynet)
 * ==================================================== */
!function ($) {
    "use strict";
    var plugin;

    var Class = function (el, options) {
        plugin = this;
        this.$element = $(el);

        var defaults = {
            animar: false
        };

        this.options = $.extend(defaults, options);

        init();
    };

    // SECCIÓN DE MÉTODOS PÚBLICOS
    Class.prototype = {

        metodoPublico: function () {},

        metodoPublicoQueLlamaAUnMetodoPrivado: function () {
            metodoPrivado();
        }
    };


    // SECCIÓN DE MÉTODOS PRIVADOS
    function init() {}

    function metodoPrivado() {}

    // DEFINICIÓN DEL PLUGIN
    $.fn.nombreDelPlugin = function (options) {

        var args = Array.prototype.slice.call(arguments);
        args.shift();

        return this.each(function () {
            var $element = $(this);
            var data = $element.data("nombreDelPlugin");
            if (!data) $element.data("nombreDelPlugin", (data = new Class(this, options)));
            if (typeof options == 'string') data[options].apply(this, args);
        })
    };

    $.fn.nombreDelPlugin.Constructor = Class;
}(window.jQuery);
