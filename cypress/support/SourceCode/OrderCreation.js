import { practicePageSelectors } from '../PageSelectors/practicePageSelectors.js';
import { dispenserData } from '../PageData/dispenserData.js';
import { practiceData } from '../PageData/practiceData.js';
import { dispenserPageSelectors } from '../PageSelectors/dispenserPageSelectors.js';
import { loginPageSelectors } from '../PageSelectors/loginPageSelectors'

const faker = require('faker');
const allergiesName = faker.name.firstName() + " Allergies";

// Onetime RX, OTC, And Compound order with skip payment
Cypress.Commands.add('CreatingRXOnetimelaterpayment', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createOnetimeOrder)
	cy.searchMedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	// cy.Changequantity(); // click on edit content dropdown
	// cy.get(dispenserPageSelectors.editContents).last().click().then(() => {
	// 	cy.get('body').type('{downarrow}{enter}').click()
	// })
	// cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	// cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	// cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	// cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	// cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	// cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
	// cy.verifyTextToBePresent(practiceData.Rx_productType); // verify the product type 
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	cy.wait(7000)
	cy.get('body').then((body) => {
		if (body.find('div.modal-footer > button').length > 0) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});

Cypress.Commands.add('CreatingOTCOnetimelaterpayment', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button	
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor	
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createOnetimeOrder)
	cy.searchOTCMedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get(dispenserPageSelectors.editContents).last().click().then((body) => {
		cy.get('body').type('{downarrow}{enter}').click()
	})
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
	cy.verifyTextToBePresent(practiceData.OTC_productType); // verify the product type 
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	cy.wait(7000)
	cy.get('body').then((body) => {
		if (body.find('div.modal-footer > button').length > 0) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
})


Cypress.Commands.add('CreatingCompoundOnetimelaterpayment', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createOnetimeOrder)
	cy.searchCompoundMedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get('body').then((body) => {
		if (body.find('#optional-row > td.expiration-date > div > div > div.react-datepicker-wrapper > div > input').length > 0) {
			cy.AddRefills()
			cy.clickOnElementUsingXpath(dispenserPageSelectors.RXExpirationDate)
			cy.clickOnElement('.react-datepicker__navigation')
			cy.clickOnElement('.react-datepicker__day--030')
		}
		cy.get(dispenserPageSelectors.editContents).last().click().then((body) => {
			cy.get('body').type('{downarrow}{enter}').click()
		})
		cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
		cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
		cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
		cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
		cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
		cy.AttachDocument(); // Attach Dropchart Documents
		cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
		cy.verifyTextToBePresent(practiceData.Compound_productType); // verify the product type 
		cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
		cy.GetOrderID()
		cy.wait(7000)
		cy.get('body').then((body) => {
			if (body.find('div.modal-footer > button').length > 0) {
				cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
			}
		})
	})
})

// Subscription RX, OTC, And Compound order with Skip Payment
Cypress.Commands.add('CreatingRXSubscriptionLaterPayment', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createSubscriptionOrder) // click on the Create Custom Plan
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#react-select-4--value-item').length > 0) {
			cy.clickOnElement('[class="Select-arrow"]')
			cy.clickOnElement('[aria-label="Every month"]')
		}
	})
	cy.findmedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});

Cypress.Commands.add('CreatingOTCSubscriptionLaterPayment', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createSubscriptionOrder) // click on the Create Custom Plan
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#react-select-4--value-item').length > 0) {
			cy.clickOnElement('[class="Select-arrow"]')
			cy.clickOnElement('[aria-label="Every month"]')
		}
	})
	cy.findOTCmedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});

Cypress.Commands.add('CreatingCompoundSubscriptionLaterPayment', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createSubscriptionOrder) // click on the Create Custom Plan
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#react-select-4--value-item').length > 0) {
			cy.clickOnElement('[class="Select-arrow"]')
			cy.clickOnElement('[aria-label="Every month"]')
		}
	})
	cy.findCompoundmedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get('body').then((body) => {
		if (body.find('#optional-row > td.expiration-date > div > div > div.react-datepicker-wrapper > div > input').length > 0) {
			cy.AddRefills()
			cy.clickOnElementUsingXpath(dispenserPageSelectors.RXExpirationDate)
			cy.clickOnElement('.react-datepicker__navigation')
			cy.clickOnElement('.react-datepicker__day--030')
		}
	})
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});

// Onetime RX, OTC, And Cmpound order with Provide payment
Cypress.Commands.add('CreatingRXOnetimePaymentOption', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createOnetimeOrder)
	cy.searchMedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	// cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	// cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	// cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	// cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	// cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	// cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
		}
	})
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
	cy.clickOnElementTextWithForce(practiceData.continueButton); // click on continue button
	cy.ServiseTypePickUpPerson() // Select Delivery type as Pick Up In Person
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
})

Cypress.Commands.add('CreatingOTCOnetimePaymentOption', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createOnetimeOrder)
	cy.searchOTCMedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
		}
	})
	cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
	cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
	cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
	cy.enterText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber); // enter credit card number
	cy.clearText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin)
	cy.enterText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin); // enter security pin number
	cy.clearText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss)
	cy.enterText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss); // enter shipping details
	cy.clearText(dispenserPageSelectors.AddressCity, dispenserData.cityName)
	cy.enterText(dispenserPageSelectors.AddressCity, dispenserData.cityName); // enter city name
	cy.selectState(); // select state
	cy.clearText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode)
	cy.enterText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode); // enter country zip code
	cy.clickOnElementTextWithForce(practiceData.continueButton); // click on continue button
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});

