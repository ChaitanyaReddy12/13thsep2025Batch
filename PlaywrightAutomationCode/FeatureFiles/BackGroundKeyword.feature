Feature: BackGroundKeyword

    Background: launch the browser and url
        Given i am launching the browser
        Then i launch the test automation practice url

    # Parse error
    # Background: chaitanya
    #     Given i am launching the browser
    #     Then i launch the test automation practice url

    @regression
    Scenario: TC_1_Verify playwright regressions part1
        And I verify the playwright regressions part1
        Then I close the browser

    @regression
    Scenario: TC_2_Verify playwright regressions part2
        And I verify the playwright regressions part2
        Then I close the browser

    @regression
    Scenario: Verify playwright regressions part3
        And I verify the playwright regressions part3
        Then I close the browser

    @regression
    Scenario: Verify playwright regressions part5
        And I verify the keyboard actions
        Then I close the browser

    @regression
    Scenario: Verify playwright regressions part5
        And I verify the dropdowns and screenshots
        Then I close the browser
