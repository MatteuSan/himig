// HEADER
export class HeaderScrollable {
    call(
        headerClass: string = '.header--scrollable',
        breakingPoint: string = '.banner'
    ) {
        const headerElement: any = document.querySelector(headerClass)
        const breakingPointElement: any = document.querySelector(breakingPoint)

        const options = {
            rootMargin: "-100px 0px 0px 0px",
        }

        // @ts-ignore
        const observer: any = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    headerElement.classList.add('scrolled', 'elevation--z3');
                } else {
                    headerElement.classList.remove('scrolled', 'elevation--z3');
                }
            });
        }, options);

        observer.observe(breakingPointElement)
    }
}