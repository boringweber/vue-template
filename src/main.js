import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment' //时间工具

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$moment = moment;

import {getList} from '@/assets/api/demo.js' 
getList().then(res=>{
  
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')