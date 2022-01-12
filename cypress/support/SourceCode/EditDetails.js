import { practicePageSelectors } from '../PageSelectors/practicePageSelectors.js';
import { dispenserData } from '../PageData/dispenserData.js';
import { loginData } from '../PageData/loginData.js';
import { practiceData } from '../PageData/practiceData.js';
import { dispenserPageSelectors } from '../PageSelectors/dispenserPageSelectors.js';
import { loginPageSelectors } from '../PageSelectors/loginPageSelectors.js';
import { masterCreationPageSelectors } from '../PageSelectors/masterCreationPageSelectors.js';

const faker = require('faker');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const emailAddress = faker.name.firstName() + "@getnada.com";
const adminEmailAddress = faker.name.firstName() + "admin@getnada.com";
const PhoneNumber = faker.phone.phoneNumber();
const PhoneNumberFormat = faker.phone.phoneNumber();
const insurerPhoneNumber = faker.phone.phoneNumberFormat(1);
const template = "Cypress " + faker.name.firstName() + "_Template";
const treatmentTemplate = "Cypress " + faker.name.firstName() + "_treatment_Template";
const allergiesName = "Cypress " + faker.name.firstName() + "_Allergies";

var num = Math.floor(100000 + Math.random() * 900000)
num = num.toString().substring(0, 4);

Cypress.Commands.add('EditAccountDetails', () => {
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.accountSettingId); // click on account setting
	cy.clickOnElementUsingXpath(practicePageSelectors.HubSessionEdit)
	cy.clickOnElement(loginPageSelectors.state_Id)
	cy.clickOnElementUsingText(practiceData.sessionTime)
	cy.clickOnElementUsingText(loginData.saveButtonName)
	cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
	cy.clickOnElementUsingXpath(practicePageSelectors.HubDetailsEdit)
	cy.clearText(loginPageSelectors.addressLine1)
	cy.enterText(loginPageSelectors.addressLine1, dispenserData.shippingAdderss)
	cy.clearText(loginPageSelectors.cityId)
	cy.enterText(loginPageSelectors.cityId, dispenserData.cityName)
	cy.ChangeState()
	cy.clearText(loginPageSelectors.zipAddress)
	cy.enterText(loginPageSelectors.zipAddress, dispenserData.zipCode)
	cy.clearText(loginPageSelectors.phoneNoFieldId)
	cy.enterText(loginPageSelectors.phoneNoFieldId, PhoneNumber)
	cy.clickOnElementUsingText(loginData.saveButtonName)
	cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
	cy.clickOnElementUsingXpath(practicePageSelectors.HubNPIEdit)
	cy.clearText(masterCreationPageSelectors.groupNpi_No_Id)
	cy.enterText(masterCreationPageSelectors.groupNpi_No_Id, num)
	cy.clickOnElementUsingText(loginData.saveButtonName)
	cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
	cy.clickOnElementUsingXpath(practicePageSelectors.HubLicence)
	cy.clearText(masterCreationPageSelectors.resellerLicsenceNo_Id)
	cy.enterText(masterCreationPageSelectors.resellerLicsenceNo_Id,num)
	cy.clickOnElementUsingText(loginData.saveButtonName)
	cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
});

Cypress.Commands.add('EditProductPrice', () => {
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.productListSettingId); // click on product list   
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first record from list 
	cy.get(dispenserPageSelectors.PriceTextbox).last().clear().type(num)
	cy.clickOnElementUsingXpath(dispenserPageSelectors.updateButtonId); // Click on update button
	cy.clickOnElementUsingXpath(dispenserPageSelectors.ChangePriceButtonId);  // Click on change item price
	cy.clickOnElementUsingText(dispenserData.closeButton, practiceData.buttonTag); // click on the close button
});

Cypress.Commands.add('EditUser', () => {
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.manageUserSettingId); // click on account setting
	cy.clickOnElement(practicePageSelectors.patientorder); // click on the table data
	cy.clearText(practicePageSelectors.firstName)
	cy.enterText(practicePageSelectors.firstName, loginData.newAdminFirstName); // enter first name of admin
	cy.clearText(practicePageSelectors.lastName)
	cy.enterText(practicePageSelectors.lastName, loginData.newAdminLastName); // enter last name of admin
	cy.clearText(loginPageSelectors.emailField)
	cy.enterText(loginPageSelectors.emailField, emailAddress); // enter admin email address
	cy.clearText(practicePageSelectors.phoneNumber)
	cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); //enter phone number of patient
	cy.clickOnElementTextWithForce(loginData.saveChangeButtonName)
	cy.clickOnElementTextWithForce(loginData.dismissButton)
});

Cypress.Commands.add('EditPatient', () => {
	cy.clickOnElementTextWithForce(dispenserData.patientTab) // Click on patient tab
	cy.clickOnElement(practicePageSelectors.patientorder); // click on the table data
	cy.clickOnElementUsingXpathfirst(loginPageSelectors.editLinkId) // Click on edit button for edit details
	cy.clearText(practicePageSelectors.firstName)
	cy.enterText(practicePageSelectors.firstName, "Cypress " + firstName); // enter first name of patient
	cy.clearText(practicePageSelectors.lastName)
	cy.enterText(practicePageSelectors.lastName, lastName, 'Enter lastName'); // enter last name of patient
	cy.clearText(practicePageSelectors.dateOfBirth)
	cy.enterText(practicePageSelectors.dateOfBirth, "12/12/2020"); // enter date of birth of patient
	cy.clearText(practicePageSelectors.phoneNumber)
	cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); //enter phone number of patient
	cy.clickOnElementUsingXpath(practicePageSelectors.addAllergiesButton);// click on the edit button for add allergies
	cy.clearText(practicePageSelectors.allergiesTextBox)
  	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
 	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.clearText(loginPageSelectors.addressLine1)
	cy.enterText(loginPageSelectors.addressLine1, dispenserData.changedShippingAdderss); // enter shipping details
	cy.clearText(loginPageSelectors.cityId)
	cy.enterText(loginPageSelectors.cityId, dispenserData.changedCityName); // enter city name
	cy.ChangeState(); // select state
	cy.clearText(loginPageSelectors.zipAddress)
	cy.enterText(loginPageSelectors.zipAddress, dispenserData.zipCode); // enter country zip code
	cy.clickOnElementUsingXpath(dispenserPageSelectors.billingAddressCheckBox); // click on the check box
	cy.clearText(loginPageSelectors.billingline1)
	cy.enterText(loginPageSelectors.billingline1, dispenserData.billingAdderss, 1, "Enter shipping address"); // enter shipping details
	cy.clearText(loginPageSelectors.billingCity)
	cy.enterText(loginPageSelectors.billingCity, dispenserData.cityName, 1); // enter city name 
	cy.ChangeState(); // select state 
	cy.clearText(loginPageSelectors.billingZip)
	cy.enterText(loginPageSelectors.billingZip, dispenserData.billingZipCode, 1); // enter country zip code
});

Cypress.Commands.add('OrderEditContent', () => {
	cy.clickOnElementTextWithForce(dispenserData.editButtonName)
	cy.clickOnElement(practicePageSelectors.productRemove)
	cy.EditMedicine()
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
})