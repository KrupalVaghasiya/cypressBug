import { practicePageSelectors } from '../PageSelectors/practicePageSelectors.js';
import { dispenserData } from '../PageData/dispenserData.js';
import { loginData } from '../PageData/loginData.js';
import { practiceData } from '../PageData/practiceData.js';
import { masterCreationData } from '../PageData/masterCreationData.js';
import { dispenserPageSelectors } from '../PageSelectors/dispenserPageSelectors.js';
import { loginPageSelectors } from '../PageSelectors/loginPageSelectors.js';

Cypress.Commands.add('AddUserValidation', () => {
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.manageUserSettingId); // click on sign-Out button
	cy.clickOnElementTextWithForce(loginData.addUsers); //click on the account button link
	cy.verifyElementExists(loginPageSelectors.userfirst_name); // enter first name of admin
	cy.verifyElementExists(loginPageSelectors.userlast_name); // enter last name of admin
	cy.verifyElementExists(loginPageSelectors.emailField)
	cy.enterText(loginPageSelectors.emailField, "Legrand.com"); // enter admin email address
	cy.verifyElementExists(practicePageSelectors.phoneNumber)
	cy.enterText(practicePageSelectors.phoneNumber, "5952626"); //enter phone number of patient
	cy.clickOnElementTextWithForce(loginData.usersubmit)
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert); // verify the required field on the page
	cy.verifyTextToBePresent(practiceData.invalidPhoneNumberMessage); // verify the Invalid phone number field on the page
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert) // verify the Invalid Email Address field on the page
});

Cypress.Commands.add('CreatePatientValidation', () => {
	cy.clickOnElementTextWithForce(dispenserData.patientTab) // Click on patient tab
	cy.clickOnElementTextWithForce(practiceData.addPatientLink)
	cy.verifyElementExists(practicePageSelectors.firstName); // enter first name of patient 
	cy.verifyElementExists(practicePageSelectors.lastName); // enter last name of patient 
	cy.verifyElementExists(practicePageSelectors.dateOfBirth); // enter date of birth of patient
	cy.enterText(practicePageSelectors.dateOfBirth, "15/26/2022") // Check Date of Birth Validation
	cy.verifyElementExists(practicePageSelectors.phoneNumber); //enter phone number of patient
	cy.enterText(practicePageSelectors.phoneNumber, "59846647") // Enter Wrong Phone number
	cy.verifyElementExists(loginPageSelectors.emailField) // Enter email of patient
	cy.enterText(loginPageSelectors.emailField, "Cypress.com") // Enter Wrong Email
	cy.PayorName(); // Select Payor from dropdown
	cy.clickOnElement(practicePageSelectors.buttonId); // click on submit button)
	cy.verifyTextToBePresent(practiceData.InvalidBirthDateAlert) // Check Invalidate Birth Date Validation
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert); // verify the required field on the page
	cy.verifyTextToBePresent(practiceData.invalidPhoneNumberMessage); // verify the Invalid phone number field on the page
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert) // verify the Invalid Email Address field on the page
});

Cypress.Commands.add('OnetimePaymentOptionValidation', () => {
	cy.Patient()
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElementUsingText(practiceData.SelectButton, practiceData.buttonTag); // click on the create new Rx
	cy.searchMedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.clickOnElementUsingText(practiceData.providePaymentName, practiceData.buttonTag); // click on Provide payment button
<<<<<<< HEAD
	cy.verifyElementExists(dispenserPageSelectors.cardDetailsNameInput); // enter the name as on card
	cy.enterText(dispenserPageSelectors.cardDetailsCardNoInput, "86587496854568"); // enter credit card number
	cy.verifyElementExists(dispenserPageSelectors.cardDetailsSecurityCodeInput); // enter security pin number
	cy.enterText(dispenserPageSelectors.cardDetailsAddressField, dispenserData.shippingAdderss, "Enter shipping address"); // enter shipping details
	cy.enterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName); // enter city name
	cy.selectState(); // select state
	cy.enterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.zipCode); // enter country zip code
	cy.clickOnElementUsingXpath(dispenserPageSelectors.billingAddressCheckBox); // click on the check box
	cy.findElementWithIndexAndEnterText(dispenserPageSelectors.cardDetailsAddressField, dispenserData.billingAdderss, 1, "Enter shipping address"); // enter shipping details
	cy.findElementWithIndexAndEnterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName, 1); // enter city name 
	cy.selectState(); // select state 
	cy.findElementWithIndexAndEnterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.billingZipCode, 1); // enter country zip code
	cy.PayorName(); // Select Payor from dropdown
	cy.enterText(dispenserPageSelectors.PayorAccountNo, dispenserData.PayorAccNo) // Enter Insurance account number
	cy.enterText(dispenserPageSelectors.PayorGroupNo, dispenserData.PayorGroupNo) // Enter payor group number
	cy.enterText(dispenserPageSelectors.PayorRX_binNo, dispenserData.PayorRX_binNo) // Enter payor RX_Bin number
	cy.enterText(dispenserPageSelectors.PayorPC_No, dispenserData.PayorPCnNo) // Enter payor PCN number
	cy.enterText(dispenserPageSelectors.PayorPhoneNo, PhoneNumber) // Enter payor phone number
