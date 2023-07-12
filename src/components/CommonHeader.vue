<template>
    <div class="header-container">
        <div class="lContent">
            <el-button @click="handleMunu" icon="el-icon-menu" size="mini"></el-button>
            <span class="test">首页</span>
        </div>
        <div class="rContent">
            <el-dropdown>
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {}
    },
    methods:{
        handleMunu(){
            this.$store.commit('collapseMenu')
        }
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
}
</style>