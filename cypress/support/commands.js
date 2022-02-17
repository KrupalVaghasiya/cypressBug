Cypress.Commands.add('subValues', (a, b) => { return a - b });
import './commands';
import 'cypress-iframe';
import 'cypress-file-upload';
import { practicePageSelectors } from './PageSelectors/practicePageSelectors';
import { dispenserData } from './PageData/dispenserData';
import { practiceData } from './PageData/practiceData.js';
import { loginData } from './PageData/loginData';
import { masterCreationData } from './PageData/masterCreationData';
import { dispenserPageSelectors } from './PageSelectors/dispenserPageSelectors';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const COMMAND_DELAY = 600;

for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
	Cypress.Commands.overwrite(command, (originalFn, ...args) => {
		const origVal = originalFn(...args);
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(origVal);
			}, COMMAND_DELAY);
		});
	});
}

//Basic Commands

Cypress.Commands.add('forceVisit', url => {
	cy.window().then(win => {
		return win.open(url, '_self');
	});
});

Cypress.Commands.add('verifyTitle', (data, log) => {
	cy.title().should('be.eq', data);
});

Cypress.Commands.add('enterText', (loc, data, log) => {
	cy.get(loc, { timeout: 30000 }).type(data);
});

Cypress.Commands.add('clearText', (loc, log) => {
	cy.get(loc, { timeout: 30000 }).clear();
});

Cypress.Commands.add('clearTextwithIndex', (loc, index, log) => {
	cy.get(loc, { timeout: 2000 }).eq(index).clear();
});

Cypress.Commands.add('clickOnElement', (loc, log) => {
	cy.get(loc, { timeout: 30000 }).first().click();
});

Cypress.Commands.add('clickOnElementWithIndex', (loc, index, log) => {
	cy.get(loc, { timeout: 30000 }).eq(index).click();
});

Cypress.Commands.add('clickOnElementWithIndexText', (loc, index, data) => {
	cy.get(loc, { timeout: 30000 }).eq(index).should('contain', data).click();
});

Cypress.Commands.add('verifyUrl', (data, log) => {
	cy.url({ timeout: 30000 }).should('contains', data);
});

Cypress.Commands.add('verifyTextToBePresent', (data, log) => {
	//cy.wait(500);
	cy.contains(data, { timeout: 30000 }).should('be.exist');
});

Cypress.Commands.add('clickOnElementUsingText', (data, selector, log) => {
	cy.contains(selector, data, { timeout: 30000 }).click();
});

Cypress.Commands.add('clickOnHubElementUsingText', () => {
	cy.contains('Select', { timeout: 30000 }).last().click();
});

Cypress.Commands.add('clickOnElementTextWithForce', (data, log) => {
	cy.contains(data, { timeout: 30000 }).click({ force: true });
});

Cypress.Commands.add('clickOnElementUsingXpath', (loc, log) => {
	cy.xpath(loc, { timeout: 30000 }).click({ force: true });
});

Cypress.Commands.add('clickOnElementUsingXpathfirst', (loc, log) => {
	cy.xpath(loc, { timeout: 30000 }).first().click({ force: true });
});

Cypress.Commands.add('verifyElementExists', (loc, log) => {
	cy.get(loc, { timeout: 30000 }).should('be.exist');
});

Cypress.Commands.add('successFullOrderMessage', (data, log) => {
	cy.verifyTextToBePresent(data);
});

Cypress.Commands.add('FindRx', () => {
	cy.contains('Select a type').click()
	cy.get('div[aria-label="RX"]', { timeout: 30000 }).click()
});

Cypress.Commands.add('clickOnElementUsingXpathwithIndex', (loc, index, log) => {
	cy.xpath(loc, { timeout: 30000 }).eq(index).click({ force: true });
});

//Practice custome command
Cypress.Commands.add('searchPatients', (loc, data) => {
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.get(loc, { timeout: 30000 })
			.type(data).clickOnElementTextWithForce(profile.patientNameDOB);
	})
});

Cypress.Commands.add('searchDoctors', () => {
	cy.fixture('Data').then((profile) => {
		cy.get(practicePageSelectors.searchDoctor)
			.click()
			.type(profile.PracticeName)
			.wait(2000)
			.type('{downarrow}{enter}');
	})
});

Cypress.Commands.add('searchForTemplateMedicine', () => {
	cy.get('[placeholder="Search for a Product"]').click()
	cy.contains('100 Rx').click()
});

Cypress.Commands.add('findElementWithIndexAndEnterText', (loc, data, index) => {
	cy.get(loc, { timeout: 30000 }).eq(index).type(data);
});

Cypress.Commands.add('clickOnElementWithIndex', (index, loc, log) => {
	cy.get(loc, { timeout: 30000 }).eq(index).click();
});

Cypress.Commands.add('Changequantity', () => {
	cy.xpath('//*[@class="table"]//*[@class="Select-arrow"]').first().click({ multiple: true })
	cy.get('[aria-label="2"]').click();
});

Cypress.Commands.add('AddRefills', () => {
	cy.xpath('//*[@data-test="refills"]//*[@class="Select-arrow"]').click({ multiple: true })
	cy.get('[aria-label="2"]').click();
});

Cypress.Commands.add('enterTextInFieldwithEnter', (loc, data) => {
	cy.get(loc).clear().type(data + '{enter}');
});

Cypress.Commands.add('SearchDoctor', () => {
	cy.get('[placeholder="Search by first or last name"]').click().wait(1000).type('{downarrow}{enter}')
});

Cypress.Commands.add('SelectDocumentType1', () => {
	cy.get('[class="Select-arrow"]').click()
	cy.contains('Welcome Letter').click()
});

