
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, expect, firefox, webkit } from 'playwright/test';

import { Page, Browser } from 'playwright';

import {TestData1, TestData2, TestData3} from "../Files/TestData.json"

let page: Page, browser: Browser;

//let filepath= "https://www.//docmentshubanji.xls"

setDefaultTimeout(30 * 1000) // 30000 milliseconds = 30 seconds

Given('i am launching the browser', async function () {

    console.log("i am launching the browser")

    browser = await chromium.launch({

        headless: false,
        args: ['--start-maximized']

    });

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage();

});

Given('i am launching the firefox browser', async function () {

    console.log("i am launching the firefox browser")

    browser = await firefox.launch({

        headless: false,
        args: ['--start-maximized']

    });

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage();

});

Given('i am launching the webkit browser', async function () {

    console.log("i am launching the webkit browser")

    browser = await webkit.launch({

        headless: false,
        args: ['--start-maximized']

    });

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage();

});

Given('i am launching the headless browser', async function () {

    console.log("i am launching the headless browser")

    browser = await chromium.launch({

        headless: true,
        args: ['--start-maximized']

    });

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage();

});


Then('I launch the URL', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});

When('I enter username and password', async function () {


});

When('I click on the login button', async function () {


});

Then('I close the browser', async function () {

    await browser.close()

});

Then('i launch the test automation practice url', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

});


Then('i verify Playwright Locators', async function () {

    //syntax: Await page.getByPlaceholder(“attribute value of the placeholder attributename”).Methods()

    await page.getByPlaceholder('Enter Name').fill('Aswini')

    await page.getByPlaceholder('Enter EMail').fill('qt@gmail.com')

    await page.getByText('START').click()

    await page.getByText('STOP').click()

    //await page.getByRole('type of the web element liem checkbox, radio button, button',{name:'text of the web element'}).click()

    await page.getByRole('button', { name: 'START' }).click()

    await page.getByRole('button', { name: 'STOP' }).click()

    await page.getByRole('checkbox', { name: 'Sunday' }).scrollIntoViewIfNeeded()

    await page.getByRole('checkbox', { name: 'Sunday' }).click()

    //await page.getByRole('radio',{name:'Male'}).click()
});

Then('i verify Playwright Locators2', async function () {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    await page.getByAltText('ParaBank').click()

    await page.getByTitle('ParaBank').click()

});

Then('i verify Playwright Locators3', async function () {

    await page.goto('https://login.salesforce.com/')

    await page.getByLabel('Username').fill('aviraj')

    await page.getByLabel('Password').fill('shubangi')

});

Then('i verify xpath and css selector', async function () {

    // absoulte xpath

    // syntax: await page.locator(‘absoulte xpath’).methods()

    //await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]').fill('aviraj')

    // relative xpath

    // syntax: await page.locator('relative' xpath’).methods()

    //1st way

    await page.locator("//*[@id = 'name']").fill('Akhilesh')

    await page.locator("//*[@id = 'name']").clear()

    //2nd way

    await page.locator("//input[@id = 'name']").fill('dia')

    //css selector

    await page.locator("input[id = 'email']").fill('wafa')

    //# means id attribute name after that attribute value of teh id we nned to provide

    await page.locator("#phone").fill('8989898990')

    //. means class attribute name after that attribute value of teh id we nned to provide

    await page.locator(".wikipedia-search-input").fill('8989898990')
});


