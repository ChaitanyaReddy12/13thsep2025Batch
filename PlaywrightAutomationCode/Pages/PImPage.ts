
import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../StepDefinition/PlaywrightWrapper"
import { pageFixture } from "../hooks/pageFixture";


export class PIMPage {

    readonly page: Page 

    constructor(page: Page) {
        this.page = page    
    }

    private Elements = {
        
    }

    async verifyHeaderTabs() {

    }

    

}