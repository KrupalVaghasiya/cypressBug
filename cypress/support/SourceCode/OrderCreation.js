import { practicePageSelectors } from '../PageSelectors/practicePageSelectors.js';
import { dispenserData } from '../PageData/dispenserData.js';
import { practiceData } from '../PageData/practiceData.js';
import { dispenserPageSelectors } from '../PageSelectors/dispenserPageSelectors.js';
import { loginPageSelectors } from '../PageSelectors/loginPageSelectors'

const faker = require('faker');
const allergiesName = faker.Name.firstName() + " Allergies";

// Onetime RX, OTC, And Compound order with skip payment
Cypress.Commands.add('CreatingRXOnetimelaterpayment', () => {
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	const path = 'practice/orders/new';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath(practicePageSelectors.createNewRx)
			cy.searchMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(dispenserPageSelectors.editContents).last().click().then(()=>{
			 	cy.get('body').type('{downarrow}{enter}').click()
			})
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
			cy.verifyTextToBePresent(practiceData.Rx_productType); // verify the product type 
		}
		else {
			cy.clickOnElementUsingText(practiceData.SelectButton, practiceData.buttonTag); // click on the create new Rx
			cy.searchMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(dispenserPageSelectors.editContents).last().click().then((body)=>{
				cy.get('body').type('{downarrow}{enter}').click()
			})
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
			cy.verifyTextToBePresent(practiceData.Rx_productType); // verify the product type 
		}
	})
});

Cypress.Commands.add('CreatingOTCOnetimelaterpayment', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button	
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor	
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	const path = 'practice/orders/new';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath(practicePageSelectors.createNewRx)
			cy.searchOTCMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(dispenserPageSelectors.editContents).last().click().then((body)=>{
				cy.get('body').type('{downarrow}{enter}').click()
			})
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
			cy.verifyTextToBePresent(practiceData.OTC_productType); // verify the product type 
		}

		else {
			cy.clickOnElementUsingText(practiceData.SelectButton, practiceData.buttonTag); // click on the create new Rx
			cy.searchOTCMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(dispenserPageSelectors.editContents).last().click().then((body)=>{
				cy.get('body').type('{downarrow}{enter}').click()
			})
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
			cy.verifyTextToBePresent(practiceData.OTC_productType); // verify the product type 
		}
	})
});

Cypress.Commands.add('CreatingCompoundOnetimelaterpayment', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder).first(); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	const path = 'practice/orders/new';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath(practicePageSelectors.createNewRx)
			cy.searchCompoundMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(dispenserPageSelectors.editContents).last().click().then((body)=>{
				cy.get('body').type('{downarrow}{enter}').click()
			})
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
			cy.verifyTextToBePresent(practiceData.Compound_productType); // verify the product type 
		}
		else {
			cy.clickOnElementUsingText(practiceData.SelectButton, practiceData.buttonTag); // click on the create new Rx
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
				cy.get(dispenserPageSelectors.editContents).last().click().then((body)=>{
					cy.get('body').type('{downarrow}{enter}').click()
				})
				cy.get(practicePageSelectors.DWACheckBox).check({force:true})
				cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
				cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
				cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
				cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
				cy.AttachDocument(); // Attach Dropchart Documents
				cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
				cy.verifyTextToBePresent(practiceData.Compound_productType); // verify the product type 
			})
		}
	})
});

// Onetime RX, OTC, And Cmpound order with Provide payment
Cypress.Commands.add('CreatingRXOnetimePaymentOption', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	const path = 'practice/orders/new';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath(practicePageSelectors.createNewRx)// click on the create new Rx
			cy.searchMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber)
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
		}
		else {
			cy.clickOnElementUsingText(practiceData.SelectButton, practiceData.buttonTag); // click on the create new Rx
			cy.searchMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
			cy.get('body').then((body) => {
				if (body.find('#card > div > div > div > div > div > a').length > 0) {
					cy.clickOnElementUsingXpath('//*[text()="Edit"]')
					cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
					cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
					cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
					cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber) // enter credit card number
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
				}
				else {
					cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
					cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
					cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
					cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber) // enter credit card number
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
				}
			})
		}
	})
})

Cypress.Commands.add('CreatingOTCOnetimePaymentOption', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	const path = 'practice/orders/new';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath(practicePageSelectors.createNewRx)// click on the create new Rx
			cy.searchOTCMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
		}
		else {
			cy.clickOnElementUsingText(practiceData.SelectButton, practiceData.buttonTag); // click on the create new Rx
			cy.searchOTCMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
			cy.get('body').then((body) => {
				cy.wait(1000)
				if (body.find('#card > div > div > div > div > div > a').length > 0) {
					cy.clickOnElementUsingXpath('//*[text()="Edit"]')
					cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
					cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
					cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
					cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
				}
				else {
					cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
					cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
					cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
					cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
				}
			})
		}
	})
});

Cypress.Commands.add('CreatingCompoundOnetimePaymentOption', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	const path = 'practice/orders/new';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath(practicePageSelectors.createNewRx)// click on the create new Rx
			cy.searchCompoundMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
		}
		else {
			cy.clickOnElementUsingText(practiceData.SelectButton, practiceData.buttonTag); // click on the create new Rx
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
				cy.get(practicePageSelectors.DWACheckBox).check({force:true})
				cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
				cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
				cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
				cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
				cy.AttachDocument(); // Attach Dropchart Documents
				cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
				cy.wait(1000)
			})
			cy.get('body').then((body) => {
				if (body.find('#card > div > div > div > div > div > a').length > 0) {
					cy.clickOnElementUsingXpath('//*[text()="Edit"]')
					cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
					cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
					cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
					cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
				}
				else {
					cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
					cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
					cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
					cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
				}
			})
		}
	})
});

