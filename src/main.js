import { createApp } from 'vue';
/* eslint-disable *///忽略校验必须使用声明的值
import $ from 'jquery';
import bootstrap from 'bootstrap';
/* eslint-enable */
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
