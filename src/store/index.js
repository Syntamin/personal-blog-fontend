import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '', // 登陆后进行操作的身份验证
  },
  mutations: {
    // 存储token
    saveToken(state, token) {
      state.token = token;

      // 将token存储到localStorage，每次路由变换前检查是否具有权限
    },
  },
  actions: {
    // 调用存储token
    async saveToken(context, token) {
      context.commit('saveToken', token);
      return true;
    },
    // 存储到localStorage
    async saveLocalStorage(context, param) {
      localStorage.setItem('token', param);
      return true;
    },
  },
  modules: {
  },
});
