<script setup>
    import {ref} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    const props = defineProps({
        productionName:String,
        productionSize:String
    })
    //製作程序資料
    const getProccess = ref([
        {title:'製程1',std:10.5,pin:100,upperlimit:2,lowerlimit:3,cut:1,multiple:1,description:'以切線計'},
        {title:'製程2',std:18.6,pin:152,upperlimit:2,lowerlimit:1,cut:1,multiple:1,description:'以針數計'},
        {title:'製程3',std:20.4,pin:32,upperlimit:5,lowerlimit:4,cut:1,multiple:1,description:'標準計算'},
        {title:'製程4',std:2.1,pin:100,upperlimit:50,lowerlimit:50,cut:1,multiple:1,description:'以手動計'},
        {title:'製程5',std:0.6,pin:1,upperlimit:1,lowerlimit:1,cut:0,multiple:1,description:'標準計算'},
    ])
    //新增製程
    const btnAdd = function(){
        store.commit('onPopupForm','processAdd')
    }
    //顯示圖片
    const showPhoto=function(){
        store.commit('onPopupForm','showPhoto')
    }
     const showVideo=function(){
        store.commit('onPopupForm','showVideo')
    }
    const showDoc = function(){
         store.commit('onPopupForm','showDoc')
    }
    const showAll = function(){
         store.commit('onPopupForm','showAll')
    }
</script>

<template>
    <h1 class="flex items-center mb-8 sm:mb-4 text-4xl text-gray-600">
        <span class="mr-5 sm:mr-2">製程設定</span>
        <router-link to="/product_set" class="flex items-center">
            <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none">
               <span class="sm:hidden"> 返回產品設定</span>
               <span class="hidden sm:block">上一頁</span>
            </button>
        </router-link>
    </h1>
    <div class="mb-5 w-full shadow">
        <div class="flex sm:block items-center justify-between h-16 sm:h-auto sm:py-2 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div class="sm:mb-2 w-2/4 lg:w-8/12 sm:w-full">
                <span class="flex sm:block items-center justify-between text-xl sm:text-lg">
                    <p class="mr-5 sm:mr-0">產品：{{props.productionName}}</p>
                    <p >尺寸：{{props.productionSize}}</p>
                </span>
            </div>
        </div>
    </div>
    <div class="w-full md:w-full md:shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="flex items-center text-xl">
                <i class="pe-7s-ticket pe-lg pe-va"></i>
                <span class="ml-2">製程設定</span>
            </span>
            <button class="btn bg-blue-basic text-white" @click="btnAdd">新增製程</button>
        </div>
        <div class="px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm shadow md:shadow-none">
            <sup class="pl-4 text-purple-500">--點選以下清單，修改製程--</sup>
            <div class="mt-5 sm:mt-0">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="border">製程<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">標準時間/秒<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">針數<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">公差下限<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">公差上限<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">切線<i class="pe-7s-angle-up pe-lg pe-va"></i></th>
                            <th class="border">倍數<i class="pe-7s-angle-up pe-lg pe-va"></i></th>
                            <th class="border py-2">計算方法<i class="pe-7s-angle-up pe-lg pe-va"></i></th>
                            <th class="sm:hidden border">圖片</th>
                            <th class="sm:hidden border">影片</th>
                            <th class="sm:hidden border">文件</th>
                            <th class="hidden sm:table-cell border">圖文</th>
                            <th class="border">刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="cursor-pointer" v-for="(proccess,index) in getProccess" :key="proccess+index">
                            <td class="border pl-2">
                                <div></div>
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}">
                                    <div class="w-full h-full">{{proccess.title}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.std}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.pin}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.upperlimit}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.lowerlimit}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.cut}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full"> {{proccess.multiple}}</div>
                                </router-link>
                            </td>
                            <td class="border pl-2">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full"> {{proccess.description}}</div>
                                </router-link>
                            </td>
                            <!-- 這裡之後要改成 顯示圖片 或 點按鈕後 跳出彈出視窗 內容是圖片、影片、文件 -->
                            <!-- 要修改，就點上面的連結，進入修改頁面 -->
                            <td class="sm:hidden border cursor-text text-center">
                                <input type="file" accept="image/*" id="filePhoto" class="hidden">
                                <label for="filePhoto" class="btn bg-blue-basic text-white cursor-pointer" @click.prevent="showPhoto">
                                    <span class="lg:hidden">圖片</span> 
                                    <span class="hidden lg:inline"><i class="pe-7s-photo pe-lg pe-va"></i></span>
                                </label>
                            </td>
                            <td class="sm:hidden border cursor-text text-center">
                                <input type="file"  accept="video/*,audio/*" id="fileVideo" class="hidden">
                                <label for="fileVideo" class="btn bg-blue-basic text-white cursor-pointer"  @click.prevent="showVideo">
                                    <span class="lg:hidden">影片</span> 
                                    <span class="hidden lg:inline"><i class="pe-7s-video pe-lg pe-va"></i></span> 
                                </label>
                            </td>
                            <td class="sm:hidden border cursor-text text-center">
                                <input type="file" accept="application/*" id="fileDoc" class="hidden">
                                <label for="fileDoc" class="btn bg-blue-basic text-white cursor-pointer" @click.prevent="showDoc">
                                    <span class="lg:hidden">文件</span> 
                                    <span class="hidden lg:inline"><i class="pe-7s-file pe-lg pe-va"></i></span>
                                </label>
                            </td>
                            <!-- 圖 影 文 三個合併 避免手機板會破圖 -->
                            <td class="hidden sm:table-cell bg-blue-basic text-center text-white  border cursor-piont">
                                <span  @click.prevent="showAll"><i class="pe-7s-next-2 pe-lg pe-va"></i></span>
                            </td>
                            <td class="py-2 border cursor-text sm:cursor-pointer sm:bg-red-500 text-center sm:text-white">
                                <button class="sm:hidden btn bg-red-500 text-white">
                                    <span class="lg:hidden">刪除</span> 
                                    <span class="hidden lg:inline"><i class="pe-7s-trash pe-lg pe-va"></i></span>
                                </button>
                                <span class="hidden sm:inline"><i class="pe-7s-trash pe-lg pe-va"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
    </div>
</template>