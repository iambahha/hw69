import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-group-6.firebaseio.com/'
});

export default axiosOrders;