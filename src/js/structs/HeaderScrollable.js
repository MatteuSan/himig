"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderScrollable = /** @class */ (function () {
    function HeaderScrollable() {
    }
    HeaderScrollable.prototype.call = function (opt) {
        var _a = opt || {}, _b = _a.headerClass, headerClass = _b === void 0 ? ".header--scrollable" : _b, _c = _a.breakingPoint, breakingPoint = _c === void 0 ? ".banner" : _c;
        var headerElement = document.querySelector(headerClass);
        var breakingPointElement = document.querySelector(breakingPoint);
        if (!headerElement)
            throw new Error("Please provide a header selector.");
        if (!breakingPointElement)
            throw new Error("Please provide a breaking point element selector.");
        var options = {
            rootMargin: "-100px 0px 0px 0px",
        };
        // @ts-ignore
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    headerElement.classList.add('scrolled', 'elevation--z3');
                }
                else {
                    headerElement.classList.remove('scrolled', 'elevation--z3');
                }
            });
        }, options);
        observer.observe(breakingPointElement);
    };
    return HeaderScrollable;
}());
exports.default = HeaderScrollable;
