import axios from './axiosIns';

export default {
  // 获取最热标签
  async getTagPorpular(params) {
    return axios.get('/tag', { params });
  },
};