Cypress.Commands.add('CreatingCompoundOnetimePaymentOption', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createOnetimeOrder)
	cy.searchCompoundMedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get('body').then((body) => {
		if (body.find('#optional-row > td.expiration-date > div > div > div.react-datepicker-wrapper > div > input').length > 0) {
			cy.AddRefills()
			cy.clickOnElementUsingXpath(dispenserPageSelectors.RXExpirationDate)
			cy.clickOnElement('.react-datepicker__navigation')
			cy.clickOnElement('.react-datepicker__day--030')
		}
	})
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
		}
	})
	cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
	cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
	cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
	cy.enterText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber); // enter credit card number
	cy.clearText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin)
	cy.enterText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin); // enter security pin number
	cy.clearText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss)
	cy.enterText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss); // enter shipping details
	cy.clearText(dispenserPageSelectors.AddressCity, dispenserData.cityName)
	cy.enterText(dispenserPageSelectors.AddressCity, dispenserData.cityName); // enter city name
	cy.selectState(); // select state
	cy.clearText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode)
	cy.enterText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode); // enter country zip code
	cy.clickOnElementTextWithForce(practiceData.continueButton); // click on continue button
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});

//Subscription RX, OTC, And Compound order with provide payment
Cypress.Commands.add('CreatingRXSubscriptionPaymentOptionCourierService', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createSubscriptionOrder) // click on the Create Custom Plan
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#react-select-4--value-item').length > 0) {
			cy.clickOnElement('[class="Select-arrow"]')
			cy.clickOnElement('[aria-label="Every month"]')
		}
	})
	cy.findmedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.AddRefills()
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
		}
	})
	cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
	cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
	cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
	cy.enterText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber); // enter credit card number
	cy.clearText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin)
	cy.enterText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin); // enter security pin number
	cy.clearText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss)
	cy.enterText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss); // enter shipping details
	cy.clearText(dispenserPageSelectors.AddressCity, dispenserData.cityName)
	cy.enterText(dispenserPageSelectors.AddressCity, dispenserData.cityName); // enter city name
	cy.selectState(); // select state
	cy.clearText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode)
	cy.enterText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode); // enter country zip code
	cy.clickOnElementTextWithForce(practiceData.continueButton); // click on continue button
	cy.ServiseTypeCourierService() // Select Delivery type as Courier Service
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});

Cypress.Commands.add('CreateOTCSubscriptionPaymentOption', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createSubscriptionOrder) // click on the Create Custom Plan
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#react-select-4--value-item').length > 0) {
			cy.clickOnElement('[class="Select-arrow"]')
			cy.clickOnElement('[aria-label="Every month"]')
		}
	})
	cy.findOTCmedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
		}
	})
	cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
	cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
	cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
	cy.enterText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber); // enter credit card number
	cy.clearText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin)
	cy.enterText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin); // enter security pin number
	cy.clearText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss)
	cy.enterText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss); // enter shipping details
	cy.clearText(dispenserPageSelectors.AddressCity, dispenserData.cityName)
	cy.enterText(dispenserPageSelectors.AddressCity, dispenserData.cityName); // enter city name
	cy.selectState(); // select state
	cy.clearText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode)
	cy.enterText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode); // enter country zip code
	cy.clickOnElementTextWithForce(practiceData.continueButton); // click on continue button
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});

Cypress.Commands.add('CreateCompoundSubscriptionPaymentOption', () => {
	cy.clickOnElement(practicePageSelectors.CreateOrder).click(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(practicePageSelectors.createSubscriptionOrder) // click on the Create Custom Plan
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#react-select-4--value-item').length > 0) {
			cy.clickOnElement('[class="Select-arrow"]')
			cy.clickOnElement('[aria-label="Every month"]')
		}
	})
	cy.findCompoundmedicine() //search for Medicine
	cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
	cy.Changequantity(); // click on edit content dropdown
	cy.get('body').then((body) => {
		if (body.find('#optional-row > td.expiration-date > div > div > div.react-datepicker-wrapper > div > input').length > 0) {
			cy.AddRefills()
			cy.clickOnElementUsingXpath(dispenserPageSelectors.RXExpirationDate)
			cy.clickOnElement('.react-datepicker__navigation')
			cy.clickOnElement('.react-datepicker__day--030')
		}
	})
	cy.get(practicePageSelectors.DWACheckBox).check({ force: true })
	cy.enterText(dispenserPageSelectors.rxInstruction, dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId, 2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox, allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.wait(1000)
	cy.get('body').then((body) => {
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
		}
	})
	cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
	cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
	cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
	cy.enterText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber); // enter credit card number
	cy.clearText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin)
	cy.enterText(dispenserPageSelectors.cardSecurityCode, practiceData.cardSecurityPin); // enter security pin number
	cy.clearText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss)
	cy.enterText(dispenserPageSelectors.AddressLine1, dispenserData.shippingAdderss); // enter shipping details
	cy.clearText(dispenserPageSelectors.AddressCity, dispenserData.cityName)
	cy.enterText(dispenserPageSelectors.AddressCity, dispenserData.cityName); // enter city name
	cy.selectState(); // select state
	cy.clearText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode)
	cy.enterText(dispenserPageSelectors.AddressZipCode, dispenserData.zipCode); // enter country zip code
	cy.clickOnElementTextWithForce(practiceData.continueButton); // click on continue button
	cy.clickOnElementUsingXpath(practicePageSelectors.submit_CreateOrderButton); // click on submit button
	cy.GetOrderID()
	const path = 'dispenser/orders/new/review';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath('//div[@class="modal-footer"]//*[text()="Dismiss"]')
		}
	})
});