Then('i verify xpath methods', async function () {

    console.log("===================contains method=================")

    //1st way

    console.log("===================using partial attribute value=================")

    await page.locator("//*[contains(@id,'area')]").fill("hyderabad")

    //2nd way

    console.log("===================using complete attribute value=================")

    await page.locator("//*[contains(@id,'textarea')]").fill("bangalore")

    //3rd way

    console.log("===================using tagname and  attribute value=================")

    await page.locator("//textarea[contains(@id,'textarea')]").fill("Chennai")

    console.log("===================srarts with method=================")

    //1st way

    console.log("===================using partial attribute value=================")

    await page.locator("//*[starts-with(@id,'text')]").type("hyderabad")

    //2nd way

    console.log("===================using complete attribute value=================")

    await page.locator("//*[starts-with(@id,'textarea')]").fill("bangalore")

    //3rd way

    console.log("===================using tagname and  attribute value=================")

    await page.locator("//textarea[starts-with(@id,'textarea')]").fill("Chennai")

    console.log("===================text method=================")

    //1st way

    let text = await page.locator("//*[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("text of the web element in 1st way is :", text)

    //2nd way

    text = await page.locator("//span[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("text of the web element in 2nd way is :", text)

    //3rd way

    text = await page.locator("//span[contains(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("text of the web element in 3rd way is :", text)

    //4th way

    text = await page.locator("//span[starts-with(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("text of the web element in 4th way is :", text)

    /*===================text method=================
text of the web element in 1st way is : For Selenium, Cypress & Playwright
text of the web element in 2nd way is : For Selenium, Cypress & Playwright
text of the web element in 3rd way is : For Selenium, Cypress &amp; Playwright
text of the web element in 4th way is : For Selenium, Cypress &amp; Playwright*/

    console.log("===================And method=================")

    await page.locator('//input[@type="text" and @placeholder="Enter Name"]').fill('aswini')

    text = await page.locator("//*[@class='title' and text()='Alerts & Popups']").innerText()

    console.log("text of the alerts and popups is :", text) //Alerts & Popups

    console.log("===================or method=================")

    const orElementsCount = await page.locator("//*[@class='title' or text()='Alerts & Popups']").all()

    console.log("orElementsCount is :", orElementsCount.length) //orElementsCount is : 17
});

Then('i verify xpath axes', async function () {

    console.log("===================parent method=================")

    const parentCount = await page.locator("//*[ text()='Alerts & Popups']//parent::div").all()

    console.log("parentCount is :", parentCount.length) //parentCount is : 1

    console.log("===================ancestor method=================")

    const ancestorCount = await page.locator("//*[ text()='Alerts & Popups']//ancestor::div").all()

    console.log("ancestorCount is :", ancestorCount.length) //ancestorCount is : 13

    console.log("===================preceding method=================")

    const precedingCount = await page.locator("//*[ text()='Alerts & Popups']//preceding::div").all()

    console.log("precedingCount is :", precedingCount.length) //precedingCount is : 158

    console.log("===================child method=================")

    const childCount = await page.locator("//div[@class='form-group']//child::label[@for='textbox']").all()

    console.log("childCount is :", childCount.length) //childCount is : 3

    console.log("===================descendant method=================")

    const descendantCount = await page.locator("//div[@class='form-group']//descendant::label[@for='textbox']").all()

    console.log("descendantCount is :", descendantCount.length) //descendantCount is : 3

    console.log("===================following method=================")

    const followingCount = await page.locator("//div[@class='form-group']//following::input").all()

    console.log("followingCount is :", followingCount.length) //followingCount is : 32

    console.log("===================following-sibling method=================")

    ////div[@class='form-group']//following-sibling::label//following-sibling::input

    await page.locator("//input[@id='field1']//following-sibling::input").scrollIntoViewIfNeeded()

    const followingSiblingCount = await page.locator("//input[@id='field1']//following-sibling::input").all()

    console.log("followingSiblingCount is :", followingSiblingCount.length) //followingSiblingCount is : 1

    await page.locator("//input[@id='field1']//following-sibling::input").fill("Happy Sunday")
});


Then('i launch the swiggy application', async function () {

    await page.goto("https://www.jazzpharma.com/");
});



// Then('i verify webcalendar dynamically', async function () {

//     await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

//     let datePicker = await page.locator("//input[@id='datepicker']")

//     if (datePicker.isVisible()) {

//         console.log("datePicker is displayed on the webpage");

//         await page.locator("//input[@id='datepicker']").click();

//         let calendarTable = await page.locator(".ui-datepicker-calendar");

//         if (calendarTable.isVisible()) {

//             console.log("calendarTable is displayed on the webpage");

//             let rows = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr").all();

//             console.log(" rows count is :" + rows.length);

//             if (rows.length > 0) {

//                 console.log("calendar have rows");

//                 for (let i = 1; i <= rows.length; i++) {

//                     let columns = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td").all();

//                     console.log(" columns count is :" + columns.length);

//                     if (columns.length > 0) {

//                         console.log("calendar have columns");

//                         for (let j = 1; j <= columns.length; j++) {

//                             let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]");

//                             let actualDate1 = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]").innerText();

//                             let expectedDate = "30";

//                             if (actualDate1 == expectedDate) {

//                                 console.log("date :" + actualDate1
//                                     + " is displayed in the calendar row number " + i
//                                     + " and column number is: " + j);

//                                 actualDate.click();
//                             }
//                         }

//                     } else {

//                         console.log("calendar doesn't have columns");
//                     }
//                 }

//             } else {

//                 console.log("calendar doesn't have rows");
//             }
//         }
//         else {
//             console.log("calendarTable is not displayed on the webpage");
//         }
//     }
//     else {
//         console.log("datePicker is not displayed on the webpage");
//     }
// });

Then('I verify the playwright methods part1', async function () {

    console.log("====================to reload method web page=================")

    await page.reload()

    console.log("====================to click the web element=================")

    await page.getByText('New Tab').click()

    console.log("====================to go to the previous tab=================")

    await page.bringToFront()

    await page.locator("//button[text()='START']").click()

    console.log("====================to enter text to the textbox=================")

    await page.getByPlaceholder('Enter Name').fill('quality')

    await page.locator(".wikipedia-search-input").type('playwright')

    console.log("====================to get more than one web element at a time=================")

    var elementsCount = await page.locator("//*[@type='text']").all();

    console.log("elementsCount is: ", elementsCount.length) //elementsCount is : 13

    console.log("====================to get the title of the web page=================")

    var title = await page.title()

    console.log("title of the web page is :", title) //title of the web page is : Automation Testing Practice

    console.log("====================to scroll to the respective web element=================")

    await page.locator('#field1').scrollIntoViewIfNeeded()

    console.log("====================to clear the text in the web element=================")

    await page.locator('#field1').clear()

    await page.locator('#field1').fill('Saturday')
});

Then('I verify the playwright methods part2', async function () {

    console.log("====================to get the text of more than one web element=================")

    var textofTheWebElementCount = await page.locator("//*[@class='title']").allInnerTexts()

    console.log("textofTheWeElementCount is: ", textofTheWebElementCount.length) //textofTheWeElementCount is : 17

    console.log("==============for loops====================")

    for (let i = 0; i < textofTheWebElementCount.length; i++) {

        console.log(textofTheWebElementCount[i])
    }

    /*Automation Testing Practice
Upload Files
Static Web Table
Dynamic Web Table
Pagination Web Table
Tabs
Dynamic Button
Alerts & Popups
Mouse Hover
Double Click
Drag and Drop
Slider
SVG Elements
Scrolling DropDown
Labels And Links
Form
ShadowDOM*/

    console.log("===================to return the web element text =================")

    //1st way

    let text = await page.locator("//*[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("text of the web element in 1st way is :", text)

    //2nd way

    text = await page.locator("//span[text()='For Selenium, Cypress & Playwright']").innerText()

    console.log("text of the web element in 2nd way is :", text)

    //3rd way

    text = await page.locator("//span[contains(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("text of the web element in 3rd way is :", text)

    //4th way

    text = await page.locator("//span[starts-with(text(),'For Selenium, Cypress & Playwright')]").innerHTML()

    console.log("text of the web element in 4th way is :", text)

    /*text of the web element in 1st way is : For Selenium, Cypress & Playwright
text of the web element in 2nd way is : For Selenium, Cypress & Playwright
text of the web element in 3rd way is : For Selenium, Cypress &amp; Playwright
text of the web element in 4th way is : For Selenium, Cypress &amp; Playwright*/

    console.log("====================to get the text of more than one web element in 2nd way=================")

    var textofTheWebElementCount = await page.locator("//*[@class='title']").allTextContents()

    console.log("textofTheWeElementCount is: ", textofTheWebElementCount.length) //textofTheWeElementCount is : 17

    console.log("==============for loops====================")

    for (let i = 0; i < textofTheWebElementCount.length; i++) {

        console.log(textofTheWebElementCount[i])
    }

    /*Automation Testing Practice
Upload Files
Static Web Table
Dynamic Web Table
Pagination Web Table
Tabs
Dynamic Button
Alerts & Popups
Mouse Hover
Double Click
Drag and Drop
Slider
SVG Elements
Scrolling DropDown
Labels And Links
Form
ShadowDOM*/


});

Then('I verify the playwright methods part3', async function () {

    console.log("====================Hidden=================")

    let hidden = await page.locator(".wikipedia-search-input").isHidden()

    console.log("hidden status is :", hidden) //hidden status is : false

    if (hidden == false) {

        await page.locator(".wikipedia-search-input").fill('testing')
    }

    console.log("====================Visible=================")

    let visible = await page.getByPlaceholder("Enter Name").isVisible()

    console.log("visible status is :", visible) //hidden status is :  true

    if (visible == true) {

        await page.getByPlaceholder("Enter Name").fill('Viswambar')
    }

    console.log("====================Disabled=================")

    let disabled = await page.getByPlaceholder("Enter EMail").isDisabled()

    console.log("disabled status is :", disabled) //disabled status is : false

    if (disabled == false) {

        await page.getByPlaceholder("Enter EMail").fill('testing@gmail.com')
    }

    console.log("====================Enabled=================")

    let enabled = await page.getByPlaceholder("Enter Phone").isEnabled()

    console.log("enabled status is :", enabled) //enabled status is : true

    if (enabled == true) {

        await page.getByPlaceholder("Enter Phone").fill('8908908900')
    }

    console.log("====================editable=================")

    let editable = await page.locator("#textarea").isEditable()

    console.log("editable status is :", editable) //enabled status is : true

    if (editable == true) {

        await page.locator("#textarea").fill('Hitech city')
    }

    console.log("====================checked=================")

    await page.locator('#saturday').scrollIntoViewIfNeeded()

    let checked = await page.locator('#saturday').isChecked()

    console.log("checked status is :", checked) //enabled status is : false

    if (checked == false) {

        //1st way

        //await page.locator('#saturday').click()

        //2nd way

        await page.locator('#saturday').setChecked(true)

        checked = await page.locator('#saturday').isChecked()

        console.log("checked status is :", checked) //enabled status is : true
    }

    if (checked == true) {

        //1st way

        //await page.locator('#saturday').click()

        //2nd way

        await page.locator('#saturday').uncheck()

        checked = await page.locator('#saturday').isChecked()

        console.log("checked status is :", checked) //enabled status is : false

    }

    let url = await page.url()

    console.log("current url of the web page is :", url) //current url of the web page is : https://testautomationpractice.blogspot.com/

});

Then('I verify the playwright methods part4', async function () {

    await page.goto('https://www.jazzpharma.com/')

    console.log("====================to hover over the web element=================")

    await page.locator("//*[text()='About']").first().hover()

    await page.locator("//*[text()='Leadership']").click()

    var title = await page.title()

    console.log("title of the web page is :", title) //title of the web page is : Leadership | Jazz Pharmaceuticals

    if (title == 'Leadership | Jazz Pharmaceuticals') {

        console.log("title is matching....")
    }

    console.log("====================get attribute================")

    let attributevalue = await page.locator("//*[text()='About']").first().getAttribute('href')

    console.log("attributevalue is :", attributevalue) //attributevalue is : /about-us

    attributevalue = await page.locator("//*[text()='About']").first().getAttribute('data-drupal-link-system-path')

    console.log("attributevalue is :", attributevalue) //attributevalue is : node/16

    console.log("====================highlight================")

    await page.locator("//*[text()='Board of Directors']").last().highlight()

    await page.locator("//*[text()='Board of Directors']").last().click()

    // home work: get the title and url of the web page
});

Then('I verify the keyboard actions', async function () {

    await page.locator('#field1').scrollIntoViewIfNeeded()

    //1st way

    //clear means it will only clears the existing text in the textbox

    await page.locator('#field1').clear()

    await page.locator('#field1').type('santhosh')

    //2nd way

    await page.locator('#field1').fill(" ")

    //3rd way

    await page.locator('#field1').type('Wafa')

    await page.locator('#field1').press('Control+A')

    await page.keyboard.press('Delete')

    await page.keyboard.up('Control')

    await page.keyboard.insertText('Aviraj')

    await page.locator('#field1').clear()

    //4th way

    await page.locator('#field1').pressSequentially('Aswini')

    console.log("================== right click===================")

    await page.locator('.wikipedia-search-input').scrollIntoViewIfNeeded()

    await page.locator('.wikipedia-search-input').click({ button: 'right' })

    console.log("================== first and last ===================")

    await page.locator("//*[@type='text']").first().fill('Enter Name')

    await page.locator("//*[@type='text']").last().fill('section 13')

    console.log("================== i want to type the data in different textboxes using index===================")

    await page.locator("//*[@type='text']").nth(0).fill('Aviraj')

    await page.locator("//*[@type='text']").nth(5).fill('Aviraj')

    await page.locator("//*[@type='text']").nth(10).scrollIntoViewIfNeeded()

    await page.locator("//*[@type='text']").nth(10).fill('Aviraj')

    console.log("================== drag and drop ===================")

    //1st way

    var drag = await page.locator("//*[@id='draggable']")

    var drop = await page.locator("//*[@id='droppable']")

    await drag.scrollIntoViewIfNeeded()

    await drag.dragTo(drop)

    //2nd way

    //await page.locator("//*[@id='draggable']").dragTo(page.locator("//*[@id='droppable']"))

});

Then('I verify the dropdowns and screenshots', async function () {

    await page.locator('#saturday').scrollIntoViewIfNeeded()

    var colorDropdown = await page.locator('#colors')

    await colorDropdown.selectOption('Green')

    await colorDropdown.selectOption('Red')

    await colorDropdown.selectOption('Blue')

    await colorDropdown.selectOption(['Yellow', 'Red', "White"])

    // homework : use dropdown options in sorted list

    // put all the options in all method and use for loop and select

    await page.locator("//*[@id='country']").click()

    var count = await page.locator("//*[@id='country']/option").allInnerTexts()

    for (let i = 0; i < count.length; i++) {

        var countryName = await page.locator("//*[@id='country']/option").nth(i).getAttribute('value')

        console.log("countryName is :", countryName)

        if (countryName == 'india') {

            await page.locator("//*[@id='country']").selectOption({ index: 9 })
        }

    }
    console.log("================== screenshot of the web element ===================")

    console.log("================== 1st way to take screenshot ===================")

    await page.locator("//*[@type='text']").nth(0).scrollIntoViewIfNeeded()

    await page.locator("//*[@type='text']").nth(0).fill('Aviraj')

    await page.locator("//*[@type='text']").nth(0).screenshot({ path: 'enter name web element.png' })

    console.log("================== 2nd way to take screenshot upto the screen length===================")

    await page.screenshot({ path: 'upto screen length.jpg' })

    console.log("================== 3rd way to take screenshot full page===================")

    await page.screenshot({ path: 'fullpagescreenshot.jpg', fullPage: true })

    await page.goBack()

    await page.goForward()
});

Then('I verify the dates', async function () {

    const todaysDate = new Date()

    console.log(todaysDate) //2025-11-16T03:50:59.291Z

    const currentDate = todaysDate.toLocaleDateString()

    console.log(currentDate) //16/11/2025

    const yesterdaysDate = new Date(todaysDate)

    yesterdaysDate.setDate(todaysDate.getDate() - 1);

    console.log(yesterdaysDate.toLocaleDateString()) //15/11/2025

    const futureDate = new Date(todaysDate)

    futureDate.setDate(todaysDate.getDate() + 365);

    console.log(futureDate.toLocaleDateString()) //16/11/2026

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//*[@id='datepicker']").scrollIntoViewIfNeeded()

    await page.locator("//*[@id='datepicker']").fill(futureDate.toLocaleDateString())

    const year = todaysDate.getFullYear().toString()

    const day = todaysDate.getDate().toString()

    const month = (todaysDate.getMonth() + 1).toString()

    console.log(`${month}-${day}-${year}`)

    console.log(`${month}/${day}/${year}`)

    console.log(`${day}/${month}/${year}`)

    console.log(`${year}/${month}/${day}`)

    console.log(`${year}/${day}/${month}`)

    await page.locator("//*[@id='datepicker']").fill(`${year}/${day}/${month}`)

    await page.locator("//*[@id='datepicker']").fill(`${todaysDate.getDate()}/${todaysDate.getFullYear()}/${todaysDate.getMonth() + 1}`)

    //return `${month}-${day}-${year}` // mm-dd-year

    //return `${month}/${day}/${year}` // mm/dd/year

    //return `${day}/${month}/${year}` // dd/mm/year

    // return `${day}/${month}/${year}` // dd/mm/year

});

function formatDate(date: Date): string {

    const year = date.getFullYear().toString()

    const day = date.getDate().toString().padStart(2, '0')

    const month = (date.getMonth() + 1).toString().padStart(2, '0')

    //return `${month}-${day}-${year}` // mm-dd-year

    //return `${month}/${day}/${year}` // mm/dd/year

    return `${day}/${month}/${year}` // dd/mm/year
}


Then('I verify web table in static way', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let expectedText = "Animesh"

        let actualText = await page.locator("//table[@name='BookTable']/tbody/tr[4]/td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, "is displayed in the web table") //Animesh is displayed in the web table
        }
        else {
            console.log(expectedText, "is not displayed in the web table")
        }
    }
    else {

        console.log("webTable is not visible on the webpage")
    }
});

Then('I verify web table in static way2', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let expectedText = "Javascript"

        let actualText = await page.locator("//table[@name='BookTable']/tbody/tr[4]/td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, "is displayed in the web table")
        }
        else {
            console.log(expectedText, "is not displayed in the web table") //Javascript is not displayed in the web table
        }
    }
    else {

        console.log("webTable is not visible on the webpage")
    }
});

Then('I verify web table in dynamic way', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        console.log("web table is displayed on the webpage")

        let rows = await page.locator("//table[@name='BookTable']/tbody/tr").all()

        if (rows.length > 0) {

            for (let i = 1; i <= rows.length; i++) {

                console.log("=================table headers===========================")

                if (i == 1) {

                    // tuple

                    let expectedHeaderColumns = ["BookName", "Author", "Subject", 'Price']

                    // string array

                    //let actualHeaderColumns :string[]= ["BookName", "Author", "Subject",'Price']

                    let headerColumns = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/th").all()

                    for (let j = 1; j <= headerColumns.length; j++) {

                        let actualheadercolumns = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/th[" + j + "]").innerText()

                        if (actualheadercolumns == expectedHeaderColumns[j - 1]) {
                            console.log("headerText is :", actualheadercolumns)
                        }
                    }
                }

                console.log("=================table columns===========================")

                let columns = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/td").all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        let expectedText = "Mukesh"

                        let actualText = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/td[" + j + "]").innerText()

                        if (actualText == expectedText) {

                            console.log(expectedText, "is displayed in the web table in the row", i, " and column ", j)
                        }
                    }
                }
            }
        }
        else {

            console.log("web table doesn't have any rows")
        }
    }
    else {

        console.log("webTable is not visible on the webpage")
    }

    /*i am launching the browser
2/3 steps [==================================================================================================                                                 ] web table is displayed on the webpage
=================table headers===========================
headerText is : BookName
headerText is : Author
headerText is : Subject
headerText is : Price
=================table columns===========================
=================table headers===========================
=================table columns===========================
=================table headers===========================
=================table columns===========================
Mukesh is displayed in the web table in the row 3  and column  2
=================table headers===========================
=================table columns===========================
=================table headers===========================
=================table columns===========================
Mukesh is displayed in the web table in the row 5  and column  2
=================table headers===========================
=================table columns===========================
=================table headers===========================
=================table columns===========================*/
});


