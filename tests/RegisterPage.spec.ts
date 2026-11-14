import {test} from '@playwright/test';
import { RegisterWorkflowPage } from "../workflows/RegisterWorkflowPage";
import {LoginPageWorkflow} from "../workflows/LoginPageWorkflow";

test('Verify successful user registration with valid details @Register',async ({page})=>{
const loginPageWorkflow = new LoginPageWorkflow(page);
const registerWorkflowPage = new RegisterWorkflowPage(page);
await loginPageWorkflow.navigateToUrl("https://www.automationexercise.com/");
await registerWorkflowPage.userSignup('kukuku','kukuku@gmail.com');
await registerWorkflowPage.enterAccountInformation('Mr','kukuku',14,'July',2001);



})

