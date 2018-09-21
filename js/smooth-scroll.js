;(function($, window, document, undefined){

    $.fn.extend({

        smoothScroll: function(options){

            options = options || {};

            var defaults = {
                padding: options.padding ? options.padding : 0,
                onEnter: options.onEnter ? options.onEnter : [],
                onLeave: options.onLeave ? options.onLeave : [],
            };

            var options = $.extend({}, defaults, options);
            var element = $(this);
            var links = element.find('a[href*="#"]');

            links.click(function(event){

                event.preventDefault();

                var hash = this.hash;
                var top = $(hash).offset().top;

                window.scroll({
                    top: top + options.padding,
                    behavior: 'smooth' 
                  });

                // window.location.hash = hash;
            });
        }

    })

})(jQuery, window, document, undefined);