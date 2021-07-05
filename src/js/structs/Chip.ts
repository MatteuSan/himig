export interface ChipOptions {
    optionsTrigger?: string;
    optionsClass?: string;
    openIcon?: string;
    closeIcon?: string;
}

class Chip {
    call(opt?: ChipOptions) {

        const {
            optionsTrigger = '.chip__options__trigger',
            optionsClass = '.chip__options',
            openIcon = 'menu',
            closeIcon = 'close'
        } = opt || {};

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
    }
}

export default Chip