const host = 'http://localhost:'
const port = 24376;

const RegisterURL = host+port+'/api/User/Register';
const loginURL = host+port+'/api/User/Login';
const UpdateCustomerURL = host+port+'/api/User/UpdateCustomer';

export {
    RegisterURL,
    loginURL,
    UpdateCustomerURL
}