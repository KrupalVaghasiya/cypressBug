import { loginData } from '../PageData/loginData.js';
import { masterCreationData } from '../PageData/masterCreationData.js';
import { loginPageSelectors } from '../PageSelectors/loginPageSelectors'
import { dispenserData } from '../PageData/dispenserData.js';
import { patientPageSelectors } from '../PageSelectors/patientPageSelectors.js';
import { practicePageSelectors } from '../PageSelectors/practicePageSelectors.js';
import { practiceData } from '../PageData/practiceData.js';
import { PatientData } from '../PageData/PatientData.js';

Cypress.Commands.add('MasterLogin', () => {
	cy.visit(loginData.ProductURL + loginData.Master_URL);
	cy.verifyTitle(loginData.title);
	cy.enterText(loginPageSelectors.emailField, loginData.MasterEmail, "Enter master email ");
	cy.enterText(loginPageSelectors.passwordField, loginData.MasterPassword, "Enter Pasword");
	cy.clickOnElement(loginPageSelectors.submitButton);
	cy.verifyUrl(masterCreationData.masterUrl);
})

Cypress.Commands.add('MasterForgotPassword', () => {
	cy.visit(loginData.ProductURL + loginData.Master_URL);
	cy.clickOnElementUsingXpath(loginData.ForgotPassword) // Click on Forgot Your Password? link
	cy.clickOnElementUsingText(loginData.submitButtonName)
	cy.verifyTextToBePresent(masterCreationData.requiredField)
	cy.get(loginPageSelectors.emailField).last().type(loginData.InvalidEmailId)
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert)
	cy.get(loginPageSelectors.emailField).last().clear().type(loginData.MasterEmail)
	cy.clickOnElementUsingText(loginData.submitButtonName)
})

Cypress.Commands.add('PracticeLogin', () => {
	cy.visit(loginData.ProductURL + loginData.Practice_URL);
	cy.verifyTitle(loginData.title); // verify practicer login page title
	cy.fixture('Data').then((profile) => {
		cy.enterText(loginPageSelectors.emailField, profile.Practice_Email); // enter practicer email
	})
	cy.enterText(loginPageSelectors.passwordField, loginData.PracticePassword); // enter practicer password
	cy.clickOnElement(loginPageSelectors.submitButton); //click on the sign-in button
	cy.wait(2000)
	cy.get('body').then($element => {
		if ($element.text().includes('Continue')) {
			cy.clickOnElementUsingXpath(patientPageSelectors.CheckBox)
			cy.clickOnElementUsingText(practiceData.continueButton)
		}
	})
})

Cypress.Commands.add('PracticeForgotPassword', () => {
	cy.visit(loginData.ProductURL + loginData.Practice_URL);
	cy.clickOnElementUsingXpath(loginData.ForgotPassword) // Click on Forgot Your Password? link
	cy.fixture('Data').then((profile) => {
		cy.get(loginPageSelectors.emailField).last().clear().type(profile.Practice_Email)
	})
	cy.clickOnElementUsingText(loginData.submitButtonName)
})

Cypress.Commands.add('HubLogin', () => {
	cy.visit(loginData.ProductURL + loginData.Hub_URL);
	cy.verifyTitle(loginData.title); // verify practicer login page title
	cy.enterText(loginPageSelectors.emailField, loginData.HubDispenserEmail); // enter practicer email
	cy.enterText(loginPageSelectors.passwordField, loginData.HubPassword); // enter practicer password
	cy.clickOnElement(loginPageSelectors.submitButton); //click on the sign-in button
	cy.wait(2000)
	cy.get('body').then($element => {
		if ($element.text().includes('Continue')) {
			cy.clickOnElementUsingXpath(patientPageSelectors.CheckBox)
			cy.clickOnElementUsingText(practiceData.continueButton)
		}
	})
})

Cypress.Commands.add('HubForgotPassword', () => {
	cy.visit(loginData.ProductURL + loginData.Hub_URL);
	cy.clickOnElementUsingXpath(loginData.ForgotPassword) // Click on Forgot Your Password? link
	cy.fixture('Data').then((profile) => {
		cy.get(loginPageSelectors.emailField).last().clear().type(profile.Hub_Dispenser_Email)
	})
	cy.clickOnElementUsingText(loginData.submitButtonName)
})

Cypress.Commands.add('StandardPharmaLogin', () => {
	cy.visit(loginData.ProductURL + loginData.Hub_URL);
	cy.verifyTitle(loginData.title); // verify practicer login page title
	cy.fixture('Data').then((profile) => {
		cy.enterText(loginPageSelectors.emailField, profile.RX_Dispenser_Email); // enter practicer email
	})
	cy.enterText(loginPageSelectors.passwordField, loginData.StandardPharmaPassword); // enter practicer password
	cy.clickOnElement(loginPageSelectors.submitButton); //click on the sign-in button
	cy.wait(2000)
	cy.get('body').then($element => {
		if ($element.text().includes('Continue')) {
			cy.clickOnElementUsingXpath(patientPageSelectors.CheckBox)
			cy.clickOnElementUsingText(practiceData.continueButton)
		}
	})
})

Cypress.Commands.add('StandardPharmaForgotPassword', () => {
	cy.visit(loginData.ProductURL + loginData.Hub_URL);
	cy.clickOnElementUsingXpath(loginData.ForgotPassword) // Click on Forgot Your Password? link
	cy.fixture('Data').then((profile) => {
		cy.get(loginPageSelectors.emailField).last().type(profile.RX_Dispenser_Email)
	})
	cy.clickOnElementUsingText(loginData.submitButtonName)
})

Cypress.Commands.add('PatientLogin', () => {
	cy.visit(loginData.ProductURL + loginData.Patient_URL);
	cy.verifyTitle(loginData.title); // verify practicer login page title
	cy.fixture('Data').then((profile) => {
		cy.enterText(loginPageSelectors.emailField, profile.Patient_Email); // enter practicer email
	})
	cy.enterText(loginPageSelectors.passwordField, loginData.PatientPassword); // enter practicer password
	cy.clickOnElementUsingXpath(patientPageSelectors.SignInButton); //click on the sign-in button
})

Cypress.Commands.add('PatientForgotPassword', () => {
	cy.visit(loginData.ProductURL + loginData.Patient_URL, { timeout: 30000 });
	cy.clickOnElementUsingXpath(patientPageSelectors.ForgotPassword);
	cy.contains('Send Reset Email').should('be.enabled')
	cy.fixture('Data').then((profile) => {
		cy.enterText(loginPageSelectors.emailField, profile.Patient_Email);
	})
	cy.clickOnElementUsingXpath(patientPageSelectors.ResetEmail);
	cy.clickOnElementTextWithForce(PatientData.Donebutton);
})

Cypress.Commands.add('TechnicianUserLogin', () => {
	cy.visit(loginData.ProductURL + loginData.Practice_URL);
	cy.verifyTitle(loginData.title); // verify practicer login page title
	cy.fixture('Data').then((profile) => {
		cy.enterText(loginPageSelectors.emailField, profile.Technician_Email); // enter practicer email
	})
	cy.enterText(loginPageSelectors.passwordField, loginData.PracticePassword); // enter practicer password
	cy.clickOnElement(loginPageSelectors.submitButton); //click on the sign-in button
	cy.wait(2000)
	cy.get('body').then($element => {
		if ($element.text().includes('Continue')) {
			cy.clickOnElementUsingXpath(patientPageSelectors.CheckBox)
			cy.clickOnElementUsingText(practiceData.continueButton)
		}
	})
})