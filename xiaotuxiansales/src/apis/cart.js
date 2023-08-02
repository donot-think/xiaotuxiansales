import request from '@/utils/http'
//加入购物车接口
export const insertCartAPI = ({skuId,count})=>{
    return request(
         {
            url:'/member/cart',
            method: 'POST',
            data:{
                skuId,
                count
            }
         }
    )

}

//获取购物车列表接口
export  const findCartAPI = ()=>{
    return request({
         url:'/member/cart',
         method:'GET'
    }) 
}

//删除商品接口
export const delcartAPI = (ids)=>{
    return request({
        url:'/member/cart',
        method:'DELETE',
        data:{
            ids
        }
    })
}

//合并购物车列表
export const mergeCateAPI = (data)=>{
    return request({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}