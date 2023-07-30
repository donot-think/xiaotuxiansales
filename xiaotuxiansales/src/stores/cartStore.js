import { defineStore } from "pinia";
import { computed, ref } from "vue";

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
    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck
    }
})