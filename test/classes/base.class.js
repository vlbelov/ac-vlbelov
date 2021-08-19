class Base {

    constructor() {
        this.baseExp = { //expected results
            title: 'The Maf Place',
            forgotUrl: 'http://qa.maf.place/forgot',
            loginUrl: 'http://qa.maf.place/',
            publicGameUrl: 'http://qa.maf.place/public-game'
        }

    }
    get logo() { return $('#logo') }
    get footer() { return $('#footer') }
    get header() { return $('#header') }

    //methods
    checkTitle() {
        expect(browser).toHaveTitle(this.baseExp.title)
    }

    switchTab(tab) {
        browser.switchWindow(tab)
    }

}

export default Base;