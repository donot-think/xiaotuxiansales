<script setup>
import { useCategoryStore } from "@/stores/category";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import layoutFixed from "./components/layoutFixed.vue";
import { onMounted } from "vue";
// 触发获取导航列表的action
const categoryStore = useCategoryStore()
onMounted(()=> categoryStore.getCategory())
</script>

<template>
          <layoutFixed/>
            <LayoutNav />
            <LayoutHeader />
            <!-- <RouterView :key="$route.fullPath"/> -->
            <RouterView/>

            <LayoutFooter />
</template>