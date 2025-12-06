
import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";

import { LoginPage } from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage"

import { TestData1 } from "../Files/TestData.json"

//import {Credentials } from "../Files/TestData.json"

let loginpage: LoginPage
let homepage: HomePage
let adminpage: AdminPage
let pimpage: PIMPage
let forgotYourPasswordPage: ForgotYourPasswordPage

setDefaultTimeout(60 * 1000);

let page: {
    [x: string]: any;
    locator: any; goto: (arg0: string) => any; getByLabel: (arg0: string) => string[]; getByRole: (arg0: string, arg1: { name: string; }) => {
        [x: string]: any; (): any; new(): any; click: { (): any; new(): any; };
    }; getByText: (arg0: string) => any;
}, browser: { newContext: (arg0: { viewport: null; }) => any; close: () => any; };

import { pageFixture } from '../hooks/pageFixture';
import { AdminPage } from "../Pages/AdminPage";
import { ForgotYourPasswordPage } from "../Pages/ForgotYourPasswordPage";
import { PIMPage } from "../Pages/PImPage";

const { chromium, expect, test } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);


Given('i launch the orangeHRM browser', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    const context = await browser.newContext({ viewport: null });

    page = await context.newPage();


});



Given('i launch the application OrangeHRM', async function () {

    loginpage = new LoginPage(pageFixture.page)

    await loginpage.navigateToLoginPage();
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // await expect(this.page).toHaveTitle("OrangeHRM");
});

Given('i provide the credentails', async function () {

    loginpage = new LoginPage(pageFixture.page)

    //await loginpage.enterUserName(Credentials.Username);

     //await loginpage.enterPassword(Credentials.Password);
    
     await loginpage.clickLoginButton();
});

Given('Enter the username as {string}', async function (string) {

    loginpage = new LoginPage(pageFixture.page)

    await page.locator("//input[@name='username']").fill(TestData1.Name);

    //   await loginpage.enterUserName(TestAutomationPractice.Username);

});

Given('verify homepage tabs', async function (string) {
    
    homepage = new HomePage(pageFixture.page)

    await homepage.clickAdmin()
});

Given('login OrangeHRM', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //   await expect(this.page).toHaveTitle("OrangeHRM");

    await page.waitForTimeout(2000)

    loginpage = new LoginPage(pageFixture.page)

    await loginpage.enterUserName(TestData1.Name)

    await page.locator("//input[@name='username']").fill(TestData1.Name);

});

Then('Verify Header Tabs in the admin page', async function () {

    adminpage = new AdminPage(pageFixture.page)

    await adminpage.verifyHeaderTabs()

    await adminpage.enterTextToTheUsernameTextBox(TestData1.usernameText)

    await adminpage.selectUserRoleOption(TestData1.userrorleoption)

});


Then('i click on Admin Tab and verify username', async function () {

    homepage = new HomePage(pageFixture.page)

    await homepage.clickAdmin();

    adminpage = new AdminPage(pageFixture.page)

    //await adminpage.enterTextToTheUsernameTextBox(Credentials.Username);

    await adminpage.clickSearchButton()

    await adminpage.clickAddButton()

    pimpage = new PIMPage(pageFixture.page)

    pimpage.verifyHeaderTabs()
});

