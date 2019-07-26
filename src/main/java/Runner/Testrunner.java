package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//reporting format ex.if we need xml format means .xml &//Pretty is used to check the cucmber steps in console

@CucumberOptions(
		format={"pretty","html:report/html","json:report/json/cucumber.json"}, 
		tags={"@SIT"},
		features = "src/main/java/Feature",
		glue={"Defination"}
		
		
		)

public class Testrunner extends AbstractTestNGCucumberTests {


}