Then('I verify web calendar in static way', async function () {

    await page.locator('#datepicker').first().scrollIntoViewIfNeeded()

    await page.locator('#datepicker').first().click()

    let webCalendar = await page.locator(".ui-datepicker-calendar").isVisible()

    if (webCalendar == true) {

        let expectedDate = "30"

        let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[6]/td[1]")

        let actualDateText = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[6]/td[1]").innerText()

        if (actualDateText == expectedDate) {

            console.log(actualDateText, "is displayed in the web Calendar") //

            //1st way

            //await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[6]/td[1]").click()

            //2nd way

            actualDate.click()
        }
        else {
            console.log(actualDateText, "is not displayed in the web table")
        }
    }
    else {

        console.log("webCalendar is not visible on the webpage")
    }
});

Then('I verify the And method', async function () {

    await page.getByPlaceholder('Enter Name').fill('shubanji')

    //1st way

    console.log("=================== xpath And method=================")

    await page.locator("//input[@placeholder='Enter EMail' and @id='email']").fill('shubanji@gmail.com')

    //2nd way

    console.log("=================== playwright And method=================")

    await page.getByPlaceholder("Enter Phone").and(page.locator("#phone")).and(page.locator("//*[@id='phone']")).fill('7890098778')

    await page.locator(".wikipedia-search-input").and(page.locator("#Wikipedia1_wikipedia-search-input")).fill('testing')

});

