const masterCreationPageSelectors = {
	categoryFieldId: '[name="category"]', // product category field id
	brandFieldId: '[name="brand"]', // brand name field id
	packageFieldId: '[name="strength"]', // enter package size field id
	priceFieldId: '[name="recommended_price"]', // enter price field id
	gmvFieldId: '[name="gmv"]', // GMV field ID
	awpFieldId: '[name="awp_number"]', // awp number field id
	arpFieldId: '[name="arp_number"]', // arp number field id
	ndcFieldId: '[name="ndc_number"]', // ndc number field id
	pnFieldId: '[name="pn_number"]', // pn number field id
	groupNpi_No_Id: '[name="npi_number"]', // npi number field id
	resellerLicsenceNo_Id: '[name="reseller_licence_number"]', // reseller licence field id
	adminFirstName: '[name="admin.first_name"]', // admin first name field id
	adminLastName: '[name="admin.last_name"]', // admin last name field id
	adminEmail: '[name="admin.email"]', // admin email field id
	adminPhone: '[name="admin.phone"]',  // admin phone number field id 
	standardCategory: '//*[text()="Standard Dispenser"]', // standard dispenser category
	hubCategory: '//*[text()="Hub Dispenser"]', // hub dispenser category 	
	userDispenserCategory: '//*[text()="Dispenser"]', // standard dispenser category
	userPracticeCategory: '//*[text()="Practice"]',
	userSearch: '[placeholder="Search for an account"]',
	userGet: '//*[@id="app"]/div/div/div[1]/div/div/form/div[1]/div[4]/div[2]/div/div/div[2]/div[2]',
	VerifyEmail: 'Confirm Legrande Registration',
	ClickOnEmail: "//td[contains(text(),'Confirm Legrande Registration')]",
};
// export the users you created so you can import them in your tests
export { masterCreationPageSelectors };