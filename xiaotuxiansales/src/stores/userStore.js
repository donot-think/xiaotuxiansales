import {defineStore} from  'pinia'
import {loginAPI} from '@/apis/user'
import { ref } from 'vue'
import { useCartStore } from './cartStore'
import { mergeCateAPI } from '@/apis/cart'


export  const useUserStore = defineStore('user',()=>{
    // 定义用户数据
    const userInfo = ref({})
    const cartStore = useCartStore()
    // 定义获取接口数据action函数
    const getUserInfo = async ({account,password})=>{
            const res  = await loginAPI({account,password})
            userInfo.value = res.result
            //合并购物车的操作
            await mergeCateAPI(cartStore.cartList.map(item=>{
                return {
                    skuId:item.skuId,
                    selected:item.selected,
                    count:item.count
                }
            }))
            cartStore.update()
    }
    const clearUserInfo = ()=>{
        userInfo.value = {}
    }
 
    return{
        getUserInfo,
        userInfo,
        clearUserInfo,
    }
 
},
{
    persist:true
})