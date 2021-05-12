// import axios from 'axios';
import { jsonp } from 'vue-jsonp';

export default {
  getImage(url, options) {
    return jsonp(url, options);
  },
};
