import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net/api/v1',
});

export default Api;
