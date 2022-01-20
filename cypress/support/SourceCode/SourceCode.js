import { masterCreationPageSelectors } from '../PageSelectors/masterCreationPageSelectors.js';
import { practicePageSelectors } from '../PageSelectors/practicePageSelectors.js';
import { dispenserData } from '../PageData/dispenserData.js';
import { loginData } from '../PageData/loginData.js';
import { practiceData } from '../PageData/practiceData.js';
import { masterCreationData } from '../PageData/masterCreationData.js';
import { dispenserPageSelectors } from '../PageSelectors/dispenserPageSelectors.js';
import { loginPageSelectors } from '../PageSelectors/loginPageSelectors.js';
import { patientPageSelectors } from '../PageSelectors/patientPageSelectors.js';
import { PatientData } from '../PageData/PatientData.js';

const faker = require("faker");
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = "cypress." + firstName + "@malinator.com";

var date = new Date();
var birthDate = (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear())

const emailAddress = "@mailinator.com";
const PhoneNumber = faker.phone.phoneNumber();
const PhoneNumberFormat = faker.phone.phoneNumber();
const insurerPhoneNumber = faker.phone.phoneNumberFormat(1);
const allergiesName = "Cypress " + faker.name.firstName() + "_Allergies";

Cypress.Commands.add('ChangeProductPrice', () => {
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.productListSettingId); // click on product list   
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first record from list 
	cy.clickOnElementUsingXpath(dispenserPageSelectors.updateButtonId); // Click on update button
	cy.clickOnElementUsingXpath(dispenserPageSelectors.ChangePriceButtonId);  // Click on change item price
	cy.wait(1000)
	cy.clickOnElementUsingText(dispenserData.closeButton, practiceData.buttonTag); // click on the close button
});

Cypress.Commands.add('AddUser', () => {
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.manageUserSettingId); // click on account setting
	cy.clickOnElementUsingXpath(loginPageSelectors.addNewUserID); // click on add user button
	cy.enterText(practicePageSelectors.firstName, firstName); // enter first name of admin
	cy.enterText(practicePageSelectors.lastName, lastName); // enter last name of admin
	cy.enterText(loginPageSelectors.emailField, firstName + emailAddress); // enter admin email address
	cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); //enter phone number of patient
	cy.SelectAccounttype()
	cy.clickOnElementTextWithForce(loginData.usersubmit)
	cy.clickOnElementTextWithForce(loginData.dismissButton)
});

Cypress.Commands.add('CreatePatient', () => {
	cy.clickOnElementTextWithForce(dispenserData.patientTab) // Click on patient tab
	cy.clickOnElementTextWithForce(practiceData.addPatientLink)
	cy.enterText(practicePageSelectors.firstName, "Cypress " + firstName); // enter first name of patient 
	cy.enterText(practicePageSelectors.lastName, lastName, 'Enter lastName'); // enter last name of patient 
	cy.enterText(practicePageSelectors.dateOfBirth, birthDate); // enter date of birth of patient
	cy.readFile("cypress/fixtures/Data.json").then((profile) => {
		profile.Patient_fullName = "Cypress " + firstName + " " + lastName,
			profile.patientNameDOB = "Cypress " + firstName + " " + lastName + " (" + birthDate + ")",
			profile.Patient_Email = "cypress." + firstName.toLocaleLowerCase() + emailAddress.toLocaleLowerCase(),
			cy.writeFile('cypress/fixtures/Data.json', profile)
	})
	cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); //enter phone number of patient
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(loginPageSelectors.emailField, profile.Patient_Email) // Enter email of patient
	})
	cy.clickOnElement(practicePageSelectors.buttonId); // click on submit button
	cy.wait(2000)
	cy.get('body').then($element => {
		if ($element.text().includes('Dismiss')) {
			cy.clickOnElementTextWithForce(loginData.dismissButton)
			cy.reload()
			cy.enterText(practicePageSelectors.firstName, "Cypress " + firstName); // enter first name of patient 
			cy.enterText(practicePageSelectors.lastName, lastName, 'Enter lastName'); // enter last name of patient 
			cy.enterText(practicePageSelectors.dateOfBirth, '02/05/1982'); // enter date of birth of patient
			cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); //enter phone number of patient
			cy.readFile("cypress/fixtures/Data.json").then((profile) => {
				profile.Patient_Email = email.toLocaleLowerCase()
				cy.writeFile('cypress/fixtures/Data.json', profile)
				cy.enterText(loginPageSelectors.emailField, profile.Patient_Email) // Enter email of patient
			})
			cy.clickOnElement(practicePageSelectors.buttonId); // click on submit button
		}
	})
	cy.clickOnElementUsingXpath(practicePageSelectors.closeButton); // click on the Create an Order for this Patient button
});

