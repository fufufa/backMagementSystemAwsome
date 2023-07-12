<template>
    <div>
        <el-row>
            <el-col :span="8" style="padding-right: 10px;">
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
                            v-for="item in tableLable"
                            :key="item.prop">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16" style="padding-left: 10px;">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.value" :body-style="{display:'flex',padding:'0px'}">
                        <i :class="`el-icon-${item.icon}`" class="iicon" :style="{ background : item.color}"></i>
                        <div class="detail">
                            <p class="price">￥{{ item.value }}</p>
                            <p class="dec">{{ item.name }}</p>
                        </div>
                    </el-card>
                </div>
                <el-card style="height: 280px;">
                    <div ref="echarts1" style="height: 280px ;width: 100%;"></div>
                </el-card>
                <div class="graph">
                    <el-card style="height: 260px;">
                        <div ref="echarts2" style="height: 260px;"></div>
                    </el-card>
                    <el-card style="height: 260px;">
                        <div ref="echarts3" style="height: 260px;"></div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getData } from '../api'
import * as echarts from 'echarts'
export default {
    data() {
        return {
            mainData:{},
            tableData: [
                // {
                //     date: '2016-05-02',
                //     name: '王小虎',
                //     address: '上海市',
                //     monthBuy:1
                // }, 
                // {
                //     date: '2016-05-04',
                //     name: '王小虎',
                //     address: '上海市'
                // }, 
                // {
                //     date: '2016-05-01',
                //     name: '王小虎',
                //     address: '上海市'
                // }, 
                // {
                //     date: '2016-05-03',
                //     name: '王小虎',
                //     address: '上海市'
                // }
            ],
            tableLable:[
                {
                    prop:"name",
                    label:"品牌",
                    
                },
                {
                    prop:"todayBuy",
                    label:"今日购买",
                  
                },
                {
                    prop:"monthBuy",
                    label:"本月购买",
                    
                },
                {
                    prop:"totalBuy",
                    label:"总购买",
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
            ],
            echarts1Data:{
                
            }
        }
    },
    mounted(){
        getData().then(({data})=>{
            const { tableData } = data.data
            this.tableData = tableData
            this.mainData=data
            console.log(data);
            //基于准备好的dom，初始化echarts
            const echarts1 = echarts.init(this.$refs.echarts1)
            //指定的图标配置项
            let option1= {}
            //数据的处理
            const { orderData,useData,viedoData } = data.data
           
            const xAxis = Object.keys(orderData.data[0])
            option1.xAxis = {
                data:xAxis
            }
            option1.yAxis={
            
            }
            option1.legend={
                data:xAxis
            }
            option1.series =[]
            xAxis.forEach(item=>{
                option1.series.push({
                    name:item,
                    data: orderData.data.map(ke=>ke[item]),
                    type:'line'
                })
            })
            //配置显示图表
            echarts1.setOption(option1)
            //柱状图
            const echarts2 =  echarts.init(this.$refs.echarts2)
            //柱状图数据
            const option2 = {
                legend:{
                    textStyle:{
                        color:'#333'
                    }
                },
                grid:{
                    left:'20%'
                },
                tooltip:{
                    trigger:'axis'
                },
                xAxis:{
                    type:'category',
                    data:useData.map(item=>item.data),
                    axisLine:{
                        lineStyle:{
                            color:'#17b3a3'
                        }
                    },
                    axisLable:{
                        interval:0,
                        color:'#333'
                    },

                },
                yAxis:[
                    {
                        type:'value',
                        axisLine:{
                            lineStyle:{
                                color:'#333'
                            }
                        }
                    }
                ],
                color:["#2ec7c9","#b6a2de"],
                series:[
                    {
                        name:'新增用户',
                        data:useData.map(item=>item.new),
                        type:'bar'
                    },
                    {
                        name:'活跃用户',
                        data:useData.map(item=>item.active),
                        type:'bar'
                    }
                ]
            }
            echarts2.setOption(option2)
            //饼状图
            const echarts3 = echarts.init(this.$refs.echarts3)
            //饼状图数据
            
            const option3={
                tooltip:{
                    trigger:'item'
                },
                color:[
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf"
                ],
                series:[
                    {
                        data:viedoData,
                        type:'pie'
                    }
                ],
            }
            echarts3.setOption(option3)
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
    .graph{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .el-card{
            width: 48%;
        }
    }
</style>
