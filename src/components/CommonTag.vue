<template>
    <div class="tags" style="margin-top: 20px;">
        <el-tag
        v-for="(item,index) in tags"
        :key="item.lable"
        :closable=" item.name !== 'home'"
        :effect="$route.name === item.name?'dark':'plain'"
        @click="changeMenu(item)"
        @close="handleClose(item,index)"
        size="small">
            {{ item.lable }}
        </el-tag>
    </div>
</template>
<style lang="less">
    .el-tag{
        margin-left: 20px;
    }
</style>
    
<script>

import { mapState } from 'vuex';
export default{
    name:'CommonTag',
    data(){
        return{

        }
    },
    methods:{
        changeMenu(item){
            this.$router.push(item)
        },
        //点击tag删除功能
        handleClose(item,index){
            
            this.$store.commit("deleteTags",index)
            const le =  this.tags.length 
            console.log(this.tags,index,le);
            console.log(item.name,this.$route.name);
            console.log(this.tags[index-1].name);
            if(item.name!== this.$route.name){
                return
            }
            if(index == le){
                this.$router.push({
                    name:this.tags[index-1].name
                })
            }
            else{
                this.$router.push({
                    name:this.tags[index].name
                })
            }
            
        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabList
        })
    },
    
}
</script>