import axios from "axios";

var apiUrl = "http://localhost:5000/";

if(process.env.NODE_ENV === 'development')
    apiUrl = "http://localhost:5000/";

else
    apiUrl = "https://primecars-api-9wznv.ondigitalocean.app/api/v1/";

const API = axios.create({ withCredentials: true, baseURL: apiUrl });


export const getCity = (requestData) => API.post('/getCity',requestData);

export const getUsers = () => API.get('/user/getUsers');
export const signup = (requestData) => API.post('/user/register',requestData);
export const login = (requestData) => API.post('/user/login', requestData);
export const sendOtp = (requestData) => API.post('/user/sendotp',requestData);

export const hostsendOtp = (requestData) => API.post('/host/sendotp',requestData);
export const hostSignup = () => API.post('/host/signup');
export const hostLogin = (requestData) => API.post('/host/signin',requestData);
export const hostloginPassword = (requestData) => API.post('/signin-password',requestData);
export const hostloginOtp = (requestData) => API.post('/host/sendotp',requestData);







//host/host/signin-password