Then('i launch the amazon appplication', async function () {

    await page.goto("https://www.amazon.in/")

});

Then('i verify the Hard assertions', async function () {

    //syntax:await expect(locator).methods()

    await expect(page.locator("//*[text()='Bestsellers']").last()).toBeVisible()

    //await expect(page.locator("//*[text()='Bestsellers']").last()).toBeHidden()

    //await expect(page.locator("//*[text()='Bestsellers']").last()).toBeDisabled()

    await expect(page.locator("//*[text()='Bestsellers']").last()).toBeEnabled()

    await expect(page.getByPlaceholder("Search Amazon.in")).toBeEnabled()

    await page.getByPlaceholder("Search Amazon.in").fill("Home")

    await expect(page.locator("#nav-cart-text-container")).toBeAttached()

    await expect(page.locator("#nav-cart-text-container")).toHaveCount(1)

    await expect(page.locator("//*[contains(@class,'nav')]")).toHaveCount(523)

    await expect(page.locator("//span[@class='nav-line-2']").last()).toContainText('Cart')

    await expect(page.locator("//div[@id='nav-xshop']/ul/li/div/a")).toContainText(["MX Player", "Mobiles", "Customer Service"])

    await expect(page.locator("//*[contains(text(),'Account & Lists')]")).toHaveAttribute('class')

    await expect(page.locator("//*[contains(text(),'Account & Lists')]")).toHaveAttribute('class', 'nav-line-2 ')

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.getByPlaceholder("Enter Name")).toHaveId('name')

    await expect(page.locator(".wikipedia-search-input")).toHaveId('Wikipedia1_wikipedia-search-input')

    await expect(page.locator(".wikipedia-search-input")).toBeEmpty()

    await page.locator(".wikipedia-search-input").fill("Hi Sunday")

    await expect(page.locator("//*[text()='START']")).toHaveRole('button')

    await expect(page.locator("//*[text()='START']")).toHaveText('START')

    await expect(page.locator("//*[text()='START']")).toBeTruthy()

    console.log("Hi team good morning")
});

