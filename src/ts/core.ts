//
//    Stack by GrowStocks
//    Made by Matteu#0001
//
//    Copyright 2021 (c) Matteu and the GrowStocks Development Group
//
//    The Design System for building quick, beautiful, responsive, and flexible user interfaces.
//
//
import HeaderScrollable from "./structs/HeaderScrollable";
import PredictiveSearch from "./structs/PredictiveSearch";

// FILE PREVIEW
const fileInput: any = document.querySelector('.type--file');
const previewImg: any = document.querySelector('.form__file-preview__image');
const previewText: any = document.querySelector('.form__file-preview__label');

fileInput.addEventListener('change', function() {
    // @ts-ignore
    const file: any = this.files[0];

    if (!file) {
        previewImg.style.display = null;
        previewText.style.display = null;
    } else {
        const reader = new FileReader();

        previewImg.style.display = "block";
        previewText.style.display = "none";

        reader.addEventListener("load", function() {
            console.log(this);
            previewImg.setAttribute('src', this.result);
        });

        reader.readAsDataURL(file);
    }
});

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

// CHIP__OPTIONS

/*const optionsTrigger = document.querySelector('.chip__options__trigger');
const optionsMenu = document.querySelector('.chip__options');

optionsTrigger.addEventListener('click', function() {
    this.parentElement.firstChild
});*/

// @ts-ignore
$(document).ready(function () {
    // @ts-ignore
    $('.chip__options__trigger').on("click", function () {
        // @ts-ignore
        $(this).parent().children('.chip__options').slideToggle("fast");
        // @ts-ignore
        let option = $(this).next();
        if (option.hasClass("visible")) {
            // @ts-ignore
            $(this).html("menu");
            option.removeClass("visible");
        } else {
            // @ts-ignore
            $(this).html("close");
            option.addClass("visible");
        }
    });
});