<script setup>
    import {ref} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

   // 變數 名稱
    const machineName = ref('aa007-0')

    const onPopup = function(data){
        store.commit('onPopupOtherData',machineName.value)
        store.commit('onPopupForm',data)
    }
</script>

<template>
    <div>
        <div class="flex items-center justify-between p-4 mb-2.5 w-full rounded-t bg-blue-300 bg-opacity-50 text-lg">
            <span class="text-blue-800 text-opacity-70 font-bold">{{machineName}} </span>
            <div>
                <button class="px-3 py-1.5 bg-blue-400 hover:bg-opacity-70 text-sm rounded focus:outline-none" @click="onPopup('machineError')">0</button>
                <button class="ml-2 px-3 py-1.5 bg-blue-600 hover:bg-opacity-70 text-sm rounded focus:outline-none" @click="onPopup('machineMaintain')">
                    <i class="pe-7s-plugin pe-lg pe-va"></i>
                </button>
            </div>
        </div>
        <div class="px-4 pt-2 flex-wrap text-gray-600 font-bold text-opacity-80">
            <table class="mb-2 w-full table-fixed">
                <tbody>
                    <tr class="border-t">
                        <td class="pl-2 py-1 w-4/12">開機時間</td>
                        <td class="w-5/12">163小時40分</td>
                    </tr>
                    <tr class="border-t">
                        <td class="pl-2 py-1">運行時間</td>
                        <td>0分0秒</td>
                    </tr>
                    <tr class="border-t">
                        <td class="pl-2 py-1">總針數</td>
                        <td>2991005</td>
                    </tr>
                    <tr class="border-t border-b">
                        <td class="pl-2 py-1">稼動率</td>
                        <td>50%</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center justify-center ml-2 bg-gray-200 w-8 h-8 rounded-full">
                <div class="bg-yellow-400 w-5 h-5 rounded-full"></div>
            </div>
        </div>
    </div>
</template>