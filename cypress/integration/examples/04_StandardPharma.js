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

describe('Forgot Password From Standard Pharma ', () => {
  it('Forgot Password', () => {
    cy.StandardPharmaForgotPassword()
  })
});

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

describe('Login to Standard Pharma ', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
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
    cy.StandardPharmaLogin()
  });

  it('Creating New Patient and create RX order Onetime with skip payment', () => {
    cy.CreatePatient()
    cy.CreatingRXOnetimelaterpayment()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
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

describe('Edit Patient Pending Details from Hub Portal', () => {
  beforeEach(() => {
    cy.HubLogin()
  })

  it('Should Edit patient details, Approve patient and transfer order', () => {
    cy.EditPatientDetails()
    cy.PatientApproval()
    cy.TransferOrder()
  })
})

describe('Login to Standard Pharma ', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Process Payment from Standard Pharma', () => {
    cy.ProcessPayment()
  })

  it('Create Postage Label', () => {
    cy.CreatePostageLabel()
  })

  it('Creating the OTC order Onetime with skip payment', () => {
    cy.CreatingOTCOnetimelaterpayment()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
  });

  it('Creating the Compound order Onetime with skip payment', () => {
    cy.CreatingCompoundOnetimelaterpayment()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
  });
})

describe('Create RX, OTC and Compound order subscription with skip payment', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Create RX order Subscription with Skip payment', () => {
    cy.CreatingRXSubscriptionLaterPayment()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button
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

describe('Edit Patient Pending Details from Hub Portal', () => {
  beforeEach(() => {
    cy.HubLogin()
  })

  it('Approve patient and transfer order', () => {
    cy.PatientApproval()
    cy.TransferOrder()
  })
})

describe('Login to Standard Pharma ', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Process Payment from Standard Pharma', () => {
    cy.ProcessPayment()
  })

  it('Create Postage Label', () => {
    cy.CreatePostageLabel()
  })

  it('Create OTC order Subscription with skip payment', () => {
    cy.CreatingOTCSubscriptionLaterPayment()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
  })

  it('Create Compound order Subscription with skip payment', () => {
    cy.CreatingCompoundSubscriptionLaterPayment()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button 
  })
})

describe('Create RX, OTC and Compound order onetime with Provide Payment', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Create RX order Onetime with Provide Payment', () => {
    cy.CreatingRXOnetimePaymentOption()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button
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

describe('Edit Patient Pending Details from Hub Portal', () => {
  beforeEach(() => {
    cy.HubLogin()
  })

  it('Approve patient and transfer order', () => {
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

  it('Create OTC order Onetime with Provide Payment', () => {
    cy.CreatingOTCOnetimePaymentOption()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button
  })

  it('Create Compound order Onetime with Provide Payment', () => {
    cy.CreatingCompoundOnetimePaymentOption()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button
  })
})

describe('Create RX, OTC and Compound order subscription with provide payment', () => {
  beforeEach(() => {
    cy.StandardPharmaLogin()
  });

  it('Create RX order Subscription with Provide Payment', () => {
    cy.CreatingRXSubscriptionPaymentOptionCourierService()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button
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

describe('Edit Patient Pending Details from Hub Portal', () => {
  beforeEach(() => {
    cy.HubLogin()
  })

  it('Approve patient and transfer order', () => {
    cy.PatientApproval()
    cy.TransferOrder()
  })
})

describe('Login to Standard Pharma ', () => {
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

  it('Create OTC order Subscription with provide payment', () => {
    cy.CreateOTCSubscriptionPaymentOption()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button
  })

  it('Create Compound order Subscription with provide payment', () => {
    cy.CreateCompoundSubscriptionPaymentOption()
    cy.clickOnElementUsingText(loginData.createOrder, practiceData.buttonTag); // click on submit button
    cy.clickOnElementTextWithForce(dispenserData.dismissButton, practiceData.buttonTag) // Click on dismiss button
  })
});