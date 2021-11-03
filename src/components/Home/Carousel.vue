<script setup>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  const props = defineProps({
    errorPools: Array,
    getHam:Boolean
  })
</script>

<template>
  <!-- 要限制輸入的字數，以免爆圖 -->
  <carousel :items-to-show="1">
    <slide v-for="slide in props.errorPools" :key="slide">
      <span class="carousel_span"> 
        <span class="mr-3">生產線:</span>{{ slide.line }}
      </span>
      <span class="carousel_span sm:hidden">
        <span class="mr-3">機台:</span>{{ slide.machine }}
      </span>
      <span class="carousel_span lg:hidden">
        <span class="mr-3">錯誤代碼:</span>{{ slide.error_code }}
      </span>
      <span class="carousel_span md:hidden">
        <span class="mr-3">發生時間:</span>{{ slide.happened_time }}
      </span>
      <router-link to="/machine_status_out_of_order" class="carousel_link" :class="[getHam ? 'text-gray-300':'text-blue-800']" >錯誤清單</router-link>
    </slide>

    <template #addons >
        <navigation>
          <template #next>
            <span >
              <i class="pe-7s-angle-right" aria-hidden="true"></i>
            </span>
          </template>
          <template #prev>
            <i class="pe-7s-angle-left" aria-hidden="true"></i>
          </template>
        </navigation> 
    </template>
  </carousel>
</template>

<style>
  /* 只能用style 不能用scoped 可能是此套件是全局影響*/
  :root {
    --carousel-color-primary: none;
  }

  /*  */
  .carousel__prev,.carousel__next{
    position: absolute;
    border-radius: 0;
    width: 300px;
  }
  /*  */
  .carousel__prev{
    left: 150px;
    background-image: linear-gradient(to left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
  }
  .carousel__prev:hover{
    background-image: linear-gradient(to left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 70%);
  }

  .carousel__prev i,.carousel__next i{
    font-size: 54px;
    opacity: 0.7;
  }
  .carousel__prev i:hover,.carousel__next i:hover{
    opacity: 1;
  }
  .carousel__next {
    right: 150px;
    background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
  }
  .carousel__next:hover {
    background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 70%);
  }
  @media screen and (max-width:1023px){
    .carousel__prev,.carousel__next{
      width: 12vw;
    }
    .carousel__prev{left:6vw}
    .carousel__next{right:6vw}
  }
  .carousel_span{
    color:white;
    font-size: 14px;
    margin: 0 20px;
    line-height: 32px;
  }
  .carousel_link{
    text-decoration: none;
    font-size: 14px;
  }
  .carousel_link:hover{
    text-decoration: underline;
  }
</style>
