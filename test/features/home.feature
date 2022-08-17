@smoke
Feature: https://demoqa.com home page

    Scenario: 1.Page contains proper data
        Given I am on the home page
        Then I expect to see website logo image
        And I expect to see Selenium training image
        And I expect to see "© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED." footer text
        And I expect to see "ToolsQA" title
        When I press website logo
        Then I expect to be returned on main page
        When I press Selenium logo
        Then I expect to be on Selenium page with "Just a moment..." title

    Scenario Outline: 2. All buttons can be clicked and open corresponding pages
        Given I am on the home page
        When I click on <button> button
        Then I expect to be on page with <title> title

        Examples:
            | button                  | title                   |
            | Elements                | Elements                |
            | Forms                   | Forms                   |
            | Alerts, Frame & Windows | Alerts, Frame & Windows |
            | Widgets                 | Widgets                 |
            | Interactions            | Interactions            |
            | Book Store Application  | Book Store              |