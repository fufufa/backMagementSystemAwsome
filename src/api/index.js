import http from '../utils/request.js'

//请求首页数据

export const getData = ()=>{
    //返回一个promise对象
    return http.get('/home/getData')
}

export const getMenu=(data)=>{
    return http.post('/permission/getMenu',data)
}