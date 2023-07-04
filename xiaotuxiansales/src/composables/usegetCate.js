import {getCateAPI}  from '@/apis/category'
import { useRoute } from 'vue-router';
import { onMounted,ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router';

export function usegetCate(){
    const route = useRoute()
    const category = ref({})
    const getCate = async (id=route.params.id)=>{
        const res = await getCateAPI(id)
        category.value = res.result
        // console.log(category)
    }
    onMounted(()=>getCate())
    onBeforeRouteUpdate((to)=>{
    getCate(to.params.id)
    })
    return{
        category
    }
}
