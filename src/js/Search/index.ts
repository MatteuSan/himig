export class Search {
    call(
        searchClass: string = '.search',
        searchButtonClass: string = '.search-button',
        closeButtonClass: string = '.close-button',
        headerTextClass: string = '.header__text'
    ) {
        const search: any = document.querySelector(searchClass)
        const searchButton: any = document.querySelector(searchButtonClass)
        const closeButton: any = document.querySelector(closeButtonClass)
        const headerText: any = document.querySelector(headerTextClass)

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
    }
}