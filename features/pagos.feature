Feature: ParaBank Payment Feature

  Background:
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a logged-in user, I can make a payment to a beneficiary account
    Given I am on the Bill Pay page
    When I make a payment to account <account> with amount <amount>

    Examples:
      | account | amount |
      | 12345   | 200    |
