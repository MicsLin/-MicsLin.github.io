<script setup>
    import {ref} from 'vue'
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation } from 'vue3-carousel';
    const getVideos = ref([1,2,3,4,5,6,7,8,9])
</script>
<template>
    <h2 class="pl-4 py-2 text-gray-400">影片<sub class="text-purple-500">(可左右滑動，瀏覽影片)</sub></h2>
    <hr class="mb-3">
    <div class="w-96 px-4">
        <carousel :items-to-show="1">
            <slide v-for="slide in getVideos" :key="slide">
                <div class="w-full">
                    <div>{{slide}}</div>
                    <video class="w-full h-96" controls>
                        <source src="https://youtu.be/tqjMC4F7PxA" type="video/mp4">
                    </video>
                </div>
            </slide>
      </carousel>
    </div>
</template>