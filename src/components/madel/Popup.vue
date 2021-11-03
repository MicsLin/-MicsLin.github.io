<script setup>
    import MaintainReason from './form/MaintainReason.vue';
    import Employee from './form/Employee.vue';
    import MachineError from './form/machines/MachineError.vue';
    import MachineMaintain from './form/machines/MachineMaintain.vue';
    import LineAdd from './form/productionline/LineAdd.vue';
    import LineEdit from './form/productionline/LineEdit.vue';
    import ProductEdit from './form/productset/ProductEdit.vue';
    import ProductAdd from './form/productset/ProductAdd.vue';
    import ProductAddEdit from './form/productset/ProductAddEdit.vue';
    import ProcessAdd from './form/productset/ProcessAdd.vue';
    import ShowPhoto from './form/productset/ShowPhoto.vue';
    import ShowVideo from './form/productset/ShowVideo.vue';
    import ShowDoc from './form/productset/ShowDoc.vue';
    import ShowAll from './form/productset/ShowAll.vue';
    import FileAdd from './form/productset/FileAdd.vue';

    import {computed} from 'vue';
    import { useStore } from "vuex";
    const store = useStore()

    const formName = computed(()=>{
        return store.getters.getMadel.formName
    })
    // madel popup form  開啟/關閉
    const isPopup = computed(()=>{
        return store.getters.getMadel.isPopup
    })
    // 關閉
    const offPopupForm=function(){
        store.commit('offPopupForm')
        // 並且要刪除表單的資廖
    }

</script>

<template> 
    <div class="absolute left-1/3 lg:left-1/4 md:left-20 sm:left-0 sm:w-full z-40  pb-4 bg-white rounded transform translate-y-14 animation">
        <!-- close按鈕 -->
        <div class="absolute top-2 right-2 p-px text-gray-400 hover:text-red-400 text-lg opacity-50 hover:opacity-100 cursor-pointer" @click="offPopupForm">
            <i class="pe-7s-close pe-lg pe-va"></i>
        </div>
        <!-- 表單 -->
        <div class="pt-2">
            <div v-if="formName =='maintainReason'"><MaintainReason /></div>
            <div v-else-if="formName =='employee'"><Employee /></div>
            <div v-else-if="formName =='machineError'" ><MachineError /></div>
            <div v-else-if="formName =='machineMaintain'"><MachineMaintain /></div>
            <div v-else-if="formName =='productionLine'"><LineAdd /></div>
            <div v-else-if="formName =='productionEdit'"><LineEdit /></div>
            <div v-else-if="formName =='productEdit'"><ProductEdit /></div>
            <div v-else-if="formName =='productAdd'"><ProductAdd /></div>
            <div v-else-if="formName =='productAddEdit'"><ProductAddEdit /></div>
            <div v-else-if="formName =='processAdd'"><ProcessAdd /></div>
            <div v-else-if="formName =='showPhoto'"><ShowPhoto /></div>
            <div v-else-if="formName =='showVideo'"><ShowVideo /></div>
            <div v-else-if="formName =='showDoc'"><ShowDoc /></div>
            <div v-else-if="formName =='showAll'"><ShowAll /></div>
            <div v-else-if="formName =='fileAdd'"><FileAdd /></div>
            <div v-else>伺服器忙碌中，請稍後再試</div>
        </div>
    </div>
    <!-- 背景顏色 mask -->
    <div class="absolute z-20 top-0 right-0 w-full h-full bg-gray-600 opacity-70"></div>
</template>

<style scoped>
    .animation{
        animation: rotate 0.3s ease-in-out ;
    }
    @keyframes rotate {
        0% {
            transform: translateY(0);
        }
        70%{
            transform: translateY(70px);
        }
        100% {
            transform: translateY(50px);
        }
    }
</style>