import { Login_ForgetPassword } from '../../support/PageObjects/Login_ForgetPassword.js'
import { masterCreationPageSelectors } from '../../support/PageSelectors/masterCreationPageSelectors.js';
import { masterCreationData } from '../../support/PageData/masterCreationData.js';
import { practicePageSelectors } from '../../support/PageSelectors/practicePageSelectors.js';
import { practiceData } from '../../support/PageData/practiceData.js';
import { loginPageSelectors } from '../../support/PageSelectors/loginPageSelectors.js';
import { loginData } from '../../support/PageData/loginData.js';
import { dispenserPageSelectors } from '../../support/PageSelectors/dispenserPageSelectors.js';
import { dispenserData } from '../../support/PageData/dispenserData.js';
import { commands } from '../../support/commands.js';
import { patientPageSelectors } from '../../support/PageSelectors/patientPageSelectors.js';
import { PatientData } from '../../support/PageData/PatientData.js';
import { SourceCode } from '../../support/SourceCode/SourceCode.js';

const faker = require('faker');
const firstName = faker.name.firstName();
const ProductName = faker.name.findName();
const lastName = faker.name.lastName();
const PhoneNumber = faker.phone.phoneNumber();
const PhoneNumberFormat = faker.phone.phoneNumber();
const insurerPhoneNumber = faker.phone.phoneNumberFormat(1);


const emailAddress = "@mailinator.com";
const practiceName = "_Practice";
const Rx_dispenserName = faker.name.firstName() + "_RX_Dispensers";
const Retail_dispenserName = faker.name.firstName() + "_Retail_Dispensers";
const Compound_dispenserName = faker.name.firstName() + "_Compound_Dispenser";
const Rx_HUB_dispenserName = faker.name.firstName() + "_hub_Dispensers";
const UserEmaildispenser = faker.name.firstName() + ".dispenser@mailinator.com";

const UserEmailpractice = ".practice@mailinator.com";
var num = Math.floor(100000 + Math.random() * 900000)
num = num.toString().substring(0, 4);

// Create Product from Master Account
describe('Verifing forgot Password From Master ', () => {
  it.only('Check for forgot Password', () => {
    cy.MasterForgotPassword()
  });
});

describe('Verifing RX, OTC and Compound Products creation.', () => {
  beforeEach(() => {
    cy.MasterLogin()
  })

  // Create RX product from master account
  it('Creating RX Product', () => {
    cy.clickOnElementTextWithForce(masterCreationData.addProduct);
    cy.enterText(loginPageSelectors.nameFieldId, ProductName + " RX");
    cy.FindRx();
    cy.enterText(masterCreationPageSelectors.categoryFieldId, masterCreationData.categoryRxName, "Enter product name");
    cy.enterText(masterCreationPageSelectors.brandFieldId, masterCreationData.manufacturerRxName, " Enter manufacturer name");
    cy.enterText(masterCreationPageSelectors.packageFieldId, masterCreationData.Package_Size, " Enter package size");
    cy.enterText(masterCreationPageSelectors.priceFieldId, masterCreationData.Rx_Price, "Enter product price");
    cy.enterText(masterCreationPageSelectors.gmvFieldId, masterCreationData.Gmv);
    cy.enterText(masterCreationPageSelectors.awpFieldId, masterCreationData.AWP_Number, "Enter AWP number");
    cy.enterText(masterCreationPageSelectors.arpFieldId, masterCreationData.ARP_Number, "Enter ARP number");
    cy.enterText(masterCreationPageSelectors.ndcFieldId, masterCreationData.NDC_Number, "Enter NDC number");
    cy.enterText(masterCreationPageSelectors.pnFieldId, masterCreationData.PN_Number, "Enter PN number");
    cy.clickOnElementTextWithForce(dispenserData.addingProduct);
  });

  // Create OTC product from master account
  it('Creating OTC Product', () => {
    cy.clickOnElementTextWithForce(masterCreationData.addProduct);
    cy.enterText(loginPageSelectors.nameFieldId, ProductName + " OTC");
    cy.OTCProduct();
    cy.enterText(masterCreationPageSelectors.categoryFieldId, masterCreationData.category_OTC_Name);
    cy.enterText(masterCreationPageSelectors.brandFieldId, masterCreationData.manufacturer_OTC_Name);
    cy.enterText(masterCreationPageSelectors.packageFieldId, masterCreationData.Package_Size);
    cy.enterText(masterCreationPageSelectors.priceFieldId, masterCreationData.OTC_Price);
    cy.enterText(masterCreationPageSelectors.awpFieldId, masterCreationData.AWP_Number);
    cy.enterText(masterCreationPageSelectors.arpFieldId, masterCreationData.ARP_Number);
    cy.enterText(masterCreationPageSelectors.ndcFieldId, masterCreationData.NDC_Number);
    cy.enterText(masterCreationPageSelectors.pnFieldId, masterCreationData.PN_Number);
    cy.clickOnElementTextWithForce(dispenserData.addingProduct);
  });

  // Create Compound product from master account
  it('Creating Compound Product', () => {
    cy.clickOnElementTextWithForce(masterCreationData.addProduct);
    cy.enterText(loginPageSelectors.nameFieldId, ProductName + " Compound");
    cy.Compound();
    cy.enterText(masterCreationPageSelectors.categoryFieldId, masterCreationData.category_Compound_Name);
    cy.enterText(masterCreationPageSelectors.brandFieldId, masterCreationData.manufacturer_Compound_Name);
    cy.enterText(masterCreationPageSelectors.packageFieldId, masterCreationData.Package_Size);
    cy.enterText(masterCreationPageSelectors.priceFieldId, masterCreationData.Compound_Price);
    cy.enterText(masterCreationPageSelectors.awpFieldId, masterCreationData.AWP_Number);
    cy.enterText(masterCreationPageSelectors.arpFieldId, masterCreationData.ARP_Number);
    cy.enterText(masterCreationPageSelectors.ndcFieldId, masterCreationData.NDC_Number);
    cy.enterText(masterCreationPageSelectors.pnFieldId, masterCreationData.PN_Number);
    cy.clickOnElementTextWithForce(dispenserData.addingProduct);
  });
})

