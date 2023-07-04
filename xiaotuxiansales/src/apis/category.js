import request from '@/utils/http'
export  function getCateAPI(id){ 
    return request(
        {
            url:'/category',
            params:{
                id
            }
        }
    )
}


export const getCategoryFilterAPI = (id) =>{
    return request({
       url:'/category/sub/filter',
       params:{
        id
       }
    })
}


export const getSubCategoryAPI = (data)=>{
    return request({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
}