const dispenserPageSelectors = {
<<<<<<< HEAD
	cardName: 'div[id="card"] [name="name"]', // name on card input field id
	cardNumber: 'div[id="card"] [name="masked_card"]', // card number input field id
	cardSecurityCode: 'div[id="card"] [name="cvv"]', //security code input field id
	AddressLine1: 'div[id="shipping_address"] [name="street_1"]', // address field input id	
	AddressCity: 'div[id="shipping_address"] [name="city"]', // city name input field id
	AddressZipCode: 'div[id="shipping_address"] [name="zip"]', //zip code input field id
	BillingLine1: 'div[id="billing_address"] [name="street_1"]', // address field input id	
	BillingCity: 'div[id="billing_address"] [name="city"]', // city name input field id
	BillingZipCode: 'div[id="billing_address"] [name="zip"]', //zip code input field id
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
=======
	addDetails: '//li[text()="Missing Payment Method "]/a', // add missing payment link
	signInButton: '[class="signinbtn"]', //sign-in button 
	cardName: 'div[id="card"] [name="name"]', // name on card input field id
	cardNumber: 'div[id="card"] [name="masked_card"]', // card number input field id
	cardSecurityCode: 'div[id="card"] [name="cvv"]', //security code input field id
	AddressLine1: 'div[id="shipping_address"] [name="street_1"]', // address field input id
	AddressLine2: 'div[id="shipping_address"] [name="street_2"]', // address field input id
	AddressCity: 'div[id="shipping_address"] [name="city"]', // city name input field id
	AddressZipCode: 'div[id="shipping_address"] [name="zip"]', //zip code input field id
	tableRowId: '.table>tbody>tr', // table row id
	updateOrderId: 'button[class*="btn-primary"]', //update order button 
	editButtonId: 'div[class="buttons"] ', //edit button
	editContents: '[class="Select-arrow"]', // select dropdown
	paymentButton: '[type="button"]', // provide payment button
	parcelTypeId: '[type="radio"]', // radio button
	selectContentValue: '.Select-value-label', //select quantity
	approveButtonId: '//*[text()="Approve"]', //approve button
	brandButtonId: '//*[text()=" Brand "]', // brand dropdown
	RxBrandCheckBoxId: '//label[text()="Manufacturer_Rx"]/preceding-sibling::input[@type="checkbox"]', //Brand button's check box id 
	OTCBrandCheckBoxId: '//label[text()="Manufacturer_OTC"]/preceding-sibling::input[@type="checkbox"]', //Brand button's check box id 
	CompoudBrandCheckBoxId: '//label[text()="Manufacturer_Compound"]/preceding-sibling::input[@type="checkbox"]', //Brand button's check box id 
	nextPageId: '//*[text()="2"]', // next page link
	anotherNextPageId: '//*[text()="3"]', // next page link
	previousButtonId: '[aria-label="Previous"]', // previous page link
	searchButtonId: '[class="Search-btn"]', // search button id
	Rx_MedicationId: '//*[text()="Rx Medications"]', //Rx_medication name link
	categoryRxType: '//*[text()="Category_Rx"]', // Rx category name link
	selectTypeId: '[class="Select-value"]', // select the product type id
	cancelOrderId: '//*[text()="Cancel Order"]', // cancel order button
	pendingStatusButton: '//label[text()="Pending"]/preceding-sibling::input[@type="checkbox"]', // pending status button id
	applyButtonId: '//*[text()="Apply"]', // apply button Id
	editContentsLink: '//*[text()="Edit Contents"]', //edit content button
	filterDispenserOrder: '//*[text()="Filter Orders"]/../../div[1]',
	addNotesButton: '//*[text()="Add Note"]', // add notes button
	textAreaField: 'textarea[rows="5"]', // textfield
	crossSignId: 'table>tbody>tr>td:nth-child(10)',
	statusTableData: 'table>tbody>tr>td:nth-child(3)',
	accountNumberField: 'div[class="row"] label:contains("Account Number")~input',
	groupNumberField: 'div[class="row"] label:contains("Group Number")~input',
	RxBinField: 'div[class="row"] label:contains("RxBin")~input',
	PCNField: 'div[class="row"] label:contains("PCN")~input',
	insurerPhoneNumberField: '[placeholder="XXX-XXX-XXXX"]',
	Rx_dispenserType: '//*[text()="Janae_RX_Dispensers"]',
	Retail_dispenserType: '//*[text()="Darren_Retail_Dispensers"]',
	Compound_dispenserType: '//*[text()="Joan_503a_Compound_Dispenser"]',
	billingAddressCheckBox: '//*[text()="Same as shipping address"]',
	shippingAddressValue: '[value="Testing Zone, Street-01, Alabama"]',
	shippingCityValue: '[value="Alabama"]',
	shippingZipCodeValue: '[value="34231"]',
	createPostageLabelButton: '//*[text()="Create Postage Label"]',
	createLabel: '//*[text()="Create Label"]',
	bubbleBoxMailerButton: '//*[text()="Standard LegrandeRx Bubble Mailer"]',
	shippingTo: 'div>strong>span',
	textBoxId: '[type="text"]',
	rxInstruction: '[placeholder="Enter Rx Instructions"]',
	addMailNameId: '[class="user_name"]',
	plusIcon: '[class="icon-plus"]',
	acceptButtonId: '[class="button success"]',
	messageList: '[class="msg_item"]',
	orderMessage: '[class="message"]',
	headingId: '[class="box_header"]',
	enterInstructionId: '[placeholder="Enter Rx Instructions"]',
	enterOptionalInstructionId: '[placeholder="Enter Instructions (optional)"]',
	backToDispenserPage: '//*[text()="Back to Dispensers"]',
	newAdminButtonId: '//*[text()="New Admin"]',
	rxDispenserId: '//*[text()="RX Dispenser"]',
	retailDispenserId: '//*[text()="Retail Dispenser"]',
	compoundDispenserId: '//*[text()="Compound Dispenser"]',
	OTC_MedicineId: '//*[text()="OTC Medications"]',
	compound_MedicationId: '//*[text()="Compound Medications"]',
	categoryOTCtype: '//*[text()="Category_OTC"]',
	categoryCompoundtype: '//*[text()="Category_Compound"]',
	viewPrecriptionId: 'div.row>a',
	editcontentButtonId: '[class="buttons"]>a',
	printReceiptButtonId: '//a[text()="Print Receipt"]',
	updateButtonId: '//*[text()="Update"]',
	processPaymentButton: '//*[text()="Process Payment"]',
	pharmacistTypeUser: '//*[text()="Pharmacist"]',
	crossbuttonId: '[class="close"]',
	comboboxDropDownId: '[role="combobox"]',
	statusTableDataId: 'table>tbody>tr>td:nth-child(5)',
	DonotUpdateButtonId: '//*[text()="Don\'t Change Price"]',
	ChangePriceButtonId: '//*[text()="Change Item Price"]',
	removeGroupId: '[class="injected-svg"]',
	allOrderDropDownId: '//*[text()="All Orders"]',
	openOrderDropDownId: '//*[text()="Open Orders"]',
	pendingOrderDropDownId: '//*[text()="Pending Orders"]',
	SelectButton: '//*[text()="Select"]',
	hubSubscription: '[data-test="ORDER_FLOW_CREATE_CUSTOM_PLAN"]',
>>>>>>> origin/master
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