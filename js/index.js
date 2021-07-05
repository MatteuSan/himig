"use strict";
var optionsTrigger = '.chip__options__trigger';
var optionsClass = '.chip__options';
var openIcon = 'menu';
var closeIcon = 'close';
// @ts-ignore
$(document).ready(function () {
    // @ts-ignore
    $(optionsTrigger).on("click", function () {
        // @ts-ignore
        $(this).parent().children(optionsClass).slideToggle("fast");
        // @ts-ignore
        var option = $(this).next();
        if (option.hasClass("visible")) {
            // @ts-ignore
            $(this).html(openIcon);
            option.removeClass("visible");
        }
        else {
            // @ts-ignore
            $(this).html(closeIcon);
            option.addClass("visible");
        }
    });
});
