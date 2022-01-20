import { Login_ForgetPassword } from '../../support/PageObjects/Login_ForgetPassword.js'
import { SourceCode } from '../../support/SourceCode/SourceCode.js'
import { OrderCreation } from '../../support/SourceCode/OrderCreation.js'
import { masterCreationPageSelectors } from '../../support/PageSelectors/masterCreationPageSelectors.js';
import { masterCreationData } from '../../support/PageData/masterCreationData.js';
import { practicePageSelectors } from '../../support/PageSelectors/practicePageSelectors.js';
import { practiceData } from '../../support/PageData/practiceData.js';
import { loginPageSelectors } from '../../support/PageSelectors/loginPageSelectors.js';
import { loginData } from '../../support/PageData/loginData.js';
import { dispenserPageSelectors } from '../../support/PageSelectors/dispenserPageSelectors.js';
import { dispenserData } from '../../support/PageData/dispenserData.js';
import { patientPageSelectors } from '../../support/PageSelectors/patientPageSelectors.js';

const faker = require('faker');
const template = faker.name.firstName() + " Template";
const treatmentTemplate = faker.name.firstName() + " treatment Template";

describe('Forgot Password From Practice and Set new password', () => {
  it('Forgot Password', () => {
    cy.PracticeForgotPassword()
  })

  it('Verify Forgot password mail', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.Practice_Email)
    })
    cy.VerifyForgetPasswordEmail()
  })

  it("Set Password", () => {
    cy.SetPassword()
  })
})

describe('Create Onetime & Subscription Template and Upload Dropchart Documents', () => {
  beforeEach(() => {
    cy.PracticeLogin()
  });

  it('Create Individual Template', () => {
    cy.clickOnElementUsingXpathwithIndex(practicePageSelectors.orderTemplate, 0); // click on the order template tab
    cy.verifyTextToBePresent(masterCreationData.myDashBoard); // verify the my dashborad tab on the main page
    cy.verifyTextToBePresent(masterCreationData.productDashBoard); // verify the product tab on main page
    cy.clickOnElementUsingXpath(practicePageSelectors.addNewTemplate); // click on the add new tamplate button
    cy.clickOnElementUsingXpathwithIndex(practicePageSelectors.selectButtonId, 0); // select the template type
    cy.enterText(practicePageSelectors.templateTitleId, template); // enter the template name
    cy.clickOnElementUsingXpath(practicePageSelectors.continueButtonId); // click on the continue button
    cy.searchForTemplateMedicine()
    cy.clickOnElementUsingXpath(practicePageSelectors.addMedicine); // click on the add Medicine
    cy.Changequantity()
    cy.enterText(practicePageSelectors.enterNotesToPharmasist, dispenserData.instructionMessage);
    cy.clickOnElementUsingXpath(practicePageSelectors.saveTemplateId); // click on the save template button
    cy.verifyTextToBePresent(template); // verify the template name
  });

  it('Create Subscription Template', () => {
    cy.clickOnElementUsingXpathwithIndex(practicePageSelectors.orderTemplate, 0); // click on the order template tab
    cy.verifyTextToBePresent(masterCreationData.myDashBoard); // verify the my dashboard tab on main page
    cy.verifyTextToBePresent(masterCreationData.productDashBoard); // verify the product tab on the main page
    cy.clickOnElementUsingXpath(practicePageSelectors.addNewTemplate); // click on the add new template
    cy.clickOnElementUsingXpathwithIndex(practicePageSelectors.selectButtonId, 1); // select the treatment type template
    cy.enterText(practicePageSelectors.templateTitleId, treatmentTemplate); // enter the template name
    cy.clickOnElementUsingXpath(practicePageSelectors.continueButtonId); // click on the continue button
    cy.searchForTemplateMedicine()
    cy.clickOnElementUsingXpath(practicePageSelectors.addMedicine); // click on the add Medicine
    cy.Changequantity()
    cy.enterText(practicePageSelectors.enterNotesToPharmasist, dispenserData.instructionMessage);
    cy.clickOnElementUsingXpath(practicePageSelectors.saveTemplateId); // click on the save template button
    cy.verifyTextToBePresent(treatmentTemplate); // verify the template name
  });

  it('Upload Welcome letter', () => {
    cy.clickOnElementUsingXpathwithIndex(practicePageSelectors.Documents, 0); // click on the order template tab
    cy.clickOnElementUsingXpath(practicePageSelectors.uploadNewDocuments); // click on the add new documenst button
    cy.SearchDoctor()
    cy.SelectDocumentType1()
    cy.enterText(practicePageSelectors.DocumentTitle, practiceData.DropchartTitle1)
    cy.clickOnElementUsingXpath(practicePageSelectors.continueButtonId)
    //Upload file from Fixtures
    cy.get('[type="file"]').attachFile('Welcome Letter.pdf');
    cy.wait(15000)
    cy.clickOnElementTextWithForce(masterCreationData.SubmitId)
    cy.clickOnElementTextWithForce(loginData.dismissButton)
  });

  it('Upload Patient direction', () => {
    cy.clickOnElementUsingXpathwithIndex(practicePageSelectors.Documents, 0); // click on the order template tab
    cy.clickOnElementUsingXpath(practicePageSelectors.uploadNewDocuments); // click on the add new documenst button
    cy.SearchDoctor()
    cy.SelectDocumentType2()
    cy.enterText(practicePageSelectors.DocumentTitle, practiceData.DropchartTitle2)
    cy.clickOnElementUsingXpath(practicePageSelectors.continueButtonId)
    //Upload file from Fixtures
    cy.get('[type="file"]').attachFile('Patient Direction.pdf');
    cy.wait(15000)
    cy.clickOnElementUsingXpath(practicePageSelectors.continueButtonId)
    cy.searchFordropchartMedicine()
    cy.clickOnElementTextWithForce(masterCreationData.AddRX)
    cy.clickOnElementTextWithForce(masterCreationData.SubmitId)
    cy.clickOnElementTextWithForce(loginData.dismissButton)
  });

  it('Add New User from practice account', () => {
    cy.AddUser()
  });
});

