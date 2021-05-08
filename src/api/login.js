import md5 from 'js-md5';
import axios from './axiosIns';

export default {
  async login(params) {
    const result = await axios.get('/login', {
      params: {
        user_name: params.user_name,
        password: md5(params.password),
      },
    });
    return result;
  },
};
