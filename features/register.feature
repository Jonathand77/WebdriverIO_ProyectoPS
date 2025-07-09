Feature: ParaBank Register Feature

  Scenario Outline: As a new customer, I can register into the Para Bank Website
    Given I am on the register page

    Examples:
      | firstName | lastName | address  | city     | state     | zipCode | phone | ssn   | username      | password | confirmPassword | message                       |
      | Jonathan | Primero    | provenza | medellin | antioquia | 35155   |       | 35155 | chrisgpzudeat        | chris123 | chris123        | Welcome                       |
      | Jonathan | Segundo    | provenza | medellin | antioquia | 35155   |       | 35155 | asdsdfasdasdf | password | password1ß      | Passwords did not match.      |
      | Jonathan | Tercero    | provenza | medellin | antioquia | 35155   |       | 35155 | john        | chris123 | chris123        | This username already exists. |