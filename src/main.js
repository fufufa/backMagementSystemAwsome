import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router';
import store from './store'
import './api/mock'
//按需引入
//import { Row,Button } from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Row)
// Vue.use(Button)

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
