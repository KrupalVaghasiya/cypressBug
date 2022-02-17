const loginData = {
    ProductURL : 'https://ibis-dev.droicelabs.us',
    OrderAPI: '/api',
    DispenserURL: '/dispenser',
    PracticeURL: '/practice',
    Order: '/orders/',
    PracticeOrderURL: '/practice/orders/',
    SubscriptionAPI: '/subscriptions/',
    
    Master_URL: '/login/master',
    Practice_URL: '/login/practice',
    Hub_URL: '/login/dispenser',
    Patient_URL: '/patient/login',
    MasterEmail: 'master@legranderx.com', // Need to Change Login Here
    PracticeEmail: 'diza.1210@getnada.com', // Need to Change Login Here
    HubDispenserEmail: 'hub.vp@getnada.com', // Need to Change Login Here
    StanDispenserEmail: 'Tyson_RX_Dispensers@mailinator.com', // Need to Change Login Here

    MasterPassword: 'Password1!', // Need to Change Login Here
    PracticePassword: 'Test@2020', // Need to Change Login Here
    HubPassword: 'Test@2020', // Need to Change Login Here
    StandardPharmaPassword: 'Test@2020', // Need to Change Login Here
    PatientPassword: 'Test@2020', // Need to Change Login Here

    InvalidEmailId: 'Legrande+legranderx.com', // Invalid Email for Check Validation
    title: 'Legrande',
    newAdminFirstName: 'Qa',
    newAdminLastName: 'Tester',
    addDispenser: 'Add New Dispenser',
    addPractice: 'Add New Practice',
    addUsers: 'Add New User',
    addPayor: 'Add New Payor',
    usersubmit: 'Create Account',
    CreatePayor: 'Create Payor',
    dismissButton: 'Dismiss',
    submitButtonName: 'Submit',
    saveButtonName: 'Save',
    payButtonName: 'Pay',
    saveChangeButtonName: 'Save Changes',
    yesButtonName: 'Yes',
    userOption1: 'Technician',
    ForgotPassword: '//*[text()="Forgot Your Password?"]',
};
// export the users you created so you can import them in your tests
export { loginData };