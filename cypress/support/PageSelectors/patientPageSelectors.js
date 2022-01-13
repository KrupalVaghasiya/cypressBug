const patientPageSelectors = {
  Mailinator: 'https://www.mailinator.com/',
  GoButton: '//*[text()="GO"]',
  txtMailID: '[id="search"]',
  AccountScreen: '//*[text()="Account"]',
  UpdateButton: '(//*[text()="Update"])',
  Address1: '[id="street_1"]',                            // enter address 1 
  Address2: '[id="street_2"]',                             // enter address 2 
  city: '[id="city"]',                                    // enter city name 
  state: '[id="state"]',
  zipCodeID: '[id="zip"]',
  SaveButton: '//*[text()="Save Updates"]',
  nameOnCard: '[id="name"]',                                  // enter name on the card 
  CardNumber: '[id="CardNumber"]',                              // enter number of the card 
  ExperientionDate: '[id="ExpirationDate"]',                          // enter expiration date 
  cvvCode: '[id="SecurityCode"]',
  PostalCode: '[id="PostalCode"]',
  HealthInsurance: '(//*[text()="Health Insurance"])',    // cllck on health insurance
  Addhealth: '(//*[text()="Add New Insurance"])',          // click to add insurance
  payornameid: '[id="payor_id"]',                            // select payor name 
  selectPayor: '//form[1]/div[1]/div[1]/div[1]/div[2]/div[1]',  // select specified payor name 
  Accountnumber: '[id="account_number"]',
  Groupnumber: '[id="group_number"]',
  Rxbin: '[id="rx_bin"]',
  PCN: '[id="pc_number"]',
  Insurerphonnumber: '[id="insurer_phone"]',
  Addinsurance: '(//*[text()="Add Insurance"])',
  Editinsurance: '(//*[text()="Edit"])[1]',
  NewPayor: '//form[1]/div[1]/div[1]/div[1]/div[2]/div[1]',
  removeButton: '//*[text()="Remove"]',
  RemoveAllergies: '(//*[@aria-label="remove-allergy"])[1]',
  confirmButton: '//*[text()="Confirm"]',
  addallergy: '[id="allergy"]',
  AllergiesTextboxID: 'input[id="allergies.0"]',
  CheckBox: '//*[@class="checkbox checkbox-success"]',
  Allergies: '//*[text()="Allergies"]',
  NewPassword: 'input[id="new_password"]',
  ConfirmPassword: 'input[id="confirm_password"]',
  Allergiesbutton: '//*[text()="Add Allergy"]',
  EmailContent: "//td[contains(text(),'Welcome to Legrande Health!')]",
  ForgetpasswordContent: "//td[contains(text(),'Set New Password for Legrande Account')]",
  SignInButton: '(//*[text()="Sign In"])[2]',
  SignOutButton: '//*[text()="Sign Out"]',
  SettingScreen: '//*[text()="Settings"]',
  SignoutButton: '[id="menuitem-494"]',
  Footer: '[id="contact-help"]',
  OldPasswordID: '[id="old_password"]',
  NewPasswordID: '[id="new_password"]',
  ConfirmPasswordID: '[id="confirm_password"]',
  TextMessageButton: '//*[@id="__next"]/div/div[2]/div[1]/div[2]/div[2]/label/span',
  AdditionalMessageButton: '//*[@id="__next"]/div/div[2]/div[1]/div[3]/div[2]/label/span/span',
  Orderscreen: '//div[@class="wrapper css-fbq205"]//*[@class="css-zdpt2t"]//*[text()="orders"]',
  Orderdetailbutton: '[class="css-5sgxtb"]',
  ForgotPassword: '//*[text()="Forgot your password?"]',
  ResetEmail: '//*[text()="Send Reset Email"]',
  plansTab: '//*[text()="plans"]',
  activePlans: '//*[text()="Active"]',
  ManagePlan: '//*[text()="Manage Your Plan"]',
  CancelCheckbox: '//*[text()="Permanently cancel my plan."]',
  SelectReason: '[id="selected_remarks"]',
  planReason: '//div[2]/div[1]/p[1]',
  DatePicker: '[placeholder="MM/DD/YYYY"]',
  Date: '//*[text()="28"]',
  nextDate: '//*[text()="29"]',
  CompletePaymentButton: '//*[text()="Complete Payment"]',
  AccountName: '[id="first_name"]',
  AccountLastName: '[id="last_name"]',
  AccountPhone: '[id="phone"]',
  AccountYearPicker: '[id="year_picker"]',
  Year: '//*[text()="2000"]',
  cardNumber: '[id="card.number"]',
  StateValue: '//*[text()="Alaska"]',
  OtherReason: '//*[text()="Other"]',
  CustomReason: '[id="user_remarks"]'
};

export { patientPageSelectors };