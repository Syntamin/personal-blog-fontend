import axios from 'axios';

/**
 * @returns 随机的bing壁纸url
 */
export default {
  async getImageUrl() {
    const index = Math.ceil(Math.random() * 8);
    return axios.get(`/api/?resolution=1920&format=json&index=${index}&mkt=zh-CN`);
  },
};