Then('i verify the Soft assertions', async function () {

    //syntax:await expect.soft(locator).methods()

    await expect.soft(page.locator("//*[text()='Bestsellers']").last()).toBeVisible()

    //await expect.soft(page.locator("//*[text()='Bestsellers']").last()).toBeHidden()

    //await expect.soft(page.locator("//*[text()='Bestsellers']").last()).toBeDisabled()

    await expect.soft(page.locator("//*[text()='Bestsellers']").last()).toBeEnabled()

    await expect.soft(page.getByPlaceholder("Search Amazon.in")).toBeEnabled()

    await page.getByPlaceholder("Search Amazon.in").fill("Home")

    await expect.soft(page.locator("#nav-cart-text-container")).toBeAttached()

    await expect.soft(page.locator("#nav-cart-text-container")).toHaveCount(1)

    await expect.soft(page.locator("//*[contains(@class,'nav')]")).toHaveCount(523)

    await expect.soft(page.locator("//span[@class='nav-line-2']").last()).toContainText('Cart')

    await expect.soft(page.locator("//div[@id='nav-xshop']/ul/li/div/a")).toContainText(["MX Player", "Mobiles", "Customer Service"])

    await expect.soft(page.locator("//*[contains(text(),'Account & Lists')]")).toHaveAttribute('class')

    await expect.soft(page.locator("//*[contains(text(),'Account & Lists')]")).toHaveAttribute('class', 'nav-line-2 ')

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveId('name')

    await expect.soft(page.locator(".wikipedia-search-input")).toHaveId('Wikipedia1_wikipedia-search-input')

    await expect.soft(page.locator(".wikipedia-search-input")).toBeEmpty()

    await page.locator(".wikipedia-search-input").fill("Hi Sunday")

    await expect.soft(page.locator("//*[text()='START']")).toHaveRole('button')

    await expect.soft(page.locator("//*[text()='START']")).toHaveText('START')

    await expect.soft(page.locator("//*[text()='START']")).toBeTruthy()

    console.log("Hi team good morning")
});


