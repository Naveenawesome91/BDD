package Defination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefination {
	
	WebDriver driver;
	
	@Given("^login to the demo automation testing with url \"(.*)\"$")
	public void login(String url){
		
	System.setProperty("webdriver.chrome.driver","C:\\Users\\NaveenJanani\\Desktop\\jar\\chromedriver.exe");
	
	driver= new ChromeDriver();

	driver.manage().window().maximize();
	driver.get(url);
		
		
	}
	
	@When("^click skip sign-in$")
	public void skip(){
		driver.findElement(By.xpath("//button[@id='btn2']")).click();
		
	}
	@Then("^Register page should displayed$")
	public void registerpage(){
		
		Assert.assertTrue(driver.findElement(By.xpath("//input[@ng-model='FirstName']")).isDisplayed());
	}
	
		
	@Then ("^user Enters \"(.*)\"$")
	public void Firstname(String firstname){
	driver.findElement(By.xpath("//input[@ng-model='FirstName']")).sendKeys(firstname);
	}

	@And("^close the browser$")
	public void browserclose (){
	driver.close();
	}
	
	
	
}
