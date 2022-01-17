import { SourceCode } from '../../support/SourceCode/SourceCode';
import { EditDetails } from '../../support/SourceCode/EditDetails.js';
import { OrderCreation } from '../../support/SourceCode/OrderCreation.js'
import { practicePageSelectors } from '../../support/PageSelectors/practicePageSelectors.js'
import { loginPageObjects } from '../../support/PageObjects/Login_ForgetPassword.js';
import { masterCreationData } from '../../support/PageData/masterCreationData.js';
import { dispenserData } from '../../support/PageData/dispenserData.js';
import { practiceData } from '../../support/PageData/practiceData.js';
import { loginData } from '../../support/PageData/loginData.js';
import { loginPageSelectors } from '../../support/PageSelectors/loginPageSelectors.js';
import { masterCreationPageSelectors } from '../../support/PageSelectors/masterCreationPageSelectors.js';
import { dispenserPageSelectors } from '../../support/PageSelectors/dispenserPageSelectors.js';
import { patientPageSelectors } from '../../support/PageSelectors/patientPageSelectors.js';
import { PatientData } from '../../support/PageData/PatientData.js';

const faker = require("faker");
<<<<<<< HEAD

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const emailAddress = firstName + "@mailinator.com";
const PhoneNumber = faker.phone.phoneNumber();
const allergiesName = "Cypress " + faker.name.firstName() + "_Allergies";
const insurerPhoneNumber = faker.phone.phoneNumberFormat(1);

=======
const firstName = faker.Name.firstName();
const lastName = faker.Name.lastName();
const emailAddress = firstName + "@mailinator.com";
const PhoneNumber = faker.PhoneNumber.phoneNumber();
const allergiesName = "Cypress " + faker.Name.firstName() + "_Allergies";
const insurerPhoneNumber = faker.PhoneNumber.phoneNumberFormat(1);
>>>>>>> origin/master
const identity_card = faker.random.number(10, 50)
const street_1 = faker.address.streetAddress()
const street_2 = faker.address.secondaryAddress()
const city = faker.address.city()
const zipCode = faker.address.zipCode()

var PayorAccountNumber = Math.floor(100000 + Math.random() * 900000)
PayorAccountNumber = PayorAccountNumber.toString().substring(0, 11);

var num = Math.floor(100000 + Math.random() * 900000)
num = num.toString().substring(0, 4);

var ZipCode = Math.floor(100000 + Math.random() * 900000)
ZipCode = ZipCode.toString().substring(0, 5);

var date = new Date();
var birthDate = (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear())

describe('Create Patient And OTC Subscription Order From Practice Account', () => {
    beforeEach(() => {
        cy.PracticeLogin()
    })

    it('Create Patient', () => {
        cy.CreatePatient()
    })

    it('Create OTC order Subscription with skip payment', () => {
        cy.CreatingOTCSubscriptionLaterPayment()
        cy.clickOnElementUsingText(loginData.submitButtonName, practiceData.buttonTag); // click on submit button
    });
})

describe('Create Patient Email from Mailinator And Save Link Into file', () => {
    it('Create Email address', () => {
        cy.visit(patientPageSelectors.Mailinator, { timeout: 30000 })
        cy.fixture('Data').then((profile) => {
            cy.enterText(patientPageSelectors.txtMailID, profile.Patient_Email)
        })
        cy.clickOnElementUsingXpath(patientPageSelectors.GoButton)
        cy.verifyTextToBePresent(PatientData.VerifyProduct);
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.EmailContent, 0);
        cy.clickOnElement('#pills-textbuthtml-tab')
        cy.get('#texthtml_msg_body').then(function ($link) {
            var ifele = $link.contents().find('body:nth-child(2) > a:nth-child(7)');
            cy.wrap(ifele).then(function (ele) {

                const url = ele.prop('href');
                cy.readFile("cypress/fixtures/Data.json").then((profile) => {
                    profile.url = url
                    cy.writeFile("cypress/fixtures/Data.json", profile);
                })
            })
        })
    })
})