// Subscription RX, OTC, And Compound order with Skip Payment
Cypress.Commands.add('CreatingRXSubscriptionLaterPayment', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(dispenserPageSelectors.hubSubscription, practiceData.buttonTag); // click on the Create Custom Plan
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
	cy.get(practicePageSelectors.DWACheckBox).check({force:true})
	cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
});

Cypress.Commands.add('CreatingOTCSubscriptionLaterPayment', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(dispenserPageSelectors.hubSubscription, practiceData.buttonTag); // click on the Create Custom Plan
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
	cy.get(practicePageSelectors.DWACheckBox).check({force:true})
	cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
});

Cypress.Commands.add('CreatingCompoundSubscriptionLaterPayment', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(dispenserPageSelectors.hubSubscription, practiceData.buttonTag); // click on the Create Custom Plan
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
	cy.get(practicePageSelectors.DWACheckBox).check({force:true})
	cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
});

//Subscription RX, OTC, And Compound order with provide payment
Cypress.Commands.add('CreatingRXSubscriptionPaymentOptionCourierService', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(dispenserPageSelectors.hubSubscription, practiceData.buttonTag); // click on the Create Custom Plan
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
	cy.get(practicePageSelectors.DWACheckBox).check({force:true})
	cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.get('body').then((body) => {
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
		}
		else {
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
		}
	})
	cy.ServiseTypeCourierService() // Select Delivery type as Courier Service
});

Cypress.Commands.add('CreateOTCSubscriptionPaymentOption', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(dispenserPageSelectors.hubSubscription, practiceData.buttonTag); // click on the Create Custom Plan
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
	cy.get(practicePageSelectors.DWACheckBox).check({force:true})
	cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.get('body').then((body) => {
		cy.wait(1000)
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
		}
		else {
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
		}
	})
});

Cypress.Commands.add('CreateCompoundSubscriptionPaymentOption', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	cy.clickOnElement(dispenserPageSelectors.hubSubscription, practiceData.buttonTag); // click on the Create Custom Plan
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
	cy.get(practicePageSelectors.DWACheckBox).check({force:true})
	cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
	cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
	cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
	cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
	cy.AttachDocument(); // Attach Dropchart Documents
	cy.clickOnElementUsingXpath(practicePageSelectors.providePaymentID); //click on the provide payment button
	cy.wait(1000)
	cy.get('body').then((body) => {
		cy.wait(1000)
		if (body.find('#card > div > div > div > div > div > a').length > 0) {
			cy.clickOnElementUsingXpath('//*[text()="Edit"]')
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
		}
		else {
			cy.clearText(dispenserPageSelectors.cardName, practiceData.nameOnCard)
			cy.enterText(dispenserPageSelectors.cardName, practiceData.nameOnCard); // enter the name as on card
			cy.clearText(dispenserPageSelectors.cardNumber, practiceData.creditCardNumber)
			cy.get(dispenserPageSelectors.cardNumber).paste(practiceData.creditCardNumber); // enter credit card number
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
		}
	})
});

Cypress.Commands.add('CreatingRXOrderFromUserAccount', () => {
	cy.clickOnElementUsingXpath(practicePageSelectors.CreateOrder); // click on add Rx button
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.searchPatients(practicePageSelectors.searchPatient1, profile.Patient_fullName);
	})
	cy.searchDoctors(); // search for the doctor
	cy.clickOnElementUsingXpath(practicePageSelectors.nextButtonId); // click on the next button
	const path = 'practice/orders/new';
	cy.url().then(($url) => {
		if ($url.includes(path)) {
			cy.clickOnElementUsingXpath(practicePageSelectors.createNewRx)
			cy.searchMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(dispenserPageSelectors.editContents).last().click()
			.type('{downarrow}{enter}').click()
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
			cy.verifyTextToBePresent(practiceData.Rx_productType); // verify the product type 
		}
		else {
			cy.clickOnElementUsingText(practiceData.SelectButton, practiceData.buttonTag); // click on the create new Rx
			cy.searchMedicine() //search for Medicine
			cy.clickOnElementUsingXpathfirst(practicePageSelectors.addMedicine); // click on add button
			cy.Changequantity(); // click on edit content dropdown
			cy.get(dispenserPageSelectors.editContents).last().click()
			.type('{downarrow}{enter}').click()
			cy.get(practicePageSelectors.DWACheckBox).check({force:true})
			cy.enterText(dispenserPageSelectors.rxInstruction,dispenserData.instructionMessage); //Enter Instruction
			cy.clickOnElementUsingXpathwithIndex(loginPageSelectors.editLinkId,2);// click on the edit button for add allergies
			cy.enterTextInFieldwithEnter(practicePageSelectors.allergiesTextBox,allergiesName); // enter allergy name
			cy.clickOnElementUsingXpath(loginPageSelectors.doneButtonId); // click on the done button
			cy.AttachDocument(); // Attach Dropchart Documents
			cy.clickOnElementUsingText(practiceData.paymentButtonName, practiceData.buttonTag); // click on skip payment button
			cy.verifyTextToBePresent(practiceData.Rx_productType); // verify the product type 
		}
	})
})