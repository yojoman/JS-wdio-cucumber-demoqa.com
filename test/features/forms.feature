@forms
Feature: https://demoqa.com forms page

    Scenario: 1. Forms page can be filled and send
        Given I am on the "automation-practice-form" page
        Then I expect to see Student Registration Form
        When I type "John" in "First Name" field
        Then I expect to see "John" text in "First Name" field
        When I type "Snow" in "Last Name" field
        Then I expect to see "Snow" text in "Last Name" field
        When I type "3751234567" in "Mobile Number" field
        Then I expect to see "3751234567" text in "Mobile Number" field
        When I fill "johnsnow@gmail.com" in "userEmail" field
        Then I expect to see "johnsnow@gmail.com" in "userEmail" field
        When I select "Male" gender
        Then I expect to see selected Male gender
        When I select "1990" year, "January" month and "15" date in Date of Birt field
        Then I expect to see "15 Jan 1990" de in Date of Birt field
        When I fill "Test subject" in "subjectsInput" field
        Then I expect to see "Test subject" in "subjectsInput" field
        When I select Sports, Reading and Music hobbies
        Then I expect to see Sports, Reading and Music hobbies are selected
        When I choose and upload picture
        When I fill "Route de la Galaise 32, Geneva, Switzerland" in "currentAddress" field
        Then I expect to see "Route de la Galaise 32, Geneva, Switzerland" in "currentAddress" field
        When I push Submit button
        Then I expect to see window with "Thanks for submitting the form" title contains submitted form
        When I click "Close" button
        Then I expect the see the window has disappeared

