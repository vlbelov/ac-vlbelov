import Login from '../../classes/pages/login.page';
import Forgot from '../../classes/pages/forgot.page'
import Base from '../../classes/base.class'
describe('Elements', () => {

    before(() => {
        Login.openPage()
    })

    it('Logo', () => {
        Login.checkLogo()
    })

    it('Email field', () => {
        Login.checkEmailField()
    })

    it('Pass field', () => {
        Login.checkPassField()
    })

    it('Login button', () => {
        Login.checkLoginBtn()
    })

    it('Forgot button', () => {
        Login.checkForgotBtn()
    })
})

describe('Values', () => {

    before(() => {
        Login.openPage()
    })

    it('Email placeholder', () => {
        Login.emailPlaceholder()
    })

    it('Pass placeholder', () => {
        Login.passPlaceholder()
    })

    it('Login button text', () => {
        Login.loginBtnText()
    })

    it('Forgot button text', () => {
        Login.forgotBtnText()
    })
})

describe('Functionality', () => {

    before(() => {
        Login.openPage()
    })

    it('Error - both fields are empty', () => {
        Login.clickLoginBtn()
        Login.errTextEmptyField()
    })

    it('Error disapears - input Email', () => {
        Login.setValueEmail("qqq")
        Login.ErrorDisapear()
    })

    it('Error - only Password empty', () => {
        Login.clickLoginBtn()
        Login.errTextEmptyField()
    })

    it('Error disapears - input Password', () => {
        Login.setValuePass("www")
        Login.ErrorDisapear()
    })

    it('Error - only Email empty', () => {
        Login.openPage()
        Login.setValuePass("www")
        Login.clickLoginBtn()
        Login.errTextEmptyField()
    })

    it('Error if Email is incorrect', () => {
        Login.setValueEmail("qwe")
        Login.clickLoginBtn()
        Login.errTextWrongEmail()
    })

    it('Error if Email is correct, Password is not', () => {
        Login.setValueTrueEmail('mafplaceqauser@gmail.com')
        Login.clickLoginBtn()
        Login.errTextWrongPass()
    })


    it('Remind Password redirect', () => {
        Login.clickForgotBtn()
        Forgot.checkForgotUrl()
    })

    it('Remind Password page is displayed', () => {
        Forgot.checkPage()
    })


})