//Create hub dispenser
describe('Verifing Hub Dispenser creation.', () => {
  beforeEach(() => {
    cy.MasterLogin()
  });

  it('Creating Hub Dispenser', () => {
    cy.clickOnElementTextWithForce(masterCreationData.dispenserDashboard); // click on the Dispenser tab
    cy.clickOnElementTextWithForce(loginData.addDispenser); // click on add new dispenser
    cy.enterText(loginPageSelectors.nameFieldId, Rx_HUB_dispenserName, "Verify dispenser name"); // enter the Rx ub dispenser name
    cy.enterText(loginPageSelectors.emailField, Rx_HUB_dispenserName + emailAddress); // enter the Rx Hub dispenser email
    cy.writeFile('cypress/fixtures/Data.json', { Hub_Dispenser_Name: Rx_HUB_dispenserName, Hub_Dispenser_Email: Rx_HUB_dispenserName + emailAddress })
    cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); // enter the phone number
    cy.enterText(practicePageSelectors.faxNumber, PhoneNumber); // enter the fax numbar
    cy.enterText(loginPageSelectors.addressLine1, dispenserData.shippingAdderss); // enter the shipping address
    cy.enterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName); // enter the city name
    cy.stateValue(); // select the state
    cy.enterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.zipCode); // enter the zip code
    cy.Timezone(); //select the timezone
    cy.clickOnElementUsingXpath(masterCreationPageSelectors.hubCategory); // click on the hub dispenser category
    cy.enterText(masterCreationPageSelectors.groupNpi_No_Id, masterCreationData.Group_NPI_Number); // enter the GPI number
    cy.enterText(masterCreationPageSelectors.resellerLicsenceNo_Id, masterCreationData.Reseller_License_Number); // enter the licence number
    cy.enterText(masterCreationPageSelectors.adminFirstName, firstName); // enter the first name
    cy.enterText(masterCreationPageSelectors.adminLastName, lastName); // enter the last name
    cy.enterText(masterCreationPageSelectors.adminEmail, Rx_HUB_dispenserName + emailAddress); // enter the admin dispenser email
    cy.enterText(masterCreationPageSelectors.adminPhone, PhoneNumber); // enter the phone number
    cy.clickOnElementTextWithForce(practiceData.createAccount); // click on create account field // click on the create account button
    cy.successFullOrderMessage(masterCreationData.dispensersCreationMessage); // verify the message
    cy.clickOnElementTextWithForce(dispenserData.closeButton); // click on the close button
  });
})

