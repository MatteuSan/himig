export class Search {
    call(searchClass = '.search', searchButtonClass = '.search-button', closeButtonClass = '.close-button', headerTextClass = '.header__text') {
        const search = document.querySelector(searchClass);
        const searchButton = document.querySelector(searchButtonClass);
        const closeButton = document.querySelector(closeButtonClass);
        const headerText = document.querySelector(headerTextClass);
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
    }
}
//# sourceMappingURL=index.js.map