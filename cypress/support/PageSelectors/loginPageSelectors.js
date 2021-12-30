const loginPageSelectors = {
    emailField: '[name="email"]', // email field id
    messageField: '[name="message"]', // message field
	passwordField: '[name="password"]', // password filed id
	submitButton: 'input[type="submit"]', // submit button id
	addImageId: 'input[type="file"]', // submit button id
	saveChangeButtonId: '//*[text()="Save Changes"]', // save change button
	siteLogo: '[src="/assets/logo.svg"]', // main site logo id 
	dispencerUrl: '[href="/master/dispensers"]', // dispenser Url
	nameFieldId: '[name="name"]', // name field id
	phoneNoFieldId: '[name="phone"]', // phone number field id
	faxFieldId: '[name="fax"]', // fax number field id
	addressLine1: '[name="address.street_1"]', // address 1 field id
	addressLine2: '[name="address.street_2"]', // address 2 field id
	cityId: '[name="address.city"]', // city field id 
	state_Id: '[class="Select-arrow"]', // select dropdown state
	zipAddress: '[name="address.zip"]', //zip code field id
	checkBoxId: 'input[type="checkbox"]', // check box id
	mainDashBoardLink: '[class="dashboard-account-link"]', // account button link
	accountSettingId: '//*[text()="Account Settings"]', // account setting id
	SetPassword:'//*[text()="Set Password"]',
	productListSettingId: '//*[text()="Product List"]', // product list setting id
	manageUserSettingId: '//*[text()="Manage Users"]', // account setting id
	editLinkId:'//*[text()="Edit"]', //edit button id 
	newPasswordId: '[name="new_password"]', // new password field 
	confirmPasswordId: '[name="password_confirmation"]', // confirm password field 
	createAccountButtonId: '//*[text()="Create Account"]', // create account button
	filterButtonId: '//*[text()="Filters"]', // filter button id
	needHelpButtonId: '//*[text()="Do You Need Help?"]',
	doneButtonId: '//*[text()="Done"]',
	addNewUserID: '//*[text()="Add New User"]',
	doctorTypeOption: '//*[text()="Doctor"]',
	signOutButtonId: '//*[text()="Sign Out"]',
	continueButtonValue: '[value="Continue"]',
	newCheckBoxId: 'div>label:nth-child(2)',
	userfirst_name: '[name="first_name"]',
	userlast_name: '[name="last_name"]',
};
// export the users you created so you can import them in your tests
export { loginPageSelectors};