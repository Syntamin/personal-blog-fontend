/*eslint-disable*/
const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      config.devtool = 'cheap-module-eval-source-map';
      config.mode = 'development';
    }
  },
};
