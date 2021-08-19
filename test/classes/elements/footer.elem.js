import Base from '../base.class';

class Footer extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results

        }
    }

    //element selector getters
    get page() { return $('#footer') }
    get language() { return $('#footer-links') }
    get copyrText() { return $('#copyright-text') }
    get version() { return $('#version-label') }
    get developInfo() { return $('.ml-2') }
    get develInfoText1() { return $('#deeveloper-prepend') }
    get developInfoLink() { return $('#developer-link') }

    //methods
    checkPage() {
        (this.page).waitForDisplayed();
    }

    checkLang() {
        expect(this.language).toBeDisplayed()
    }

    checkCopyrText() {
        expect(this.copyrText).toBeDisplayed()
    }

    checkVersion() {
        (this.version).waitForDisplayed();
    }

    checkDevelopInfo() {
        expect(this.developInfo).toBeDisplayed()
    }

////////////////////////////////Values
    
    checkLanguageText() {
        expect(this.language).toHaveTextContaining('RU')
    }

    checkCopyrText() {
        expect(this.copyrText).toHaveTextContaining(['© ', 'The Maf Place'])
    }

    checkVersionText() {
        expect(this.version).toHaveTextContaining('Version')
    }

    checkDevelopInfoText() {
        expect(this.develInfoText1).toHaveTextContaining('Website by')
        expect(this.developInfoLink).toHaveTextContaining('React Smart Development')
    }
////////////////////////Functionality
    
    clickLangToggle() {
        (this.language).click()
    }

    checkLangTextEN() {
        expect(this.language).toHaveTextContaining('EN')
    }

    checkLangTextRU() {
        expect(this.language).toHaveTextContaining('RU')
    }

    clickDevelopInfoLink() {
        (this.developInfoLink).click()
    }

    checkUrlAfterRedirect() {
        expect(browser).toHaveUrl('https://www.reactsmart.dev/')
    }
    
   
}

export default new Footer;
