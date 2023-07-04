import httpInstance from '@/utils/http'

export default function getCategoryAPI(){ 
    return httpInstance(
        {
            url:'/home/category/head'
        }
    )
}