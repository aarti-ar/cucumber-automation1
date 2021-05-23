package demo.automationtesting.com.browserselector;

import demo.automationtesting.com.basepage.BasePage;
import demo.automationtesting.com.loadproperty.LoadProperty;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

//Browser selection

public class BrowserSelector extends BasePage {
    private static Logger log = LogManager.getLogger(BrowserSelector.class.getName());
    String baseUrl=new LoadProperty().getProperty("baseUrl");
    String projectPath=System.getProperty("user.dir");

    public void selectBrowsers(String browser){
        if(browser.equalsIgnoreCase("chrome")){
            System.setProperty("webdriver.chrome.ChromeDriver",projectPath +"drivers/chromedriver.exe");
            driver=new ChromeDriver();
            driver.get(baseUrl);
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        }else if(browser.equalsIgnoreCase("firefox")){
            System.setProperty("webdriver.chrome.driver",projectPath +"C:\\JavaSeleniumAutomation\\cucumber_automationtesting_registration_practice\\drivers\\geckodriver.exe");
            driver=new ChromeDriver();
            driver.get(baseUrl);
            driver.manage().window().maximize();
        }else {
            System.out.println("Wrong browser Name");
        }
    }
}