describe('Set Password For The Patient', () => {
    it('Register Patient', () => {
        cy.wait(1000)
        cy.readFile('cypress/fixtures/Data.json').then((profile) => {
            cy.visit(profile.url)
        })
        cy.clickOnElementUsingText(practiceData.continueButton);
        cy.enterText(patientPageSelectors.NewPassword, loginData.PatientPassword);
        cy.enterText(patientPageSelectors.ConfirmPassword, loginData.PatientPassword);
        cy.clickOnElementUsingXpath(practicePageSelectors.submitButtonId);
        cy.verifyTextToBePresent(PatientData.ConfirmAllSet);
    })

    it('Setup Patient Account', function () {
        cy.PatientLogin()
        cy.enterText(patientPageSelectors.AllergiesTextboxID, allergiesName);
        cy.clickOnElementUsingXpath(patientPageSelectors.Allergiesbutton)
        cy.clickOnElementUsingText(practiceData.continueButton);
        cy.verifyTextToBePresent(PatientData.InsurancePagetext);
        cy.enterText(dispenserPageSelectors.PayorAccountNo, PayorAccountNumber);
        cy.enterText(dispenserPageSelectors.PayorGroupNo, num);
        cy.enterText(dispenserPageSelectors.PayorRX_binNo, num);
        cy.enterText(dispenserPageSelectors.PayorPC_No, num);
        cy.clickOnElementUsingText(practiceData.continueButton);
    })

    it('Forgot Password', () => {
        cy.PatientForgotPassword()
    })
})

describe('Update Patient details', () => {
    beforeEach(() => {
        cy.PatientLogin()
    });

    it('Check Order Details', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.Orderscreen)
        cy.wait(2000)
        cy.clickOnElement(patientPageSelectors.Orderdetailbutton)
        cy.verifyTextToBePresent(PatientData.BillingAddress);
        cy.verifyTextToBePresent(PatientData.ShippingAddress);
        cy.verifyTextToBePresent(PatientData.Total);
        cy.clickOnElementTextWithForce(PatientData.BackToDashboard);
    })

    it('Update Account Details', () => {
        cy.verifyTextToBePresent(PatientData.OrderDashboard);
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.verifyTextToBePresent(PatientData.AccountInfo);
        cy.clickOnElementUsingText(PatientData.AccountLink);
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.UpdateButton, 0)
        cy.clearText(patientPageSelectors.AccountName)
        cy.enterText(patientPageSelectors.AccountName, "Cypress " + firstName)
        cy.clearText(patientPageSelectors.AccountLastName)
        cy.enterText(patientPageSelectors.AccountLastName, lastName)
        cy.clickOnElement(patientPageSelectors.DatePicker)
        cy.clickOnElement(patientPageSelectors.AccountYearPicker)
        cy.clickOnElementUsingXpath(patientPageSelectors.Year)
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.Date, 0)
        cy.clearText(patientPageSelectors.AccountPhone)
        cy.enterText(patientPageSelectors.AccountPhone, PhoneNumber)
        cy.clickOnElementUsingXpath(patientPageSelectors.SaveButton)
        cy.clickOnElementUsingText(practiceData.continueButton)
        cy.verifyElementExists(patientPageSelectors.Footer);
        cy.clickOnElementUsingText(PatientData.AccountLink);
    });

    it('Payment method', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.clickOnElementUsingXpath(patientPageSelectors.AccountScreen)
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.UpdateButton, 1)
        cy.enterText(patientPageSelectors.nameOnCard, practiceData.nameOnCard);
        cy.enterText(patientPageSelectors.nameOnCard, practiceData.nameOnCard); // enter the name as on card
        cy.iframe('iframe[src*="uat.freedompay.com"]')
