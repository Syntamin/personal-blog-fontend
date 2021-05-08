import axios from './axiosIns';

export default {
  // 添加每日一句
  async addSentence(params) {
    const result = await axios.post('/sentence', { ...params });
    return result;
  },
  // 获取每日一句
  async querySentence() {
    const result = await axios.get('/sentence');
    return result;
  },
};
