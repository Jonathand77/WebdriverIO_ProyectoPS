Feature: ParaBank Loan Request Feature

  Background:
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a user, I can request a loan through the website
    Given I am on the request loan page
    When I request a loan of <amount> with down payment <downPayment>

    Examples:
      | loanAmount | downPayment | fromAccount               |
      | 1000   | 100         | 54321 |
      | 5000   | 0           | 54321 |