Cypress.Commands.add('EditPatientDetails', () => {
	cy.wait(2000)
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.get(practicePageSelectors.patientSearch).type(profile.Patient_fullName);
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementUsingXpath(practicePageSelectors.patientEditButton) // Click on edit button for edit details
	cy.get('body').then((body) => {
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.enterText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.clearText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin)
			cy.enterText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin); // enter security pin number
			cy.clearText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss)
			cy.enterText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss); // enter shipping details
			cy.clearText(dispenserPageSelectors.AddressCity, dispenserData.cityName)
			cy.enterText(dispenserPageSelectors.AddressCity, dispenserData.cityName); // enter city name
			cy.selectState(); // select state
			cy.clearText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode)
			cy.enterText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode); // enter country zip code
			cy.clickOnElementUsingXpath(dispenserPageSelectors.billingAddressCheckBox); // click on the check box
			cy.clearText(dispenserPageSelectors.BillingLine1, dispenserData.shippingAdderss)
			cy.enterText(dispenserPageSelectors.BillingLine1, dispenserData.shippingAdderss); // enter shipping details
			cy.clearText(dispenserPageSelectors.BillingCity, dispenserData.cityName)
			cy.enterText(dispenserPageSelectors.BillingCity, dispenserData.cityName); // enter city name
			cy.stateValue(); // select state
			cy.clearText(dispenserPageSelectors.BillingZipCode, dispenserData.zipCode)
			cy.enterText(dispenserPageSelectors.BillingZipCode, dispenserData.zipCode); // enter country zip code
			cy.PayorName(); // Select Payor from dropdown
			cy.enterText(dispenserPageSelectors.PayorAccountNo, dispenserData.PayorAccNo) // Enter Insurance account number
			cy.enterText(dispenserPageSelectors.PayorGroupNo, dispenserData.PayorGroupNo) // Enter payor group number
			cy.enterText(dispenserPageSelectors.PayorRX_binNo, dispenserData.PayorRX_binNo) // Enter payor RX_Bin number
			cy.enterText(dispenserPageSelectors.PayorPC_No, dispenserData.PayorPCnNo) // Enter payor PCN number
			cy.enterText(dispenserPageSelectors.PayorPhoneNo, PhoneNumber) // Enter payor phone number
			cy.clickOnElementTextWithForce(practiceData.SaveandExitbutton); // click on Save and Exit button
			cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag); // click on dismiss button
			cy.clickOnElement(dispenserPageSelectors.backLink) // Click on Back To Order
		}
		else {
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.enterText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.clearText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin)
			cy.enterText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin); // enter security pin number
			cy.clearText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss)
			cy.enterText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss); // enter shipping details
			cy.clearText(dispenserPageSelectors.AddressCity, dispenserData.cityName)
			cy.enterText(dispenserPageSelectors.AddressCity, dispenserData.cityName); // enter city name
			cy.selectState(); // select state
			cy.clearText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode)
			cy.enterText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode); // enter country zip code
			cy.clickOnElementUsingXpath(dispenserPageSelectors.billingAddressCheckBox); // click on the check box
			cy.findElementWithIndexAndEnterText(dispenserPageSelectors.AddressLine1, dispenserData.billingAdderss, 1);
			cy.findElementWithIndexAndEnterText(dispenserPageSelectors.AddressCity, dispenserData.cityName, 1); // enter city name 
			cy.stateValue(); // select state 
			cy.findElementWithIndexAndEnterText(dispenserPageSelectors.AddressZipCode, dispenserData.billingZipCode, 1); // enter country zip code
			cy.PayorName(); // Select Payor from dropdown
			cy.enterText(dispenserPageSelectors.PayorAccountNo, dispenserData.PayorAccNo) // Enter Insurance account number
			cy.enterText(dispenserPageSelectors.PayorGroupNo, dispenserData.PayorGroupNo) // Enter payor group number
			cy.enterText(dispenserPageSelectors.PayorRX_binNo, dispenserData.PayorRX_binNo) // Enter payor RX_Bin number
			cy.enterText(dispenserPageSelectors.PayorPC_No, dispenserData.PayorPCnNo) // Enter payor PCN number
			cy.enterText(dispenserPageSelectors.PayorPhoneNo, PhoneNumber) // Enter payor phone number
			cy.clickOnElementTextWithForce(practiceData.SaveandExitbutton); // click on Save and Exit button
			cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag); // click on dismiss button
			cy.clickOnElement(dispenserPageSelectors.backLink) // Click on Back To Order
		}
	})
});

