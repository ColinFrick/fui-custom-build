/**
 * This is an example javascript file
 */

;(function ($) {
    $.example = $.fn.example = function () {
        $(this).each(function () {
            $(this).addClass("example");
        });
    }
})(jQuery);
