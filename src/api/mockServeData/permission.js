import Mock from "mockjs";


export default {
    getMenu:config=>{
       
        const { username,password} =JSON.parse(config.body)
       
        if(username==="admin" && password==="123456"){
            return {
                code:200,
                data:{
                    menu:[
                        {
                            path: '/home',
                            name: 'home',
                            lable: '首页',
                            icon: 's-home',
                            url: 'Home.vue'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            lable: '商品管理',
                            icon: 'video-play',
                            url: 'Mall.vue'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            lable: '用户管理',
                            icon: 'user',
                            url: 'User.vue'
                        },
                        {
                            lable: '其他',
                            icon: 'location',
                            children: [
                                {
                                    path: '/pageone',
                                    name: 'pageone',
                                    lable: '页面1',
                                    icon: 'setting',
                                    url: 'PageOne.vue'
                                },
                                {
                                    path: '/pagetwo',
                                    name: 'pagetwo',
                                    lable: '页面2',
                                    icon: 'setting',
                                    url: 'PageTwo.vue'
                                }
                            ]
                        }
                    ]
                },
                token:Mock.Random.guid(),
                message:"获取成功"
            }
        }
        else if(username==="adminer"&&password==="123456"){
            return {
                code:200,
                data:{
                    menu:[
                        {
                            path: '/home',
                            name: 'home',
                            lable: '首页',
                            icon: 's-home',
                            url: 'Home.vue'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            lable: '商品管理',
                            icon: 'video-play',
                            url: 'Mall.vue'
                        },
                    ]

                },
                token:Mock.Random.guid(),
                message:"获取成功"
            }
        }
        else{
            return {
                code:400,
                data:{},
                message:"获取失败"
            }
        }
    }
}