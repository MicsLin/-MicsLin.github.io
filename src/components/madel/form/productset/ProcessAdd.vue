<script setup>
    import {ref} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    const offPopupForm =function(){
        store.commit('offPopupForm')
    }

    //計算方式
    const vfors =ref([
        '標準方式',
        '以針數計',
        '以手動計'
    ])
    const selected = ref('以針數計')
</script>

<template>
    <form action="" class="w-full">
        <h2 class="pl-4 py-2 text-gray-400 text-lg">新增製程</h2>
        <hr class="mb-3">
        <div class="px-4 text-sm">
            <div class="flex mb-2">
                <div class="mr-2 w-full">
                    <div><label for="title">製程名稱</label></div>
                    <div><input type="text" id="title" class="myInput w-full"></div>
                </div>
                <div class="w-full">
                    <div><label for="std">標準時間/秒</label></div>
                    <div><input type="number" id="std" class="myInput w-full"></div>
                </div>
            </div>
            <div class="flex justify-between mb-2">
                <div class="w-full">
                    <div><label for="pin">針數</label></div>
                    <div><input type="number" id="pin" class="myInput w-full"></div>
                </div>
                <div class="mx-2 w-full">
                    <div> <label for="lowerlimit">公差下限</label></div>
                    <div> <input type="number" id="lowerlimit" class="myInput w-full"></div>
                </div>
                <div class="w-full">
                    <div><label for="upperlimit">公差上限</label></div>
                    <div><input type="number" id="upperlimit" class="myInput w-full"></div>  
                </div>
            </div>
            <div class="flex justify-between mb-2">
                <div class="w-full">
                    <div><label for="cut">切線</label></div>
                    <div><input type="number" id="cut" class="myInput w-full"></div>
                </div>
                <div class="mx-2 w-full">
                    <div><label for="multiple">倍數</label></div>
                    <div><input type="number" id="multiple" class="myInput w-full"></div>
                </div>
                <div class="w-full">
                    <div><label for="description">計算方式</label></div>
                    <div class="w-full">
                        <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="selected">
                            <option v-for="(item,index) in vfors" :key="index">
                                {{item}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex items-center mb-2">
                <div>
                    <div><label for="">圖片檔案說明</label></div>
                    <div><input type="text" class="myInput"></div> 
                </div>
                <div class="pl-10 sm:pl-9">
                    <div><label for="">選擇上傳圖片<sub class="text-purple-500">(按住ctrl可複選)</sub></label></div>
                    <div><input type="file" accept="image/*" class="w-11/12" multiple></div>
                </div>
            </div>
            <div class="flex items-center mb-2">
                <div>
                    <div><label for="">影片檔案說明</label></div>
                    <div><input type="text" class="myInput"></div>
                </div>
                <div class="pl-10 sm:pl-9">
                    <div><label for="">選擇上傳影片<sub class="text-purple-500">(按住ctrl可複選)</sub></label></div>
                    <div><input type="file" accept="video/*,audio/*" class="w-11/12" multiple></div>
                </div>
            </div>
            <div class="flex items-center mb-5">
                <div>
                    <div><label for="">文件檔案說明</label></div>
                    <div><input type="text" class="myInput"></div>
                </div>
                <div class="pl-10 sm:pl-9">
                    <div><label for="">選擇上傳文件<sub class="text-purple-500">(按住ctrl可複選)</sub></label></div>
                    <div> <input type="file" accept="application/*" class="w-11/12" multiple></div>
                </div>
            </div>
            <div class="flex mb-2">
                <button class="mr-2 btn bg-yellow-500 text-white">Sample</button>
                <!-- <button class="btn bg-blue-basic text-white">增加上傳檔案</button> -->
            </div>
        </div>
        <hr class="mt-3 mb-2">
        <div class="flex px-4 py-2 float-right">
            <button class=" mr-2 btn bg-gray-300" @click.prevent="offPopupForm">關閉</button>
            <button type="button" class="btn bg-blue-basic text-white" @click="offPopupForm">儲存</button>
        </div>
    </form>
</template>