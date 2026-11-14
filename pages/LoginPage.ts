import {Page , Locator} from '@playwright/test';

export class LoginPage{
    page:Page;
    userName:Locator;
    passWord:Locator;
    signUp:Locator;
    logOutButton:Locator;
    loginButton:Locator;


    constructor(page: Page){
        this.page=page;
        this.signUp=page.getByRole('link',{name:' Signup / Login'});
        this.userName=page.locator("//h2[text()='Login to your account']/parent::div//input[@placeholder='Email Address']");
        this.passWord=page.locator("//h2[text()='Login to your account']/parent::div//input[@placeholder='Password']");
        this.loginButton=page.locator("//h2[text()='Login to your account']/parent::div//button[text()='Login']");
        this.logOutButton=page.locator("//a[normalize-space()='Logout']");
    }

    async navigateUrl(url:string){
        await this.page.goto(url);
    }
    async clickSignUpButton(){
        await this.signUp.click();
    }
    async enterUsername(username:string){
        await this.userName.fill(username);
    }

    async enterPassword(password:string){
        await this.passWord.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    get verifyLogOutButton(){
        return this.page.locator("//a[normalize-space(text())='Logout']");
    }

    get loginPageErrorMessage(){
        return this.page.getByText('Your email or password is incorrect!');
    }

    async clickLogOutButton(){
        await this.logOutButton.click();
    }
     get verifyLoginButton(){
        return this.page.getByRole('link',{name:'  Signup / Login'});
    }
}