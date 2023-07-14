export default{
    state:{
        isCollapse:false,//控制菜单的展开收起
        tabList:[
            {
                path: '/',
                name: 'home',
                lable: '首页',
                icon: 's-home',
                url: 'Home/home'
            },
        ]//面包屑数据
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        //更新面包屑
        updateTableList(state,val){
            if(val.name!=="home"){
                const index = state.tabList.findIndex(item=>{item.name===val.name})
                if (index===-1) {
                    state.tabList.push(val)
                }
            }
        },
        //删除一个面包屑和tag
        deleteTags(state,val){
            state.tabList.splice(val,1)
        }
    }
}