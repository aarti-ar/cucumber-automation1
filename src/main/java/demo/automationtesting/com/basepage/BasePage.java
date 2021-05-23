package demo.automationtesting.com.basepage;

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

//Webdriver Initialization
public class BasePage {

    public static WebDriver driver;

    public BasePage(){ //constructor
        PageFactory.initElements(driver,this);
        PropertyConfigurator.configure(System.getProperty("user.dir")+"src/test/java/resources/propertiesfile/log4j.properties");

    }
}
