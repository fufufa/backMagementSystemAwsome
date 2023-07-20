<template>
    <div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <h3 v-show="!isCollapse">后台管理系统</h3>
            <h3 v-show="isCollapse">后台</h3>
            <el-menu-item @click="clickMenu(item)" v-for="item in noChilren" :key="item.name" :index="item.name">
                <i :class='`el-icon-${item.icon}`'></i>
                <span slot="title">{{ item.lable }}</span>
            </el-menu-item>
            <el-submenu  v-for="item in haveChilren" :key="item.lable" :index="item.lable">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{ item.lable }}</span>
                </template>
                <el-menu-item-group v-for="row in item.children" :key="row.name">
                    <el-menu-item  @click="clickMenuChildren(row)" :index="row.name">{{ row.lable }}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu{
    height: 120vh;
    border: 0px;
    h3{
        text-align: center;
        line-height: 48px;
        color: #fff;
        font-size: 16px;
        font-weight: 400px;
    }
}
</style>

<script>
import Cookies from 'js-cookie'

export default {
    data() {
        return {
            menuData: [
                {
                    path: '/',
                    name: 'home',
                    lable: '首页',
                    icon: 's-home',
                    url: 'Home/home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    lable: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    lable: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    lable: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/pageone',
                            name: 'pageone',
                            lable: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/pagetwo',
                            name: 'pagetwo',
                            lable: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item){
            if(this.$route.path != item.path && !(this.$route.path==='/home' && item.path=== '/')){
                this.$router.push(item.path)
                this.$store.commit("updateTableList",item)
            }
            
        },
        clickMenuChildren(item){
            if(this.$route.path!=item.path && !(this.$route.path == '/home' && item.path === '/')){
                this.$router.push(item.path)
            }
            
        }
    },
    computed: {
        //没有子菜单
        noChilren() {
            return this.menuData.filter(item => !item.children)
        },
        haveChilren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        }
    },
    mounted(){
        if(Cookies.get('menu')){
            this.menuData=JSON.parse(Cookies.get('menu'))
        }else{
            this.menuData=this.$store.state.asideMenu.MenuData
        }
    }

}
</script>