@book_store
Feature: https://demoqa.com book store page

    @isbn
    Scenario: 1. Book Store page ISBN functionality
        Given I am on the "Books" page
        Then I expect to see items on the page
        When I click "Git Pocket Guide" book
        Then I expect ISBN matches defined format

    @search
    Scenario: 2. Book Store page search functionality
        Given I am on the "Books" page
        Then I expect to see items on the page
        When I type "JavaScript" in search field
        # Then I expect to see following books in search results

    # When I back on previous page
    # And I click "You Don't Know JS" book
    # Then I expect ISBN matches defined format
    # When I back on previous page
    # Then I expect to see all books on the page


    @desc
    Scenario Outline: 3. Book description page functionality
        Given I am on the "Books" page
        When I open <book>
        Then I expect to see book with <subtitle>

        Examples:
            | book                                      | subtitle                                                          |
            | Git Pocket Guide                          | A Working Introduction                                            |
            | Learning JavaScript Design Patterns       | A JavaScript and jQuery Developer's Guide                         |
            | Designing Evolvable Web APIs with ASP.NET | Harnessing the Power of the Web                                   |
            | Speaking JavaScript                       | An In-Depth Guide for Programmers                                 |
            | You Don't Know JS                         | ES6 & Beyond                                                      |
            | Programming JavaScript Applications       | Robust Web Architecture with Node, HTML5, and Modern JS Libraries |
            | Eloquent JavaScript, Second Edition       | A Modern Introduction to Programming                              |
            | Understanding ECMAScript 6                | The Definitive Guide for JavaScript Developers                    |



# Examples:
#     | book                                      | subtitle                                                          | ISBN          |
#     | Git Pocket Guide                          | A Working Introduction                                            | 9781449325862 |
#     | Learning JavaScript Design Patterns       | A JavaScript and jQuery Developer's Guide                         | 9781449331818 |
#     | Designing Evolvable Web APIs with ASP.NET | Harnessing the Power of the Web                                   | 9781449337711 |
#     | Speaking JavaScript                       | An In-Depth Guide for Programmers                                 | 9781449365035 |
#     | You Don't Know JS                         | ES6 & Beyond                                                      | 9781491904244 |
#     | Programming JavaScript Applications       | Robust Web Architecture with Node, HTML5, and Modern JS Libraries | 9781491950296 |
#     | Eloquent JavaScript, Second Edition       | A Modern Introduction to Programming                              | 9781593275846 |
#     | Understanding ECMAScript 6                | The Definitive Guide for JavaScript Developers                    | 9781593277574 |