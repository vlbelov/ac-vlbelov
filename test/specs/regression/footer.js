import Login from '../../classes/pages/login.page';
import Footer from '../../classes/elements/footer.elem'
describe('Elements', () => {

    before(() => {
        Login.openPage();
    })

    it('Footer', () => {
        Footer.checkPage()
    })

    it('Language toggle', () => {
        Footer.checkLang()
    })

    it('Copyright', () => {
        Footer.checkCopyrText()
    })

    it('Version', () => {
        Footer.checkVersion()
    })

    it('Developer info', () => {
        Footer.checkDevelopInfo()
    })


})

describe('Values', () => {

    before(() => {
        Login.openPage();
    })

    it('Language toggle value', () => {
        Footer.checkLanguageText()
    })

    it('The copyright text', () => {
        Footer.checkCopyrText()
    })

    it('Version contains', () => {
        Footer.checkVersionText()
    })

    it('Developer info', () => {
        Footer.checkDevelopInfoText()
    })

})

describe('Functionality', () => {

    before(() => {
        Login.openPage();
    })

    it('Clicking RU changes the toggle to EN', () => {
        Footer.clickLangToggle()
        Footer.checkLangTextEN()
    })


    it('Clicking EN changes the toggle to RU', () => {
        Footer.clickLangToggle()
        Footer.checkLangTextRU()
    })

    it('Clicking React Smart Development redirect', () => {
        Footer.clickDevelopInfoLink()
        Footer.switchTab('ReactSmart.Dev')
        Footer.checkUrlAfterRedirect()
    })


})