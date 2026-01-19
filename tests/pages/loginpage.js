import {Page} from "@playwright/test";

class LoginPage{
 /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.Username = page.getByLabel('Username', {exact:false});
        this.Password = page.getByLabel('Password', {exact:false});
        this.signInLink = page.getByRole('button', {name:"Sign in"});
    }

    async enterUsernameandPassword(username, password){
        await this.Username.fill(username);
        await this.Password.fill(password);
    }

    async clickSignInButton(){
            await this.signInLink.click();
        }
}
module.exports = {LoginPage};