Cypress.Commands.add('patientMainSearch', () => {
	cy.clickOnElement(practicePageSelectors.mainSearchButton)
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.get(practicePageSelectors.findPatientId).click().type(profile.Patient_fullName)
	})
	cy.clickOnElement(practicePageSelectors.searchButtonIcon)
	cy.readFile("cypress/fixtures/Data.json").then((profile) => {
		cy.get('body').should('contain', profile.Patient_Email)
		cy.clickOnElementUsingText(profile.Patient_Email); // click on the table data
	})
	cy.clickOnElementUsingText(practiceData.ViewDetailsOfOrder)
	cy.get(practicePageSelectors.verifyProduct, { timeout: 30000 }).should('be.exist');
})

Cypress.Commands.add("VerifyOrderDetails", () => {
	cy.clickOnElement(practicePageSelectors.OrdersTab)
	cy.clickOnElement(practicePageSelectors.expandOrder)
	cy.clickOnElementUsingXpath('//table/tbody/tr[1]/td[2]/a')
	cy.verifyTextToBePresent(dispenserData.orderDetailsTitle)
})

Cypress.Commands.add("VerifyForgetPasswordEmail", () => {
	cy.clickOnElement(patientPageSelectors.GoButton)
	cy.wait(2000)
	cy.verifyTextToBePresent(PatientData.Verifyforgetmail);
	cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.ForgetpasswordContent, 0);
	cy.wait(2000)
	cy.get('#html_msg_body').then(function ($ele) {
		var ifele = $ele.contents().find('div.message > div:nth-child(1) > div:nth-child(1) > p:nth-child(8) > a');
		cy.wrap(ifele).then(function (ele) {

			const url = ele.prop('href');
			cy.readFile("cypress/fixtures/Data.json").then((profile) => {
				profile.url = url
				cy.writeFile("cypress/fixtures/Data.json", profile);
			})
		})
	})
})

Cypress.Commands.add('PatientApproval', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.get(practicePageSelectors.patientSearch).type(profile.Patient_fullName);
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementTextWithForce(practiceData.patientApprovalButton) // Click on confirm approval
	cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on Dismiss button
	cy.clickOnElement(dispenserPageSelectors.backLink) // Click on Back To Order
});

Cypress.Commands.add('TransferOrder', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.get(practicePageSelectors.patientSearch).type(profile.Patient_fullName);
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementTextWithForce(practiceData.transferOrderButton) // Click on Transfer order
	cy.clickOnElementTextWithForce(dispenserData.yesbutton, practiceData.buttonTag) // Click on Yes button
	cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button
	cy.clickOnElementUsingXpath(dispenserPageSelectors.addNotesButton); // click on the add notes button
	cy.clickOnElementUsingXpath(dispenserPageSelectors.NoteCheckbox) // Click On Notes Check box
	cy.findElementWithIndexAndEnterText(dispenserPageSelectors.textAreaField, dispenserData.notesMessage, 0); // enter notes message
	cy.clickOnElementUsingText(loginData.saveButtonName, practiceData.buttonTag); // click on the save button
	cy.verifyTextToBePresent(dispenserData.notesMessage); // verify the notes
	cy.clickOnElement(dispenserPageSelectors.backLink) // Click on Back To Order
});

