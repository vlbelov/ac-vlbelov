import Base from '../base.class';

class Forgot extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            attrPlaceholder: 'placeholder',
            emailPlaceholder: 'Email *',
            btnRemindTxt: 'Remind Password',
            errTextEmptyField: 'Please specify email',
            value: 'value',
            errTextWrongEmail: 'User with this email does not exist',
            trueEmailValue: 'mafplaceqauser@gmail.com',
            successMsgTxt: 'Password reminder sent'
        }
    }

    //element selector getters
    get page() { return $('#forgot-page') }
    get btnRemind() { return $('#btn-remind') }
    get emailField() { return $('#email') }
    get errTxt() { return $('#error-text') }


    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    openPage() {
        browser.url('/forgot');
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
        expect(this.emailField).toBeDisplayed()
    }

    checkBtnRemindPass() {
        expect(this.btnRemind).toBeDisplayed()
    }

    checkForgotUrl() {
        expect(browser).toHaveUrl(this.baseExp.forgotUrl)
    }

    ////////////////////////Elem

    emailPlaceholder() {
        expect(this.emailField).toHaveAttribute(this.exp.attrPlaceholder, this.exp.emailPlaceholder)
    }

    BtnRemindText() {
        expect(this.btnRemind).toHaveText(this.exp.btnRemindTxt)
    }

    ///////////////////////Functionality

    remindBtnClick() {
        (this.btnRemind).click()
    }

    errorTextFieldEmpty() {
        expect(this.errTxt).toHaveText(this.exp.errTextEmptyField)
    }

    enterRandomEmailValue() {
        (this.emailField).setValue(this.exp.value)
    }

    errorTextDisap() {
        (this.errTxt).waitForDisplayed({ reverse: true })
    }

    errorTextEmailIncorrect() {
        expect(this.errTxt).toHaveText(this.exp.errTextWrongEmail)
    }

    enterTrueEmailValue() {
        (this.emailField).setValue(this.exp.trueEmailValue)
    }

    successMsgText() {
        expect(this.errTxt).toHaveText(this.exp.successMsgTxt)
    }
}

export default new Forgot;
