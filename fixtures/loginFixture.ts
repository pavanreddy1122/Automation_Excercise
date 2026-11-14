import {test as base, expect, type Page} from '@playwright/test'

type MyFixture={
    loggedInPage:Page;
}

export const test=base.extend<MyFixture>({
loggedInPage: async({page},use)=>{
await page.goto('https://www.automationexercise.com/');
await page.getByRole('link',{name:' Signup / Login'}).click();
await page.locator("//h2[text()='Login to your account']/parent::div//input[@placeholder='Email Address']").fill("pavan112");
await page.locator("//h2[text()='Login to your account']/parent::div//input[@placeholder='Password']").fill("pavan112");
await page.locator("//h2[text()='Login to your account']/parent::div//button[text()='Login']").click();

await use(page);
}


})

export {expect};