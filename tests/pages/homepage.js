import {Page} from "@playwright/test";

class HomePage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.dashboardLabel = page.locator("//span[text()='Dashboard']");
    }

    async getDashboardLabel(){
       return await this.dashboardLabel;
    }
}
module.exports = {HomePage};