const practicePageSelectors = {
<<<<<<< HEAD
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
=======

	CreateOrder: '//*[@class="add_rx"]', // Add Rx button
	hubAddOrder: '[href="/dispenser/orders/new"]',
	addButtonID: '[label="Add"]', // Add button
	searchDoctor: 'input[placeholder="Search by Name"]', // search field for doctor
	mainSearchButton:'[class="search"]', // search button icon
	titleTagId: '[class="title"]',
	buttonId: '[type="submit"]', // button type
	ProductAdd: '[placeholder="Search to add a product"]',
	nextButtonId: '//*[text()="Next"]', // Next button
	searchPatient1: 'input[placeholder="Search by Name, Phone, or DOB (mm/dd/yyyy)"]', // search field for patient 
	addPatientId: '[href="/practice/patients"]', // add patient button
	addHubPatient: '[href="/dispenser/patients"]',
>>>>>>> origin/master
	OrdersTab: '[href="/practice/orders"]',
	firstName: 'input[name="first_name"]', // first name field 
	lastName: 'input[name="last_name"]', // last name field 
	dateOfBirth: 'input[name="date_of_birth"]', // date of birth field 
	phoneNumber: 'input[name="phone"]', // phone number field 
<<<<<<< HEAD
	faxNumber: '[name="fax"]', // fax number field 	
	searchMedicine: '[placeholder="Search for a Medication"]', // search field for medication	
=======
	faxNumber: '[name="fax"]', // fax number field 
	accountCreationSuccessPopup: '[class="modal-body"]', // account creation pop up
	selectTemplate: '.btn-primary', // select template button
	skipPayment: '.btn btn-lg btn-default', // skip payment button
	tableData: 'table>tbody>tr>td:nth-child(4)', // table date 
	tableData1: 'table>tbody>tr>td:nth-child(3)>strong', // table data
	tableData2: 'tbody>tr>td:nth-child(2)', // table date column
	createNewRx: '//*[text()="Create New Rx"]', // create new Rx button
	createCustomPlan: '//*[text()="Create Custom Plan"]', // create custom plan button
	searchMedicine: '[placeholder="Search for a Medication"]', // search field for medication
	findmedicine: '[name="Custom Treatment Plan"]',
>>>>>>> origin/master
	addMedicine: '//*[text()="Add"]', // add Medicine button 
	providePaymentID: '//*[text()="Provide Payment"]', // provide payment button
	orderTemplate: '//*[text()="Order Templates"]', // order template button
	Documents: '//*[text()="Documents"]', // Documents tab button
	addNewTemplate: '//*[text()=" New Plan Template"]', // add new template button
	uploadNewDocuments: '//*[text()="Upload New Document"]', // upload new documents
	DocumentTitle: '[placeholder="Enter a title"]',
<<<<<<< HEAD
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
=======
	templateTypeId: '.Individual Orders', // individual template type 
	findPatientId: '[placeholder="Search for a Patient by Name or DOB"]', //search field for patient
	templateTitleId: '[placeholder="Template Title"]', // add template title field
	searchProduct: '[placeholder="Search for a product"]', // search for product field 
	continueButtonId: '//*[text()="Continue"]', // continue button
	Browsefiles: '//*[text()="Browse files"]',
	selectButtonId: '//*[text()="Select"]', // select button
	oneTimeRxSelectId: '//*[text()="One-time Rx"]/../following-sibling::button', // select one time RX button
	treatmentPlanSelectId: '//*[text()="Treatment Plan"]/../following-sibling::button', // select treatment plan button
	saveTemplateId: '//*[text()="Save Template"]',// save template button
	treatmentPlanId: 'a[href^="/practice/templates/"]:not([href*="/new"])', // treatment template button
	crossButtonId: '[id="Mask"]', // cross button
	searchProduct_2: '[placeholder="Search for a product"]', // search for product field 2
	cancelLink: '//*[text()="Cancel"]', // cancel button
	editContentLink: '//*[text()="Edit Contents"]', // cancel button
	productTabId: '//*[text()="Products"]', // product tab
	patientsTabId: '//*[text()="Patients"]', // patient tab
	tryAgainButtonId: '//*[text()="Try Again"]', // try again button
	myDashBoardTabId: '//*[text()="My Dashboard"]', // my dashboard tab
	addNewPatientId: '//*[text()="New Patient"]', // add new account button
	contactUsButtonId: '//*[text()="Contact Us"]', //contact us button
	forgetPasswordLink: '//*[text()="Forgot Your Password?"]', // forget your password link
	closeButtonId: '[class="close"]', //Close button
	findPatientButtonId: '//*[text()="Find a Patient"]', // click on the find patient button
	searchButtonIcon: '[class="Search-btn"]', //search icon
	allergiesTextBox: '.modal-dialog .modal-body input', // allergies text box
	noteDateStamp: 'div>ul>li:nth-child(2)',
	sendToQueue: '//*[text()="Send to Queue"]',
	enterNotesToPharmasist: '[placeholder="Enter notes for the pharmacist"]',
	previousButton: '//*[text()="Previous"]',
	noButtonId: '//*[text()="No"]',
	pharmacistNotes: '[placeholder="Enter notes for the pharmacist. (optional) "]',
	addAllergiesButton: '//*[text()="Add Allergies"]',
	backToPracticerLink: '//*[text()="Back to Practices"]',
	submitButtonId: '//*[text()="Submit"]',
	homePageLink: '//*[text()="Home"]',
	replaceImageTabId: '//*[text()="Replace Image"]',
	addImageTabId: '//*[text()="Add Image"]',
	dropDownID: '[id="react-select-9--value-item"]',
	pickupPersonId: '//*[text()="Pick Up In Person"]',
	clickHereLinkId: '//*[text()="Click Here"]',
	createAnotherRXButtonID: '//*[text()="Create Another Rx"]',
	returnToDashBoardButton: '//*[text()="Return to Dashboard"]',
	searchAgainLinkId: '//*[text()="Search Again"]',
	addGroupButtonId: '.new-box',
	AccountClass: '[class="account-link-label"]',
	Documentid: '[id="1"]',
>>>>>>> origin/master
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