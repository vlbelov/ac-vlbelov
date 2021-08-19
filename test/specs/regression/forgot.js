import Forgot from '../../classes/pages/forgot.page';
describe('Elements', () => {

    before(() => {
        Forgot.openPage();
    })

    it('Logo', () => {
        Forgot.checkLogo()
    })

    it('Email field', () => {
        Forgot.checkEmailField()
    })

    it('Button remind Pass', () => {
        Forgot.checkBtnRemindPass()
    })
})

describe('Elements', () => {

    before(() => {
        Forgot.openPage();
    })

    it('Email placeholder', () => {
        Forgot.emailPlaceholder()
    })

    it('Remind Password button text', () => {
        Forgot.BtnRemindText()
    })

})

describe('Functionality', () => {

    before(() => {
        Forgot.openPage();
    })

    it('Error - Email field is empty', () => {
        Forgot.remindBtnClick()
        Forgot.errorTextFieldEmpty()
    })

    it('Error disapears - input Email', () => {
        Forgot.enterRandomEmailValue()
        Forgot.errorTextDisap()
    })

    it('Error - Email is incorrect', () => {
        Forgot.remindBtnClick()
        Forgot.errorTextEmailIncorrect()
    })

    it('Success message appears if Email is correct', () => {
        Forgot.enterTrueEmailValue()
        Forgot.remindBtnClick()
        Forgot.successMsgText()
    })

    it('User is redirected after the password reminder was sent.', () => {
        Forgot.redirectToLogin
    })

})