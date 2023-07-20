import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router';
import store from './store'
import './api/mock'

import Cookie from 'js-cookie';

//按需引入
//import { Row,Button } from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Row)
// Vue.use(Button)

Vue.use(ElementUI);
Vue.config.productionTip = false

//添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
  //token存在吗
  const token = Cookie.get('token')
  //token不存在，跳转登录页面
  if(!token&&to.name!=='login'){
    next({name:'login'})
  }else if(token &&to.name=='login'){//token存在说明用户登录，此时跳转到首页
    next({name:'home'})
  }else{
    next()
  }

})

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
