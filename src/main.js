import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './assets/style/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment' //时间工具
import {
  getList
} from '@/assets/api/demo.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$moment = moment;

//接口调用demo
getList().then(res => {

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')