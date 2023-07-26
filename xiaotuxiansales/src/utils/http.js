// axios基础的封装
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'
const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config=>{
    const useStore = useUserStore()
    const token = useStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},e=>Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    //统一错误提示
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })
    //清除用户信息
    //跳转到登录页面
    const useStore = useUserStore()
    if(e.response.status===401){
        useStore.clearUserInfo()
         router.push('/login')
    }
    return Promise.reject(e)
})
export default httpInstance