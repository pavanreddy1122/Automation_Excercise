import {expect, Page} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.ts'
export class LoginPageWorkflow {

    loginPage : LoginPage;

    constructor(page :Page){
        this.loginPage=new LoginPage(page);
    }

    async navigateToUrl(url:string){
        await this.loginPage.navigateUrl(url);
    }

    async loginApplication(username:string, password:string){
        await this.loginPage.clickSignUpButton();
        await this.loginPage.enterUsername(username);
        await this.loginPage.enterPassword(password);
        await this.loginPage.clickLoginButton();

    }

    async verifySuccessfulLogin(){
        await expect(this.loginPage.verifyLogOutButton).toBeVisible();
    }

    async ValidateLoginPageErrorMessage(errorMessage : string){
        await expect(this.loginPage.loginPageErrorMessage).toContainText(errorMessage);
    }

    async ClickLogOutButton(){
        await this.loginPage.clickLogOutButton();
    }

    async ValidateLoginPage(login:string){
        await expect(this.loginPage.verifyLoginButton).toContainText(login);
    }
}