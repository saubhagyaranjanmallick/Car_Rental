import axios from "axios";
// import { decryptData } from 'utils';

var apiUrl = "http://localhost:5000/api/v1";
if(process.env.NODE_ENV === 'development')
    apiUrl = "http://localhost:5000/api/v1";
    // apiUrl = "https://totalassess-api-9wznv.ondigitalocean.app/api/v1/";

else
    apiUrl = "https://totalassess-api-9wznv.ondigitalocean.app/api/v1/";

const API = axios.create({ withCredentials: true, baseURL: apiUrl });

export const fetchUserlist = () => API.get('/user/getUsers');
export const signup = () => API.post('/user/register');
export const login = () => API.post('/user/login');
export const sendOtp = () => API.post('/user/sendotp');