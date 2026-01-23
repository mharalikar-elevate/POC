const {LandingPage} = require('../pages/landingpage');
import {test, expect} from "@playwright/test"

test('Navigating on Home Page', async({page})=>{
    const landingPage = new LandingPage(page);
    await landingPage.goTo();
    expect(await landingPage.getButtonContentHomepage(), "Sign in");
})