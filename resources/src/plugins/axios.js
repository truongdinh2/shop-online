import axios from 'axios';
axios.defaults.baseURL = process.env.APP_URL_API;
export default axios;