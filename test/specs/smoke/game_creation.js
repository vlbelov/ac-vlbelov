import Login from "../../classes/pages/login.page"
import PublicGameNew from "../../classes/pages/public_game_new.page"
import Header from "../../classes/elements/header.elem"
import PublicGameSearch from "../../classes/pages/public_game_search.page"

describe('Game creation', () => {

    before(() => {
        Login.openPage()
        Header.clickPublicGameBtn()
        PublicGameNew.checkPage()
        PublicGameNew.checkUrl()
    })

    it('Create game', () => {
        PublicGameNew.multiplyPl(10)
        PublicGameNew.clickCreateGameButton()
        PublicGameNew.checkPage()
        PublicGameNew.clickStartGameButton()
        PublicGameNew.checkStartGamePage()
    })

    it('Game search - not found', () => {
        PublicGameSearch.clickSearchTab()
        PublicGameSearch.addValueToSerchBar("sssss")
        
    })

    it('Game search - success and able to continue ', () => {
        PublicGameNew.multiplyPl(10)
        PublicGameNew.clickCreateGameButton()
        PublicGameNew.checkPage()
        PublicGameNew.clickStartGameButton()
        PublicGameNew.checkStartGamePage()
    })


})