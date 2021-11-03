<script setup>
    import {ref} from 'vue'
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation } from 'vue3-carousel';
    const getPhotos = ref([1,2,3,4,5,6,7,8,9])
    const getVideos = ref([1,2,3,4,5,6,7,8,9])
    const getDocs = ref([1,2,3,4,5,6])

    //選擇顯示
    const showFile = ref('getPhotos')
    const changeShow= function(value){
        return showFile.value = value
    }
</script>

<template>
    <div class="flex items-center justify-between mb-5 pl-4 pt-2">
        <div class="flex items-center">
            <button class="btn bg-blue-basic text-white" @click="changeShow('getPhotos')">
                <span><i class="pe-7s-photo pe-lg pe-va"></i></span>
                <span class="ml-1">圖片</span>
            </button>
            <button class="mx-2 sm:mx-px btn bg-blue-basic text-white"  @click="changeShow('getVideos')">
                <span><i class="pe-7s-video pe-lg pe-va"></i></span>
                <span class="ml-1">影片</span>
            </button>
            <button class="btn bg-blue-basic text-white"  @click="changeShow('getDocs')">
                <span><i class="pe-7s-file pe-lg pe-va"></i></span>
                <span class="ml-1">文件</span>
            </button>
        </div>
    </div> 
    <div v-if="showFile == 'getPhotos'" class="w-full">
        <h2 class="pl-4 py-2 text-gray-400">圖片<sub class="text-purple-500">(可左右滑動，瀏覽照片)</sub></h2>
        <hr class="mb-3">
        <div class="px-4">
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
    </div>
    <div  v-if="showFile == 'getVideos'" class="w-full">
        <h2 class="pl-4 py-2 text-gray-400">影片<sub class="text-purple-500">(可左右滑動，瀏覽影片)</sub></h2>
        <hr class="mb-3">
        <div class="px-4">
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
    </div>
    <div v-if="showFile == 'getDocs'" class="w-full">
        <h2 class="pl-4 py-2 text-gray-400">文件</h2>
        <hr class="mb-3">
        <div class="px-4  text-gray-600">
            <div class="flex flex-wrap">
                <div v-for="(getDoc,index) in getDocs" :key="'getDoc'+index" class="mr-5 sm:mr-2 mb-5">
                    <div class="bg-gray-300 hover:bg-opacity-70 w-20 h-20 cursor-pointer">
                        <i class="pe-7s-ticket pe-lg pe-va"></i>
                    </div>
                    <div class="text-center w-20 overflow-hidden">{{getDoc}}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>