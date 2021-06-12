"use strict";
const header = document.querySelector('.header--scrollable');
const banner = document.querySelector('.banner');
const options = {
    rootMargin: "-100px 0px 0px 0px",
};
// @ts-ignore
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('scrolled', 'elevation--z3');
        }
        else {
            header.classList.remove('scrolled', 'elevation--z3');
        }
    });
}, options);
observer.observe(banner);
const search = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');
const closeButton = document.querySelector('.close-button');
const headerText = document.querySelector('.header__text');
searchButton.addEventListener('click', function () {
    headerText.classList.add('invisible');
    searchButton.classList.add('invisible');
    search.classList.add('visible');
    closeButton.classList.add('visible');
});
closeButton.addEventListener('click', function () {
    search.classList.remove('visible');
    closeButton.classList.remove('visible');
    headerText.classList.remove('invisible');
    searchButton.classList.remove('invisible');
});
// FILE PREVIEW
const fileInput = document.querySelector('.type--file');
const previewImg = document.querySelector('.form__file-preview__image');
const previewText = document.querySelector('.form__file-preview__label');
fileInput.addEventListener('change', function () {
    // @ts-ignore
    const file = this.files[0];
    if (!file) {
        previewImg.style.display = null;
        previewText.style.display = null;
    }
    else {
        const reader = new FileReader();
        previewImg.style.display = "block";
        previewText.style.display = "none";
        reader.addEventListener("load", function () {
            console.log(this);
            previewImg.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
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
        }
        else {
            // @ts-ignore
            $(this).html("close");
            option.addClass("visible");
        }
    });
});
//# sourceMappingURL=index.js.map