import Login from "../../classes/pages/login.page"
import Forgot from "../../classes/pages/forgot.page"
import Header from "../../classes/elements/header.elem"

describe('Authentication', () => {

    before(() => {
        Login.openPage()
    })

    it('Login', () => {
        Login.setValueEmail('mafplaceqauser@gmail.com')
        Login.setValuePass('mafplace2021')
        Login.clickLoginBtn()
        Header.checkUserPageBtn()
        Header.checkLogoutBtn()
    })

    it('Logout', () => {
        Header.clickLogoutButton()
        Login.checkPage()
        Login.checkLoginUrl()
        Header.checkLogoutBtnNotDisplayed()
        Header.checkUserPageBtnNotDisplayed()
    })

    it('Remind Password', () => {
        Login.clickForgotBtn()
        Forgot.checkPage()
        Forgot.checkForgotUrl()
        Forgot.enterTrueEmailValue()
        Forgot.remindBtnClick()
        Forgot.successMsgText()
        Login.redirectToLogin()
        Login.checkPage()
    })

})