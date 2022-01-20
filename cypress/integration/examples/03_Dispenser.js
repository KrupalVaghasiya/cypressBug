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

describe('Forgot Password From Hub Dispenser ', () => {
  it('Forgot Password', () => {
    cy.HubForgotPassword()
  })

  it('Verify Forgot password mail', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.Hub_Dispenser_Email)
    })
    cy.VerifyForgetPasswordEmail()
  });

  it("Set Password", () => {
    cy.SetPassword()
  })
})

describe('Change Product Price and Create User from Hub Dispenser', () => {
  beforeEach(() => {
    cy.HubLogin()
  });

  it('Change Product Price', () => {
    cy.ChangeProductPrice()
  })

  it('Add New User', () => {
    cy.AddUser()
  })
})

describe('Create RX, OTC and Compound order onetime with skip Payment', () => {
  beforeEach(() => {
    cy.HubLogin()
  });

  it('Creating New Patient and create RX order Onetime with skip payment', () => {
    //cy.CreatePatient()
    cy.OnetimeDispenserIntercept()
    cy.CreatingRXOnetimelaterpayment()
  })

  it('Edit patient details, Approve patient and transfer order', () => {
    cy.EditPatientDetails()
    cy.PatientApproval()
    cy.TransferOrder()
  })

  it('Complete Order', () => {
    cy.OrderComplete();
  })

  it('Creating the OTC order Onetime with skip payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingOTCOnetimelaterpayment()
  });

  it('Send Out Of Network', () => {
    cy.OrderSendOutOfNetwork();
  })

  it('Creating the Compound order Onetime with skip payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingCompoundOnetimelaterpayment()
  });

  it('Cancel Order', () => {
    cy.CancelOrder();
  })
})

describe('Create OTC and Compound order subscription with skip payment', () => {
  beforeEach(() => {
    cy.HubLogin()
  });

  it('Create OTC order Subscription with skip payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreatingOTCSubscriptionLaterPayment()
  })

  it('Create Compound order Subscription with skip payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreatingCompoundSubscriptionLaterPayment()
  })
})

describe('Create RX, OTC and Compound order onetime with Provide Payment', () => {
  beforeEach(() => {
    cy.HubLogin()
  });

  it('Create RX order Onetime with Provide Payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingRXOnetimePaymentOption()
  })

  it('Create OTC order Onetime with Provide Payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingOTCOnetimePaymentOption()
  })

  it('Create Compound order Onetime with Provide Payment', () => {
    cy.OnetimeDispenserIntercept()
    cy.CreatingCompoundOnetimePaymentOption()
  })
})

describe('Create OTC and Compound order subscription with provide payment', () => {
  beforeEach(() => {
    cy.HubLogin()
  });

  it('Create OTC order Subscription with provide payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreateOTCSubscriptionPaymentOption()
  })

  it('Create Compound order Subscription with provide payment', () => {
    cy.SubscriptionDispenserIntercept()
    cy.CreateCompoundSubscriptionPaymentOption()
  })
});