Cypress.Commands.add('ApproveOrderByDoctor', () => {
	cy.wait(3000)
	cy.clickOnElementUsingXpathwithIndex(dispenserPageSelectors.approveButtonId, 0); // click on approve button
	cy.verifyTextToBePresent(masterCreationData.orderVerifyStatus);
	cy.clickOnElementUsingText(loginData.yesButtonName, practiceData.buttonTag); // click on the yes button
	cy.verifyTextToBePresent(masterCreationData.successfulOrderApproval);
	cy.clickOnElementUsingText(dispenserData.closeButton, practiceData.buttonTag); // click on the close button
});

Cypress.Commands.add('ProcessPayment', () => {
	cy.wait(2000)
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(practicePageSelectors.patientSearch, profile.Patient_fullName); // Enter name in search bar
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementUsingXpath(dispenserPageSelectors.processPaymentButton);
	cy.verifyTextToBePresent('Congratulations, payment has been successfully processed!');
	cy.clickOnElement(dispenserPageSelectors.crossbuttonId);
	cy.verifyTextToBePresent(dispenserData.prescriptionAndOrderDetailsPage); //verify the shipping details 
	cy.verifyTextToBePresent(dispenserData.shippingAdderss); //verify the shipping details 
	cy.verifyTextToBePresent(dispenserData.cityName); // verify the city name
	cy.verifyTextToBePresent(dispenserData.zipCode); // verify the zip code of country
	cy.verifyTextToBePresent(dispenserData.instructionMessage);
});

Cypress.Commands.add('CreatePostageLabel', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(practicePageSelectors.patientSearch, profile.Patient_fullName); // Enter name in search bar
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementUsingXpath(dispenserPageSelectors.createPostageLabelButton); // verify the create costage label
	cy.clickOnElementUsingXpath(dispenserPageSelectors.createLabel); // Click on Create label
	cy.clickOnElementTextWithForce(dispenserData.printLabel) // Click on Print Postage Label
	cy.clickOnElement(dispenserPageSelectors.crossbuttonId); // Click on Cross button
	cy.clickOnElement(dispenserPageSelectors.backLink) // Click on Back To Order
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.signOutButtonId); // click on sign-Out button
});

Cypress.Commands.add('ConfirmCourierPickUp', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(practicePageSelectors.patientSearch, profile.Patient_fullName); // Enter name in search bar
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementUsingXpath(dispenserPageSelectors.ConfirmCourier) // Click on Confirm Courier Pick-Up
	cy.clickOnElementTextWithForce(loginData.dismissButton) // Click on Dismiss button
});

Cypress.Commands.add('confirmPickupPerson', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(practicePageSelectors.patientSearch, profile.Patient_fullName); // Enter name in search bar
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementUsingXpath(dispenserPageSelectors.confirmPickupPerson) // Click on Confirm Courier Pick-Up
	cy.clickOnElementTextWithForce(loginData.dismissButton) // Click on Dismiss button
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.signOutButtonId); // click on sign-Out button
});

Cypress.Commands.add('CompleteOrder', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(practicePageSelectors.patientSearch, profile.Patient_fullName); // Enter name in search bar
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.clickOnElementUsingXpath(dispenserPageSelectors.completeButton) // Click on Complete button
	cy.clickOnElementTextWithForce(loginData.dismissButton) // Click on Dismiss button
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.signOutButtonId); // click on sign-Out button
});

Cypress.Commands.add('OrderComplete', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(practicePageSelectors.patientSearch, profile.Patient_fullName); // Enter name in search bar
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.get(dispenserPageSelectors.SelectActionButton).click()
	cy.contains('Complete').click();
	cy.enterText(dispenserPageSelectors.ReasonTextbox, dispenserData.CompleteOrderNotes)
	cy.clickOnElementUsingXpath(practicePageSelectors.submitButtonId)
	cy.clickOnElementTextWithForce(loginData.dismissButton) // Click on Dismiss button
	cy.clickOnElement(dispenserPageSelectors.backLink) // Click on Back To Order
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.signOutButtonId); // click on sign-Out button
});

Cypress.Commands.add('CancelOrder', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(practicePageSelectors.patientSearch, profile.Patient_fullName); // Enter name in search bar
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.get(dispenserPageSelectors.SelectActionButton).click()
	cy.contains('Cancel').click();
	cy.enterText(dispenserPageSelectors.ReasonTextbox, dispenserData.CancelOrderNotes)
	cy.clickOnElementUsingXpath(practicePageSelectors.submitButtonId)
	cy.clickOnElementTextWithForce(loginData.dismissButton) // Click on Dismiss button
	cy.clickOnElement(dispenserPageSelectors.backLink) // Click on Back To Order
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.signOutButtonId); // click on sign-Out button
});

