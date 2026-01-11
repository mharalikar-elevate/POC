const {HomePage} = require('../pages/homepage');
import {test, expect} from "@playwright/test"

test('Navigating on Home Page', async({page})=>{

    const homePage = new HomePage(page);
    await homePage.goTo();
    expect(await homePage.getButtonContentHomepage(), "Sign in");

})