Feature: ReadingTestDataFromJsonFile.feature

    Background: launch the browser and url
        Given i am launching the browser
        Then i launch the test automation practice url

    @regression
    Scenario: TC_1_Verify test data reading from first set
        And I am reading the test data from feature file "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        Then I close the browser

        Examples:
            | Name     | Email               | Phone      | Address   | Wikipedia  |
            | Sunday   | sunday @gmail.com   | 1234567890 | Hyderabad | Testing    |
            | saturday | saturday @gmail.com | 5678900987 | chennai   | playwright |
            | saturday | saturday @gmail.com | 5678900987 | chennai   | playwright |
            | saturday | saturday @gmail.com | 5678900987 | chennai   | playwright |

    @regression
    Scenario Outline:  TC_2_Verify test data reading from first set
        And I am reading the test data from feature file "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        Then I close the browser

        Examples:
            | Name   | Email            | Phone      | Address   | Wikipedia  |
            | Monday | monday@gmail.com | 0000000000 | bangalore | typescript |
