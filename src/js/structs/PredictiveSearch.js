"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PredictiveSearch = /** @class */ (function () {
    function PredictiveSearch() {
    }
    PredictiveSearch.prototype.call = function (opt) {
        var _a = opt || {}, _b = _a.searchSelector, searchSelector = _b === void 0 ? ".search" : _b, _c = _a.searchButtonSelector, searchButtonSelector = _c === void 0 ? ".search-button" : _c, _d = _a.closeButtonSelector, closeButtonSelector = _d === void 0 ? ".close-button" : _d, _e = _a.headerTextSelector, headerTextSelector = _e === void 0 ? ".header__text" : _e;
        var searchElement = document.querySelector(searchSelector);
        var searchButtonElement = document.querySelector(searchButtonSelector);
        var closeButtonElement = document.querySelector(closeButtonSelector);
        var headerTextElement = document.querySelector(headerTextSelector);
        if (!searchElement)
            throw new Error("Please provide a valid `searchSelector` property.");
        if (!searchButtonElement)
            throw new Error("Please provide a valid `searchButtonSelector` property.");
        if (!closeButtonElement)
            throw new Error("Please provide a valid `closeButtonSelector` property.");
        if (!headerTextElement)
            throw new Error("Please provide a valid `headerTextSelector` property.");
        searchButtonElement.addEventListener('click', function () {
            headerTextElement.classList.add('invisible');
            searchButtonElement.classList.add('invisible');
            searchElement.classList.add('visible');
            closeButtonElement.classList.add('visible');
        });
        closeButtonElement.addEventListener('click', function () {
            searchElement.classList.remove('visible');
            closeButtonElement.classList.remove('visible');
            headerTextElement.classList.remove('invisible');
            searchButtonElement.classList.remove('invisible');
        });
    };
    return PredictiveSearch;
}());
exports.default = PredictiveSearch;