Then('i verify the Screenshots', async function () {

    console.log("================== screenshot of the web element with only image name===================")

    console.log("================== 1st way to take screenshot ===================")

    await page.locator("//*[@type='text']").nth(0).scrollIntoViewIfNeeded()

    await page.locator("//*[@type='text']").nth(0).fill('Aviraj')

    await page.locator("//*[@type='text']").nth(0).screenshot({ path: 'enter name web element.png' })

    console.log("================== 2nd way to take screenshot upto the screen length===================")

    await page.screenshot({ path: 'upto screen length.jpg' })

    console.log("================== 3rd way to take screenshot full page===================")

    await page.screenshot({ path: 'fullpagescreenshot.jpg', fullPage: true })

    console.log("================== screenshot of the web element with folder and add with image name===================")

    console.log("================== 1st way to take screenshot ===================")

    await page.locator("//*[@type='text']").nth(0).scrollIntoViewIfNeeded()

    await page.locator("//*[@type='text']").nth(0).fill('Aviraj')

    await page.locator("//*[@type='text']").nth(0).screenshot({ path: './test-result/Screenshots/enter name web element.png' })

    console.log("================== 2nd way to take screenshot upto the screen length===================")

    await page.screenshot({ path: './test-result/Screenshots/upto screen length.jpg' })

    console.log("================== 3rd way to take screenshot full page===================")

    await page.screenshot({ path: './test-result/Screenshots/fullpagescreenshot.jpg', fullPage: true })

    console.log("================== screenshot comaprision ===================")

    //await expect(page).toHaveScreenshot('./test-result/Screenshots/enter name web element.png')

    await expect(page.locator("//*[@type='text']").nth(0)).toHaveScreenshot('./test-result/Screenshots/enter name web element.png')

    /* inside PlaywrightAutomationCode folder there is one screenshot folder

    as a user  you people need to store teh screenshots in thath screenshot folder*/
});

Then('i verify the filters', async function () {

    await page.goto("https://www.saucedemo.com/")

    await page.getByPlaceholder('Username').fill('standard_user')

    await page.getByPlaceholder('Password').fill('secret_sauce')

    await page.locator('#login-button').click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bike Light' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Remove' }).click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//div[@class='form-check form-check-inline']/label")
        .filter({ hasText: 'Monday' }).click()

    await page.locator("//div[@class='form-check form-check-inline']/label")
        .filter({ hasText: 'Sunday' }).click()

    /*

    1st task:
     
    store all the text in one array/tuple

     iterate the array from index 0 to last index

     pass the index text and verify add to cart and remove

     2nd task:

     handle all types of alerts in test automation practice

    */
});


Then('i launch the herokuapp application', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

});

Then('i verify the simple alert', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; accept: () => any }) => {

        await page.waitForTimeout(8000)

        expect(dialog.type()).toBe('alert')

        expect(dialog.message()).toHaveText('I am a JS Alert')

        await dialog.accept()

        await page.waitForTimeout(8000)

        let alertText = await page.locator("//*[@id='result']").innerText();

        console.log("alertText is :", alertText)

        if (alertText == 'You successfully clicked an alert') {

            await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/simple alert.png' })
        }
        else {

            await expect(page.locator("//*[@id='result']")).toContainText('You successfully clicked an alert')

            await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/failed simple alert.png' })
        }

        console.log("========hi team===========")
    })

    await page.locator("//button[text()='Click for JS Alert']").click()

});

Then('i verify the confirmation alert', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; accept: () => any }) => {

        expect(dialog.type()).toBe('confirm')

        expect(dialog.message()).toContainText('I am a JS Confirm')

        await dialog.accept()

        let alertText = await page.locator("//*[@id='result']").innerText();

        console.log("alertText is :", alertText)

        if (alertText == 'You clicked: Ok') {

            await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/confirm alert.png' })
        }
        else {

            await expect(page.locator("//*[@id='result']")).toContainText('You clicked: Ok')

            await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/confirm simple alert.png' })
        }

        console.log("========hi team===========")
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

});

Then('i verify the confirmation alert dismiss', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; dismiss: () => any }) => {

        try {
            expect(dialog.type()).toBe('confirm')

            expect(dialog.message()).toContainText('I am a JS Confirm')

            await dialog.dismiss()

            let alertText = await page.locator("//*[@id='result']").innerText();

            console.log("alertText is :", alertText)

            if (alertText == 'You clicked: Cancel') {

                await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/confirm alert dismiss.png' })
            }
            else {

                await expect(page.locator("//*[@id='result']")).toContainText('You clicked: Cancel')

                await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/confirm alert dismiss.png' })
            }
            console.log("========hi team===========")
        }
        catch (error) {

            console.log("alert is handled scuccessfully")
        }
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

});

