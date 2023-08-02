import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";
import { insertCartAPI } from '@/apis/cart'
import { findCartAPI,delcartAPI } from "@/apis/cart";

export const useCartStore = defineStore('cart',()=>{
    const userStore = useUserStore()
    const isLogin = computed(()=>userStore.userInfo.token)
    const cartList = ref([])
    //刷新购物车数据
    const update = async ()=>{
        const res =await findCartAPI()
        cartList.value = res.result
    }
    //添加商品接口
    const addCart = async (goods)=>{
        if(isLogin.value){
          //已经登录
          const { skuId,count } = goods
          await insertCartAPI({skuId,count})
          update()
        }else{
            //未登录
                //   添加购物车操作
                // 已经添加过-count+1
                // 没有添加过-直接push
                // 思路：通过匹配传递过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过
                const item = cartList.value.find((item)=> goods.skuId===item.skuId)
                if(item){
                    item.count++
                }else{
                cartList.value.push(goods)
                } 
            }
        }
   //删除商品数据接口
    const delCart = async (skuId)=>{
        if(isLogin){
             //删除某个物品
           await delcartAPI([skuId])
           update()
        }else{
            const idx = cartList.value.findIndex((item)=>skuId===item.skuId)
            cartList.value.splice(idx,1)
        }
    }
    //清楚购物车数据
    const clearCartList = ()=>{
        cartList.value = []
    }

    // 购物车所有商品数量之和
   const allCount = computed(()=>cartList.value.reduce((a,c)=>a+c.count,0)) 
    // 购物车中所有商品价格之和
    const allPrice =computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0)) 
  //修改对应的单选框中的值
   const singleCheck = (skuId,selected)=>{
    //查到到对应skuId的商品
    const item = cartList.value.find((item)=>item.skuId === skuId)
    if(item){
        item.selected = selected
    }  
   }
    //定义isAll,isAll属性是关于点击事件seleted的值，当所有商品的selected的值均为true,则isAll为true,否则为false
   const isAll = computed(()=>cartList.value.every((item)=>item.selected))
   const alCheck = (selected)=>{
    //   selected = !selected
      cartList.value.forEach((item)=>item.selected = selected)
   }
   //所有已经选中的商品
   const selectedCount = computed(()=>cartList.value.filter((item)=>item.selected).reduce((total,item)=>total+item.count,0))
   //商品合计
   const selectedPrice = computed(()=>cartList.value.filter((item)=>item.selected).reduce((total,item)=>total+item.price*item.count,0))


    return{
        cartList,
        allCount,
        allPrice,
        isAll,
        addCart,
        delCart,
        singleCheck,
        alCheck,
        selectedPrice,
        selectedCount,
        clearCartList,
        update
    }
},
{
    persist:true
}
)