describe('Create Email from Mailinator And Set New Password', () => {
  it('Create Email address', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.Hub_Dispenser_Email)
    })
    cy.ScrapeURL()
  })

  it("Set Password", () => {
    cy.SetPassword()
  })
})

describe('Verifing RX Standard Dispenser creation.', () => {
  before(() => {
    cy.MasterLogin()
  });

  it('Creating RX Dispenser', () => {
    cy.clickOnElementTextWithForce(masterCreationData.dispenserDashboard); // click on the Dispenser tab
    cy.clickOnElementTextWithForce(loginData.addDispenser); // click on the add new dispenser
    cy.enterText(loginPageSelectors.nameFieldId, Rx_dispenserName); // enter the dispenser name
    cy.enterText(loginPageSelectors.emailField, Rx_dispenserName + emailAddress); // enter the dispenser email id
    cy.readFile("cypress/fixtures/Data.json").then((profile) => {
      profile.RX_Dispenser_Email = Rx_dispenserName + emailAddress
      profile.rx_dispenserName = Rx_dispenserName
      cy.writeFile("cypress/fixtures/Data.json", profile);// Write data into Json file
    })
    cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber, "Enter Phone number"); // enter the phone number
    cy.enterText(practicePageSelectors.faxNumber, PhoneNumber, "Enter fax number"); // enter the fax number
    cy.enterText(loginPageSelectors.addressLine1, dispenserData.shippingAdderss); // enter the address
    cy.enterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName); // enter the city name
    cy.stateValue(); // select the state
    cy.enterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.zipCode); // enter the zip code
    cy.Timezone(); //select the timezone
    cy.clickOnElementUsingXpath(masterCreationPageSelectors.standardCategory); // select the dispenser category
    cy.enterText(masterCreationPageSelectors.groupNpi_No_Id, masterCreationData.Group_NPI_Number); // enter the NPI number
    cy.enterText(masterCreationPageSelectors.resellerLicsenceNo_Id, masterCreationData.Reseller_License_Number); // enter the licence number
    cy.enterText(masterCreationPageSelectors.adminFirstName, firstName); // enter the first name
    cy.enterText(masterCreationPageSelectors.adminLastName, lastName); // enter the last name
    cy.enterText(masterCreationPageSelectors.adminEmail, Rx_dispenserName + emailAddress); // enter the admin email
    cy.enterText(masterCreationPageSelectors.adminPhone, PhoneNumber, 'Enter admin phonenumber'); // enter the phone number
    cy.clickOnElementTextWithForce(practiceData.createAccount); // click on create account field // click on the create new account button
    cy.successFullOrderMessage(masterCreationData.dispensersCreationMessage); // verify the message
    cy.clickOnElementTextWithForce(dispenserData.closeButton); // click on the close button
  });
})

describe('Create Email from Mailinator And Set New Password', () => {
  it('Create Email address', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.RX_Dispenser_Email)
    })
    cy.ScrapeURL()
  })

  it("Set Password", () => {
    cy.SetPassword()
  })
})

