<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="use">
                        <img src="../img/wallhaven-j3yp6y.jpg" alt="" srcset="">
                        <div class="use-info">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录的时间：<span>2021-7-13</span></p>
                        <p>上次登录的地点：<span>武汉</span></p>
                    </div>
                </el-card>
                <el-card style="margin-top: 20px; height: 460px;">
                    <el-table
                    :data="tableData"
                    style="width: 100%"
                    >
                        <el-table-column
                            :prop="item.prop"
                            :label="item.label"
                            :width="item.width"
                            v-for="item in tableLable"
                            :key="item.prop">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.value" :body-style="{display:'flex',padding:'0px'}">
                        <i :class="`el-icon-${item.icon}`" class="iicon" :style="{ background : item.color}"></i>
                        <div class="detail">
                            <p class="price">￥{{ item.value }}</p>
                            <p class="dec">{{ item.name }}</p>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getData } from '../api'
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市'
            }, 
            {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市'
            }, 
            {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市'
            }, 
            {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市'
            }],
            tableLable:[
                {
                    prop:"date",
                    label:"日期",
                    width:"180"
                },
                {
                    prop:"name",
                    label:"姓名",
                    width:"180",
                },
                {
                    prop:"address",
                    label:"地址",
                    width:"80",
                },
            ],
            countData:[
                {
                    name:'今日消费',
                    value:12345,
                    icon:'success',
                    color:'#2ec7c9'
                },
                {
                    name:'今日消费',
                    value:123,
                    icon:'success',
                    color:'#2ec7c9'
                },
                {
                    name:'今日消费',
                    value:12344,
                    icon:'success',
                    color:'#2ec7c9'
                },
                {
                    name:'今日消费',
                    value:12634,
                    icon:'success',
                    color:'#2ec7c9'
                },
                {
                    name:'今日消费',
                    value:12324,
                    icon:'success',
                    color:'#2ec7c9'
                },
                {
                    name:'今日消费',
                    value:1234,
                    icon:'success',
                    color:'#2ec7c9'
                },
            ]
        }
    },
    mounted(){
        getData().then((data)=>{
            console.log(data);
        })
    }
}

</script>

<style lang="less" scoped>
    .use{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: solid 1px #ccc;
        img{
            margin-right: 40px;
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .use-info{
            .name{
                font-size: 32px;
                margin-bottom: 10px;
            }
            .access{
                color: #999;
            }
        }
    }
    .login-info{
        p{
            line-height: 28px;
            font-size: 14px;
            color: #999999;
            span{
                color: #666666;
                margin-left: 60px;
            }
        }
    }
    .num{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .iicon{
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;

        }
        .detail{
            display: flex;
            margin-left: 15px;
            flex-direction: column;
            justify-content: center;
            .price{
                font-size: 30px;
                margin-bottom: 10px;
                line-height: 30px;
                height: 30px;

            }
            .dec{
                font-size: 14px;
                color: #999;
                text-align: center;
            }
        }
        .el-card{
            width: 32%;
            margin-bottom: 20px;

        }
    }
</style>
