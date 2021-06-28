"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.prototype.call = function (searchClass, searchButtonClass, closeButtonClass, headerTextClass) {
        if (searchClass === void 0) { searchClass = '.search'; }
        if (searchButtonClass === void 0) { searchButtonClass = '.search-button'; }
        if (closeButtonClass === void 0) { closeButtonClass = '.close-button'; }
        if (headerTextClass === void 0) { headerTextClass = '.header__text'; }
        var search = document.querySelector(searchClass);
        var searchButton = document.querySelector(searchButtonClass);
        var closeButton = document.querySelector(closeButtonClass);
        var headerText = document.querySelector(headerTextClass);
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
    };
    return Search;
}());
exports.Search = Search;
