package demo.automationtesting.com;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.automationtesting.com.pages.RegistrationPage;

public class Register_StepDef {
    @Given("^user is on Automation Demo Site$")
    public void userIsOnAutomationDemoSite() {
    }

    @When("^user enter first name \"([^\"]*)\" in the firstname field$")
    public void userEnterFirstNameInTheFirstnameField(String firstname)  {
        new RegistrationPage().enterFirstName(firstname);
    }

    @And("^user enter last name \"([^\"]*)\" in the lastname field$")
    public void userEnterLastNameInTheLastnameField(String lastname) {
        new RegistrationPage().enterLastName(lastname);
    }

    @And("^user enter email \"([^\"]*)\" in the email field$")
    public void userEnterEmailInTheEmailField(String email) {
        new RegistrationPage().enterEmailAdd(email);
    }

    @And("^user enter phone number \"([^\"]*)\" in the firstname field$")
    public void userEnterPhoneNumberInTheFirstnameField(String phonenumber)  {
        new RegistrationPage().enterPhoneNumber(phonenumber);
    }

    @And("^user select gender$")
    public void userSelectGender() {
        new RegistrationPage().selectGenderRadioButton();
    }

    @And("^user select country$")
    public void userSelectCountry() {
        new RegistrationPage().selectCountryFromDropDown();
    }

    @And("^user select year \"([^\"]*)\"from the dropdown field$")
    public void userSelectYearFromTheDropdownField(String year) {
       new RegistrationPage().selectYear(year);
    }
    @And("^user select month \"([^\"]*)\"from the dropdown field$")
    public void userSelectMonthFromTheDropdownField(String month) {
        new RegistrationPage().selectMonth(month);
    }

    @And("^user select day \"([^\"]*)\"from the dropdown field$")
    public void userSelectDayFromTheDropdownField(String day) {
        new RegistrationPage().selectDateOfBirthDay(day);
    }

    @And("^user enter password \"([^\"]*)\" in the password field$")
    public void userEnterPasswordInThePasswordField(String password) {
        new RegistrationPage().enterPassword(password);
    }

    @And("^user enter confirm password \"([^\"]*)\" in the confirm password field$")
    public void userEnterConfirmPasswordInTheConfirmPasswordField(String confirmpassword){
        new RegistrationPage().enterConfirmedPassword(confirmpassword);
    }

    @And("^user click on Submit button$")
    public void userClickOnSubmitButton() {
        new RegistrationPage().selectSubmitBtn();
    }

    @Then("^User should able to Register successfully$")
    public void userShouldAbleToRegisterSuccessfully() {
        new RegistrationPage().verifyUserRegisteredSuccessfully();
    }
}
