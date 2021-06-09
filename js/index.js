"use strict";
var header = document.querySelector('.header--scrollable');
var banner = document.querySelector('.banner');
var options = {
    rootMargin: "-100px 0px 0px 0px",
};
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled');
        }
    });
}, options);
observer.observe(banner);
var search = document.querySelector('.search');
var searchButton = document.querySelector('.search-button');
var closeButton = document.querySelector('.close-button');
var headerText = document.querySelector('.header__text');
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
        var option = $(this).next();
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
