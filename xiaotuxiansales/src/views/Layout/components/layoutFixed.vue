<script setup>
import { useCategoryStore } from '@/stores/categoryStore';
import {useScroll} from '@vueuse/core'
const { y } = useScroll(window);
const categoryStore = useCategoryStore()
</script>

<template>
  <div class="app-header-sticky " :class="{show:y>78}">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav">
         <li class="home">
            <router-link to="/">首页</router-link>
         </li>
         <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink :to="`/category/${item.id}`" >{{ item.name }}</RouterLink>
        </li>
      </ul>
      <!-- <LayoutHeaderUl /> -->
      <div class="right">
         <router-link to="/">品牌</router-link>
         <router-link to="/">专题</router-link>

      </div>


      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .app-header-nav {
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li{
      margin-right: 5px;
      // width: 38px;
      text-align: center;

      a{
        font-size: 16px;
        line-height: 32px;
        width: 32px;
        height: 32px;
        display: inline-block;
        margin-right: 20px;
        &:hover{
          color:$xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
    }
  }
  .right {
    // width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>