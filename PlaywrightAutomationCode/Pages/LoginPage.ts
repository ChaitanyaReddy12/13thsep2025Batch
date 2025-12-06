
import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../StepDefinition/PlaywrightWrapper"
import { pageFixture } from "../hooks/pageFixture";


export class LoginPage {

    // public base: PlaywrightWrapper

     readonly page: Page 

    constructor(page: Page) {
        //this.page = new PlaywrightWrapper(page);
        this.page = page    
    }

    private Elements = {
        usernameTextbox: "//input[@name='username']",
        passwordTextbox: "//input[@name='password']",
        loginButton: "//button[@type='submit']",
        forgotYourPasswordLink: "//*[text()='Forgot your password? ']",
        orangeHRMLogoUsingGetByAltText: "company-branding",
        orangeHRMLogoUsingCssSelector: ".orangehrm-login-branding"
    }

    async navigateToLoginPage() {
        
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //console.log(pageFixture.page.title())

        //await expect(pageFixture.page).toHaveTitle("OrangeHRM");
    }
    async enterUserName(username: string) {

        // await pageFixture.page.getByPlaceholder("Username").fill(username);

        await pageFixture.page.locator(this.Elements.usernameTextbox).fill(username);

    }
    async enterPassword(Password: string) {
        await pageFixture.page.locator(this.Elements.passwordTextbox).fill(Password);
    }

    async clickLoginButton() {
        // await this.page.waitAndClick(this.Elements.loginButton);
        await pageFixture.page.click(this.Elements.loginButton);
    }

    //1st way

    async verifyLogo() {

        expect(await this.page.getByAltText(this.Elements.orangeHRMLogoUsingGetByAltText)).toBeVisible()
    }

    //2nd way

    // async verifyLogo() {

    //     expect(await this.page.getByAltText("company-branding")).toBeVisible()
    // }

    async clickForgotYourPassword() {
        // await this.page.waitAndClick(this.Elements.forgotYourPasswordLink);

        await this.page.click(this.Elements.forgotYourPasswordLink);
    }

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


}