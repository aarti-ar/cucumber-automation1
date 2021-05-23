Feature: Registration Successfully

  Scenario Outline: User should able to Register on Automation Demo Site
    Given user is on Automation Demo Site
    When  user enter first name "<firstname>" in the firstname field
    And   user enter last name "<lastname>" in the lastname field
    And   user enter email "<email>" in the email field
    And   user enter phone number "<phonenumber>" in the firstname field
    And   user select gender
    And   user select country
    And   user select year "<year>"from the dropdown field
    And   user select month "<month>"from the dropdown field
    And   user select day "<day>"from the dropdown field
    And   user enter password "<password>" in the password field
    And   user enter confirm password "<confirmpassword>" in the confirm password field
    And   user click on Submit button
    Then  User should able to Register successfully

    Examples:
    |firstname  |lastname |email        |phonenumber   |year   |month  |day    |password   |confirmpassword|
    |sarita     |vyas     |abc@gmail.com|0782345678   |1980    |5       | 23   |Sarita@88  |Sarita@88      |
    |meenaxi    |patel    |xyz@gmail.com|0712345678   |1999    |7       |21    |Meena@888  |Meena@888      |

