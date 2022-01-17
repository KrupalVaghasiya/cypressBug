<<<<<<< HEAD
=======
import 'cypress-wait-until';
>>>>>>> origin/master
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
<<<<<<< HEAD
=======

>>>>>>> origin/master
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
<<<<<<< HEAD
	cy.get(loc, { timeout: 30000 }).type(data);
=======
	cy.get(loc, { timeout: 30000 }).type(data, { delay: 50 });
>>>>>>> origin/master
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
<<<<<<< HEAD
	cy.url({ timeout: 30000 }).should('contains', data);
=======
	cy.url({timeout:30000}).should('contains', data);
>>>>>>> origin/master
});

Cypress.Commands.add('verifyTextToBePresent', (data, log) => {
	//cy.wait(500);
	cy.contains(data, { timeout: 30000 }).should('be.exist');
});

<<<<<<< HEAD
=======
Cypress.Commands.add('verifyTextNotToBePresent', (data, selector, log) => {
	cy.contains(selector, data, { timeout: 30000 }).should('not.be.exist');
});

Cypress.Commands.add('verifyTableData', (loc, data, index, log) => {
	cy.get(loc, { timeout: 30000 }).eq(index).should('contains', data);
});

>>>>>>> origin/master
Cypress.Commands.add('clickOnElementUsingText', (data, selector, log) => {
	cy.contains(selector, data, { timeout: 30000 }).click();
});

Cypress.Commands.add('clickOnHubElementUsingText', () => {
	cy.contains('Select', { timeout: 30000 }).last().click();
});

<<<<<<< HEAD
=======
Cypress.Commands.add('clickOnElementUsingTextWithIndex', (data, selector, index, log) => {
	cy.contains(selector, data, { timeout: 30000 }).click({ force: true });
});

>>>>>>> origin/master
Cypress.Commands.add('clickOnElementTextWithForce', (data, log) => {
	cy.contains(data, { timeout: 30000 }).click({ force: true });
});

