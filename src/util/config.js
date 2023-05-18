import axios from 'axios';
import Config from 'react-native-config';

export const {BASE_URL_25, API_KEY} = Config;
export const api_25 = axios.create({
  timeout: 35000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-store',
  },
  baseURL: BASE_URL_25,
});

export const icon_uri = 'https://openweathermap.org/img/wn/';
