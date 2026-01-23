const {LandingPage} = require('../pages/landingpage');
const {LoginPage} = require('../pages/loginpage');
const {HomePage} = require('../pages/homepage')

import {test, expect} from "@playwright/test"

test('Login into Github', async({page})=>{
    const landingPage = new LandingPage(page);
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await landingPage.goTo();
    await landingPage.clickSignIn();
    console.log(process.env.USERNAME +"--username printed--");
    await loginPage.enterUsernameandPassword(process.env.USERNAME, process.env.PASSWORD);
    await loginPage.clickSignInButton();
    await expect(await homePage.getDashboardLabel()).toBeVisible();
    // m2: if used the getter function, don't need to await
})