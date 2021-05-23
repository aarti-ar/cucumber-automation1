package demo.automationtesting.com.pages;

import demo.automationtesting.com.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import sun.rmi.runtime.Log;

public class RegistrationPage extends Util {
    private static final Logger log= LogManager.getLogger(RegistrationPage.class.getName());

    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement _fName;
    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement _lName;
    @FindBy(xpath = "//input[@type='email']")//input[@class='form-control ng-pristine ng-valid-email ng-invalid ng-invalid-required ng-touched']
    WebElement _eMail;
    @FindBy(xpath = "//input[@type='tel']")//input[@ng-model='Phone']
    WebElement _phoneNumber;
    @FindBy(xpath = "//input[@value='FeMale']")
    WebElement _female;
    @FindBy(xpath = "//select[@id='countries']")
    WebElement _country;
    @FindBy(xpath = "//select[@id='yearbox']")
    WebElement _year;
    @FindBy(xpath = "//select[@placeholder='Month']")
    WebElement _month;
    @FindBy(xpath = "//select[@id='daybox']")
    WebElement _day;
    @FindBy(xpath = "//input[@id='firstpassword']")
    WebElement _passWord;
    @FindBy(xpath = "//input[@id='secondpassword']")
    WebElement _confirmPassword;
    @FindBy(xpath = "//button[normalize-space()='Submit']")
    WebElement _submitBtn;

    public void enterFirstName(String fName){
        log.info("Enter First Name");
        sendTextToElement(_fName,fName);
    }
    public void enterLastName(String lName){
        log.info("Enter Last Name");
        sendTextToElement(_lName,lName);
    }
    public void enterEmailAdd(String email){
        log.info("Enter Email Address");
        String randomEmail=randomStringGenerator()+ "@gmail.com";
        sendTextToElement(_eMail,randomEmail);
    }
    public void enterPassword(String password){
        log.info("Enter password Address");
        sendTextToElement(_passWord,password);
    }
    public void enterConfirmedPassword(String confirmedPassword){
        log.info("Enter confirmed password");
        sendTextToElement(_confirmPassword,confirmedPassword);
    }
    public void enterPhoneNumber(String phoneNum){
        log.info("Enter Phone Number");
        sendTextToElement(_phoneNumber,phoneNum);
    }
    public void selectGenderRadioButton(){
        log.info("Select Radio Button");
        clickOnElement(_female);
    }
    public void selectCountryFromDropDown(){
        log.info("Select Country From Dropdown ");
        selectByValueFromDropDown(_country,"United Kingdom");
    }
    public void selectYear(String year){
        log.info("Select Year");
        sendTextToElement(_year,year);
    }
    public void selectMonth(String month){
        log.info("Select Month");
        sendTextToElement(_month,month);
    }
    public void selectDateOfBirthDay(String date){
        log.info("Select Date");
        sendTextToElement(_day,date);
    }
   public void selectSubmitBtn(){
        log.info("Enter Submit Button");
        clickOnElement(_submitBtn);
   }
   public void verifyUserRegisteredSuccessfully(){
        log.info("Verify Registration Successfully");
        String expectedTitle="Register";
        String actualTitle=driver.getTitle();
        verifyActualAndExpectedJunit(expectedTitle,actualTitle);
   }
}
