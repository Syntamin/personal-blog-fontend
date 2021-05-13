import axios from './axiosIns';

export default {
  // 获取验证码
  async getVcode() {
    return axios.get('/comment/vCode');
  },

  // 添加评论
  async addComment(params) {
    return axios.post('/comment', { params });
  },
};
