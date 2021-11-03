<script setup>
    import {ref,computed} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    //獲取資料
    const getData = computed(()=>{
        return store.getters.getMadel.otherData
    })

    //關閉
     const offPopupForm=function(){
        store.commit('offPopupForm')
    }
</script>

<template>
    <div>
        <h2 class="pl-4 py-2 text-gray-400">{{getData}}</h2>
        <hr class="mb-3">
        <div class="px-4">
            <table  class="table-fixed">
                <thead class="text-red-400">
                    <tr>
                        <th class="">錯誤碼</th>
                        <th class="">內容</th>
                        <th class="">起始時間</th>
                        <th class="">結束時間</th>
                        <th class="w-1/12">時間</th>
                    </tr>
                </thead>
                <tbody class="text-red-600 border-t">
                    <tr>
                        <td class="pt-2 text-center">Et-1</td>
                        <td class="pt-2 text-center">保修</td>
                        <td class="pt-2 text-center">2021-10-01</td>
                        <td class="pt-2 text-center">2021-12-10</td>
                        <td class="pt-2 text-center">60天</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr class="mt-3 mb-2">
        <div class="px-4 py-2 float-right">
            <button class=" mr-2 btn bg-gray-300" @click.prevent="offPopupForm">關閉</button>
        </div>
    </div>
</template>