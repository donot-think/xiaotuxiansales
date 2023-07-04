<script setup>
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
</script>


<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner/>
    </div>
         <HomeNew /> 
         <HomeHot />
        <HomeProduct />
</template>