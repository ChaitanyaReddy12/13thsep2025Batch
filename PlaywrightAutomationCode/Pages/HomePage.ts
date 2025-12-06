
import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../StepDefinition/PlaywrightWrapper"
import { pageFixture } from "../hooks/pageFixture";


export default class HomePage {
    
    readonly page: Page 

    constructor(page: Page) {
        this.page = page    
    }

    private Elements = {
        searchTab: "Search",
        searchResult:'.oxd-text.oxd-text--span.oxd-main-menu-item--name',
        adminTab: "//*[text()='Admin']",
        pimTab: "//*[text()='PIM']",
        leaveTab: "//*[text()='Leave']",
        timeTab: "//*[text()='Time']",
        recruitmentTab: "//*[text()='Recruitment']",
        myInfoTab: "//*[text()='//*[text()='My Info']']",
        performanceTab: "//*[text()='Performance']",
        DashboardTab: "//*[text()='Dashboard']",
        directoryTab: "//*[text()='Directory']",
        maintenanceTab: "//*[text()='Maintenance']",
        claimTab: "//*[text()='Claim']",
        buzzTab: "//*[text()='Buzz']",
        upgradeButton : 'oxd-glass-button.orangehrm-upgrade-button',
        userDropdown:'oxd-userdropdown-name',
        aboutTab:'oxd-userdropdown-link',
        supportTab:'oxd-userdropdown-link',
        changePasswordTab:'oxd-userdropdown-link',
        logoutTab:'oxd-userdropdown-link',
        questionIcon:'oxd-icon.bi-question-lg'
    }

    async clickSearch(tab: string) {

        await this.page.getByPlaceholder(this.Elements.searchTab).fill("tab")
        expect(await this.page.locator(this.Elements.searchResult)).toBeVisible()
    }

    async clickAdmin() {
        await pageFixture.page.locator(this.Elements.adminTab).click()
        //expect(await this.page.url).toContain("admin")
    }

    async clickpim() {

        await this.page.getByPlaceholder(this.Elements.pimTab).click()
        expect(await this.page.url).toContain("pim")
    }

    async clickLeave() {

        await this.page.getByPlaceholder(this.Elements.leaveTab).click()
        expect(await this.page.url).toContain("leave")
    }

    async clickTime() {

        await this.page.getByPlaceholder(this.Elements.timeTab).click()
        expect(await this.page.url).toContain("time")
    }

    async verifyLogo() {

        expect(await this.page.getByAltText("client brand banner")).toBeVisible()
    }

    async verifyTabs() {
        expect(await this.page.getByPlaceholder(this.Elements.searchTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.adminTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.pimTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.leaveTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.timeTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.recruitmentTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.myInfoTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.performanceTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.DashboardTab).first()).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.directoryTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.maintenanceTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.claimTab)).toBeVisible()
        expect(await this.page.getByPlaceholder(this.Elements.buzzTab)).toBeVisible()
    }


}