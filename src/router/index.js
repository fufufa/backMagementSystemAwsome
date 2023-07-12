import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import User from "../views/User.vue"
import Main from "../views/Main.vue"
import Mall from "../views/Mall.vue"

import PageOne from "../views/PageOne.vue"
import PageTwo from "../views/PageTwo.vue"



Vue.use(VueRouter)

//1.创建路由组件
//2.将路由和组件做一个映射
//3.创建router实例

const routes=[
    {
        path:'/',
        component:Main,
        redirect:'/home',//重定向
        children:[
            {path:'/Home',component: Home},
            {path:'/User',component: User},
            {path:'/Mall',component:Mall},
            {path:'/PageOne',component:PageOne},
            {path:'/PageTwo',component:PageTwo},
        ]
    }
]


const router = new VueRouter({
    routes
})

export default router
