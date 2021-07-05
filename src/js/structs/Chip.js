"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chip = /** @class */ (function () {
    function Chip() {
    }
    Chip.prototype.call = function (opt) {
        var _a = opt || {}, _b = _a.optionsTrigger, optionsTrigger = _b === void 0 ? '.chip__options__trigger' : _b, _c = _a.optionsClass, optionsClass = _c === void 0 ? '.chip__options' : _c, _d = _a.openIcon, openIcon = _d === void 0 ? 'menu' : _d, _e = _a.closeIcon, closeIcon = _e === void 0 ? 'close' : _e;
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
    };
    return Chip;
}());
exports.default = Chip;
