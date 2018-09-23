;(function($, window, document, undefined){

    $.fn.extend({

        scrollSpy: function(options){

            options = options || {};

            var defaults = {
                padding: options.padding ? options.padding : 0,
                selector: options.selector ? options.selector : 'scrollspy',
            };

            var options = $.extend({}, defaults, options);
            var navbar = $(this);

            $(window).bind('scroll', function () {

                var currentTop = $(window).scrollTop() - options.padding;
                var elems = $(options.selector);

                elems.each(function (index) {

                    var elemTop = $(this).offset().top;
                    var elemBottom = elemTop + $(this).height();

                    if (currentTop >= elemTop && currentTop <= elemBottom) {

                        var id = $(this).attr('id');
                        var navElem = navbar.find('a[href="#' + id + '"]');
                        navElem.addClass('active').siblings().removeClass('active');
                    }
                })
            });
        }

    })

})(jQuery, window, document, undefined);