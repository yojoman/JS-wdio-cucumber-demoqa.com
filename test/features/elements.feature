Feature: https://demoqa.com elements page

    Scenario: 1. Text Box page functionality
        Given I am on the "Text-box" page
        When I fill "John Snow" in "userName" field
        Then I expect to see "John Snow" in "userName" field
        When I fill "johnsnow@gmail.com" in "userEmail" field
        Then I expect to see "johnsnow@gmail.com" in "userEmail" field
        When I fill "Route de la Galaise 32, Geneva, Switzerland" in "currentAddress" field
        Then I expect to see "Route de la Galaise 32, Geneva, Switzerland" in "currentAddress" field
        When I fill "Hauptstr. 5, Musterstadt, Austria" in "permanentAddress" field
        Then I expect to see "Hauptstr. 5, Musterstadt, Austria" in "permanentAddress" field
        When I click "Submit" button
        Then I expect to see field with sent data under the text Box
        And I expect to see "John Snow" in "name" field under the Text Box
        And I expect to see "johnsnow@gmail.com" in "email" field under the Text Box
        And I expect to see "Route de la Galaise 32, Geneva, Switzerland" in "currentAddress" field under the Text Box
        And I expect to see "Hauptstr. 5, Musterstadt, Austria" in "permanentAddress" field under the Text Box
        When I fill inavalid data "abc" in "userEmail" field
        And I click "Submit" button
        Then I expect to see "userEmail" field becames red

    Scenario: 2. Buttons page functionality
        Given I am on the "Buttons" page
        And I expect to see ad banner above website logo
        When I double click on "Double Click Me" button
        Then I expect to see "You have done a double click" message
        When I right click on "Right Click Me" button
        Then I expect to see "You have done a right click" message
        When I just click on "Click Me" button
        Then I expect to see "You have done a dynamic click" message