<<<<<<< HEAD
            .find(patientPageSelectors.CardNumber)
            .type(practiceData.CardNumber)
        cy.iframe('iframe[src*="uat.freedompay.com"]')
            .find(patientPageSelectors.ExperientionDate)
            .type("01/25")
        cy.iframe('iframe[src*="uat.freedompay.com"]')
            .find(patientPageSelectors.cvvCode)
            .type(practiceData.cardSecurityPin)
        cy.iframe('iframe[src*="uat.freedompay.com"]')
            .find(patientPageSelectors.PostalCode)
            .type(dispenserData.zipCode)
        cy.iframe('iframe[src*="uat.freedompay.com"]')
            .contains(loginData.saveButtonName)
            .click()
        if (cy.verifyTextToBePresent("You have successfully saved your updates.")) {
            cy.clickOnElementUsingText(practiceData.continueButton)
        }
        else {
=======
        .find(patientPageSelectors.CardNumber)
        .type(practiceData.CardNumber)
        cy.iframe('iframe[src*="uat.freedompay.com"]')
        .find(patientPageSelectors.ExperientionDate)
        .type("01/25")
        cy.iframe('iframe[src*="uat.freedompay.com"]')
        .find(patientPageSelectors.cvvCode)
        .type(practiceData.cardSecurityPin)
        cy.iframe('iframe[src*="uat.freedompay.com"]')
        .find(patientPageSelectors.PostalCode)
        .type(dispenserData.zipCode)
        cy.iframe('iframe[src*="uat.freedompay.com"]')
        .contains(loginData.saveButtonName)
        .click()
        if(cy.verifyTextToBePresent("You have successfully saved your updates."))
        {
            cy.clickOnElementUsingText(practiceData.continueButton)
        }
        else{
>>>>>>> origin/master
            print("Card Detaills not saved")
        }
    })

    it('shipping address', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.clickOnElementUsingXpath(patientPageSelectors.AccountScreen)
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.UpdateButton, 2)
        cy.clearText(patientPageSelectors.Address1)
        cy.enterText(patientPageSelectors.Address1, dispenserData.shippingAdderss)
        cy.clearText(patientPageSelectors.city)
        cy.enterText(patientPageSelectors.city, dispenserData.cityName)
        cy.clickOnElement(patientPageSelectors.state)
        cy.clickOnElementUsingXpath(patientPageSelectors.StateValue)
        cy.clearText(patientPageSelectors.zipCodeID)
        cy.enterText(patientPageSelectors.zipCodeID, zipCode)
        cy.clickOnElementUsingXpath(patientPageSelectors.SaveButton)
        cy.clickOnElementUsingText(practiceData.continueButton)
    })

    it('Health Insurance', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.clickOnElementUsingXpath(patientPageSelectors.HealthInsurance)
        cy.clickOnElementUsingXpath(patientPageSelectors.Addhealth)
        cy.clickOnElement(patientPageSelectors.payornameid)
        cy.clickOnElementUsingXpath(patientPageSelectors.selectPayor)
        cy.enterText(patientPageSelectors.Accountnumber, PayorAccountNumber)
        cy.enterText(patientPageSelectors.Groupnumber, PayorAccountNumber)
        cy.enterText(patientPageSelectors.Rxbin, PayorAccountNumber)
        cy.enterText(patientPageSelectors.PCN, PayorAccountNumber)
        cy.enterText(patientPageSelectors.Insurerphonnumber, insurerPhoneNumber)
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.Addinsurance, 1)
        cy.clickOnElementUsingText(practiceData.continueButton)
    })

    it('Edit Health Insurance', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.clickOnElementUsingXpath(patientPageSelectors.HealthInsurance)
        cy.clickOnElementUsingXpath(patientPageSelectors.Editinsurance)
        cy.clickOnElement(patientPageSelectors.payornameid)
        cy.clickOnElementUsingXpath(patientPageSelectors.NewPayor)
        cy.clearText(patientPageSelectors.Accountnumber)
        cy.enterText(patientPageSelectors.Accountnumber, identity_card)
        cy.clearText(patientPageSelectors.Groupnumber)
        cy.enterText(patientPageSelectors.Groupnumber, identity_card)
        cy.clearText(patientPageSelectors.Rxbin)
        cy.enterText(patientPageSelectors.Rxbin, identity_card)
        cy.clearText(patientPageSelectors.PCN)
        cy.enterText(patientPageSelectors.PCN, identity_card)
        cy.clearText(patientPageSelectors.Insurerphonnumber)
        cy.enterText(patientPageSelectors.Insurerphonnumber, insurerPhoneNumber)
        cy.clickOnElementUsingXpath(patientPageSelectors.SaveButton)
        cy.clickOnElementUsingText(practiceData.continueButton)
    })

    it('Remove Health Insurance', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.clickOnElementUsingXpath(patientPageSelectors.HealthInsurance)
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.removeButton, 0)
        cy.clickOnElementUsingXpath(patientPageSelectors.confirmButton)
    })

    it('Adding Allergies', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.clickOnElementUsingXpath(patientPageSelectors.Allergies)
        cy.clickOnElementUsingXpath(patientPageSelectors.Allergiesbutton)
        cy.enterText(patientPageSelectors.addallergy, allergiesName)
        cy.clickOnElementUsingXpath(patientPageSelectors.Allergiesbutton)
        cy.clickOnElementUsingXpath(patientPageSelectors.Allergies)
    })

    it('Remove Allergies', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.clickOnElementUsingXpath(patientPageSelectors.Allergies)
        cy.clickOnElementUsingXpath(patientPageSelectors.RemoveAllergies)
        cy.clickOnElementUsingXpath(patientPageSelectors.confirmButton)
    })

    it('Change Password', () => {
        cy.verifyTextToBePresent(PatientData.OrderDashboard);
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.verifyTextToBePresent(PatientData.AccountInfo);
        cy.verifyTextToBePresent(PatientData.PasswordInfo);
        cy.verifyTextToBePresent(PatientData.PreferenceInfo);
        cy.clickOnElementUsingText(PatientData.PasswordLink);
        cy.verifyTextToBePresent(PatientData.Changepassword);
        cy.verifyElementExists(patientPageSelectors.Footer);
        cy.contains(PatientData.UpdateButton).should('not.be.disabled')
        cy.enterText(patientPageSelectors.OldPasswordID, loginData.PatientPassword);
        cy.enterText(patientPageSelectors.NewPasswordID, loginData.PatientPassword);
        cy.enterText(patientPageSelectors.ConfirmPasswordID, loginData.PatientPassword);
        cy.clickOnElementUsingText(PatientData.PasswordLink);
    })

    it('Check Preferences', () => {
        cy.verifyTextToBePresent(PatientData.OrderDashboard);
        cy.clickOnElementUsingXpath(patientPageSelectors.SettingScreen);
        cy.clickOnElementUsingText(PatientData.PreferenceLink);
        cy.verifyElementExists(patientPageSelectors.Footer);
        cy.clickOnElementUsingXpath(patientPageSelectors.TextMessageButton)
        cy.clickOnElementUsingXpath(patientPageSelectors.AdditionalMessageButton)
        cy.clickOnElementUsingText(PatientData.PreferenceLink);
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.SignOutButton, 0);
        cy.clickOnElementUsingText(practiceData.continueButton)
    })
})

