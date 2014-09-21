/* ==========================================================
 * jQuery plugin template ("boilerplate")
 * http://e-capy.com/jQuery-plugin-template
 * https://gist.github.com/capynet/1e483c6ed520f4a1e2b0
 * ==========================================================
 * Marcelo Iván Tosco
 *
 * jQuery 1.3+
 * ========================================================== */

!function ($) {

    // Indicamos que se estricto en los errores.
    // @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode
    "use strict";

    // Declaramos la variable que va a permitirnos acceder al plugin de
    // forma interna y poder llamar asi a nuestros métodos privados.
    var plugin;

    // El constructor. Este se llama "Class" ya que no es necesario especificarle
    // un nombre, desde que este prototipo se encuentra en un scope privado.
    // Dejalo así, no hay colision.
    var Class = function (el, options) {

        plugin = this;

        // Nos copiamos el elemento DOM sobre el cual estamos actuando para poder referenciarlo
        // internamente y evitar problemas de scope al querer usar directamente "this"
        this.$element = $(el);

        //Definimos aquí las opciones que nuestro plugin tiene por defecto
        var defaults = {
            animar: false
        };

        // Sobreescribimos cualquier opciÓn por defecto que el usuario haya decidido especificar
        // y las guardamos el resultado en "options" para poder usarlas internamente
        this.options = $.extend(options, defaults);

        //inicializamos nuestro plugin
        init();
    };

    // SECCIÓN DE MÉTODOS PÚBLICOS
    //-----------------------------------------------------------
    Class.prototype = {

        metodoPublico: function () {},

        metodoPublicoQueLlamaAUnMetodoPrivado: function () {
            metodoPrivado();
        }
    };


    // SECCIÓN DE MÉTODOS PRIVADOS
    //-----------------------------------------------------------
    /**
     * Metodo privado de inicialización.
     * Aquí comienza todo.
     * Cualquier tarea inicial hazla aquí.
     */
    function init() {}

    function metodoPrivado() {}

    // DEFINICIÓN DEL PLUGIN
    //-----------------------------------------------------------
    $.fn.nombreDelPlugin = function (options) {

        // Capturamos los posibles argumentos (para métodos públicos).
        var args = Array.prototype.slice.call(arguments);
        // El primer argumento es el nombre del método, lo dejmaos fuera de los parametros.
        args.shift();

        // Nos areguramos de aplicar nuestro plugin a todos los elementos que hayamos
        // seleccionado cuando hacemos $(".todosEstos").nombreDelPlugin();
        return this.each(function () {

            // Elemento DOM al que le vamos a atachar nuestro plugin.
            var $element = $(this);

            // Antes de "pegar" una instancia de nuestro plugin,
            // verificamos si ya tiene una.
            var data = $element.data("nombreDelPlugin");

            // Si no existe una instancia, se la asignamos.
            if (!data) $element.data("nombreDelPlugin", (data = new Class(this, options)));

            // Le damos acceso directo a los métodos publicos
            // Por ejemplo $(".este").hola("metodoPublico"))
            if (typeof options == 'string') data[options].apply(this, args);

        })
    };

    // Exponemos Class (nuestro plugin) para poder acceder directamente.
    // http://stackoverflow.com/questions/10525600/what-is-the-purpose-of-fn-foo-constructor-foo-in-twitter-bootstrap-js
    $.fn.nombreDelPlugin.Constructor = Class;

}(window.jQuery);
