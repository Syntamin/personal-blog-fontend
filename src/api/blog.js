import axios from './axiosIns';

export default {
  // 添加博客
  async addBlog(params) {
    const result = axios.post('/blog', { params });
    return result;
  },

  // 分页获取博客列表
  async getBlogList(params) {
    const result = axios.get('/blog/articleList', { params });
    return result;
  },

  // 获取当前博客详情
  async getBlog(blogId) {
    const result = axios.get('/blog/article', { params: { blogId } });
    return result;
  },

  // 根据标签获取文章
  async getBlogByTag(params) {
    return axios.get('/blog/articleListByTag', { params });
  },
};