describe('Verifing OTC Standard Dispenser creation.', () => {
  before(() => {
    cy.MasterLogin()
  });

  it('Creating OTC Dispenser', () => {
    cy.clickOnElementTextWithForce(masterCreationData.dispenserDashboard); // click on the Dispenser tab
    cy.clickOnElementTextWithForce(loginData.addDispenser); // click on the add new dispenser
    cy.enterText(loginPageSelectors.nameFieldId, Retail_dispenserName); // enter the dispenser name
    cy.enterText(loginPageSelectors.emailField, Retail_dispenserName + emailAddress); // enter the email id
    cy.readFile("cypress/fixtures/Data.json").then((profile) => {
      profile.OTC_Dispenser_Email = Retail_dispenserName + emailAddress
      profile.otc_dispenserName = Retail_dispenserName
      cy.writeFile("cypress/fixtures/Data.json", profile); // Write data into json file
    })
    cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); // enter the phone number
    cy.enterText(practicePageSelectors.faxNumber, PhoneNumber); // enter the fax number
    cy.enterText(loginPageSelectors.addressLine1, dispenserData.shippingAdderss, "Enter shippng address"); // enter the shipping address
    cy.enterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName); // enter the city name
    cy.stateValue(); // select the state
    cy.enterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.zipCode); // enter the zip code
    cy.Timezone(); //select the timezone
    cy.clickOnElementUsingXpath(masterCreationPageSelectors.standardCategory); // select  the dispenser category
    cy.enterText(masterCreationPageSelectors.groupNpi_No_Id, masterCreationData.Group_NPI_Number); // enter the NPI number
    cy.enterText(masterCreationPageSelectors.resellerLicsenceNo_Id, masterCreationData.Reseller_License_Number); // enter the reseller licence umber
    cy.enterText(masterCreationPageSelectors.adminFirstName, firstName); // enter the first name
    cy.enterText(masterCreationPageSelectors.adminLastName, lastName);  // enter the last name
    cy.enterText(masterCreationPageSelectors.adminEmail, Retail_dispenserName + emailAddress); // enter the admin email id
    cy.enterText(masterCreationPageSelectors.adminPhone, PhoneNumber); // enter the phone number
    cy.clickOnElementTextWithForce(practiceData.createAccount); // click on create account field // click on the create new account button
    cy.successFullOrderMessage(masterCreationData.dispensersCreationMessage); // verify the message
    cy.clickOnElementTextWithForce(dispenserData.closeButton); // click on the close button
  });
})

describe('Create Email from Mailinator And Set New Password', () => {
  it('Create Email address', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.OTC_Dispenser_Email)
    })
    cy.ScrapeURL()
  })

  it("Set Password", () => {
    cy.SetPassword()
  })
})

describe('Verifing Compound Standard Dispenser creation.', () => {
  before(() => {
    cy.MasterLogin()
  });

  it('Creating Compound Standard Dispenser', () => {
    cy.clickOnElementTextWithForce(masterCreationData.dispenserDashboard); // click on the Dispenser tab
    cy.clickOnElementTextWithForce(loginData.addDispenser); // click on the add new dispenser
    cy.enterText(loginPageSelectors.nameFieldId, Compound_dispenserName); // enter the dispenser name
    cy.enterText(loginPageSelectors.emailField, Compound_dispenserName + emailAddress); // enter the email Id
    cy.readFile("cypress/fixtures/Data.json").then((profile) => {
      profile.Compound_Dispenser_Email = Compound_dispenserName + emailAddress
      profile.compound_dispenserName = Compound_dispenserName
      cy.writeFile("cypress/fixtures/Data.json", profile);
    })
    cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); // enter the phone number
    cy.enterText(practicePageSelectors.faxNumber, PhoneNumber); // enter the fax number
    cy.enterText(loginPageSelectors.addressLine1, dispenserData.shippingAdderss); // enter the shipping address
    cy.enterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName); // enter the city name
    cy.stateValue(); // select the state
    cy.enterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.zipCode); // enter the zip code
    cy.Timezone(); //select the timezone
    cy.clickOnElementUsingXpath(masterCreationPageSelectors.standardCategory); // select the dispenser category
    cy.enterText(masterCreationPageSelectors.groupNpi_No_Id, masterCreationData.Group_NPI_Number); // select the NPI number
    cy.enterText(masterCreationPageSelectors.resellerLicsenceNo_Id, masterCreationData.Reseller_License_Number); // enter the licence number
    cy.enterText(masterCreationPageSelectors.adminFirstName, firstName); // enter the first name
    cy.enterText(masterCreationPageSelectors.adminLastName, lastName); // enter the last name
    cy.enterText(masterCreationPageSelectors.adminEmail, Compound_dispenserName + emailAddress); // enter the admin email id
    cy.enterText(masterCreationPageSelectors.adminPhone, PhoneNumber); // enter the phone number
    cy.clickOnElementTextWithForce(practiceData.createAccount); // click on create account field // click on the create new account button
    cy.successFullOrderMessage(masterCreationData.dispensersCreationMessage); // verify the message
    cy.clickOnElementTextWithForce(dispenserData.closeButton); // click on the close button
  });
});

describe('Create Email from Mailinator And Set New Password', () => {
  it('Create Email address', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.Compound_Dispenser_Email)
    })
    cy.ScrapeURL()
  })

  it("Set Password", () => {
    cy.SetPassword()
  })
})

