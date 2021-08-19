import Base from '../base.class';

class Header extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            ratingPageUrl: 'http://qa.maf.place/users',
            publicGameUrl: 'http://qa.maf.place/public-game',
        }
    }

    //element selector getters
    get page() { return $('#header') }
    get btnRating() { return $('#btn-all') }
    get btnPublGame() { return $('#btn-game') }
    get btnBackToLogin() { return $('.btn-outline-primary') }
    get ratingPage() { return $('#ratings') }
    get publicGamePage() { return $('#public-game') }
    get loginPage() { return $('#login-page') }
    get userPageButton() { return $('#edit-icon') }
    get logoutButton() { return $('#btn-logout') }
    
    
    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    checkRatingBtn() { 
        expect(this.btnRating).toBeDisplayed()
    }

    checkPublicGameBtn() {
        expect(this.btnPublGame).toBeDisplayed()
    }

    checkBackToLoginBtnInvisible() {
        (this.btnBackToLogin).waitForDisplayed({ reverse: true })
    }

    checkUserPageBtn() {
        expect(this.userPageButton).toBeDisplayed()
    }

    checkLogoutBtn() {
        expect(this.logoutButton).toBeDisplayed()
    }

    checkUserPageBtnNotDisplayed() {
        expect(this.userPageButton).not.toBeDisplayed()
    }

    checkLogoutBtnNotDisplayed() {
        expect(this.logoutButton).not.toBeDisplayed()
    }

///////////////////////Functionality
    
    clickRatingBtn() {
        (this.btnRating).click()
    }

    checkRatingPageUrl() {
        expect(browser).toHaveUrl(this.exp.ratingPageUrl)
    }

    checkRatingPage() {
        expect(this.ratingPage).toBeDisplayed()
    }

    clickPublicGameBtn() {
        (this.btnPublGame).click()
    }

    clickUserPageButton() {
        (this.userPageButton).click()
    }

    clickLogoutButton() {
        (this.logoutButton).click()
    }

    checkPublicGameUrl() {
        expect(browser).toHaveUrl(this.exp.publicGameUrl)
    }

    checkPublicGamePage() {
        expect(this.publicGamePage).toBeDisplayed()
    }

    checkBackToLoginBtn() {
        expect(this.btnBackToLogin).toBeDisplayed()
    }

    clickBackToLoginBtn() {
        (this.btnBackToLogin).click()
    }

    checkLoginPageUrl() {
        expect(browser).toHaveUrl(this.baseExp.loginUrl)
    }

    checkLoginPage() {
        expect(this.loginPage).toBeDisplayed()
    }

}

export default new Header;
