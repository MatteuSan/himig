const optionsTrigger = '.chip__options__trigger';
const optionsClass = '.chip__options';
const openIcon = 'menu';
const closeIcon = 'close'

// @ts-ignore
$(document).ready(function () {
    // @ts-ignore
    $(optionsTrigger).on("click", function () {
        // @ts-ignore
        $(this).parent().children(optionsClass).slideToggle("fast");
        // @ts-ignore
        let option = $(this).next();
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