// Create Practice from master account
describe('Verifing Practice creation.', () => {
  beforeEach(() => {
    cy.MasterLogin()
  });

  it('Creating Practicer Account', () => {
    cy.clickOnElementTextWithForce(masterCreationData.practiceDashBoard); // click on the Practice tab
    cy.wait(2000)
    cy.clickOnElementTextWithForce(loginData.addPractice); // click on the add new practice
    cy.enterText(loginPageSelectors.nameFieldId, firstName + practiceName); // enter the practice name
    cy.enterText(loginPageSelectors.emailField, firstName + practiceName + emailAddress); // enter the practice email id
    cy.readFile("cypress/fixtures/Data.json").then((profile) => {
      profile.PracticeName = firstName
      profile.Practice_Email = firstName + practiceName + emailAddress
      cy.writeFile("cypress/fixtures/Data.json", profile);
    })
    cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); // enter the phone number
    cy.enterText(practicePageSelectors.faxNumber, PhoneNumber); // enter the fax number
    cy.enterText(loginPageSelectors.addressLine1, dispenserData.shippingAdderss); // enter the shipping address
    cy.enterText(dispenserPageSelectors.cardDetailsCityField, dispenserData.cityName); // enter the city name
    cy.stateValue(); // select the state
    cy.enterText(dispenserPageSelectors.cardDetailsZipCodeField, dispenserData.zipCode); // enter the zip code
    cy.Timezone(); //select the timezone
    cy.Practice();
    cy.enterText(masterCreationPageSelectors.groupNpi_No_Id, masterCreationData.Group_NPI_Number, "Enter GPI number");
    cy.enterText(masterCreationPageSelectors.resellerLicsenceNo_Id, masterCreationData.Reseller_License_Number, "Enter reseller license number");
    cy.fixture('Data').then((profile) => {
      cy.contains('Select...').click()
        .get("[aria-label='" + profile.rx_dispenserName + "']").click()
    })
    cy.fixture('Data').then((profile) => {
      cy.contains('Select...').click()
        .get("[aria-label='" + profile.otc_dispenserName + "']").click()
    })
    cy.fixture('Data').then((profile) => {
      cy.contains('Select...').click()
        .get("[aria-label='" + profile.compound_dispenserName + "']").click()
    })
    cy.enterText(masterCreationPageSelectors.adminFirstName, firstName); // enter the first name
    cy.enterText(masterCreationPageSelectors.adminLastName, lastName); // enter the last name
    cy.enterText(masterCreationPageSelectors.adminEmail, firstName + practiceName + emailAddress); // enter the practice admin email id
    cy.enterText(masterCreationPageSelectors.adminPhone, PhoneNumber);
    cy.clickOnElementTextWithForce(practiceData.createAccount); // click on create account field
    cy.successFullOrderMessage(masterCreationData.practiceCreationMessage); // verify the message
    cy.clickOnElementTextWithForce(dispenserData.closeButton); // click on the close button
  });
});

describe('Create Email from Mailinator And Set New Password', () => {
  it('Create Email address', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.Practice_Email)
    })
    cy.ScrapeURL()
  })

  it("Set Password", () => {
    cy.SetPassword()
  })
})

