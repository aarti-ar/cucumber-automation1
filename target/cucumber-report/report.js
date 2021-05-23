$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Successfully",
  "description": "",
  "id": "registration-successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should able to Register on Automation Demo Site",
  "description": "",
  "id": "registration-successfully;user-should-able-to-register-on-automation-demo-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Automation Demo Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter first name \"\u003cfirstname\u003e\" in the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter last name \"\u003clastname\u003e\" in the lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter email \"\u003cemail\u003e\" in the email field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter phone number \"\u003cphonenumber\u003e\" in the firstname field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user select gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user select country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select year \"\u003cyear\u003e\"from the dropdown field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select month \"\u003cmonth\u003e\"from the dropdown field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select day \"\u003cday\u003e\"from the dropdown field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter confirm password \"\u003cconfirmpassword\u003e\" in the confirm password field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should able to Register successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "registration-successfully;user-should-able-to-register-on-automation-demo-site;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "phonenumber",
        "year",
        "month",
        "day",
        "password",
        "confirmpassword"
      ],
      "line": 20,
      "id": "registration-successfully;user-should-able-to-register-on-automation-demo-site;;1"
    },
    {
      "cells": [
        "sarita",
        "vyas",
        "abc@gmail.com",
        "0782345678",
        "1980",
        "5",
        "23",
        "Sarita@88",
        "Sarita@88"
      ],
      "line": 21,
      "id": "registration-successfully;user-should-able-to-register-on-automation-demo-site;;2"
    },
    {
      "cells": [
        "meenaxi",
        "patel",
        "xyz@gmail.com",
        "0712345678",
        "1999",
        "7",
        "21",
        "Meena@888",
        "Meena@888"
      ],
      "line": 22,
      "id": "registration-successfully;user-should-able-to-register-on-automation-demo-site;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "User should able to Register on Automation Demo Site",
  "description": "",
  "id": "registration-successfully;user-should-able-to-register-on-automation-demo-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Automation Demo Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter first name \"sarita\" in the firstname field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter last name \"vyas\" in the lastname field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter email \"abc@gmail.com\" in the email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter phone number \"0782345678\" in the firstname field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user select gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user select country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select year \"1980\"from the dropdown field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select month \"5\"from the dropdown field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select day \"23\"from the dropdown field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter password \"Sarita@88\" in the password field",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter confirm password \"Sarita@88\" in the confirm password field",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should able to Register successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "User should able to Register on Automation Demo Site",
  "description": "",
  "id": "registration-successfully;user-should-able-to-register-on-automation-demo-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Automation Demo Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter first name \"meenaxi\" in the firstname field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter last name \"patel\" in the lastname field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter email \"xyz@gmail.com\" in the email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter phone number \"0712345678\" in the firstname field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user select gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user select country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select year \"1999\"from the dropdown field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select month \"7\"from the dropdown field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select day \"21\"from the dropdown field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter password \"Meena@888\" in the password field",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter confirm password \"Meena@888\" in the confirm password field",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should able to Register successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});