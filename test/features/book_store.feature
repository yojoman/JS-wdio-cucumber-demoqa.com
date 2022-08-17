@smoke
Feature: https://demoqa.com book store page

    Scenario: 1. Book Store page ISBN functionality
        Given I am on the "Books" page
        And I expect to see ad banner above website logo
        Then I expect to see items on the page
        And I expect to see "Git Pocket Guide" book
        When I click "Git Pocket Guide" book
        Then I expect ISBN matches defined format

    Scenario: 2. Book Store page search functionality
        Given I am on the "Books" page
        Then I expect to see items on the page
        Then I expect to see following books on the page
            | books                                     |
            | Git Pocket Guide                          |
            | Learning JavaScript Design Patterns       |
            | Designing Evolvable Web APIs with ASP.NET |
            | Speaking JavaScript                       |
            | You Don't Know JS                         |
            | Programming JavaScript Applications       |
            | Eloquent JavaScript, Second Edition       |
            | Understanding ECMAScript 6                |
        When I type "JavaScript" in search field
        Then I expect to see following books on the page
            | books                               |
            | Learning JavaScript Design Patterns |
            | Speaking JavaScript                 |
            | Programming JavaScript Applications |
            | Eloquent JavaScript, Second Edition |

    Scenario Outline: 3. Book description page functionality
        When I load "Books" page
        And I open book <book>
        Then I expect to see book with subtitle <subtitle>
        And I expect to see book with isbn <isbn>
        When I back on previous page

        Examples:
            | book                                      | subtitle                                                          | isbn          |
            | Git Pocket Guide                          | A Working Introduction                                            | 9781449325862 |
            | Learning JavaScript Design Patterns       | A JavaScript and jQuery Developer's Guide                         | 9781449331818 |
            | Designing Evolvable Web APIs with ASP.NET | Harnessing the Power of the Web                                   | 9781449337711 |
            | Speaking JavaScript                       | An In-Depth Guide for Programmers                                 | 9781449365035 |
            | You Don't Know JS                         | ES6 & Beyond                                                      | 9781491904244 |
            | Programming JavaScript Applications       | Robust Web Architecture with Node, HTML5, and Modern JS Libraries | 9781491950296 |
            | Eloquent JavaScript, Second Edition       | A Modern Introduction to Programming                              | 9781593275846 |
            | Understanding ECMAScript 6                | The Definitive Guide for JavaScript Developers                    | 9781593277574 |