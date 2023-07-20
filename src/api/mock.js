import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import permissionApi from './mockServeData/permission'

//定义mock请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData)

Mock.mock(/api\/permission\/getMenu/,'post',permissionApi.getMenu)