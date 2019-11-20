import axios from 'axios';

export default axios.create({
  baseURL: `http://172.24.133.115:8091/api/v1/`
});
