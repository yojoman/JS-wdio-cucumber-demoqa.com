Feature: https://demoqa.com widget page

    Scenario: 1. Tabs page functionality
        Given I am on the "Tabs" page
        Then I expect to see "What" tab
        And I expect to see "Origin" tab
        And I expect to see "Use" tab
        And I expect to see "More" tab
        And I expect to see "More" tab not being clickable
        When I click "What" tab
        Then I expect to see "What" tab contains text starting with "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        When I click "Origin" tab
        Then I expect to see "Origin" tab contains text starting with "Contrary to popular belief, Lorem Ipsum is not simply random text."
        When I click "Use" tab
        Then I expect to see "Use" tab contains text starting with "It is a long established fact that a reader will be distracted"

    Scenario: 2. Menu page functionality
        Given I am on the "Menu" page
        Then I expect to see "Main Item 1" menu button
        And I expect to see "Main Item 2" menu button
        And I expect to see "Main Item 3" menu button
        And I expect to see ad banner above website logo
        When I click "Main Item 1" menu button
        Then I expect to be on "https://demoqa.com/menu#" page
        When I click "Main Item 3" menu button
        Then I expect to be on "https://demoqa.com/menu#" page
        When I hover over "Main Item 2" menu button
        And I click "Sub Item" submenu button
        Then I expect to be on "https://demoqa.com/menu#" page
        When I hover over "Main Item 2" menu button
        And I hover over "SUB SUB LIST »" menu button
        And I click "Sub Sub Item 1" menu button
        Then I expect to be on "https://demoqa.com/menu#" page
        When I hover over "Main Item 2" menu button
        And I hover over "SUB SUB LIST »" menu button
        And I hover over "Sub Sub Item 2" menu button
        And I click "Sub Sub Item 2" menu button
        Then I expect to be on "https://demoqa.com/menu#" page