<template>
    <div class="header-container">
        <div class="lContent">
            <el-button @click="handleMunu" icon="el-icon-menu" size="mini" style="margin-right: 20px;"></el-button>
            <!-- 面包屑有瑕疵之后得修改 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item, index) in tags" :key="index" :to="{ path: item.path }">{{item.lable}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="rContent">
            <el-dropdown @command="layout">
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import jsCookie from 'js-cookie';

export default {
    data() {
        return {}
    },
    methods:{
        handleMunu(){
            this.$store.commit('collapseMenu')
        },
        layout(command){
            if(command==='logout'){
                //清除token
                jsCookie.remove('token')
                //清除缓存menu
                jsCookie.remove('menu')
                this.$router.push('/login')
            }
            //清除token信息
            
        }
    },
    computed:{
        ...mapState({
            tags: state => state.tab.tabList
        })
    },
    mounted(){
        console.log(this.tags,"tags");
    }
}

</script>

<style scoped lang="less">
.header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .test {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .lContent{
        display: flex;
        justify-content: center;
        align-items: center;
        /deep/.el-breadcrumb__inner{
            &.is-link{
                color: #0cf5e4fa;
            }
        }
    }
}
</style>