Feature: ReadingTestDataFromJsonFile.feature

    Background: launch the browser and url
        Given i am launching the browser
        Then i launch the test automation practice url

    @regression
    Scenario: TC_1_Verify test data reading from first set
        And I am reading the test data from first set
        Then I close the browser

    @regression
    Scenario: TC_2_Verify test data reading from second set
        And I am reading the test data from second set
        Then I close the browser

    @regression
    Scenario: TC_3_Verify test data reading from third set
        And I am reading the test data from third set
        Then I close the browser
