const loginData = {

    Dev_Master_URL: 'https://ibis-dev.droicelabs.us/login/master',
    Dev_Practice_URL: 'https://ibis-dev.droicelabs.us/login/practice',
    Dev_Hub_URL: 'https://ibis-dev.droicelabs.us/login/dispenser',
    Dev_Patient_URL: 'https://ibis-dev.droicelabs.us/patient/login',

    Qa_Master_URL: 'https://ibis-qa.droicelabs.us/login/master',
    Qa_Practice_URL: 'https://ibis-qa.droicelabs.us/login/practice',
    Qa_Hub_URL: 'https://ibis-qa.droicelabs.us/login/dispenser',
    Qa_Patient_URL: 'https://ibis-qa.droicelabs.us/patient/login',

    Client_UAT_MasterURL: 'https://app-v3.legranderx.com/login/master',
    Client_UAT_PracticeURL: 'https://app-v3.legranderx.com/login/practice',
    Client_UAT_HubURL: 'https://app-v3.legranderx.com/login/dispenser',
    Client_UAT_PatientURL: 'https://app-v3.legranderx.com/patient/login',

    Stable_Master_URL: 'https://ibis-stable.droicelabs.us/login/master',
    Stable_Practice_URL: 'https://ibis-stable.droicelabs.us/login/practice',
    Stable_Hub_URL: 'https://ibis-stable.droicelabs.us/login/dispenser',
    Stable_Patient_URL: 'https://ibis-stable.droicelabs.us/patient/login',

    MasterEmail: 'master@legranderx.com', // Need to Change Login Here
    PracticeEmail: 'diza.1210@getnada.com', // Need to Change Login Here
    HubDispenserEmail: 'hub.vp@getnada.com', // Need to Change Login Here
    StanDispenserEmail: 'Tyson_RX_Dispensers@mailinator.com', // Need to Change Login Here
    PatientEmail: 'ube@getnada.com', // Need to Change Login Here

    MasterPassword: 'Password1!', // Need to Change Login Here
    PracticePassword: 'Test@2020', // Need to Change Login Here
    HubPassword: 'Test@2020', // Need to Change Login Here
    StandardPharmaPassword: 'Test@2020', // Need to Change Login Here
    PatientPassword: 'Test@2020', // Need to Change Login Here

    InvalidEmailId: 'Legrande+legranderx.com', // Invalid Email for Check Validation

    practiceForgetPassword: 'diza.1210',
    title: 'Legrande',
    loginPageName: 'Practice Portal',
    practiceEmail3: 'ibis+practice@droicelabs.com',
    practiceEmail2: 'ibis+practice2@droicelabs.com',
    patientEmailId: 'qapatient01@getnada.com',
    patientEmailName: 'patient01',
    newAdminFirstName: 'Qa',
    newAdminLastName: 'Tester',
    newPassword: 'Password@123',
    newDoctorName: 'Fred Abshire',
    changedPassword: 'Password@12345',
    firstPatientName: 'Bernadine Bartoletti',
    DOB: '12/12/1985',
    url: '/master',
    addDispenser: 'Add New Dispenser',
    selectState: 'Select a state',
    addPractice: 'Add New Practice',
    addUsers: 'Add New User',
    addPayor: 'Add New Payor',
    createOrder: 'Create Order',
    usersubmit: 'Create Account',
    CreatePayor: 'Create Payor',
    newuserFirstName: 'QA',
    newuserlastName: 'Testing',
    userEmail: '123@getnada.com',
    dismissButton: 'Dismiss',
    submitButtonName: 'Submit',
    saveButtonName: 'Save',
    saveChangeButtonName: 'Save Changes',
    selectOption: 'Select',
    practiceOption: 'Practice',
    yesButtonName: 'Yes',
    orderNumberName: 'Order number',
    cancelButtonName: 'Cancel',
    patientDashboard: 'Patients',
    orderTemplatesDashBoard: 'Order Templates',
    patientPageUrl: '/patients',
    unsuccessfulMessage: 'Order Unsuccessful',
    OrderUnsuccessfulMessage: 'There was an error creating your order',
    subTotalText: 'Subtotal',
    groupPageName: 'Group ',
    manageUserPageName: 'Manage Users',
    doctorOptionName: 'Doctor',
    userOption1: 'Technician',
    userOption2: 'Doctor',
    userOption3: 'Clerk',
    invalidCredentialsText: 'Invalid credentials',
    dropDownName: 'Select an Existing User',
    ForgotPassword: '//*[text()="Forgot Your Password?"]',
};
// export the users you created so you can import them in your tests
export { loginData };