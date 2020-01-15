import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://my-react-apps-6805c.firebaseio.com/'
});

export default axiosOrders;