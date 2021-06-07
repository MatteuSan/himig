/*
*
* JS FILE
*
*/

/*import Header from "./@src/Header.js";
import Search from "./@src/Search.js";

const header = new Header;
const search = new Search;

header.headerScrollable = true;
search.search = true*/

const header = document.querySelector('.header--scrollable')
const banner = document.querySelector('.banner')

const options = {
    rootMargin: "-100px 0px 0px 0px",
}

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}, options);

observer.observe(banner)

const search = document.querySelector('.search')
const searchButton = document.querySelector('.search-button')
const closeButton = document.querySelector('.close-button')
const headerText = document.querySelector('.header__text')

searchButton.addEventListener('click', function () {

    headerText.classList.add('invisible')
    searchButton.classList.add('invisible')

    search.classList.add('visible')
    closeButton.classList.add('visible')

});

closeButton.addEventListener('click', function () {

    search.classList.remove('visible')
    closeButton.classList.remove('visible')

    headerText.classList.remove('invisible')
    searchButton.classList.remove('invisible')

});

// CHIP__OPTIONS

/*const optionsTrigger = document.querySelector('.chip__options__trigger');
const optionsMenu = document.querySelector('.chip__options');

optionsTrigger.addEventListener('click', function() {
    this.parentElement.firstChild
});*/

$(document).ready(function () {
    $('.chip__options__trigger').on("click", function () {
        $(this).parent().children('.chip__options').slideToggle("fast");
        var option = $(this).next();
        if (option.hasClass("visible")) {
            $(this).html("menu");
            option.removeClass("visible");
        } else {
            $(this).html("close");
            option.addClass("visible");
        }
    });
});