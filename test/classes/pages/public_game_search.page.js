import Base from '../base.class';

class PublicGameSearch extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            newGameTabTxt: 'New Game',
     
        }
    }

    //element selector getters
    get serchTab() { return $('#search-tab') }
    get serchBar() { return $('#search_game_field') }





    //methods$
    checkSearchTab() {
        this.serchTab.waitForDisplayed();
    }

    clickSearchTab() {
        this.serchTab.click()
    }

    addValueToSerchBar(n) {
        this.serchBar.setValue(n)
    }

    
}

export default new PublicGameSearch