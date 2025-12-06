import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";


import { expect } from "@playwright/test";


import { pageFixture } from "../hooks/pageFixture";

import {LoginPage} from "../Pages/LoginPage";

// import from "../Pages/LoginPage";
import {ForgotYourPasswordPage} from "../Pages/ForgotYourPasswordPage";

import PlaywrightWrapper from "../StepDefinition/PlaywrightWrapper"

let lp: LoginPage
let fp: ForgotYourPasswordPage;

let pw : PlaywrightWrapper

// let loginpage : LoginPage

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {

    lp = new LoginPage(this.page)

     pw = new PlaywrightWrapper(pageFixture.page);

   await pw.goto(" https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //await this.page.goto(" https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

// Given('User click on the login link', async function () {
//     //await pageFixture.page.locator("//span[text()='Login']").click();
// });

Given('User enter the username as {string}', async function (username) {
    lp = new LoginPage(pageFixture.page);
    fp = new ForgotYourPasswordPage(pageFixture.page);
   await lp.enterUserName("Admin");
//    await fp.clickCancelButton();
// });

await lp.enterUserName(username);
    //await pageFixture.page.locator("input[name='username']").fill();
});

Given('User enter the password as {string}', async function (password) {
    await this.page.locator("input[name='password']").fill(password);
})

When('User click on the login button', async function () {
    await this.page.locator("button[type='submit']").click();
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(2000);
});


// Then('Login should be success', async function () {
//     const user = pageFixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]");
//     await expect(user).toBeVisible();
//     const userName = await user.textContent();
//     console.log("Username: " + userName);
// })

// When('Login should fail', async function () {
//     const failureMesssage = pageFixture.page.locator("div[role='alert']");
//     await expect(failureMesssage).toBeVisible();
// });

When('read test data from excel file {string} and sheet {string}', async function (fileName: string, sheetName: string) {
    pw = new PlaywrightWrapper(pageFixture.page);
    const testData = await pw.readExcelData(fileName, sheetName);
    console.log("Test Data from Excel: ", testData  );
});

Then('Validate the data read from excel file', async function () {
    // Add your validation logic here
    console.log("Validating data read from excel file...");
} );
