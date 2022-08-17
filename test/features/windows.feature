Feature: https://demoqa.com windows page

    Scenario: 1. Browser Windows page functionality
        Given I am on the "Browser-windows" page
        Then I expect to see "New Tab" button
        And I expect to see "New Window" button
        And I expect to see "New Window Message" button
        When I click "New Tab" button
        Then I expect to see New Tab opened with "https://demoqa.com/sample" url
        And I expect to see "This is a sample page" text
        When I switch to "https://demoqa.com/browser-windows" page
        And I click "New Window" button
        Then I expect to see New Window opened with "https://demoqa.com/sample" url
        And I expect to see "This is a sample page" text
        When I switch to "https://demoqa.com/browser-windows" page
        And I click "New Window Message" button
        Then I expect to see New Window Message opened with "Knowledge increases by ..." text

    Scenario: 2. Modal Dialogs page functionality
        Given I am on the "Modal-dialogs" page
        Then I expect to see "Small modal" button
        And I expect to see "Large modal" button
        When I click "Small modal" button
        Then I expect to see modal window opened with "Small Modal" title
        When I click "Close" button
        Then I expect no longer see modal window
        When I click "Large modal" button
        Then I expect to see modal window opened with "Large Modal" title
        When I click "Close" button
        Then I expect no longer see modal window