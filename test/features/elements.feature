@elements
Feature: https://demoqa.com home page

    Scenario: 1. Text Box
        Given I am on the "Text Box" page
        When I fill "John Snow" in Full Name field
        Then I expect to see "John Snow" in  Full Name field
        When I fill "johnsnow@gmail.com" in Email field
        Then I expect to see "johnsnow@gmail.com" in Email field
        When I fill "Route de la Galaise 32, Geneva, Switzerland" in Current Address field
        Then I expect to see "Route de la Galaise 32, Geneva, Switzerland" in Current Address field
        When I fill "Hauptstr. 5, Musterstadt, Austria" in Permanent Address field
        Then I expect to see "Hauptstr. 5, Musterstadt, Austria" in Permanent Address field
        When I click "Submit" button
        Then I expect to see field with sent data under the text Box
        And I expect to see "John Snow" in Name field under the Text Box
        And I expect to see "johnsnow@gmail.com" in Email field under the Text Box
        And I expect to see "Route de la Galaise 32, Geneva, Switzerland" in Current Address field under the Text Box
        And I expect to see "Hauptstr. 5, Musterstadt, Austria" in Permanent Address field under the Text Box
        When I fill "abc" in Email field
        And I click "Submit" button
        Then I expect to see Email field becames red

# Scenario: 2. Buttons