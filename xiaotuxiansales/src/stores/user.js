import {defineStore} from  'pinia'
import {loginAPI} from '@/apis/user'
import { ref } from 'vue'

export  const useUserStore = defineStore('user',()=>{
    // 定义用户数据
    const userInfo = ref({})
    // 定义获取接口数据action函数
    const getUserInfo = async ({account,password})=>{
            const res  = await loginAPI({account,password})
            userInfo.value = res.result
    }
    const clearUserInfo = ()=>{
        userInfo.value = {}
    }
    return{
        getUserInfo,
        userInfo,
        clearUserInfo
    }
 
},
{
    persist:true
})