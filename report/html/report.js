$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC01.feature");
formatter.feature({
  "line": 2,
  "name": "Check the automation site",
  "description": "",
  "id": "check-the-automation-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SIT"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "TC01",
  "description": "",
  "id": "check-the-automation-site;tc01",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "login to the demo automation testing with url \"http://demo.automationtesting.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click skip sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Register page should displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.automationtesting.in/",
      "offset": 47
    }
  ],
  "location": "Stepdefination.login(String)"
});
formatter.result({
  "duration": 10524713745,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.skip()"
});
formatter.result({
  "duration": 3786351129,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.registerpage()"
});
formatter.result({
  "duration": 332424251,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.browserclose()"
});
formatter.result({
  "duration": 285356702,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "TC02",
  "description": "",
  "id": "check-the-automation-site;tc02",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Firstname"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "login to the demo automation testing with url \"http://demo.automationtesting.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "click skip sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Register page should displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user Enters \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "check-the-automation-site;tc02;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 30,
      "id": "check-the-automation-site;tc02;;1"
    },
    {
      "cells": [
        "Naveen"
      ],
      "line": 31,
      "id": "check-the-automation-site;tc02;;2"
    },
    {
      "cells": [
        "Naveen1"
      ],
      "line": 32,
      "id": "check-the-automation-site;tc02;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "TC02",
  "description": "",
  "id": "check-the-automation-site;tc02;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SIT"
    },
    {
      "line": 15,
      "name": "@Firstname"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "login to the demo automation testing with url \"http://demo.automationtesting.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "click skip sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Register page should displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user Enters \"Naveen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.automationtesting.in/",
      "offset": 47
    }
  ],
  "location": "Stepdefination.login(String)"
});
formatter.result({
  "duration": 7012203738,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.skip()"
});
formatter.result({
  "duration": 3908778503,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.registerpage()"
});
formatter.result({
  "duration": 299477993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Naveen",
      "offset": 13
    }
  ],
  "location": "Stepdefination.Firstname(String)"
});
formatter.result({
  "duration": 363169914,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.browserclose()"
});
formatter.result({
  "duration": 2376713779,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TC02",
  "description": "",
  "id": "check-the-automation-site;tc02;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SIT"
    },
    {
      "line": 15,
      "name": "@Firstname"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "login to the demo automation testing with url \"http://demo.automationtesting.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "click skip sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Register page should displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user Enters \"Naveen1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.automationtesting.in/",
      "offset": 47
    }
  ],
  "location": "Stepdefination.login(String)"
});
formatter.result({
  "duration": 7304378827,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.skip()"
});
formatter.result({
  "duration": 4812542200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.registerpage()"
});
formatter.result({
  "duration": 226934000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Naveen1",
      "offset": 13
    }
  ],
  "location": "Stepdefination.Firstname(String)"
});
formatter.result({
  "duration": 341276864,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.browserclose()"
});
formatter.result({
  "duration": 2402327423,
  "status": "passed"
});
});