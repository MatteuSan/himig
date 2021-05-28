/*
*
* JS FILE
*
*/

/*
import * as header from '@src/Header';
import * as search from '@src/Search'

export {
    header,
    search
}
*/

/*$(document).ready(function() {
    $(".search-button").click(function() {
        $(".search-button").delay(-100).fadeOut("fast"), $(".header__text").delay(100).fadeOut("fast"),
            $(".search").delay(400).fadeIn("fast"), $(".close-button").delay(400).fadeIn("fast");
    }), $(".close-button").click(function() {
        $(".close-button").delay(-100).fadeOut("fast"), $(".search").delay(100).fadeOut("fast"),
            $(".header__text").delay(400).fadeIn("fast"), $(".search-button").delay(400).fadeIn("fast");
    });
});*/

// HEADER COLOR CHANGE
const header = document.querySelector('.header--scrollable')
const banner = document.querySelector('.banner')

const options = {}

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

// SEARCH
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

