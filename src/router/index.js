import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import User from "../views/User.vue"
import Main from "../views/Main.vue"
import Mall from "../views/Mall.vue"

import PageOne from "../views/PageOne.vue"
import PageTwo from "../views/PageTwo.vue"

import Login from '../views/Login.vue'



Vue.use(VueRouter)

//1.创建路由组件
//2.将路由和组件做一个映射
//3.创建router实例

const routes=[
    {
        path:'/',
        component: Main,
        name:'Main',
        redirect:'/home',//重定向
        children:[
            // {path:'/home',name:'home',component: Home},
            // {path:'/user',name:'user',component: User},
            // {path:'/mall',name:'mall',component:Mall},
            // {path:'/pageOne',name:'pageone',component:PageOne},
            // {path:'/pageTwo',name:'PageTwo',component:PageTwo},
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
]


const router = new VueRouter({
    routes
})

export default router
