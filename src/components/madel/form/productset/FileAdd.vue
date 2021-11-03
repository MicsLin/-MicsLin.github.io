<script setup>
    import {ref,computed} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()



    //關閉
     const offPopupForm=function(){
        store.commit('offPopupForm')
    }
    //送出
    const postForm = function(){


        store.commit('offPopupForm')
    }
</script>

<template>
    <div>
        <h2 class="pl-4 py-2 text-gray-400">新增檔案</h2>
        <hr class="mb-3">
        <form action="">
            <div class="px-4 text-gray-600 text-sm">
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
            </div>
            <hr class="mt-3 mb-2">
            <div class="px-4 py-2 float-right">
                <button class=" mr-2 btn bg-gray-300" @click.prevent="offPopupForm">關閉</button>
                <button type="button" class="btn bg-blue-basic text-white" @click="postForm">送出</button>
            </div>  
        </form>
    </div>
</template>