=======
	//cy.verifyElementExists(dispenserPageSelectors.cardDetailsNameInput); // enter the name as on card
	//cy.enterText(dispenserPageSelectors.cardDetailsCardNoInput, "86587496854568"); // enter credit card number
	//cy.verifyElementExists(dispenserPageSelectors.cardDetailsSecurityCodeInput); // enter security pin number
	//cy.enterText(dispenserPageSelectors.cardDetailsAddressField, dispenserData.shippingAdderss, "Enter shipping address"); // enter shipping details
	//cy.enterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName); // enter city name
	//cy.selectState(); // select state
	//cy.enterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.zipCode); // enter country zip code
	//cy.clickOnElementUsingXpath(dispenserPageSelectors.billingAddressCheckBox); // click on the check box
	//cy.findElementWithIndexAndEnterText(dispenserPageSelectors.cardDetailsAddressField, dispenserData.billingAdderss, 1, "Enter shipping address"); // enter shipping details
	//cy.findElementWithIndexAndEnterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName, 1); // enter city name 
	//cy.selectState(); // select state 
	//cy.findElementWithIndexAndEnterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.billingZipCode, 1); // enter country zip code
	cy.PayorName(); // Select Payor from dropdown
	//cy.enterText(dispenserPageSelectors.PayorAccountNo, dispenserData.PayorAccNo) // Enter Insurance account number
	//cy.enterText(dispenserPageSelectors.PayorGroupNo, dispenserData.PayorGroupNo) // Enter payor group number
	//cy.enterText(dispenserPageSelectors.PayorRX_binNo, dispenserData.PayorRX_binNo) // Enter payor RX_Bin number
	//cy.enterText(dispenserPageSelectors.PayorPC_No, dispenserData.PayorPCnNo) // Enter payor PCN number
	//cy.enterText(dispenserPageSelectors.PayorPhoneNo, PhoneNumber) // Enter payor phone number
>>>>>>> origin/master
	cy.clickOnElementTextWithForce(practiceData.continueButton); // click on Continue button
	cy.verifyTextToBePresent(masterCreationData.InvalidInsurance) // Verify Alert Message
	cy.clickOnElementTextWithForce(loginData.dismissButton) // Click on Dismiss button
	cy.verifyTextToBePresent(masterCreationData.PaymentRequiredAlert); // verify the required field on the page
<<<<<<< HEAD
	cy.verifyTextToBePresent(practiceData.invalidPhoneNumberMessage); // verify the Invalid phone number field on the page
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert) // verify the Invalid Email Address field on the page
=======
	//cy.verifyTextToBePresent(practiceData.invalidPhoneNumberMessage); // verify the Invalid phone number field on the page
	//cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert) // verify the Invalid Email Address field on the page
>>>>>>> origin/master
})

Cypress.Commands.add('EditPatientValidation', () => {
	cy.wait(2000)
	cy.clickOnElement(practicePageSelectors.patientSearch) // Click on patient search bar
	cy.searchPatients(practicePageSelectors.patientSearch, "Cypress " + firstName + ' ' + lastName); // Enter name in search bar
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementUsingXpath(practicePageSelectors.patientEditButton) // Click on edit button for edit details
	cy.enterText(dispenserPageSelectors.cardDetailsNameInput, practiceData.nameOnCard); // enter the name as on card
	cy.enterText(dispenserPageSelectors.cardDetailsAddressField, dispenserData.shippingAdderss, "Enter shipping address"); // enter shipping details
	cy.clickOnElementUsingXpath(dispenserPageSelectors.billingAddressCheckBox); // click on the check box
<<<<<<< HEAD
	cy.findElementWithIndexAndEnterText(dispenserPageSelectors.cardDetailsAddressField, dispenserData.billingAdderss, 1, "Enter shipping address"); // enter shipping details
=======
	cy.findElementWithIndexAndEnterText(dispenserPageSelectors.cardDetailsAddressField,dispenserData.billingAdderss,1,"Enter shipping address"); // enter shipping details
>>>>>>> origin/master
	cy.PayorName(); // Select Payor from dropdown
	cy.clickOnElementTextWithForce(practiceData.SaveandExitbutton); // click on Save and Exit button
	cy.verifyTextToBePresent(masterCreationData.RequiredSelection);
	cy.verifyTextToBePresent(masterCreationData.PaymentRequiredAlert)
});