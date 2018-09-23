;(function($, window, document, undefined){

    $.fn.extend({

        smoothScroll: function(options){

            options = options || {};

            var defaults = {
                padding: options.padding ? options.padding : 0,
            };

            var options = $.extend({}, defaults, options);

            $(this).find('a[href*="#"]').click(function(event){
                event.preventDefault();
                window.scroll({
                    top: $(this.hash).offset().top + options.padding,
                    behavior: 'smooth' 
                });
            });
        }

    })

})(jQuery, window, document, undefined);