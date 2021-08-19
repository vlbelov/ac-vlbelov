import Login from '../../classes/pages/login.page';
describe('Base', () => {

    before(() => {
        Login.openPage()
    })

    it('Page title', () => {
        Login.checkTitle()
    })

    it('Page URL', () => {
        expect(browser).toHaveUrl('http://qa.maf.place/')
    })

})