describe('Verifing User creation.', () => {
  beforeEach(() => {
    cy.MasterLogin()
  });

  it('Creating User for dispenser.', () => {
    cy.clickOnElementTextWithForce(masterCreationData.userDashBoard); // click on the User tab
    cy.clickOnElementTextWithForce(loginData.addUsers); //click on the account button link
    cy.enterText(loginPageSelectors.userfirst_name, firstName); // enter first name of admin
    cy.enterText(loginPageSelectors.userlast_name, lastName); // enter last name of admin
    cy.enterText(loginPageSelectors.emailField, firstName + UserEmaildispenser); // enter admin email address
    cy.readFile("cypress/fixtures/Data.json").then((profile) => {
      profile.Dispenser_Technician_Email = firstName + UserEmaildispenser
      cy.writeFile("cypress/fixtures/Data.json", profile);
    })
    cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); //enter phone number of patient
    cy.clickOnElementUsingXpath(masterCreationPageSelectors.userDispenserCategory);
    cy.readFile('cypress/fixtures/Data.json').then((profile) => {
      cy.enterText(masterCreationPageSelectors.userSearch, profile.rx_dispenserName).wait(2000).clickOnElementTextWithForce(profile.rx_dispenserName)
    })
    cy.clickOnElement(masterCreationPageSelectors.userSearch) // Search box
    cy.clickOnElementUsingXpath(masterCreationPageSelectors.userGet)
    cy.userselect()
    cy.clickOnElementTextWithForce(loginData.usersubmit)
    cy.clickOnElementTextWithForce(dispenserData.dismissButton)
  });

  it('Creating User for practice.', () => {
    cy.clickOnElementTextWithForce(masterCreationData.userDashBoard); // click on the User tab
    cy.clickOnElementTextWithForce(loginData.addUsers); //click on the account button link
    cy.enterText(loginPageSelectors.userfirst_name, firstName); // enter first name of admin
    cy.enterText(loginPageSelectors.userlast_name, lastName); // enter last name of admin
    cy.enterText(loginPageSelectors.emailField, firstName + UserEmailpractice); // enter admin email address
    cy.readFile("cypress/fixtures/Data.json").then((profile) => {
      profile.Technician_Email = firstName + UserEmailpractice
      cy.writeFile("cypress/fixtures/Data.json", profile);
    })
    cy.enterText(practicePageSelectors.phoneNumber, PhoneNumber); //enter phone number of patient
    cy.clickOnElementUsingXpath(masterCreationPageSelectors.userPracticeCategory);
    cy.readFile('cypress/fixtures/Data.json').then((profile) => {
      cy.enterText(masterCreationPageSelectors.userSearch, profile.PracticeName).wait(2000).clickOnElementTextWithForce(profile.PracticeName + "_Practice", { delay: 100 })
    })
    cy.userselect()
    cy.clickOnElementTextWithForce(loginData.usersubmit)
    cy.clickOnElementTextWithForce(dispenserData.dismissButton)
  });
})

describe('Create Email from Mailinator And Set New Practice User', () => {
  it('Create Email address', () => {
    cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
    cy.fixture('Data').then((profile) => {
      cy.enterText(patientPageSelectors.txtMailID, profile.Technician_Email)
    })
    cy.ScrapeURL()
  })

  it("Set Password", () => {
    cy.SetPassword()
  })
})

// Create payor from master
describe('Verifing Payor creation.', () => {
  beforeEach(() => {
    cy.MasterLogin()
  });

  it('Creating Payor Insurance.', () => {
    cy.clickOnElementTextWithForce(masterCreationData.PayorDashboard); // click on the Payor tab
    cy.clickOnElementTextWithForce(loginData.addPayor); //click on the account button link
    cy.enterText(loginPageSelectors.nameFieldId, firstName + ' Insurance ' + lastName); // enter first name of admin
    cy.selectPayorTypeInsurance(); // select the Payor type
    cy.selectPayorStatus();
    cy.clickOnElementTextWithForce(loginData.CreatePayor)
    cy.clickOnElementTextWithForce(dispenserData.dismissButton)
  });

  it('Creating Payor Cash.', () => {
    cy.clickOnElementTextWithForce(masterCreationData.PayorDashboard); // click on the Payor tab
    cy.clickOnElementTextWithForce(loginData.addPayor); //click on the account button link
    cy.enterText(loginPageSelectors.nameFieldId, firstName + ' Cash ' + lastName); // enter first name of admin
    cy.selectPayorTypeCash(); // select the Payor type
    cy.selectPayorStatus();
    cy.clickOnElementTextWithForce(loginData.CreatePayor)
    cy.clickOnElementTextWithForce(dispenserData.dismissButton)
  });

  it('Createing Payor Coupen.', () => {
    cy.clickOnElementTextWithForce(masterCreationData.PayorDashboard); // click on the Payor tab
    cy.clickOnElementTextWithForce(loginData.addPayor); //click on the account button link
    cy.enterText(loginPageSelectors.nameFieldId, firstName + ' Coupons ' + lastName); // enter first name of admin
    cy.selectPayorTypeCoupon(); // select the Payor type
    cy.selectPayorStatus();
    cy.clickOnElementTextWithForce(loginData.CreatePayor)
    cy.clickOnElementTextWithForce(dispenserData.dismissButton)
  });
});