import { defineStore } from "pinia"
import { ref } from "vue"
import getCategoryAPI from "../apis/layout"



export const useCategoryStore = defineStore('category',()=>{
    const categoryList = ref([])

    // action获取导航数据的方法
    const getCategory = async()=>{
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }

    return{
        categoryList,
        getCategory
    }
})