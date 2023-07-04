import { ref,onMounted } from "vue";
import getBannerAPI from "@/apis/home";


 export   function useBanner(){
    // 轮播图区域
    const bannerList = ref([]);
    const getbanner = async()=>{
        const res = await getBannerAPI({
        distributionSite:'2'
        })
        bannerList.value = res.result
    }
    onMounted(()=>getbanner())

    return {
        bannerList
    }
}