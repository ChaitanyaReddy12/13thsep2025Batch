

Feature: POM

    @methodss
    Scenario: Verify launch
    Given i launch the orangeHRM browser
        Then i launch the application OrangeHRM
        And i provide the credentails


    @regression
    Scenario: Verify launch
        Given i launch the application OrangeHRM
        And Enter the username as <"username">
        Examples:

            | username |
            | Adnin    |

    #    add test data username and password in feature file and verify


    @regression
    Scenario: Verify launch
        Given i launch the application OrangeHRM
        And i provide the credentails
        And i click on Admin Tab and verify username

