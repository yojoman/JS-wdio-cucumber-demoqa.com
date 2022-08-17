Feature: https://demoqa.com interactions page

    Scenario: 1. Sortable page functionality
        Given I am on the "Sortable" page
        Then I expect to see "List" tab
        And I expect to see "Grid" tab
        And I expect to see ad banner above website logo
        When I drag and drop "One" item to 3 slot
        Then I expect to see "One" item in "3" List slot
        And I expect to see "Two" item in "1" List slot
        And I expect to see "Three" item in "2" List slot

    Scenario: 1. Grid page functionality
        Given I am on the "Sortable" page
        Then I expect to see ad banner above website logo
        When I click "Grid" tab
        And I drag and drop "One" item at the bottom
        Then I expect to see "One" item in "7" Grid slot
        And I expect to see "Two" item in "1" Grid slot
        And I expect to see "Three" item in "2" Grid slot
