// HEADER
export class HeaderScrollable {
    call(headerClass = '.header--scrollable', breakingPoint = '.banner') {
        const headerElement = document.querySelector(headerClass);
        const breakingPointElement = document.querySelector(breakingPoint);
        const options = {
            rootMargin: "-100px 0px 0px 0px",
        };
        // @ts-ignore
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    headerElement.classList.add('scrolled', 'elevation--z3');
                }
                else {
                    headerElement.classList.remove('scrolled', 'elevation--z3');
                }
            });
        }, options);
        observer.observe(breakingPointElement);
    }
}
//# sourceMappingURL=index.js.map