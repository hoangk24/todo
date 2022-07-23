import axios from 'axios';
import config from 'configs';
// import { stringify } from 'querystring';
const axiosClient = axios.create({
  baseURL: config.api_url,
  headers: {
    'Content-Type': 'application/json',
  },
  // paramsSerializer: (params) => stringify(params, { arrayFormat: 'bracket' }),
});

axiosClient.interceptors.response.use(
  (res) => res.data || res,
  (err) => Promise.reject(err)
);
export default axiosClient;
