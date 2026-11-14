import { expect, Page } from "@playwright/test";
import {RegisterPage} from "../pages/RegisterPage";
import {LoginPage} from "../pages/LoginPage";
export class RegisterWorkflowPage{

    private registerPage:RegisterPage;
    private loginPage:LoginPage;
    private page:Page;

    constructor(page : Page){
        this.page=page;
        this.registerPage=new RegisterPage(page);
        this.loginPage=new LoginPage(page);
    }

    async userSignup(name:string,email:string){
        await this.loginPage.clickSignUpButton();
        await this.registerPage.enterName(name);
        await this.registerPage.enterEmail(email);
        await this.registerPage.clickSignUp();
    }

    async enterAccountInformation(title:string,pwd:string,day:number,month:string,year:number){
        if(title==='Mr'){
                await this.registerPage.clickMr();
        }else{
             await this.registerPage.clickMrs();
        }
        await this.registerPage.enterPassword(pwd);
        await this.registerPage.selectDay(day);
        await this.registerPage.selectMonth(month);
        await this.registerPage.selectYear(year);

    }
}