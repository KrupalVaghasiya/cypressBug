const dispenserPageSelectors = {
	cardName: 'div[id="card"] [name="name"]', // name on card input field id
	cardNumber: 'div[id="card"] [name="masked_card"]', // card number input field id
	cardSecurityCode: 'div[id="card"] [name="cvv"]', //security code input field id
	AddressLine1: 'div[id="shipping_address"] [name="street_1"]', // address field input id	
	AddressCity: 'div[id="shipping_address"] [name="city"]', // city name input field id
	AddressZipCode: 'div[id="shipping_address"] [name="zip"]', //zip code input field id
	BillingLine1: 'div[id="billing_address"] [name="street_1"]', // address field input id	
	BillingCity: 'div[id="billing_address"] [name="city"]', // city name input field id
	BillingZipCode: 'div[id="billing_address"] [name="zip"]', //zip code input field id
	cardDetailsCityField: '[name="address.city"]',
	cardDetailsZipCodeField: '[name="address.zip"]',
	editContents: '[class="Select-arrow"]', // select dropdown
	approveButtonId: '//*[text()="Approve"]', //approve button
	addNotesButton: '//*[text()="Add Note"]', // add notes button
	textAreaField: 'textarea[rows="5"]', // textfield	
	billingAddressCheckBox: '//*[text()="Same as shipping address"]',
	createPostageLabelButton: '//*[text()="Create Postage Label"]',
	createLabel: '//*[text()="Create Label"]',
	rxInstruction: '[placeholder="Enter Rx Instructions"]',
	updateButtonId: '//*[text()="Update"]',
	processPaymentButton: '//*[text()="Process Payment"]',
	crossbuttonId: '[class="close"]',
	ChangePriceButtonId: '//*[text()="Change Item Price"]',
	PayorName: 'input[placeholder="Search by Payor name"]',
	PayorAccountNo: 'input[name="account_number"]',
	PayorGroupNo: 'input[name="group_number"]',
	PayorRX_binNo: 'input[name="rx_bin"]',
	PayorPC_No: 'input[name="pc_number"]',
	PayorPhoneNo: 'input[name="insurer_phone"]',
	service: '[role="option"]',
	backLink: '[class="back-link"]',
	ConfirmCourier: '//*[text()="Confirm Courier Pick-Up"]',
	completeButton: '//*[text()="Complete"]',
	confirmPickupPerson: '//*[text()="Confirm Pick-Up"]',
	SelectActionButton: '[class="Select-placeholder"]',
	ReasonTextbox: '[class="form-control"]',
	NoteCheckbox: '//*[text()="Pharmacy"]',
	RXExpirationDate: '//*[@placeholder="MM/DD/YYYY"]',
};
// export the users you created so you can import them in your tests
export { dispenserPageSelectors };