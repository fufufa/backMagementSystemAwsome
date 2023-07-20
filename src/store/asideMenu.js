
import Cookies from "js-cookie"
export default{
    state:{
        MenuData:[],
        routeMenu:[]
    },
    mutations:{
        //
        getMenuData(state,data){
            state.MenuData = data
            Cookies.set('menu',JSON.stringify(state.MenuData))
        },
        //动态路由
        addMenu(state,router){
            //判断缓存中是否有数据
            if(!Cookies.get('menu')) return
            const menu = JSON.parse(Cookies.get('menu'))
            state.MenuData=menu
            //组装动态路由数据
            const menuArray =[]
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item=>{
                        item.component=()=>import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }
                else{
                    item.component=()=>import(`../views/${item.url}`)
                    menuArray.push(item)
                }
                console.log(menuArray,'menuarray');
                //路由动态添加
                menuArray.forEach(item=>{
                    router.addRoute('Main',item)
                })
            });


        }   
    }
}