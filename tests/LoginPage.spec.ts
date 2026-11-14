import {test , expect} from '../fixtures/loginFixture.ts';
import {LoginPageWorkflow} from '../workflows/LoginPageWorkflow.ts'; 
test.skip('login page ', async ({loggedInPage})=>{
await expect(loggedInPage.getByRole('link',{name:' Logout'})).toBeVisible();

})

test('Validate login page with valid credentials @login1', async({page})=>{
 const loginpageWorkFlow= new LoginPageWorkflow(page);
 await loginpageWorkFlow.navigateToUrl('https://www.automationexercise.com/');
 await loginpageWorkFlow.loginApplication('pavan112@gmail.com','pavan112');
await loginpageWorkFlow.verifySuccessfulLogin();
})

test('Validate login page with Invalid email and password @login1', async({page})=>{
 const loginpageWorkFlow= new LoginPageWorkflow(page);
 await loginpageWorkFlow.navigateToUrl('https://www.automationexercise.com/');
 await loginpageWorkFlow.loginApplication('pavanpav23@gmail.com','pavan112');
await loginpageWorkFlow.ValidateLoginPageErrorMessage('Your email or password is incorrect');
})

test('Validate login page with Valid email, invalid password @login', async({page})=>{
 const loginpageWorkFlow= new LoginPageWorkflow(page);
 await loginpageWorkFlow.navigateToUrl('https://www.automationexercise.com/');
 await loginpageWorkFlow.loginApplication('pavan112','Pkrb');
await loginpageWorkFlow.ValidateLoginPageErrorMessage('Your email or password is incorrect');
})

test('Validate Logout after successful login @login', async({page})=>{
 const loginpageWorkFlow= new LoginPageWorkflow(page);
 await loginpageWorkFlow.navigateToUrl('https://www.automationexercise.com/');
 await loginpageWorkFlow.loginApplication('pavan112','pavan112');
 await loginpageWorkFlow.ClickLogOutButton();
 await loginpageWorkFlow.ValidateLoginPage('Login');
})