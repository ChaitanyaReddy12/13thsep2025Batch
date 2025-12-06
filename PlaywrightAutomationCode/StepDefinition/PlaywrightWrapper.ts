import { Page } from "@playwright/test";

const playwright = require("playwright")

export default class PlaywrightWrapper {
  [x: string]: any;

  public base: PlaywrightWrapper

    constructor(public page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    
    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);

        //1st way
        await element.isVisible()

        //2nd way

        await element.waitFor({
            state: "visible"
        });

        await element.click();
    }

    // async navigateTo(link: string) {
    //     await Promise.all([
    //         this.page.waitForNavigation(),
    //         this.page.click(link)
    //     ])
    // }

     async waitAndEnterText(locator: string, text : string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.fill(text);
    }

    
     async webelementIsVisible(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.isVisible()
    }

     async scrollToThewebelement(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.scrollIntoViewIfNeeded()

     }

     async hoverToThewebelement(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.hover()

     }

}