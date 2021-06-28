"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderScrollable = void 0;
// HEADER
var HeaderScrollable = /** @class */ (function () {
    function HeaderScrollable() {
    }
    HeaderScrollable.prototype.call = function (headerClass, breakingPoint) {
        if (headerClass === void 0) { headerClass = '.header--scrollable'; }
        if (breakingPoint === void 0) { breakingPoint = '.banner'; }
        var headerElement = document.querySelector(headerClass);
        var breakingPointElement = document.querySelector(breakingPoint);
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
exports.HeaderScrollable = HeaderScrollable;
