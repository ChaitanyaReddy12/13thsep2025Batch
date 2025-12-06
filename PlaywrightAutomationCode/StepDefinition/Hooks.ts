import { BeforeAll, AfterAll, After, Before, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { TestData1 } from "../Files/TestData.json"


let page: Page;
let browser: Browser;
let context: BrowserContext;

// export class HooksPage{

    
//     readonly page: Page 

//     constructor(page: Page) {
//         this.page = page    
//     }
// }


import { pageFixture } from "../hooks/pageFixture";

BeforeAll(async function () {

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    console.log("BeforeAll")
   
});

Before(async function () {

    context = await browser.newContext({ 
        recordVideo: { dir: 'test-result/videos' }, 
        viewport: null });

    page = await context.newPage();

    pageFixture.page = page

    //this.page = await browser.newPage();

    console.log("Before")

    // url, username , password and login
});

// After(async function ({ pickle, result }) {

//     if (result?.status === Status.FAILED) {
//         // Screenshots are saved in the directory after the test is completed for each scenario
//         const img = await pageFixture.page.screenshot({ path: `./test-result/ScreenshotsFailed/${pickle.name}.png` });

//         await this.attach(img, 'image/png');

//          // Attach video on failure (if enabled in Playwright config)
//         const videoPath = await pageFixture.page.video()?.path();
//         if (videoPath) {
//           //this.attach(await pageFixture.page.video()?.buffer(), 'video/webm');
//         }
//     }
//     else if (result?.status === Status.PASSED) {
//         // Screenshots are saved in the directory after the test is completed for each scenario
//         const img = await pageFixture.page.screenshot({ path: `./test-result/ScreenshotsPassed/${pickle.name}.png` });        

//         await this.attach(img, 'imagepasssed/png');
//     }
//     console.log("after")
// });

// AfterAll(async function () {

//     //close
//     await page.close();

//     //browser.close/context.close 
//     await browser.close();

//     console.log("afterAll")

//     console.log("==============================")
// });

Given('i launch the OrangeHRM application in chrome browser', async function () {

    await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

     await pageFixture.page.locator("//input[@name='username']").fill("Admin");

      await pageFixture.page.locator("//input[@name='password']").fill("admin123")

    console.log("in background scenario")

});

Given('Enter the username in OrangeHRM {string}', async function (username) {

    await pageFixture.page.locator("//input[@name='username']").fill(username);
    
});

Given('Enter the password in OrangeHRM {string}', async function (password) {

    await pageFixture.page.locator("//input[@name='password']").fill(password);

});

Given('I click on the login button in OrangeHRM', async function () {

    await page.locator("//button[@type='submit']").click();

});

Given('I click on the logout button in OrangeHRM', async function () {

    await this.page.locator("//*[@class='oxd-userdropdown-name']").click();
    await this.page.getByText("Logout").click();
});

Given('Enter the username in OrangeHRM', async function () {
    await this.page.locator("//input[@name='username']").fill("Admin");
    const img = await this.page.screenshot({ path: `./test-result/Screenshots/username.png` });
    await this.attach(img, 'image/png');    
});

Given('Enter the password in OrangeHRM', async function () {
    await this.page.locator("//input[@name='password']").fill("admin123");
    const img = await this.page.screenshot({ path: `./test-result/Screenshots/password.png` });
    await this.attach(img, 'image/png');   
});

Then('i launch the test automation practice url', async function () {

    await this.page.waitForTimeout(3000) // 3 seconds

    console.log("i launch the test automation practice url")

    await this.page.goto("https://testautomationpractice.blogspot.com/")

    //await page.waitForTimeout(10000) // 10 seconds
});

Then('i am reading the data from TestData file1', async function () {

    //2nd set of data

    await this.page.getByPlaceholder('Enter Name').fill(TestData1.Name)

    await this.page.getByPlaceholder('Enter EMail').fill(TestData1.Email)

    await this.page.getByPlaceholder('Enter Phone').fill(TestData1.Phone)

    await this.page.locator('#textarea').fill(TestData1.Address)

    await this.page.locator('.wikipedia-search-input').fill(TestData1.Wikipedia)

});


Then('i close the browser', async function () {

    //await browser.close()
});