Then('i verify the prompt alert accept with text', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; accept: (arg0: string) => any }) => {

        try {
            expect(dialog.type()).toBe('prompt')

            expect(dialog.message()).toContainText('I am a JS prompt')

            await dialog.accept("hi text")

            let alertText = await page.locator("//*[@id='result']").innerText();

            console.log("alertText is :", alertText)

            if (alertText == 'You entered: hi text') {

                await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/prompt alert accept.png' })
            }
            else {

                await expect(page.locator("//*[@id='result']")).toContainText('You entered: hi text')

                await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/prompt alert accept.png' })
            }
            console.log("========hi team===========")
        }
        catch (error) {

            console.log("alert is handled scuccessfully")
        }
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

});

Then('i verify the prompt alert accept without text', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; accept: () => any }) => {

        try {
            expect(dialog.type()).toBe('prompt')

            expect(dialog.message()).toContainText('I am a JS prompt')

            await dialog.accept()

            let alertText = await page.locator("//*[@id='result']").innerText();

            console.log("alertText is :", alertText)

            if (alertText == 'You entered:') {

                await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/prompt alert accept.png' })
            }
            else {

                await expect(page.locator("//*[@id='result']")).toContainText('You entered:')

                await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/prompt alert accept.png' })
            }
            console.log("========hi team===========")
        }
        catch (error) {

            console.log("alert is handled scuccessfully")
        }
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

});

Then('i verify the prompt alert dismiss with text', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; dismiss: (arg0: string) => any }) => {

        try {

            expect(dialog.type()).toBe('prompt')

            if (dialog.message() == 'I am a JS prompt') {

                await dialog.dismiss("hi text")

                let alertText = await page.locator("//*[@id='result']").innerText();

                console.log("alertText is :", alertText)

                if (alertText == 'You entered: null') {

                    await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/prompt alert dismiss with text.png' })
                }
                else {

                    await expect(page.locator("//*[@id='result']")).toContainText('You entered: null')

                    await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/prompt alert dismiss with text.png' })
                }
                console.log("========hi team===========")
            }

            // expect(dialog.message()).toContainText('I am a JS prompt')


        }
        catch (error) {

            console.log("alert is handled scuccessfully")
        }
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

});