Cypress.Commands.add('OrderSendOutOfNetwork', () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.enterText(practicePageSelectors.patientSearch, profile.Patient_fullName); // Enter name in search bar
	})
	cy.wait(3000)
	cy.clickOnElement(practicePageSelectors.patientorder) // Click on first order from search results
	cy.get(dispenserPageSelectors.SelectActionButton, { timeout: 10000 }).click()
	cy.wait(2000)
	cy.xpath('//*[text()="Send out of Network"]').click();
	cy.enterText(dispenserPageSelectors.ReasonTextbox, dispenserData.OutofNetworkOrderNotes)
	cy.clickOnElementUsingXpath(practicePageSelectors.submitButtonId)
	cy.clickOnElementTextWithForce(loginData.dismissButton) // Click on Dismiss button
	cy.clickOnElement(dispenserPageSelectors.backLink) // Click on Back To Order
	cy.clickOnElement(loginPageSelectors.mainDashBoardLink); //click on the account button link
	cy.clickOnElementUsingXpath(loginPageSelectors.signOutButtonId); // click on sign-Out button
});

Cypress.Commands.add("ScrapeURL", () => {
	cy.clickOnElement(patientPageSelectors.GoButton)
	cy.verifyTextToBePresent(masterCreationPageSelectors.VerifyEmail);
	cy.clickOnElementUsingXpathwithIndex(masterCreationPageSelectors.ClickOnEmail, 0);
	cy.clickOnElement('#pills-textbuthtml-tab')
	cy.get('#texthtml_msg_body').then(function ($ele) {
		var ifele = $ele.contents().find('body:nth-child(2) > a:nth-child(7)');
		cy.wrap(ifele).then(function (ele) {

			const url = ele.prop('href');
			cy.readFile("cypress/fixtures/Data.json").then((profile) => {
				profile.url = url
				cy.writeFile("cypress/fixtures/Data.json", profile);
			})
		})
	})
})

Cypress.Commands.add("SetPassword", () => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.visit(profile.url)
	})
	cy.enterText(loginPageSelectors.passwordField, loginData.PracticePassword)
	cy.enterText(loginPageSelectors.confirmPasswordId, loginData.PracticePassword)
	cy.clickOnElementUsingXpath(loginPageSelectors.SetPassword)
	cy.verifyTextToBePresent(masterCreationData.PasswordConfirmation)
	cy.clickOnElement(practicePageSelectors.closeButtonId); // Close button not working
})

Cypress.Commands.add('OnetimePracticeIntercept', () => {
	cy.intercept({
		method: 'POST',
		url: loginData.ProductURL + loginData.OrderAPI + loginData.PracticeURL + loginData.Order,
	}).as('ordersCall')
})

Cypress.Commands.add('OnetimeDispenserIntercept', () => {
	cy.intercept({
		method: 'POST',
		url: loginData.ProductURL + loginData.OrderAPI + loginData.DispenserURL + loginData.Order,
	}).as('ordersCall')
})

Cypress.Commands.add('SubscriptionPracticeIntercept', () => {
	cy.intercept({
		method: 'POST',
		url: loginData.ProductURL + loginData.OrderAPI + loginData.PracticeURL + loginData.SubscriptionAPI,
	}).as('ordersCall')
})

Cypress.Commands.add('SubscriptionDispenserIntercept', () => {
	cy.intercept({
		method: 'POST',
		url: loginData.ProductURL + loginData.OrderAPI + loginData.DispenserURL + loginData.SubscriptionAPI,
	}).as('ordersCall')
})

Cypress.Commands.add('GetOrderID', () => {
	cy.wait('@ordersCall')
		.its('response.body')
		.then((body) => {
			const bodyData = JSON.parse(JSON.stringify(body))
			cy.readFile("cypress/fixtures/Data.json").then((profile) => {
				profile.OrderID = bodyData._id
				cy.writeFile('cypress/fixtures/Data.json', profile)
			})
		})
})