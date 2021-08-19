import Base from '../base.class';

class PublicGameNew extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            newGameTabTxt: 'New Game',
            gameSearchTabTxt: 'Game Search',
            addPlayerFieldTxt: 'Nickname/Name',
            addPlayerBtnTxt: 'Add',
            rndSeatingOptTxt: 'Random seating numbers',
            tableTopTxt: 'Game',
            tableBodyEmptyTxt: 'Add players to create a game',
            createGameBtnTxt: 'Create Game',
            createGameBtnHoverTxt: 'Add 10 players to start a game',
            activeIcon: 'icon-sex-sm icon-active',
            gameIDhaveText: "Game ID:",
            saveIDhaveText: 'Save ID to continue in the future'
        }
    }

    //element selector getters
    get page() { return $('#public-game') }
    get newGameTab() { return $('#new-game-tab') }
    get searchTab() { return $('#search-tab') }
    get newGameSection() { return $('#new-game-section') }
    get sexIcons() { return $('.icon-sex-sm') }
    get searchAddField() { return $('#add_player_field') }
    get addPlayerButton() { return $('#add_player_button') }
    get randomSeatingOptions() { return $('.content-middle') }
    get txtGameTopTable() { return $('.thead-light') }
    get playersTableEmpty() { return $('#public-game tbody tr td') }
    get createGameBtn() { return $('#create-game-button') }
    get createGameBtnHover() { return $('.custom-tooltiptext') }
    get maleIcon() { return $('[alt="male"]') }
    get femaleIcon() { return $('[alt="female"]') }
    get deleteIcon() { return $('[alt="del"]') }
    get playersTable() { return $('.players-table') }
    get arrRows() { return $$("#public-game table tbody tr") }
    get gameIDText() { return $("#id-label") }
    get gameIDValue() { return $("#id-value") }
    get saveIDText() { return $("#save-id-text") }
    get randomSeatingCheckbox() { return $("#random-seating") }
    get allTable() { return $("#public-game table") }
    get startGameButton() { return $("#start-game-button") }
    get startGamePage() { return $("#initial-page") }
    
    
    
  

    //methods$
    checkPage() {
        this.page.waitForDisplayed();
    }

    openPage() {
        browser.url('/public-game');
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.baseExp.publicGameUrl)
    }

    checkNewGameTab() {
        this.newGameTab.waitForDisplayed();
    }

    checkSearchTab() {
        this.searchTab.waitForDisplayed();
    }

    checkNewGameSection() {
        this.newGameSection.waitForDisplayed();
    }

    checkSexIcons() {
        this.sexIcons.waitForDisplayed();
    }

    checkSearchAddPlField() {
        this.searchAddField.waitForDisplayed();
    }

    checkAddPlButton() {
        this.addPlayerButton.waitForDisplayed();
    }

    checkRandomSeatingOptions() {
        this.randomSeatingOptions.waitForDisplayed();
    }

    checkTablePlayers() {
        this.txtGameTopTable.waitForDisplayed();
    }

    checkCreateGameBtn() {
        this.createGameBtn.waitForDisplayed();
    }

    checkGameIDText() {
        this.gameIDText.waitForDisplayed();
    }

    checkGameIDValue() {
        this.gameIDValue.waitForDisplayed();
    }

    checkSaveIDText() {
        this.saveIDText.waitForDisplayed();
    }

    notEmptyPlayerTableDel() {
        this.deleteIcon.waitForDisplayed();
    }

    checkTableDispayed() {
        this.allTable.waitForDisplayed();
    }

    checkStartGamePage() {
        this.startGamePage.waitForDisplayed();
    }

    

    ///////////////Values

    newGameTabText() {
        expect(this.newGameTab).toHaveText(this.exp.newGameTabTxt)
    }

    searchGameTabText() {
        expect(this.searchTab).toHaveText(this.exp.gameSearchTabTxt)
    }

    randomSeatingOptText() {
        expect(this.randomSeatingOptions).toHaveText(this.exp.rndSeatingOptTxt)
    }

    searchAddPlFieldPlaceHolder() {
        expect(this.searchAddField).toHaveAttribute("placeholder", this.exp.addPlayerFieldTxt)
    }

    tableTopText() {
        expect(this.txtGameTopTable).toHaveText(this.exp.tableTopTxt)
    }

    tableBodyEmptyText() {
        expect(this.playersTableEmpty).toHaveText(this.exp.tableBodyEmptyTxt)
    }

    createBtnText() {
        expect(this.createGameBtn).toHaveText(this.exp.createGameBtnTxt)
    }

    createBtnDisabled() {
        this.createGameBtn.isEnabled({ reverse : true})
    }

    createBtnEnabled() {
        this.createGameBtn.isEnabled()
    }

    createBtnHoverText() {
        (this.createGameBtn).moveTo()
        expect(this.createGameBtnHover).toHaveText(this.exp.createGameBtnHoverTxt)
    }

    activeMale() {
        expect(this.maleIcon).toHaveAttribute("class", this.exp.activeIcon)
    }

    activeFemale() {
        expect(this.femaleIcon).toHaveAttribute("class", this.exp.activeIcon)
    }

    gameIDicludeText() {
        expect(this.gameIDText).toHaveText(this.exp.gameIDhaveText)
    }

    saveIDincludeText() {
        expect(this.saveIDText).toHaveText(this.exp.saveIDhaveText)
    }

   


    ///////////////////////////////////Functionality

    enterPlayerName(n) {
        this.searchAddField.setValue(n + " player")
    }

    clickMale() {
        this.maleIcon.click()
    }

    clickFemale() {
        this.femaleIcon.click()
    }

    clickStartGameButton() {
        this.startGameButton.click()
    }

    randomSex(y) {
        if (y % 2 == 0) {
            this.clickMale()
        } else {
            this.clickFemale()
        }
    }

    clickAddButton() {
        (this.addPlayerButton).click()
    }

    multiplyPl(r) {
        for (let i = 1; i <= r; i++) {
            this.enterPlayerName(i)
            this.randomSex(i)
            this.clickAddButton()
        }
    }

    clickCreateGameButton() {
        (this.createGameBtn).click()
    }

    clickRandomSeatingCheckbox() {
        (this.randomSeatingCheckbox).click()
    }

    clickDelPlayerButton() {
        this.deleteIcon.click()
    }

    checkOneCellInTable(r, c, f) {
        expect($("#public-game table tbody :nth-child(" + r + ") :nth-child(" + c + ")")).toHaveText(f)
    }

    checkCellDisplInTable(r,c) {
        ($("#public-game table tbody :nth-child(" + r + ") :nth-child(" + c + ")")).waitForDisplayed();
    }

    checkNRowsDisplInTable(x) {
        if (this.arrRows.length === x) {
            return true
        } else {
            return false
        }
    }



   


}

export default new PublicGameNew