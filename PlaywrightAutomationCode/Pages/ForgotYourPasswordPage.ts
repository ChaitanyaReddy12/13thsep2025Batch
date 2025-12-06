
import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../StepDefinition/PlaywrightWrapper"


export class ForgotYourPasswordPage {

      readonly page: Page 

    constructor(page: Page) {
        this.page = page    
    }

    private Elements = {
        usernameTextbox : "//input[@name='username']",
        resetPasswordButton: "//button[@type='submit']",
        cancelButton : "//button[@type='button']",
        errorMessage: "alert"
    }

    async enterUserName() {
        await this.page.getByLabel(this.Elements.usernameTextbox).fill("Livetech");
    }

    async clickCancelButton() {
        await this.page.click(this.Elements.cancelButton);
    }

    async clickResetPasswordButton() {
        await this.page.click(this.Elements.resetPasswordButton);
    }

}