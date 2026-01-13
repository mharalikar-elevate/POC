import {Page} from "@playwright/test";

class HomePage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.signInLink = page.getByRole('link', {name:"Sign In"});
    }

    async goTo(){
        await this.page.goto("https://github.com/")
    }

    async getButtonContentHomepage(){
        await this.signInLink.innerText();
    }
}
module.exports = {HomePage};