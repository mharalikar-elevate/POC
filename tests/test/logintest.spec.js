const {HomePage} = require('../pages/homepage');
const {LoginPage} = require('../pages/loginpage');

import {test, expect} from "@playwright/test"

test('Login into Github', async({page})=>{
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await homePage.goTo();
    await homePage.clickSignIn();
    await loginPage.enterUsernameandPassword();
    await loginPage.clickSignInButton();
    //expect(await homePage.getButtonContentHomepage(), "Sign in");
})