class DarkMode {
    call() {
        // DARK MODE
        let darkMode: any = localStorage.getItem("darkMode");
        const theme: any = document.querySelector('body');
        const toggle: any = document.querySelector("#dark-mode__toggle");

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

        if(darkMode === "enabled") {
            enable();
        }

        toggle.addEventListener("click", function() {

            darkMode = localStorage.getItem("darkMode");

            if (darkMode !== "enabled") {
                enable();
            } else {
                disable();
            }
        });
    }
}