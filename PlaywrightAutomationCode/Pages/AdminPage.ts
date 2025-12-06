
import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../StepDefinition/PlaywrightWrapper"
import { pageFixture } from "../hooks/pageFixture";


export class AdminPage {

    readonly page: Page 

    constructor(page: Page) {
        this.page = page    
    }

    private Elements = {
        headerTabs : ".oxd-topbar-body-nav-tab-item",
        usernameTextbox: "//input[@class='oxd-input oxd-input--focus']",
        userRoleDropdown : "//*[@class='oxd-select-text oxd-select-text--focus']",
        searchButton:"//button[@type='submit']",
        addButton:"//button[@class='oxd-button oxd-button--medium oxd-button--secondary']"
    }

    async verifyHeaderTabs() {

        //1st way
        
        var headerTabsCount = await this.page.locator(this.Elements.headerTabs).all()

        for (let i =0; i< headerTabsCount.length ; i++){

            console.log(headerTabsCount[i].innerText())
        }

        //2nd way

        var headerTabsCount1 = await this.page.locator(this.Elements.headerTabs).allInnerTexts()

        for (let i =0; i< headerTabsCount1.length ; i++){

            console.log(headerTabsCount1[i])
        }
    }

    async verifyTabsInTheHeaders() {

        await expect(this.page.locator("//span[text()='User Management ']")).toBeVisible()       
    }

    async enterTextToTheUsernameTextBox1(text : string) {

        //1st way: if the user wants to pass the data statically 

        await this.page.locator(this.Elements.usernameTextbox).fill("Hitesh");

        //2nd way: if the user wants to pass the data dynamically from extra resources like feature file or json files 

        await this.page.locator(this.Elements.usernameTextbox).fill(text);
    }

      async selectUserRoleOption(text : string) {

        await this.page.locator(this.Elements.userRoleDropdown).selectOption(text)
    }

    async enterTextToTheUsernameTextBox(text : string) {

        await pageFixture.page.locator(this.Elements.usernameTextbox).fill(text);
    }

    async clickSearchButton(){

        await pageFixture.page.locator(this.Elements.searchButton).click()
    }

     async clickAddButton(){

        await pageFixture.page.locator(this.Elements.addButton).click()
    }

}