Cypress.Commands.add('SelectDocumentType2', () => {
	cy.get('[class="Select-arrow"]').click()
	cy.contains('Patient Direction').click()
});

Cypress.Commands.add('searchFordropchartMedicine', () => {
	cy.get('[placeholder="Search to add a product"]').click()
	cy.contains('100 Rx').click()
});

Cypress.Commands.add('SelectAccounttype', () => {
	cy.contains(dispenserData.selectOptionType).click()
	cy.contains(loginData.userOption1).click()
});

Cypress.Commands.add('searchMedicine', () => {
	cy.get(practicePageSelectors.searchMedicine, { timeout: 20000 }).click()
	cy.contains('100 Rx').click()
});

Cypress.Commands.add('searchOTCMedicine', () => {
	cy.get(practicePageSelectors.searchMedicine, { timeout: 20000 }).click()
	cy.contains('OTC', { timeout: 20000 }).first().click()
});

Cypress.Commands.add('searchCompoundMedicine', () => {
	cy.get(practicePageSelectors.searchMedicine, { timeout: 20000 }).click()
	cy.contains('Compound', { timeout: 20000 }).first().click()
});

Cypress.Commands.add('findmedicine', () => {
	cy.get(practicePageSelectors.searchProduct, { timeout: 20000 }).click()
	cy.contains(masterCreationData.productRxName, { timeout: 20000 }).click();
});

Cypress.Commands.add('findOTCmedicine', () => {
	cy.get(practicePageSelectors.searchProduct, { timeout: 20000 }).click()
	cy.contains('OTC', { timeout: 20000 }).first().click();
});

Cypress.Commands.add('findCompoundmedicine', () => {
	cy.get(practicePageSelectors.searchProduct, { timeout: 20000 }).click()
	cy.contains('Compound', { timeout: 20000 }).first().click();
});

Cypress.Commands.add('selectState', () => {
	cy.clickOnElementUsingXpath('//div[@id="shipping_address"]//*[@class="Select-arrow"]');
	//cy.wait(1000);
	cy.clickOnElement('div[aria-label="Alabama"]');
});

Cypress.Commands.add('stateValue', () => {
	cy.clickOnElementUsingXpath('(//*[@class="sc-gqPbQI dopazv"]//*[@class="Select-arrow"])[1]');
	//cy.wait(1000);
	cy.clickOnElement('div[aria-label="Alabama"]');
});

Cypress.Commands.add('BillingState', () => {
	cy.clickOnElementUsingXpath('//div[@id="billing_address"]//*[@class="Select-arrow"]');
	//cy.wait(1000);
	cy.clickOnElement('div[aria-label="Alabama"]');
});

Cypress.Commands.add('PayorName', () => {
	cy.clickOnElement(dispenserPageSelectors.PayorName).clear().type('Max Life')
	cy.wait(2000)
	cy.contains('Max Life', { timeout: 10000 }).click()
});

Cypress.Commands.add('ServiseTypePickUpPerson', () => {
	cy.clickOnElement(dispenserPageSelectors.service)
	cy.clickOnElementUsingXpath('//*[text()="Pick Up In Person"]')
})

Cypress.Commands.add('ServiseTypeCourierService', () => {
	cy.clickOnElement(dispenserPageSelectors.service)
	cy.clickOnElementUsingXpath('//*[text()="Courier Service"]')
})

Cypress.Commands.add('AttachDocument', () => {
	cy.clickOnElement('[data-test="edit-document"]')
	cy.xpath(practicePageSelectors.selectdocument).check({ force: true }).should('be.checked');
	cy.clickOnElementUsingXpath('//*[@class="modal-dialog"]//*[text()="Select"]');
});

Cypress.Commands.add('Timezone', () => {
	cy.contains('Select a timezone').click().type('{downarrow}{enter}')
});

Cypress.Commands.add('OTCProduct', () => {
	cy.contains('Select a type').click()
	//cy.wait(1000);
	cy.get('div[aria-label="OTC"]').click()
});

Cypress.Commands.add('Compound', () => {
	cy.contains('Select a type').click()
	//cy.wait(1000);
	cy.get('div[aria-label="Compound"]').click()
});

Cypress.Commands.add('Practice', () => {
	cy.contains('Select...').click()
	cy.get('div[aria-label="Practice"]').click()
})

Cypress.Commands.add('userselect', () => {
	cy.contains('Select...').click()
	cy.get('div[aria-label="Technician"]').click()
})

Cypress.Commands.add('selectPayorTypeInsurance', () => {
	cy.clickOnElementTextWithForce('Select...');
	cy.clickOnElement('div[aria-label="Insurance"]');
});

Cypress.Commands.add('selectPayorTypeCash', () => {
	cy.clickOnElementTextWithForce('Select...');
	cy.clickOnElement('div[aria-label="Cash"]');
});

Cypress.Commands.add('selectPayorTypeCoupon', () => {
	cy.clickOnElementTextWithForce('Select...');
	cy.clickOnElement('div[aria-label="Coupon"]');
});

Cypress.Commands.add('selectPayorStatus', () => {
	cy.clickOnElementTextWithForce('Select...');
	cy.clickOnElement('div[aria-label="Active"]');
});

Cypress.Commands.add("paste", { prevSubject: true }, (selector, pastePayload) => {
	cy.wrap(selector).then($destination => {
		const pasteEvent = Object.assign(new Event("paste", { bubbles: true, cancelable: true }), {
			clipboardData: {
				getData: () => pastePayload
			}
		});
		$destination[0].dispatchEvent(pasteEvent);
	});
});

Cypress.Commands.add('getIframe', (iframe) => {
	return cy.get(iframe)
		.its('0.contentDocument.body')
		.should('be.visible')
		.then(cy.wrap);
})