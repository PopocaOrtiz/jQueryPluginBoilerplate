/* ==========================================================
 * jQuery plugin template ("boilerplate") perfecto
 * http://e-capy.com/asasas
 * ==========================================================
 * Marcelo Iván Tosco
 *
 * jQuery 1.3+
 * ========================================================== */

!function ($) {

    //Le añadimos un poco de seriedad a nuestro plugin
    // @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode
    "use strict";

    //Declaramos la variable que va a permitirnos acceder
    //al plugin de forma interna y poder llamar asi a nuestros metodos privados.
    var plugin;

    //Constructor. este se llama "Class" ya que no es necesario especificarle un nombre desde que este prototipo se encuentra en un scope privado.
    //Dejalo asi, no hay colision.
    var Class = function (el, options) {

        plugin = this;

        //Nos copiamos el elemento DOM sobre el cual estamos actuando para poder referenciarlo
        //internamente y evitar problemas de scope al querer usar directamente "this"
        this.$element = $(el);

        //Definimos aqui las opciones que nuestro plugin tiene por defecto
        var defaults = {};

        //Sobreescribimos cualquier opcion por defecto que el usuario haya decidido especificar
        //y las guardamos el resultado en "options" para poder usarlas internamente
        this.options = $.extend(options, defaults);

        //inicializamos nuestro plugin
        init();

    };


    //SECCIÓN DE METODOS PÚBLICOS
    //-----------------------------------------------------------
    Class.prototype = {

        metodoPublico:function () {
        },

        metodoPublicoQueLlamaAUnMetodoPrivado:function () {
            metodoPrivado();
        }
    };


    //SECCIÓN DE METODOS PRIVADOS
    //-----------------------------------------------------------

    /**
     * Metodo privado de inicialización.
     * Aquí comienza todo
     */
    function init() {
    }

    function metodoPrivado() {
    }


    //DEFINICIÓN DEL PLUGIN
    //-----------------------------------------------------------
    $.fn.nombreDelPlugin = function (options) {

  // Posibles argumentos (para metodos publicos)
    var args = Array.prototype.slice.call(arguments);
    args.shift();

        //nos areguramos de aplicar nuestro plugin a todos los elementos que hayamos
        //seleccionado cuando hacemos $(".todosEstos").nombreDelPlugin();
        return this.each(function () {

            //Elemento DOM al que le vamos a atachar nuestro plugin
            var $element = $(this);

            //Tratamos de recuperar la instancia de nuestro plugin si existiera
            var data = $element.data("nombreDelPlugin");

            //Si no existe una instancia, le asignamos una
            if (!data) $element.data("nombreDelPlugin", (data = new Class(this, options)));


            //Le damos acceso directo a los metodos publicos (mediante $(".graph-bar-container").hola("metodoPublico"))
            if (typeof options == 'string') data[options].apply(this, args);

        })
    };

    //Exponemos Class para poder hacer overrides spbre metodos existentes o extender nuestro plugin con mas métodos
    $.fn.nombreDelPlugin.Constructor = Class;

}(window.jQuery);
