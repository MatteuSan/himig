"use strict";
var DarkMode = /** @class */ (function () {
    function DarkMode() {
    }
    DarkMode.prototype.call = function () {
        // DARK MODE
        var darkMode = localStorage.getItem("darkMode");
        var theme = document.querySelector('body');
        var toggle = document.querySelector("#dark-mode__toggle");
        function enable() {
            theme.classList.add('dark-mode');
            localStorage.setItem("darkMode", "enabled");
            console.log('Lights off!');
        }
        function disable() {
            theme.classList.remove('dark-mode');
            //@ts-ignore
            localStorage.setItem("darkMode", null);
            console.log('Lights on!');
        }
        if (darkMode === "enabled") {
            enable();
        }
        toggle.addEventListener("click", function () {
            darkMode = localStorage.getItem("darkMode");
            if (darkMode !== "enabled") {
                enable();
            }
            else {
                disable();
            }
        });
    };
    return DarkMode;
}());
