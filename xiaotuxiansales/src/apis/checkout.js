import request from '@/utils/http'
export  function getCheckOutAPI(){ 
    return request(
        {
            url:'/member/order/pre',
            method:'GET'
        }
    )
}