Then('i verify the prompt alert dismiss without text', async function () {

    await page.on('dialog', async (dialog: { type: () => any; message: () => any; dismiss: () => any }) => {

        try {
            expect(dialog.type()).toBe('prompt')

            expect(dialog.message()).toContainText('I am a JS prompt')

            await dialog.dismiss()

            let alertText = await page.locator("//*[@id='result']").innerText();

            console.log("alertText is :", alertText)

            if (alertText == 'You entered: null') {

                await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/prompt alert dismiss without text.png' })
            }
            else {

                await expect(page.locator("//*[@id='result']")).toContainText('You entered: null')

                await page.locator("//*[@id='result']").screenshot({ path: './test-result/Screenshots/prompt alert dismiss without text.png' })
            }
            console.log("========hi team===========")
        }
        catch (error) {

            console.log("alert is handled scuccessfully")
        }
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

});

Then('I verify all the kind of waits', async function () {

    //syntax: await page.waitForTimeout(10000) // 10000 means 10000 milliseconds means 10 seconds

    //await page.waitForTimeout(10000)

    await page.locator("//*[text()='New Tab']").scrollIntoViewIfNeeded()

    //await page.waitForTimeout(5000)

    await page.locator("//*[text()='New Tab']").click()

    await page.bringToFront()

    console.log("================1st way of wait for selector=============")

    // Await page.waitforSelector(webelement)

    await page.locator("#singleFileInput").scrollIntoViewIfNeeded()

    const file1 = await page.waitForSelector("#singleFileInput")

    await file1.setInputFiles("./test-result/Screenshots/fullpagescreenshot.jpg")

    //const uploadSingleFile = await page.locator('button',{hasText:'Upload Single File'})

    //const uploadSingleFile = await page.locator("//button[text()='Upload Single File']")

    await page.locator("//button[text()='Upload Single File']").click()

    console.log("================2nd way of wait for selector=============")

    //Await page.waitforSelector(webelement, {timeout:10000}) // 10000 means 10 seconds

    await page.locator("#field2").scrollIntoViewIfNeeded()

    await page.waitForSelector("#field2", { timeout: 7000 }) // 7 seconds

    await page.locator("#field2").fill("aviraj")

    console.log("===============wait for load state=============")

    //syntax: Await page.waitforLoadState()

    //1st Way

    await page.waitForLoadState()

    await page.locator("#field1").fill("Quality")

    //2nd way

    await page.waitForLoadState("domcontentloaded") // html and dom 

    await page.locator("#field2").fill("2nd way")

    //3rd way

    await page.waitForLoadState("load") // html, css, images

    await page.locator("#field2").fill("3rd way")

    //4th way

    await page.waitForLoadState("load", { timeout: 8000 })

    await page.locator("#field2").fill("shubanji")

    //5th way

    await page.waitForLoadState("networkidle", { timeout: 8000 })

    await page.locator("#field2").fill("5th way")

    //6th way

    await page.waitForLoadState("networkidle") // no network connections

    await page.locator("#field2").fill("6th way")

    console.log("============================")

});

Then('I verify file uploading', async function () {

    console.log("================upload Single File=============")

    // Await page.waitforSelector(webelement)

    await page.locator("#singleFileInput").scrollIntoViewIfNeeded()

    const singleFilesUpload = await page.waitForSelector("#singleFileInput")

    await singleFilesUpload.setInputFiles("./test-result/Screenshots/fullpagescreenshot.jpg")

    await page.locator("//button[text()='Upload Single File']").click()

    console.log("================Multiple File uploading=============")

    const multiFilesUpload = await page.waitForSelector("#multipleFilesInput")

    await multiFilesUpload.setInputFiles(["./test-result/cucumber-report.html", "./test-result/Screenshots/enter name web element.png"])

    await page.locator("//button[text()='Upload Multiple Files']").click()

    console.log("================Multiple File uploading=============")

});


Then('i launch the frames application', async function () {

    await page.goto('https://ui.vision/demo/webtest/frames/')
});

Then('I verify frames', async function () {

    var allFramesCount = await page.frames()

    console.log("all frames count is:", allFramesCount.length) //all frames count is: 7

    //syntax:
    //await page.frameLocator(“xpath/url”).locator(playwright locators/xpath/css).framesmethods()

    //1st way

    // await page.frameLocator('//frame[@src="frame_1.html"]').locator("//input[@name='mytext1']").fill("Hi team how are you")

    //2nd way

    const frame1 = await page.frameLocator('//frame[@src="frame_1.html"]').locator("//input[@name='mytext1']")

    frame1.fill("quality thoughts")

    //3rd way

    var frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

    await frame3?.fill("//input[@name='mytext3']", "saturday")

    var childFramesCount = await frame3?.childFrames()

    console.log("all child frames count is:", childFramesCount?.length) //all child frames count is: 1

    if (childFramesCount && childFramesCount.length > 0) {

        await childFramesCount[0].locator("//span[text()='Hi, I am the UI.Vision IDE']").click()

        await childFramesCount[0].locator("//span[text()='Web Testing']").click()
    }

    await page.mainFrame()

    console.log("=================================")

    /* class work: handle frame2, 4 and 5
    
    https://the-internet.herokuapp.com/nested_frames perfrom all frame actions in this application*/

});

Then('i verify the simple alert on automation practice', function () {

    page.on('dialog', (dialog) => {

        console.log("Dialog type is : =", dialog.type())

        expect(dialog.type()).toContain('alert')

        console.log("Dialog message is : =", dialog.message())

        expect(dialog.message()).toContain('I am an alert box!')

        dialog.accept()
    })

    page.locator("button[id='alertBtn']").click();
});


Then('i launch the browser and perform windows handling', async function () {

    console.log("i launch the browser and perform windows handling")

    browser = await chromium.launch({

        headless: false,
        args: ['--start-maximized']

    });

    const context = await browser.newContext({ viewport: null })

    let page1 = await context.newPage();

    let page2 = await context.newPage();

    let page3 = await context.newPage();

    let allPagescount = context.pages()

    console.log("allPages count is ", allPagescount.length) // allPagescount is 3

    await page1.goto("https://login.salesforce.com/")

    console.log(await page1.title())

    await expect(page1).toHaveTitle("Login | Salesforce")

    await page2.goto("https://www.facebook.com/")

    await expect(page2).toHaveTitle("Facebook – log in or sign up")

    await page3.goto("https://testautomationpractice.blogspot.com/")

    await expect(page3).toHaveTitle("Automation Testing Practice")

    await page3.getByText('New Tab').scrollIntoViewIfNeeded()

    await page3.getByText('New Tab').click()

    await page3.waitForTimeout(10000)

    allPagescount = context.pages()

    console.log("allPages count is ", allPagescount.length) // allPagescount is 4

    console.log("title of the new page is ", allPagescount[3].title()) // allPagescount is 4

    console.log("=================switch to first tab and click on the header tabs================")

    await allPagescount[0].bringToFront()

    await page1.getByLabel('Username').fill("shubangi")

    await page1.getByLabel('Password').fill("quality")

    console.log("=================switch to third tab and click on the header tabs================")

    await allPagescount[2].bringToFront()

    const pagePopup = page3.waitForEvent('popup')

    await page3.getByText('Popup Windows').scrollIntoViewIfNeeded()

    await page3.getByText('Popup Windows').click()

    const popupPage = await pagePopup

    console.log("title of the popup is ", popupPage.title()) // 

    allPagescount = context.pages()

    console.log("allPages count is ", allPagescount.length) // allPagescount is 4

    /* class work:  title of the 5th and 6th pages*/

    //to close the specific tab

    await page3.close()

    /* class work:  get the pages count*/

    //to close the complete browser

    await context.close()

});

Then('I am reading the test data from first set', async function () {

    await page.getByPlaceholder("Enter Name").fill(TestData1.Name)

    await page.getByPlaceholder("Enter EMail").fill(TestData1.Email)

    await page.getByPlaceholder("Enter Phone").fill(TestData1.Phone)

    await page.locator("#textarea").fill(TestData1.Address)

    await page.locator(".wikipedia-search-input").fill(TestData1.Wikipedia)

});

Then('I am reading the test data from second set', async function () {

    await page.getByPlaceholder("Enter Name").fill(TestData2.Name)

    await page.getByPlaceholder("Enter EMail").fill(TestData2.Email)

    await page.getByPlaceholder("Enter Phone").fill(TestData2.Phone)

    await page.locator("#textarea").fill(TestData2.Address)

    await page.locator(".wikipedia-search-input").fill(TestData2.Wikipedia)

});

Then('I am reading the test data from third set', async function () {

    await page.getByPlaceholder("Enter Name").fill(TestData3.Name)

    await page.getByPlaceholder("Enter EMail").fill(TestData3.Email)

    await page.getByPlaceholder("Enter Phone").fill(TestData3.Phone)

    await page.locator("#textarea").fill(TestData3.Address)

    await page.locator(".wikipedia-search-input").fill(TestData3.Wikipedia)

});

Then('I am reading the test data from feature file {string},{string},{string},{string},{string}', async function ( Name ,Email , Phone,address, Wikipedia ) {
    
    await page.getByPlaceholder("Enter Name").fill(Name)

    await page.getByPlaceholder("Enter EMail").fill(Email)

    await page.getByPlaceholder("Enter Phone").fill(Phone)

    await page.locator("#textarea").fill(address)

    await page.locator(".wikipedia-search-input").fill(Wikipedia)
});

// Given('i launch the OrangeHRM application in chrome browser', async function () {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     console.log("in background scenario")

// });
