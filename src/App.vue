<script setup>
  import Navbar from './components/Navbar.vue'
  import Carousel from './components/Home/Carousel.vue'
  import Breadcrumb from './components/breadcrumb/Breadcrumb.vue'
  import Popup from './components/madel/Popup.vue'
  import axios from 'axios'
  import {computed,ref} from 'vue';
  import { useStore } from "vuex";
  const store = useStore()
  //獲取目前位置
  import {useRouter} from 'vue-router'
  const currentRouter =computed(() =>{
    return useRouter().currentRoute.value.path
  })

  //如果漢堡開啟時，調暗頁面背景
  const getHam = computed(()=>{
    return store.getters.onClickAway.hamburger
  })

  //輪播的array
  const errorPools =ref([])
  const showErrorPools =ref(true)
  const getAxios = function(){
    axios.get('http://localhost:3000/errorpools')
    .then((res)=>{
      if(res.data[0].line == undefined){
        //如果是空值 []，就隱藏輪播(篩選掉res.data=[]跟res.data=[{},{},{}]的格式)
        showErrorPools.value = false
      }else{
        errorPools.value = res.data
      }
    })
    .catch((error)=>{
      console.log('失敗')
      showErrorPools.value = false
    })
  }
  getAxios()

  // madel popup form  開啟/關閉
  const isPopup = computed(()=>{
    return store.getters.getMadel.isPopup
  })
</script>

<template>
  <div class="fixed z-50 w-full">
    <!-- Navbar -->
    <Navbar />
    <!-- Breadcrumb 麵包屑-->
    <Breadcrumb />
  </div>
  <div class="w-full h-24"><!-- 填補Navbar 麵包屑 fixed後的空缺，寬高=navbar --></div>
  <!-- 這個是彈出表單 -->
  <div class="fixed z-50 top-0 w-full h-screen" v-if="isPopup">
    <Popup />
  </div>
  <!-- Nav+Breadcrumb的高度只有h-22 tailwind設定值只有h-24可以用 所以要將多出來的h-2移動回去 -->
  <div class="relative -top-2">
    <!-- Carousel 跑馬燈 要一直保留此height的空間，showErrorPools是如果有資料的話+又是首頁 才會顯示紅色背景-->
    <div v-if="currentRouter == '/productivity' || currentRouter == '/line_balance'" class="h-8 bg-blue-siruba"></div>
    <div v-else class="h-8 bg-white">
      <div v-if="currentRouter == '/' && showErrorPools" class="bg-red-carousel">
        <!-- getHam是要修改開啟漢堡後 連結的顏色(因為太突兀了) -->
        <Carousel :errorPools="errorPools" :getHam="getHam" />
      </div>
    </div>
    <!-- 內容 -->
    <div v-if="currentRouter == '/productivity' || currentRouter == '/line_balance'" class="px-5 w-full hhh bg-blue-siruba">
      <router-view />
    </div>
    <div v-else class="px-5 w-full bg-white">
      <router-view />
    </div>
  </div>
</template>