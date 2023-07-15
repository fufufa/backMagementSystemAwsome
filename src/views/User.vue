<template>
    <div class="manage">
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <!-- 用户的表单信息 -->
        <el-form :inline="true" :rules="rules" ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名" prop="name">
                <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-select v-model="form.sex" placeholder="请选择你的性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="出生日期" prop="birth">
                <el-date-picker
                v-model="form.birth"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-DD">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="地址" prop="addr">
                <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </span>
        </el-dialog>
        <div class="manage-header">
            <el-button @click="dialogVisible=true,modalType=0" type="primary">
                + 新增
            </el-button>
        </div>
        <el-table
        :data="mountedData"
        style="width: 100%"
        height="81%"
        stripe>
            <el-table-column
                :prop="item.name"
                :label="item.label"
                v-for="item in tableLable"
                :key="item.prop">
            </el-table-column>
            <el-table-column
                prop="option"
                label="操作">
                    <template slot-scope="scope">
                        <el-button size="small" @click="updataMsg(scope)">编辑</el-button>
                        <el-button size="small" type="danger" @click="deleteMsg(scope)">删除</el-button>
                    </template>
            </el-table-column>
        </el-table>
        <div>
            <el-pagination
                layout="prev, pager, next"
                :total="total"
                @current-change="handlePage">
            </el-pagination>
        </div>
    </div>
</template>

<script>

export default{

    data(){
        return{
            dialogVisible:false,
            form:{
                name:'',
                age:'',
                sex:'',
                birth:'',
                addr:'',
            },
            rules:{
                name:[
                    {required:true,message:'请输入姓名'}
                ],
                age:[
                    {required:true,message:'请输入年龄'}
                ],
                sex:[
                    {required:true,message:'请选择性别'}
                ],
                birth:[
                    {required:true,message:'请选择出生日期'}
                ],
                addr:[
                    {required:true,message:'请输入地址'}
                ],
            },
            tableData:[
                {
                    name:'贺娜',
                    age:41,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'福建省 泉州市 泉巷区'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'罗铭感',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
                {
                    name:'方平',
                    age:27,
                    sex:'女',
                    birth:'1991-01-19',
                    addr:'陕西省 商洛市 镇安县'
                },
            ],
            tableLable:[
                {
                    name:'name',
                    label:'姓名'
                },
                {
                    name:'age',
                    label:'年龄'
                },
                {
                    name:'sex',
                    label:'性别'
                },
                {
                    name:'birth',
                    label:'出生日期'
                },
                {
                    name:'addr',
                    label:'地址'
                },
            ],
            modalType:0,
            pageH:0,
            mountedData:[]
        }
    },
    methods:{
        submit(){
            this.$refs.form.validate((valid)=>{
                if(valid){
                    this,this.$refs.form.validateField('age',(errorMessage)=>{
                        let valid = parseInt(this.form.age)
                        if(Object.is(valid,NaN)){
                            confirm("输入不合法")
                            return false
                        }
                        else{
                            if(this.modalType===0){
                                let newForm = {}
                                newForm=JSON.parse(JSON.stringify(this.form))
                                this.tableData.push(newForm)
                            }
                            else{
                                let tet=JSON.parse(JSON.stringify(this.form))
                                this.editTableData(tet)
                            }
                            this.$refs.form.resetFields()
                            this.dialogVisible=false
                        }
                    })

                }
            })
        },
        handleClose(){
            //清空表单数据
            this.$refs.form.resetFields()
            this.dialogVisible=false
        },
        updataMsg(scope){
            this.modalType=1
            this.dialogVisible=true
            this.form=JSON.parse(JSON.stringify(scope.row))
        },
        editTableData(data){
            const index = this.tableData.findIndex(item=>{
                return item.name===data.name
            })
            this.$set(this.tableData,index,data)
            console.log(this.tableData);
        },
        deleteMsg(scope){
            this.tableData.splice(scope.$index,1)
            this.handlePage(Math.floor(scope.$index/9)+1)
            console.log(Math.floor(scope.$index/9)+1);
            console.log(this.tableData,this.tableDataSepart);
        },
        handlePage(val){
            console.log(val);
            this.mountedData=this.tableDataSepart[val-1]
        }
    },
    computed:{
        total(){
            return this.tableData.length
        },
        tableDataSepart(){
            let arr = new Array()
            for(let i=0;i<=this.tableData.length/9;i++){
                arr[i]=new Array()
                for(let j=0;j<9;j++){
                    if(typeof(this.tableData[i*9+j]) == "undefined") break
                    arr[i][j]=this.tableData[i*9+j]
                }
            }
            return arr
        }
    },
    mounted(){
        this.mountedData=this.tableDataSepart[0]
    }
   
}

</script>

<style lang="less" scoped>
    .manage{
        height: 90%;
    }
    
</style>