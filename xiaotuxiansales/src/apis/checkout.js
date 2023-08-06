import request from '@/utils/http'
export  function getCheckOutAPI(){ 
    return request(
        {
            url:'/member/order/pre',
            method:'GET'
        }
    )
}

export  function createPayAPI(data){ 
    return request(
        {
            url:'/member/order',
            method:'POST',
            data
        }
    )
}
