# feature is nothing but module or scenario

Feature: Login Module
    # scenario or scenario outline keyword is nothing but Test case name

    @venkat
    Scenario Outline: login to OrangeHRM application with invalid credentails
        Given i am launching the browser
        Then I launch the URL
        When I enter username and password
        And I click on the login button
        Then I close the browser

    @sreekar
    Scenario: login to OrangeHRM application with valid credentails
        Given i am launching the browser
        And I launch the URL
        Then I close the browser
        


