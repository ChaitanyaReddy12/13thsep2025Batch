Feature: CrossBrowserTesting

    @regression
    Scenario: Verify playwright methods using chrome browser
        Given i am launching the browser
        Then i launch the test automation practice url
        And I verify the playwright methods part1
        Then I close the browser

    @regression
    Scenario: Verify playwright methods using firefox browser
        Given i am launching the firefox browser
        Then i launch the test automation practice url
        And I verify the playwright methods part1
        Then I close the browser

    @regression
    Scenario: Verify playwright methods using safari browser
        Given i am launching the webkit browser
        Then i launch the test automation practice url
        And I verify the playwright methods part1
        Then I close the browser

    @regression
    Scenario: Verify playwright methods using headless browser
        Given i am launching the headless browser
        Then i launch the test automation practice url
        And I verify the playwright methods part1
        Then I close the browser

    @regression
    Scenario: Verify playwright methods using chrome browser
        Given i am launching the browser
        Then i launch the test automation practice url
        And I verify the playwright methods part1
        Then I close the browser

    @regression
    Scenario: Verify playwright methods using firefox browser
        Given i am launching the firefox browser
        Then i launch the test automation practice url
        And I verify the playwright methods part1
        Then I close the browser

    @regression
    Scenario: Verify playwright methods using safari browser
        Given i am launching the webkit browser
        Then i launch the test automation practice url
        And I verify the playwright methods part1
        Then I close the browser

    @regression
    Scenario: Verify playwright methods using headless browser
        Given i am launching the headless browser
        Then i launch the test automation practice url
        And I verify the playwright methods part1
        Then I close the browser

    @regression
    Scenario: Verify playwright wait methods
        Given i am launching the browser
        Then i launch the test automation practice url
        And I verify all the kind of waits
        Then I close the browser

    @regression
    Scenario: Verify playwright upload files
        Given i am launching the browser
        Then i launch the test automation practice url
        And I verify file uploading
        Then I close the browser

    @regression
    Scenario: Verify playwright frames
        Given i am launching the browser
        Then i launch the frames application
        And I verify frames
        Then I close the browser
        
    @regression
    Scenario: Verify playwright windows handling
        Given i launch the browser and perform windows handling