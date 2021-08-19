import Base from '../base.class';

class Login extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            emailPlaceholder: 'Email *',
            passPlaceholder: 'Password *',
            loginBtnTxt: 'Login',
            forgotBtnTxt: 'Remind Password',
            attrPlaceholder: 'placeholder',
            errTxtEmptyField: 'Please specify email and password',
            errTxtWrongEmail: 'User with this email does not exist',
            errTxtWrongPass: 'Password is incorrect',
            value: 'value',
            trueEmailValue: 'mafplaceqauser@gmail.com',
            loginUrl: "http://qa.maf.place/"
        }
    }

    //element selector getters
    get page() { return $('#login-page') }
    get email() { return $('#username') }
    get pass() { return $('#pass') }
    get loginBtn() { return $('#btn-login') }
    get forgotBtn() { return $('#btn-forgot') }
    get errTxt() { return $('#error-text') }
    get forgotPage() { return $('#forgot-page') }
    
   
    
    //methods$
    checkPage() {
        this.page.waitForDisplayed();
    }

    openPage() {
        browser.url('/');
    }

    redirectToLogin() {
        expect(browser).toHaveUrl(this.baseExp.loginUrl, { wait: 4000 })
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkHeader() {
        expect(this.header).toBeDisplayed()
    }

    checkFooter() {
        expect(this.footer).toBeDisplayed()
    }

    checkEmailField() {
        expect(this.email).toBeDisplayed()
    }

    checkPassField() {
        expect(this.pass).toBeDisplayed()
    }

    checkLoginBtn() {
        expect(this.loginBtn).toBeDisplayed()
    }

    checkForgotBtn() {
        expect(this.forgotBtn).toBeDisplayed()
    }

    emailPlaceholder() {
        expect(this.email).toHaveAttribute(this.exp.attrPlaceholder, this.exp.emailPlaceholder)
    }

    passPlaceholder() {
        expect(this.pass).toHaveAttribute(this.exp.attrPlaceholder, this.exp.passPlaceholder)
    }

    loginBtnText() {
        expect(this.loginBtn).toHaveText(this.exp.loginBtnTxt)
    }

    forgotBtnText() {
        expect(this.forgotBtn).toHaveText(this.exp.forgotBtnTxt)
    }

    clickLoginBtn() {
        this.loginBtn.click()
    }

    clickForgotBtn() {
        this.forgotBtn.click()
    }

    errTextEmptyField() {
        expect(this.errTxt).toHaveText(this.exp.errTxtEmptyField)
    }

    errTextWrongEmail() {
        expect(this.errTxt).toHaveText(this.exp.errTxtWrongEmail)
    }

    errTextWrongPass() {
        expect(this.errTxt).toHaveText(this.exp.errTxtWrongPass)
    }

    setValueEmail(e) {
        (this.email).setValue(e)
    }

    setValuePass(e) {
        (this.pass).setValue(e)
    }

    ErrorDisapear() {
        (this.errTxt).waitForDisplayed({ reverse: true })
    }

    setValueTrueEmail() {
        (this.email).setValue(this.exp.trueEmailValue)
    }

    checkLoginUrl() {
        expect(browser).toHaveUrl(this.baseExp.loginUrl)
    }

}

export default new Login;