export interface HeaderScrollableOptions {
	headerClass?: string;
	breakingPoint?: string;
}

class HeaderScrollable {
	call(opt?: HeaderScrollableOptions) {
		
		const {
			headerClass = ".header--scrollable",
			breakingPoint = ".banner",
		} = opt || {};
		
		const headerElement = document.querySelector(headerClass)
		const breakingPointElement = document.querySelector(breakingPoint);

		if (!headerElement) throw new Error("Please provide a header selector.");
		if (!breakingPointElement) throw new Error("Please provide a breaking point element selector.");

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

export default HeaderScrollable;
