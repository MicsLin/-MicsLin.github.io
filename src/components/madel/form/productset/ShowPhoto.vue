<script setup>
    import {ref} from 'vue'
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation } from 'vue3-carousel';
    const getPhotos = ref([1,2,3,4,5,6,7,8,9])
</script>

<template>
    <h2 class="pl-4 py-2 text-gray-400">圖片<sub class="text-purple-500">(可左右滑動，瀏覽照片)</sub></h2>
    <hr class="mb-3">
    <div class="w-96">
        <carousel :items-to-show="1">
            <slide v-for="slide in getPhotos" :key="slide">
                <div class="w-48 h-48 text-gray-600">
                    <div>{{slide}}</div>
                    <div class="w-full">
                        <img src="../../../../assets/img/images.jpg" alt="">
                    </div>
                </div>
            </slide>
      </carousel>
    </div>
</template>