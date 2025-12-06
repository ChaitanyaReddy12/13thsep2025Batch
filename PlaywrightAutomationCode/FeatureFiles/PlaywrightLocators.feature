
Feature: PlaywrightLocators

@regression
Scenario: Playwright Locators handling
Given i am launching the browser
Then i launch the test automation practice url
And i verify Playwright Locators
Then I close the browser

@regression
Scenario: Playwright Locators handling
Given i am launching the browser
And i verify Playwright Locators2
Then I close the browser

@regression
Scenario: Playwright Locators handling
Given i am launching the browser
And i verify Playwright Locators3
Then I close the browser

@regression
Scenario: Playwright Locators handling using xpath and css selector
Given i am launching the browser
Then i launch the test automation practice url
And i verify xpath and css selector
Then I close the browser

@regression
Scenario: Verify Xpath methods
Given i am launching the browser
Then i launch the test automation practice url
And i verify xpath methods
Then I close the browser

@regression
Scenario: Verify Xpath Axes
Given i am launching the browser
Then i launch the test automation practice url
And i verify xpath axes
Then I close the browser
