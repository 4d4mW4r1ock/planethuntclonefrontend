//pacote usado para se conectar com api
import axios from 'axios';

const api = axios.create({ baseURL : process.env.REACT_APP_API_URL});

export default api;