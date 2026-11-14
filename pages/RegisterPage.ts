import {Page, Locator} from "@playwright/test"

export class RegisterPage{
    private emailAddress:Locator;
    private name:Locator;
    private signUp:Locator;
    private mrTitle:Locator;
    private mrsTitle:Locator;
    private password:Locator;
    private page:Page;

    constructor(page :Page){
        this.page=page;
        this.name=page.locator("//h2[text()='New User Signup!']/parent::div//input[@placeholder='Name']");
        this.emailAddress=page.locator("//h2[text()='New User Signup!']/parent::div//input[@placeholder='Email Address']");
        this.signUp=page.locator("//h2[text()='New User Signup!']/parent::div//button[text()='Signup']");
        this.mrTitle=page.locator("input[name='title'][value='Mr']");
        this.mrsTitle=page.locator("input[name='title'][value='Mrs']");
        this.password=page.locator("#password");
    
    }

    async clickMr(){
        await this.mrTitle.click();
    }
    async selectDay(day : number){
        await this.page.selectOption('#days',day.toString());
    }
    async selectMonth(month : string){
        await this.page.selectOption('#months',month);
    }
    async selectYear(year : number){
        await this.page.selectOption('#years',year.toString());
    }
    async clickMrs(){
        await this.mrsTitle.click();
    }
    async enterPassword(pwd:string){
        await this.password.fill(pwd);
    }
    async enterName(name : string){
        await this.name.fill(name);
    }

    async enterEmail(email:string){
        await this.emailAddress.fill(email);
    }

    async clickSignUp(){
        await this.signUp.click();
    }
}