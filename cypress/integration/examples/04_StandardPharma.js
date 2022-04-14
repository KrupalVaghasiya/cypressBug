import { Login_ForgetPassword } from '../../support/PageObjects/Login_ForgetPassword.js'
import { SourceCode } from '../../support/SourceCode/SourceCode.js'
import { EditDetails } from '../../support/SourceCode/EditDetails.js'
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
import { random } from 'lodash';

let number = Math.random().toString(36).substring(2);

describe('Verifing forgot Password From Standard Pharma ', () => {
  it('Forgot Password', () => {
    cy.StandardPharmaForgotPassword()
  })

  it('Verify Forgot password mail', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.RX_Dispenser_Email)
    })
    cy.VerifyForgetPasswordEmail()
  });

  it("Set Password", () => {
    cy.SetPassword()
  })
});

describe('Change product price and Add user.', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Change Product Price', () => {
    cy.ChangeProductPrice()
  })

  it('Creating User', () => {
    cy.AddUser()
  })
})

describe('Create RX, OTC and Compound order onetime with skip Payment', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Creating New Patient and create RX order Onetime with skip payment', () => {
    cy.CreatePatient()
    cy.OnetimeDispenserIntercept()
    cy.CreatingRXOnetimelaterpayment()
  })
})

describe('Approve Order From Practice Account', () => {
  beforeEach(() => {
    cy.PracticeLogin()
  })

  it('Approve Order By Doctor', () => {
    cy.ApproveOrderByDoctor() // Approve order from practice portal
  })
})

describe('Verifing Edit patient details, Approve patient approval and transfer the order', () => {
  beforeEach(() => {
    cy.HubLogin()
  })

  it('Edit patient details, Approve patient and transfer the order', () => {
    cy.EditPatientDetails()
    cy.PatientApproval()
    cy.TransferOrder()
  })
})

describe('Processing payment and creating postage lable', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Process Payment from Standard Pharma', () => {
    cy.ProcessPayment()
  })

  it('Creating Postage Label', () => {
    cy.CreatePostageLabel()
  })

  it('Creating the OTC order Onetime with skip payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingOTCOnetimelaterpayment()
  });

  it('Creating the Compound order Onetime with skip payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingCompoundOnetimelaterpayment()
  });
})

describe('Create RX, OTC and Compound order subscription with skip payment', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Creating RX order Subscription with Skip payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreatingRXSubscriptionLaterPayment()
  })
})

describe('Approve Order From Practice Account', () => {
  beforeEach(() => {
    cy.PracticeLogin()
  })

  it('Approve Order By Doctor', () => {
    cy.ApproveOrderByDoctor() // Approve order from practice portal
  })
})

describe('Verifing Approve patient approval and transfer the order', () => {
  beforeEach(() => {
    cy.HubLogin()
  })

  it('Approve patient approval and transfer the order', () => {
    cy.PatientApproval()
    cy.TransferOrder()
  })
})

describe('Verifing Process Payment And Creating Postage lable', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Process Payment from Standard Pharma', () => {
    cy.ProcessPayment()
  })

  it('Manually adding tracking number', () => {
    cy.readFile('cypress/fixtures/Data.json').then((profile) => {
      cy.visit(loginData.ProductURL + loginData.DispenserURL + loginData.Order + profile.OrderID)
    })
    cy.contains('Select an Action').click()
    cy.get('[aria-label="Change Shipping Details"]').click()
    cy.xpath('//div[@class="modal-body"]//*[@class="Select-arrow"]').click()
    cy.contains('FedEx').click()
    cy.enterText('[name="tracking_number"]', number)
    cy.clickOnElementUsingXpath(dispenserPageSelectors.updateButtonId)
    cy.clickOnElementTextWithForce(loginData.dismissButton) // Click on Dismiss button
    cy.verifyTextToBePresent("Courier Details: FedEx - "+number)
  })

  it('Creating OTC order Subscription with skip payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreatingOTCSubscriptionLaterPayment()
  })

  it('Creating Compound order Subscription with skip payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreatingCompoundSubscriptionLaterPayment()
  })
})

describe('Create RX, OTC and Compound order onetime with Provide Payment', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Creating RX order Onetime with Provide Payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingRXOnetimePaymentOption()
  })
})

describe('Approve Order From Practice Account', () => {
  beforeEach(() => {
    cy.PracticeLogin()
  })

  it('Approve Order By Doctor', () => {
    cy.ApproveOrderByDoctor() // Approve order from practice portal
  })
})

describe('Verifing patient approval and transfer the order', () => {
  beforeEach(() => {
    cy.HubLogin()
  })

  it('Approve patient approval and transfer the order', () => {
    cy.PatientApproval()
    cy.TransferOrder()
  })
})

describe('Process payment and confirm pick up from Standard Pharma ', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Process Payment from Standard Pharma', () => {
    cy.ProcessPayment()
  })

  it('Confirm Confirm Pick-Up', () => {
    cy.confirmPickupPerson()
  })

  it('Creating OTC order Onetime with Provide Payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingOTCOnetimePaymentOption()
  })

  it('Creating Compound order Onetime with Provide Payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingCompoundOnetimePaymentOption()
  })
})

describe('Create RX, OTC and Compound order subscription with provide payment', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  })

  it('Creating RX order Subscription with Provide Payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreatingRXSubscriptionPaymentOptionCourierService()
  })
})

describe('Approve Order From Practice Account', () => {
  beforeEach(() => {
    cy.PracticeLogin()
  })

  it('Approve Order By Doctor', () => {
    cy.ApproveOrderByDoctor() // Approve order from practice portal
  })
})

describe('Verifing patient approval and transfer the order', () => {
  beforeEach(() => {
    cy.HubLogin()
  })

  it('Approve patient approval and transfer the order', () => {
    cy.PatientApproval()
    cy.TransferOrder()
  })
})

describe('Verifing Process Payment and Confirm Courier Pick-Up Order', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Process Payment from Standard Pharma', () => {
    cy.ProcessPayment()
  })

  it('Confirm Courier Pick-Up', () => {
    cy.ConfirmCourierPickUp()
  })

  it('Complete Order', () => {
    cy.CompleteOrder()
  })

  it('Creating OTC order Subscription with provide payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreateOTCSubscriptionPaymentOption()
  })

  it('Creating Compound order Subscription with provide payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreateCompoundSubscriptionPaymentOption()
  })
});