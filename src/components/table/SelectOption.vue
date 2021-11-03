<script setup>
    import {ref, watch} from 'vue'
    const props = defineProps({
        //內建選單的選項
        vfors:Array,
        //伺服器讀取，使用者的設定
        userselect:String
    })
    const selected = ref('')
    watch(selected,()=>{
        // emit 回去
        console.log('我是select',selected.value);
    })
   
</script>

<template>
    <div class="w-full">
        <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" id="inputGroupSelect04" v-model="selected">
            <!-- <option class="hidden" selected>{{userselect}}</option> -->
            <!-- 之後key最好給個名字，以免以後插入數值時，會出錯 -->
            <option v-for="(item,index) in props.vfors" :key="index" :class="'color'+item.value" :selected="props.userselect==item.description">
                {{item.description}}
            </option>
        </select>
    </div>
</template>

<style scoped>
    /* select{
        width: 100%;
        height: 35px;
        color:$colorGray;
        padding: 6px 12px;
        border: 1px solid $colorInput;
        border-radius: 5px;
        &:focus{
            border: 2px solid $colorBlue;
        }
    } */

    /* :class="'color'+item.value"是用在首頁設定的警示顏色選單的背景顏色 */
    .colorred{
        color:white ;
        background-color:red ;
    }
    .coloryellow{
        color:black ;
        background-color:yellow ;
    }
</style>