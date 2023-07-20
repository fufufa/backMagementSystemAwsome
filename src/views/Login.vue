<template>
    <div>
        <el-card class="login-container">
            <el-form  :rules="rules" ref="form" :model="form" :inline="true" >
                <h3 class="login_title">系统登录</h3>
                <el-form-item label="账号" prop="username" >
                    <el-input v-model="form.username" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password"  >
                    <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submit" style="margin-left: 100px;margin-top: 10px;" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style lang="less">
    .login-container{
        
       
        width: 307px;
        margin: 100px auto;
        h3{
            text-align: center;
            margin-bottom: 40px;
        }
        
        
    }
</style>
<script>
import  Mock  from 'mockjs';
import Cookie from 'js-cookie'
import { getMenu } from '@/api';

export default{
    data() {
        return {
            form:{
                username:'',
                password:''
            },
            rules:{
                username:[{required:true,trigger:'blur',message:'请输入账号'}],
                password:[{required:true,trigger:'blur',message:'请输入密码'}]
            }
        }
    },
    methods:{
        //登录
        submit(){
            // //mock模拟token数据
            // const token = Mock.Random.guid()
            // //token存入cookie用于不同页面间通信
            // Cookie.set('token',token)
            // //登录过户后跳转到首页
            // this.$router.push('/home')

            //校验数据
            this.$refs.form.validate((valid)=>{
                if(valid){
                    getMenu(this.form).then((data)=>{
                        console.log(data);
                        if (data.data.code===200) {
                            Cookie.set('token',data.data.token)
                            this.$router.push('/home')
                            this.$store.commit('getMenuData',data.data.data.menu)
                            this.$store.commit('addMenu',this.$router)
                        }
                        else{
                            this.$message.error(data.data.message)
                        }
                    })
                }
                
            })




            

        }
    }
}
</script>