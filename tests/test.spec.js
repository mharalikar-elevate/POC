import { test, expect} from "@playwright/test";

test('Navigate on Github', async({page})=>{

    await page.goto("https://github.com/");
    await expect(page.getByRole('link', {name:"Sign In"})).toHaveText("Sign in");
    await page.getByRole('button', {name:'Platform'}).hover({force:true});
    await page.getByRole('link', {name:' Automate any workflow'}).click();
    await expect(page.getByRole('heading', { name: 'Automate your workflow from' })).toBeVisible();

})