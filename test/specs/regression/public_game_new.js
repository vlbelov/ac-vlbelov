import PublicGameNew from "../../classes/pages/public_game_new.page";
import Login from "../../classes/pages/login.page"
import Header from "../../classes/elements/header.elem"
import { assert } from "chai"
describe('Elements', () => {

    before(() => {
        Login.openPage()
        Header.clickPublicGameBtn()
    })

    it('Check Url', () => {
        PublicGameNew.checkUrl()
    })

    it('Check Page', () => {
        PublicGameNew.checkPage()
    })

    it('New Game Tab', () => {
        PublicGameNew.checkNewGameTab()
    })

    it('New Game Section', () => {
        PublicGameNew.checkNewGameSection()
    })

    it('Sex Icons', () => {
        PublicGameNew.checkSexIcons()
    })

    it('Search / Add Player Field', () => {
        PublicGameNew.checkSearchAddPlField()
    })

    it('Add player button', () => {
        PublicGameNew.checkAddPlButton()
    })

    it('Random Seating Option', () => {
        PublicGameNew.checkRandomSeatingOptions()
    })

    it('Players Table', () => {
        PublicGameNew.checkTablePlayers()
    })

    it('Create Game Button', () => {
        PublicGameNew.checkCreateGameBtn()
    })


})

describe('Values', () => {

    before(() => {
        PublicGameNew.openPage()
    })

    it('New game tab Text', () => {
        PublicGameNew.newGameTabText()
    })

    it('Search game tab Text', () => {
        PublicGameNew.searchGameTabText()
    })

    it('Random seating option Text', () => {
        PublicGameNew.randomSeatingOptText()
    })

    it('Search / Add player field placeholder Text', () => {
        PublicGameNew.searchAddPlFieldPlaceHolder()
    })

    it('Table top Text', () => {
        PublicGameNew.tableTopText()
    })

    it('Table body empty Text', () => {
        PublicGameNew.tableBodyEmptyText()
    })

    it('Create button Text', () => {
        PublicGameNew.createBtnText()
    })

    it('Create button hover Text', () => {
        PublicGameNew.createBtnHoverText()
    })

    it('Create button disabled', () => {
        PublicGameNew.createBtnDisabled()
    })
})

describe('Functionality', () => {

    before(() => {
        PublicGameNew.openPage()
    })

    it('Activate Male Icon Button', () => {
        PublicGameNew.clickMale()
        PublicGameNew.activeMale()
    })

    it('Activate Female Icon Button', () => {
        PublicGameNew.clickFemale()
        PublicGameNew.activeFemale()
    })

    it('Add 3 Players', () => {
        PublicGameNew.multiplyPl(4)
    })

    it('Check One cell in players table', () => {
        PublicGameNew.checkOneCellInTable(1, 2, "1 player")
    })

    it('Check Delete Button', () => {
        PublicGameNew.notEmptyPlayerTableDel()
    })

    it('Click Delete player button', () => {
        PublicGameNew.clickDelPlayerButton()
    })

    it("Check how many rows after click delete button", () => {

        PublicGameNew.checkNRowsDisplInTable(3)
    })

    it('Add 10 Players', () => {
        PublicGameNew.openPage()
        PublicGameNew.multiplyPl(10)
    })

    it("Check Cells displayed in players table", () => {

        for (let t = 1; t <= ($$("#public-game table tbody tr")).length; t++) {
            for (let i = 1; i <= ($$("#public-game table tbody :nth-child(" + t + ") td")).length; i++) {
                PublicGameNew.checkCellDisplInTable(t, i)
            }
        }
    })

    // it("Check12121table", () => {
    //     browser.pause(4000)
    //     for (let t = 1; t <= ($$("#public-game table tbody tr")).length; t++) {
    //         PublicGameNew.checkOneCellInTable(t, 1, t.toString())
    //     }
    // })


    it('Try to add 11th player and check', () => {
        PublicGameNew.multiplyPl(1)
        PublicGameNew.checkNRowsDisplInTable(10)
    })

    it('Create button enabled', () => {
        PublicGameNew.createBtnEnabled()
    })

    it('Create Game', () => {
        PublicGameNew.clickCreateGameButton()
    })

    it('Check Game ID Text is displayed', () => {
        PublicGameNew.checkGameIDText()
    })

    it('Check Game ID Value is displayed', () => {
        PublicGameNew.checkGameIDValue()
    })

    it('Check Save ID Text is displayed', () => {
        PublicGameNew.checkSaveIDText()
    })

    it('Check Game ID Text have text', () => {
        PublicGameNew.gameIDicludeText()
    })

    it('Check Save ID Text have text', () => {
        PublicGameNew.saveIDincludeText()
    })

    it('Test random checkbox', () => {
        PublicGameNew.openPage()
        PublicGameNew.multiplyPl(10)
        let inputUser = [];
        ($$("#public-game table tbody tr :nth-child(2)")).forEach(
            function arrayPlayersBeforeCreate(x) {
                inputUser.push(x.getText())
            }
        )
        console.log(inputUser)
        PublicGameNew.clickRandomSeatingCheckbox()
        PublicGameNew.clickCreateGameButton()
        PublicGameNew.checkSaveIDText()
        let inputUserAfterCreateGame = [];
        ($$("#public-game table tbody tr :nth-child(2)")).forEach(
            function arrayPlayersBeforeCreate(y) {
                inputUserAfterCreateGame.push(y.getText())
            }
        )
        console.log(inputUserAfterCreateGame)
        let before = inputUser.join();
        let after = inputUserAfterCreateGame.join();
        assert.notEqual(before, after)
        //before.not.isEqual(after)
    });








})