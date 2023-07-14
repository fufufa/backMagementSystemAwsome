<template>
    <div>
        <el-container>
            <common-aside></common-aside>
            <el-container>
                <el-header>
                    <common-header></common-header>
                </el-header>
                <common-tag></common-tag>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style>

</style>

<script>
import CommonAside from '../components/CommonAside'
import CommonHeader from '../components/CommonHeader'
import CommonTag from '../components/CommonTag'
export default {
    components:{
        CommonAside,
        CommonHeader,
        CommonTag,
    },
    data() {
        return {}
    }
}

</script>
<style lang="less" scoped>
    .el-header{
        padding: 0px;
    }
</style>