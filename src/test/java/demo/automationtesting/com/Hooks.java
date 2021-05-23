package demo.automationtesting.com;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import demo.automationtesting.com.basepage.BasePage;
import demo.automationtesting.com.browserselector.BrowserSelector;
import demo.automationtesting.com.loadproperty.LoadProperty;

public class Hooks extends BasePage {
    BrowserSelector browserSelector=new BrowserSelector();
    String browser=new LoadProperty().getProperty("browser");

    @Before()
    public void setUp(){
        browserSelector.selectBrowsers(browser);
    }
    @After()
    public void tearDown(){
      //driver.quit();
    }
}
