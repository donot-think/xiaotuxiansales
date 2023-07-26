import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart',()=>{
    const cartList = ref([])
    const addCart =(goods)=>{
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
    const delCart = (skuId)=>{
          const idx = cartList.value.findIndex((item)=>skuId===item.skuId)
          cartList.value.splice(idx,1)
    }
    return{
        cartList,
        addCart,
        delCart
    }
})