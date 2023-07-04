import httpInstance from '@/utils/http'


// 轮播图区域
export default function getBannerAPI(params={}){ 
    // 默认为1， 商品为2
    const { distributionSite = '1' } = params
    return httpInstance(
        {
            url:'/home/banner',
            params:{
                distributionSite,
            }
        }
    )
}

export  const findNewAPI = () =>{ 
    return httpInstance(
        {
            url:'/home/new'
        }
    )
}


/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
      url: '/home/hot'
    })
  }


  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
  export const getProductAPI = ()=>{
    return httpInstance({
        url:'/home/goods'
    })
  }