describe('Complete Payment Details, Edit plans date and Cancel plan from patient portal', () => {
    beforeEach(() => {
        cy.PatientLogin()
    });

    it('Complete Payment Details from Home Screen', () => {
<<<<<<< HEAD
        if (cy.verifyTextToBePresent(PatientData.HomeNotification)) {
=======
        if(cy.verifyTextToBePresent(PatientData.HomeNotification)){
>>>>>>> origin/master
            cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.CompletePaymentButton, 0)
            cy.clearText(patientPageSelectors.Address1)
            cy.enterText(patientPageSelectors.Address1, street_1)
            cy.clearText(patientPageSelectors.Address2)
            cy.enterText(patientPageSelectors.Address2, street_2)
            cy.clearText(patientPageSelectors.city)
            cy.enterText(patientPageSelectors.city, city)
            cy.clickOnElement(patientPageSelectors.state)
            cy.clickOnElementUsingXpath(patientPageSelectors.StateValue)
            cy.clearText(patientPageSelectors.zipCodeID)
            cy.enterText(patientPageSelectors.zipCodeID, zipCode)
            cy.iframe('iframe[src*="uat.freedompay.com"]')
<<<<<<< HEAD
                .find(patientPageSelectors.CardNumber)
                .type(practiceData.CardNumber)
            cy.iframe('iframe[src*="uat.freedompay.com"]')
                .find(patientPageSelectors.ExperientionDate)
                .type("01/25")
            cy.iframe('iframe[src*="uat.freedompay.com"]')
                .find(patientPageSelectors.cvvCode)
                .type(practiceData.cardSecurityPin)
            cy.iframe('iframe[src*="uat.freedompay.com"]')
                .find(patientPageSelectors.PostalCode)
                .type(dispenserData.zipCode)
            cy.iframe('iframe[src*="uat.freedompay.com"]')
                .contains(loginData.saveButtonName)
                .click()
        }
        else {
=======
            .find(patientPageSelectors.CardNumber)
            .type(practiceData.CardNumber)
            cy.iframe('iframe[src*="uat.freedompay.com"]')
            .find(patientPageSelectors.ExperientionDate)
            .type("01/25")
            cy.iframe('iframe[src*="uat.freedompay.com"]')
            .find(patientPageSelectors.cvvCode)
            .type(practiceData.cardSecurityPin)
            cy.iframe('iframe[src*="uat.freedompay.com"]')
            .find(patientPageSelectors.PostalCode)
            .type(dispenserData.zipCode)
            cy.iframe('iframe[src*="uat.freedompay.com"]')
            .contains(loginData.saveButtonName)
            .click()
        }
        else{
>>>>>>> origin/master
            cy.verifyTextToBePresent(PatientData.CheckDetailsPending)
            cy.log("Details pending order not found!")
        }
    })

    it('Edit plans date', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.plansTab)
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.activePlans, 0)
        cy.clickOnElementUsingXpath(patientPageSelectors.ManagePlan)
        cy.clickOnElement(patientPageSelectors.DatePicker)
<<<<<<< HEAD
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.Date, 1)
        cy.wait(1000)
        cy.xpath(patientPageSelectors.UpdateButton).then(($btn) => {
            if ($btn.is(':enabled')) {
                cy.clickOnElementUsingXpath(patientPageSelectors.UpdateButton)
                cy.clickOnElementUsingText(practiceData.continueButton)
            }
            else {
                cy.clickOnElement(patientPageSelectors.DatePicker)
                cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.nextDate, 0)
=======
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.Date,1)
        cy.wait(1000)
        cy.xpath(patientPageSelectors.UpdateButton).then(($btn) => {
            if($btn.is(':enabled'))
            {
                cy.clickOnElementUsingXpath(patientPageSelectors.UpdateButton)
                cy.clickOnElementUsingText(practiceData.continueButton)
            }
            else{
                cy.clickOnElement(patientPageSelectors.DatePicker)
                cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.nextDate,0)
>>>>>>> origin/master
                cy.clickOnElementUsingXpath(patientPageSelectors.UpdateButton)
                cy.clickOnElementUsingText(practiceData.continueButton)
            }
        })
    })

    it('Cancel Plan', () => {
        cy.clickOnElementUsingXpath(patientPageSelectors.plansTab)
        cy.clickOnElementUsingXpathwithIndex(patientPageSelectors.activePlans, 0)
        cy.clickOnElementUsingXpath(patientPageSelectors.ManagePlan)
        cy.clickOnElementUsingXpath(patientPageSelectors.CancelCheckbox)
        cy.clickOnElementUsingXpath(patientPageSelectors.UpdateButton)
        cy.clickOnElementUsingText(practiceData.continueButton)
        cy.verifyTextToBePresent(PatientData.PlanCanceled)
        cy.clickOnElement(patientPageSelectors.SelectReason)
        cy.clickOnElementUsingXpath(patientPageSelectors.planReason)
        cy.wait(2000)
        cy.clickOnElement(patientPageSelectors.SelectReason)
        cy.clickOnElementUsingXpath(patientPageSelectors.OtherReason)
        cy.enterText(patientPageSelectors.CustomReason, PatientData.CustomReason)
        cy.clickOnElementUsingXpath(practicePageSelectors.submitButtonId)
        cy.verifyTextToBePresent(PatientData.ThankyouMessage)
    })
})