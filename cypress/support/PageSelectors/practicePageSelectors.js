const practicePageSelectors = {
	CreateOrder: '.add_rx', // Add Rx button	
	closeButton: "//button[@type='button' and text()='Close']",
	submit_CreateOrderButton: '//*[@data-test="ORDER_FLOW_SUBMIT"]',
	createOnetimeOrder: '[data-test="ORDER_FLOW_CREATE_NEW_RX"]',
	createSubscriptionOrder: '[data-test="ORDER_FLOW_CREATE_CUSTOM_PLAN"]',
	searchDoctor: 'input[placeholder="Search by Name"]', // search field for doctor
	mainSearchButton: '[class="search"]', // search button icon	
	buttonId: '[type="submit"]', // button type
	nextButtonId: '//*[text()="Next"]', // Next button
	searchPatient1: 'input[placeholder="Search by Name, Phone, or DOB (mm/dd/yyyy)"]', // search field for patient 	
	OrdersTab: '[href="/practice/orders"]',
	firstName: 'input[name="first_name"]', // first name field 
	lastName: 'input[name="last_name"]', // last name field 
	dateOfBirth: 'input[name="date_of_birth"]', // date of birth field 
	phoneNumber: 'input[name="phone"]', // phone number field 
	faxNumber: '[name="fax"]', // fax number field 	
	searchMedicine: '[placeholder="Search for a Medication"]', // search field for medication	
	addMedicine: '//*[text()="Add"]', // add Medicine button 
	providePaymentID: '//*[text()="Provide Payment"]', // provide payment button
	orderTemplate: '//*[text()="Order Templates"]', // order template button
	Documents: '//*[text()="Documents"]', // Documents tab button
	addNewTemplate: '//*[text()=" New Plan Template"]', // add new template button
	uploadNewDocuments: '//*[text()="Upload New Document"]', // upload new documents
	DocumentTitle: '[placeholder="Enter a title"]',
	findPatientId: '[placeholder="Search for a Patient by Name or DOB"]', //search field for patient
	templateTitleId: '[placeholder="Template Title"]', // add template title field
	searchProduct: '[placeholder="Search for a product"]', // search for product field 
	continueButtonId: '//*[text()="Continue"]', // continue button	
	selectButtonId: '//*[text()="Select"]', // select button	
	saveTemplateId: '//*[text()="Save Template"]',// save template button
	closeButtonId: '[class="close"]', //Close button	
	searchButtonIcon: '[class="Search-btn"]', //search icon
	allergiesTextBox: '.modal-dialog .modal-body input', // allergies text box
	enterNotesToPharmasist: '[placeholder="Enter notes for the pharmacist"]',
	addAllergiesButton: '//*[text()="Add Allergies"]',
	submitButtonId: '//*[text()="Submit"]',
	selectdocument: '(//*[@class="modal-dialog"]//*[@type="checkbox"])[1]',
	patientSearch: '[placeholder="Search by Order Number, Patient Name, or DOB (mm/dd/yyyy)"]',
	patientorder: '[data-expanded="false"]',
	patientEditButton: '//*[@id="app"]/div/div/div/div[1]/div/div[1]/div[1]/div/div[3]/span[1]/a',
	expandOrder: '[id="expander-column"]',
	verifyProduct: 'tbody > tr:nth-child(1) > td.td-product-name',
	myQueueOrder: '(//*[@class="table"])[1]//tbody//tr[1]',
	DWACheckBox: '[id="checkbox-dispense_as_written"]',
};

// export the users you created so you can import them in your tests
export { practicePageSelectors };