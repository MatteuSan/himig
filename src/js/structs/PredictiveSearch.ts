export interface PredictiveSearchOptions {
	searchSelector?: string;
	searchButtonSelector?: string;
	closeButtonSelector?: string;
	headerTextSelector?: string;
}

class PredictiveSearch {
	call(opt?: PredictiveSearchOptions) {
		
		const {
			searchSelector = ".search",
			searchButtonSelector = ".search-button",
			closeButtonSelector = ".close-button",
			headerTextSelector = ".header__text"
		} = opt || {};

		const searchElement = document.querySelector(searchSelector);
		const searchButtonElement = document.querySelector(searchButtonSelector);
		const closeButtonElement = document.querySelector(closeButtonSelector);
		const headerTextElement = document.querySelector(headerTextSelector);

		if (!searchElement) throw new Error("Please provide a valid `searchSelector` property.");
		if (!searchButtonElement) throw new Error("Please provide a valid `searchButtonSelector` property.");
		if (!closeButtonElement) throw new Error("Please provide a valid `closeButtonSelector` property.");
		if (!headerTextElement) throw new Error("Please provide a valid `headerTextSelector` property.");

		searchButtonElement.addEventListener('click', function () {

				headerTextElement.classList.add('invisible')
				searchButtonElement.classList.add('invisible')

				searchElement.classList.add('visible')
				closeButtonElement.classList.add('visible')

		});

		closeButtonElement.addEventListener('click', function () {

				searchElement.classList.remove('visible')
				closeButtonElement.classList.remove('visible')

				headerTextElement.classList.remove('invisible')
				searchButtonElement.classList.remove('invisible')

		});
	}
}

export default PredictiveSearch;