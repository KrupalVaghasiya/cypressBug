import { loginData } from '../PageData/loginData.js';
import { masterCreationData } from '../PageData/masterCreationData.js';
import { loginPageSelectors } from '../PageSelectors/loginPageSelectors'

Cypress.Commands.add('MasterLoginValidation', () => {
	cy.visit(loginData.Qa_Master_URL);
	cy.clickOnElement(loginPageSelectors.submitButton); // Click On Sign In Button
	cy.verifyUrl(masterCreationData.masterUrl);
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert);
	cy.enterText(loginPageSelectors.emailField, loginData.InvalidEmailId);
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert)
	cy.get((loginPageSelectors.emailField)).clear()
	cy.enterText(loginPageSelectors.emailField, loginData.MasterEmail);
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert);
	cy.enterText(loginPageSelectors.passwordField, masterCreationData.inValidPassword);
	cy.clickOnElement(loginPageSelectors.submitButton);
	cy.verifyTextToBePresent(masterCreationData.InvalidCredencial)
	cy.clickOnElementTextWithForce(loginData.dismissButton)
	cy.get((loginPageSelectors.passwordField)).clear()
	cy.enterText(loginPageSelectors.passwordField, loginData.MasterPassword);
	cy.clickOnElement(loginPageSelectors.submitButton);
})

Cypress.Commands.add('PracticeLoginValidation', () => {
	cy.visit(loginData.Qa_Practice_URL);
	cy.clickOnElement(loginPageSelectors.submitButton); // Click On Sign In Button
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert);
	cy.enterText(loginPageSelectors.emailField, loginData.InvalidEmailId);
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert)
	cy.get(loginPageSelectors.emailField).clear()
	cy.enterText(loginPageSelectors.emailField, loginData.PracticeEmail);
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert);
	cy.enterText(loginPageSelectors.passwordField, masterCreationData.inValidPassword);
	cy.clickOnElement(loginPageSelectors.submitButton);
	cy.verifyTextToBePresent(masterCreationData.InvalidCredencial)
	cy.clickOnElementTextWithForce(loginData.dismissButton)
	cy.get(loginPageSelectors.passwordField).clear()
	cy.enterText(loginPageSelectors.passwordField, loginData.PracticePassword);
	cy.clickOnElement(loginPageSelectors.submitButton);
})

Cypress.Commands.add('HubLoginValidation', () => {
	cy.visit(loginData.Qa_Hub_URL);
	cy.clickOnElement(loginPageSelectors.submitButton); // Click On Sign In Button
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert);
	cy.enterText(loginPageSelectors.emailField, loginData.InvalidEmailId);
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert)
	cy.get(loginPageSelectors.emailField).clear()
	cy.enterText(loginPageSelectors.emailField, loginData.HubDispenserEmail);
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert);
	cy.enterText(loginPageSelectors.passwordField, masterCreationData.inValidPassword);
	cy.clickOnElement(loginPageSelectors.submitButton);
	cy.verifyTextToBePresent(masterCreationData.InvalidCredencial)
	cy.clickOnElementTextWithForce(loginData.dismissButton)
	cy.get(loginPageSelectors.passwordField).clear()
	cy.enterText(loginPageSelectors.passwordField, loginData.HubPassword);
	cy.clickOnElement(loginPageSelectors.submitButton);
})

Cypress.Commands.add('StandardPharmaLoginValidation', () => {
	cy.visit(loginData.Qa_Hub_URL);
	cy.clickOnElement(loginPageSelectors.submitButton); // Click On Sign In Button
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert);
	cy.enterText(loginPageSelectors.emailField, loginData.InvalidEmailId);
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert)
	cy.get(loginPageSelectors.emailField).clear()
	cy.enterText(loginPageSelectors.emailField, loginData.StanDispenserEmail);
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert);
	cy.enterText(loginPageSelectors.passwordField, masterCreationData.inValidPassword);
	cy.clickOnElement(loginPageSelectors.submitButton);
	cy.verifyTextToBePresent(masterCreationData.InvalidCredencial)
	cy.clickOnElementTextWithForce(loginData.dismissButton)
	cy.get(loginPageSelectors.passwordField).clear()
	cy.enterText(loginPageSelectors.passwordField, loginData.HubPassword);
	cy.clickOnElement(loginPageSelectors.submitButton);
})

Cypress.Commands.add('StandardPharmaForgotPasswordValidation', () => {
	cy.visit(loginData.Qa_Hub_URL);
	cy.clickOnElementUsingXpath(loginData.ForgotPassword) // Click on Forgot Your Password? link
	cy.clickOnElementUsingText(loginData.submitButtonName)
	cy.verifyTextToBePresent(masterCreationData.RequiredFieldAlert)
	cy.get(loginPageSelectors.emailField).last().type(loginData.InvalidEmailId)
	cy.verifyTextToBePresent(masterCreationData.invalidEmailAlert)
	cy.get(loginPageSelectors.emailField).last().clear().type(loginData.StanDispenserEmail)
	cy.clickOnElementUsingText(loginData.submitButtonName)
})