<<<<<<< HEAD
Cypress.Commands.add('clickOnElementUsingXpath', (loc, log) => {
=======
Cypress.Commands.add('verifyDisabledElementWithData', (data, log) => {
	cy.contains(data, { timeout: 30000 }).should('be.disabled');
});

Cypress.Commands.add('clickOnElementUsingXpath', (loc, log) => {
	//cy.wait(1000);
>>>>>>> origin/master
	cy.xpath(loc, { timeout: 30000 }).click({ force: true });
});

Cypress.Commands.add('clickOnElementUsingXpathfirst', (loc, log) => {
	cy.xpath(loc, { timeout: 30000 }).first().click({ force: true });
});

Cypress.Commands.add('verifyElementExists', (loc, log) => {
	cy.get(loc, { timeout: 30000 }).should('be.exist');
});

<<<<<<< HEAD
=======
Cypress.Commands.add('clickOnElemenWithText', (loc, Data, log) => {
	cy.get(loc, { timeout: 30000 }).should('contains', data).click({ force: true });
});

Cypress.Commands.add('verifyPageName', (data, log) => {
	cy.verifyTextToBePresent(data);
});

>>>>>>> origin/master
Cypress.Commands.add('successFullOrderMessage', (data, log) => {
	cy.verifyTextToBePresent(data);
});

<<<<<<< HEAD
=======
Cypress.Commands.add('checkElement', (loc, log) => {
	cy.get(loc, { timeout: 30000 }).check({ force: true });
});

Cypress.Commands.add('selectDropdownValue', (text, type, log) => {
	cy.clickOnElementTextWithForce(text);
	cy.clickOnElementWithIndex(`div[aria-label="${type}"]`);
});

>>>>>>> origin/master
Cypress.Commands.add('FindRx', () => {
	cy.contains('Select a type').click()
	cy.get('div[aria-label="RX"]', { timeout: 30000 }).click()
});

<<<<<<< HEAD
=======
Cypress.Commands.add('selectDropdownValueWithSelector', (text, selector, type, log) => {
	cy.clickOnElementUsingText(text, selector);
	cy.clickOnElementWithIndex(`div[aria-label="${type}"]`, 0);
});

>>>>>>> origin/master
Cypress.Commands.add('clickOnElementUsingXpathwithIndex', (loc, index, log) => {
	cy.xpath(loc, { timeout: 30000 }).eq(index).click({ force: true });
});

<<<<<<< HEAD
=======
Cypress.Commands.add('clickOnFirstElementUsingXpath', (loc, log) => {
	cy.xpath(loc, { timeout: 30000 }).first().click({ force: true });
});

Cypress.Commands.add('scrollThePage', (loc, log) => {
	cy.scrollTo('bottom');
});

Cypress.Commands.add('verifyTextPresentUsingElement', (loc, data, log) => {
	cy.get(loc).should('contains', data);
});


>>>>>>> origin/master
//Practice custome command
Cypress.Commands.add('searchPatients', (loc, data) => {
	cy.wait(1000);
	cy.readFile('cypress/fixtures/Data.json').then((profile) => {
		cy.get(loc, { timeout: 30000 })
<<<<<<< HEAD
			.type(data).wait(3000).clickOnElementTextWithForce(profile.patientNameDOB);
=======
			.type(data).wait(3000).clickOnElementTextWithForce(profile.patientNameDOB, { delay: 100 });
>>>>>>> origin/master
	})
});

Cypress.Commands.add('searchDoctors', () => {
	cy.wait(1000)
	cy.fixture('Data').then((profile) => {
		cy.get(practicePageSelectors.searchDoctor)
			.click()
<<<<<<< HEAD
			.type(profile.PracticeName)
=======
			.type(profile.PracticeName, { delay: 200 })
>>>>>>> origin/master
			.wait(2000)
			.type('{downarrow}{enter}');
	})
});

<<<<<<< HEAD
Cypress.Commands.add('searchForTemplateMedicine', () => {
	cy.get('[placeholder="Search for a Product"]').click()
	cy.contains('100 Rx').click()
});

Cypress.Commands.add('findElementWithIndexAndEnterText', (loc, data, index) => {
	cy.get(loc, { timeout: 30000 }).eq(index).type(data);
=======
Cypress.Commands.add('verifyAccountVerificationMessage', () => {
	cy.verifyTextToBePresent(data);
});

Cypress.Commands.add('verifyExistingTemplates', (data) => {
	cy.verifyTextToBePresent(data);
});

Cypress.Commands.add('verifyOrderConfirmationMessage', (data) => {
	cy.verifyTextToBePresent(data);
});

Cypress.Commands.add('searchForMedicine', (loc, data, index) => {
	cy.get(loc, { timeout: 30000 }).click().type(data + '{downarrow}{enter}', { delay: 100 });
});

Cypress.Commands.add('searchForTemplateMedicine', () => {
	cy.get('[placeholder="Search for a Product"]').click()
	cy.contains('100 Rx').click()
	//.type(data+'{downarrow}{enter}',{ delay: 600 });
});

Cypress.Commands.add('findElementWithIndexAndEnterText', (loc, data, index) => {
	cy.get(loc, { timeout: 30000 }).eq(index).type(data, { delay: 50 });
>>>>>>> origin/master
});

Cypress.Commands.add('clickOnElementWithIndex', (index, loc, log) => {
	cy.get(loc, { timeout: 30000 }).eq(index).click();
});

Cypress.Commands.add('Changequantity', () => {
	cy.xpath('//*[@class="table"]//*[@class="Select-arrow"]').first().click({ multiple: true })
<<<<<<< HEAD
	cy.get('[aria-label="2"]').click();
=======
	cy.get('div[aria-label="2"]').click();
>>>>>>> origin/master
});

Cypress.Commands.add('AddRefills', () => {
	cy.xpath('//*[@data-test="refills"]//*[@class="Select-arrow"]').click({ multiple: true })
<<<<<<< HEAD
	cy.get('[aria-label="2"]').click();
});

Cypress.Commands.add('enterTextInFieldwithEnter', (loc, data) => {
	cy.get(loc).clear().type(data + '{enter}');
=======
	cy.get('div[aria-label="2"]').click();
});

Cypress.Commands.add('enterTextInFieldwithEnter', (loc, data) => {
	cy.get(loc).clear().type(data + '{enter}', { delay: 50 });
});

Cypress.Commands.add('selectExistinAdmin', (loc) => {
	cy.get(loc).type('{downarrow}{enter}');
});

Cypress.Commands.add('editContentOfProduct', () => {
	cy.clickOnElement('div[aria-label="2"]');
>>>>>>> origin/master
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

<<<<<<< HEAD
Cypress.Commands.add('selectState', () => {
	cy.clickOnElementUsingXpath('//div[@id="shipping_address"]//*[@class="Select-arrow"]');
=======
Cypress.Commands.add('fillCardMonthDetails', () => {
	cy.clickOnElementUsingXpathwithIndex('//div[@class="sc-kafWEX ihwrOP"]//*[@data-test="expiry"]//*[@class="Select-arrow"]', 0);
	//cy.wait(1000);
	cy.clickOnElement('div[aria-label="Jan"]');
	cy.clickOnElementUsingXpathwithIndex('//div[@class="sc-kafWEX ihwrOP"]//*[@data-test="expiry"]//*[@class="Select-arrow"]', 1);
	//cy.wait(1000);
	cy.clickOnElement('div[aria-label="2025"]');
});

Cypress.Commands.add('selectState', () => {
	cy.clickOnElementUsingXpath('(//div[@class="sc-kafWEX ihwrOP"] )[2]//*[@class="Select-arrow"]');
>>>>>>> origin/master
	//cy.wait(1000);
	cy.clickOnElement('div[aria-label="Alabama"]');
});

Cypress.Commands.add('stateValue', () => {
<<<<<<< HEAD
	cy.clickOnElementUsingXpath('//div[@id="billing_address"]//*[@class="Select-arrow"]');
=======
	cy.clickOnElementTextWithForce('Select a state');
>>>>>>> origin/master
	//cy.wait(1000);
	cy.clickOnElement('div[aria-label="Alabama"]');
});

Cypress.Commands.add('PayorName', () => {
	cy.clickOnElement(dispenserPageSelectors.PayorName).type('Max Life')
<<<<<<< HEAD
	cy.wait(2000)
	cy.contains('Max Life', { timeout: 10000 }).click()
=======
	cy.contains('Max Life').click()
>>>>>>> origin/master
});

Cypress.Commands.add('ServiseTypePickUpPerson', () => {
	cy.clickOnElement(dispenserPageSelectors.service)
<<<<<<< HEAD
	cy.clickOnElementUsingXpath('//*[text()="Pick Up In Person"]')
=======
	cy.clickOnElement('div[aria-label="Pick Up In Person"]')
>>>>>>> origin/master
})

Cypress.Commands.add('ServiseTypeCourierService', () => {
	cy.clickOnElement(dispenserPageSelectors.service)
<<<<<<< HEAD
	cy.clickOnElementUsingXpath('//*[text()="Courier Service"]')
=======
	cy.clickOnElement('div[aria-label="Courier Service"]')
>>>>>>> origin/master
})

Cypress.Commands.add('AttachDocument', () => {
	cy.clickOnElement('[data-test="edit-document"]')
	cy.xpath(practicePageSelectors.selectdocument).check({ force: true }).should('be.checked');
<<<<<<< HEAD
	cy.clickOnElementUsingXpath('//*[@class="modal-dialog"]//*[text()="Select"]');
=======
	cy.clickOnElementUsingXpath('//*[@class="modal-dialog"]//*[text()="Select"]'); //Select document
});

Cypress.Commands.add('AttachHubDocument', () => {
	cy.xpath('//*[@id="app"]/div/div/div/div[1]/div/div[2]/div[3]/div[4]/div[2]/div/section/span').click();
	cy.get(practicePageSelectors.selectdocument).check({ force: true }).should('be.checked');
	cy.xpath('/html/body/div[2]/div[2]/div/div/div[3]/button[1]').click() //submite document
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
	//cy.wait(1000);
>>>>>>> origin/master
	cy.clickOnElement('div[aria-label="Insurance"]');
});

Cypress.Commands.add('selectPayorTypeCash', () => {
	cy.clickOnElementTextWithForce('Select...');
<<<<<<< HEAD
=======
	//cy.wait(1000);
>>>>>>> origin/master
	cy.clickOnElement('div[aria-label="Cash"]');
});

Cypress.Commands.add('selectPayorTypeCoupon', () => {
	cy.clickOnElementTextWithForce('Select...');
<<<<<<< HEAD
=======
	//cy.wait(1000);
>>>>>>> origin/master
	cy.clickOnElement('div[aria-label="Coupon"]');
});

Cypress.Commands.add('selectPayorStatus', () => {
	cy.clickOnElementTextWithForce('Select...');
<<<<<<< HEAD
=======
	//cy.wait(1000);
>>>>>>> origin/master
	cy.clickOnElement('div[aria-label="Active"]');
});

Cypress.Commands.add("paste", { prevSubject: true }, (selector, pastePayload) => {
<<<<<<< HEAD
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
=======
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
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
>>>>>>> origin/master
})