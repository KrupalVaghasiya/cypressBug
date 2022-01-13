const loginPageSelectors = {
	emailField: '[name="email"]', // email field id    
	passwordField: '[name="password"]', // password filed id
	submitButton: 'input[type="submit"]', // submit button id
	nameFieldId: '[name="name"]', // name field id
	phoneNoFieldId: '[name="phone"]', // phone number field id
	addressLine1: '[name="address.street_1"]', // address 1 field id	
	cityId: '[name="address.city"]', // city field id 
	state_Id: '[class="Select-arrow"]', // select dropdown state
	zipAddress: '[name="address.zip"]', //zip code field id
	checkBoxId: 'input[type="checkbox"]', // check box id
	mainDashBoardLink: '[class="dashboard-account-link"]', // account button link
	accountSettingId: '//*[text()="Account Settings"]', // account setting id
	SetPassword: '//*[text()="Set Password"]',
	productListSettingId: '//*[text()="Product List"]', // product list setting id
	manageUserSettingId: '//*[text()="Manage Users"]', // account setting id
	editLinkId: '//*[text()="Edit"]', //edit button id 	
	confirmPasswordId: '[name="password_confirmation"]', // confirm password field 	
	doneButtonId: '//*[text()="Done"]',
	addNewUserID: '//*[text()="Add New User"]',
	signOutButtonId: '//*[text()="Sign Out"]',
	userfirst_name: '[name="first_name"]',
	userlast_name: '[name="last_name"]',
};
// export the users you created so you can import them in your tests
export { loginPageSelectors };