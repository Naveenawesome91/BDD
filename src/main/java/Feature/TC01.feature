@SIT
Feature: Check the automation site 

Scenario: TC01

Given login to the demo automation testing with url "http://demo.automationtesting.in/"

When click skip sign-in

Then Register page should displayed


And close the browser

@Firstname
Scenario Outline: TC02

Given login to the demo automation testing with url "http://demo.automationtesting.in/"

When click skip sign-in

Then Register page should displayed

Then user Enters "<username>"

And close the browser

Examples:

|username|
|Naveen|
|Naveen1|




