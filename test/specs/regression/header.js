import Forgot from '../../classes/pages/forgot.page';
import Login from '../../classes/pages/login.page';
import Header from '../../classes/elements/header.elem'
describe('Elements', () => {

    before(() => {
        Login.openPage()
    })

    it('Header', () => {
        Header.checkPage()
    })

    it('Rating btn', () => {
        Header.checkRatingBtn()
    })


    it('Public game btn', () => {
        Header.checkPublicGameBtn()
    })

    it('Back to Login page btn invisible', () => {
        Header.checkBackToLoginBtnInvisible()
    })


})

describe('Functionality', () => {

    before(() => {
        Login.openPage()
    })

    it('Clicking Rating button redirect', () => {
        Header.clickRatingBtn()
        Header.checkRatingPageUrl()
    })


    it('Rating page is displayed', () => {
        Header.checkRatingPage()
    })

    it('Clicking Public Game redirect', () => {
        Header.clickPublicGameBtn()
        Header.checkPublicGameUrl()

    })

    it('Public game page is displayed', () => {
        Header.checkPublicGamePage()
    })

    it('Back to Login button is displayed in Header', () => {
        Forgot.openPage()
        Header.checkBackToLoginBtn()
    })

    it('Clicking Back to Login button redirect', () => {
        Header.clickBackToLoginBtn()
        Header.checkLoginPageUrl()
    })

    it('Login page is displayed', () => {
        Header.checkLoginPage()
    })


})