describe("Create Onetime RX, OTC and Compound order with skip payment ", () => {
  beforeEach(() => {
    cy.PracticeLogin()
  });

  it('Create Rx order Onetime with skip payment', () => {
    cy.CreatePatient()
    cy.OnetimePracticeIntercept()
    cy.CreatingRXOnetimelaterpayment()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  });

  it('Search Patient Using Main Search Bar', () => {
    cy.patientMainSearch()
  })

  it('Verify Order from orders details screen', () => {
    cy.VerifyOrderDetails()
  })

  it('Create OTC order Onetime with skip payment', () => {
    cy.OnetimePracticeIntercept()
    cy.CreatingOTCOnetimelaterpayment()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  });

  it('Create Compound order Onetime with skip payment', () => {
    cy.OnetimePracticeIntercept()
    cy.CreatingCompoundOnetimelaterpayment()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  });
})

describe("Create Subscription RX, OTC and Compound order with Skip payment ", () => {
  beforeEach(() => {
    cy.PracticeLogin()
  });

  it('Create RX order Subscription with Skip payment', () => {
    cy.SubscriptionPracticeIntercept()
    cy.CreatingRXSubscriptionLaterPayment()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })

  it('Create OTC order Subscription with Skip payment', () => {
    cy.SubscriptionPracticeIntercept()
    cy.CreatingOTCSubscriptionLaterPayment()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })

  it('Create Compound order Subscription with Skip payment', () => {
    cy.SubscriptionPracticeIntercept()
    cy.CreatingCompoundSubscriptionLaterPayment()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })
})

describe("Create Onetime RX, OTC and Compound order with Provide payment ", () => {
  beforeEach(() => {
    cy.PracticeLogin()
  });

  it('Create RX order Onetime with Provide Payment', () => {
    cy.OnetimePracticeIntercept()
    cy.CreatingRXOnetimePaymentOption()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })

  it('Create OTC order Onetime with Provide Payment', () => {
    cy.OnetimePracticeIntercept()
    cy.CreatingOTCOnetimePaymentOption()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })

  it('Create Compound order Onetime with Provide Payment', () => {
    cy.OnetimePracticeIntercept()
    cy.CreatingCompoundOnetimePaymentOption()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })
})

describe("Create Subscription RX, OTC and Compound order with provide payment ", () => {
  beforeEach(() => {
    cy.PracticeLogin()
  });

  it('Create RX order Subscription with Provide Payment', () => {
    cy.SubscriptionPracticeIntercept()
    cy.CreatingRXSubscriptionPaymentOptionCourierService()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })

  it('Create OTC order Subscription with Provide Payment', () => {
    cy.SubscriptionPracticeIntercept()
    cy.CreateOTCSubscriptionPaymentOption()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })

  it('Create Compound order Subscription with Provide Payment', () => {
    cy.SubscriptionPracticeIntercept()
    cy.CreateCompoundSubscriptionPaymentOption()
    cy.verifyUrl('practice/orders/new/completed')
    cy.get("body").then($body => {
      if ($body.text().includes("You're all set!", "An email confirmation has been sent to the patient.")) {
        cy.log("Order Created Successfully.")
      }
      else {
        cy.log("Oops, Something wrong, Your order is not created.")
      }
    })
  })
})

describe('Create Order from Technician User account', () => {
  before(() => {
    cy.TechnicianUserLogin()
  })

  it('Create Rx order Onetime with skip payment', () => {
    cy.OnetimePracticeIntercept()
    cy.CreatingRXOnetimelaterpayment()
    cy.xpath('//div[1]/div/div[1]/div[3]/text()', { timeout: 30000 }).then(function ($ordernumber) {
      const text = $ordernumber.text()
      cy.readFile("cypress/fixtures/Data.json").then((profile) => {
        profile.OrderNumber = text
        cy.writeFile("cypress/fixtures/Data.json", profile);
      })
    })
  });
})

describe("Verifying Order In Associate Practice Account", () => {
  beforeEach(() => {
    cy.PracticeLogin()
  });

  it('Check Order Comes Into My Queue', () => {
    cy.readFile("cypress/fixtures/Data.json").then((profile) => {
      cy.xpath(practicePageSelectors.myQueueOrder, { timeout: 30000 })
        .contains('td', profile.Patient_fullName)
        .xpath(practicePageSelectors.myQueueOrder, { timeout: 30000 })
        .contains('td', 'One-time Order')
        .should('be.exist')
    })
    cy.clickOnElementUsingXpathwithIndex('//tbody/tr[1]', 0)
    cy.readFile("cypress/fixtures/Data.json").then((profile) => {
      cy.verifyTextToBePresent(profile.OrderNumber)
      cy.verifyUrl(profile.OrderID)
    })
  })
})
