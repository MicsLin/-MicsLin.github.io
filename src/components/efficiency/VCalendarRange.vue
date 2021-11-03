<script setup>
    import {ref} from 'vue'
    const range =ref({
        start: "",
        end: ""
    })
</script>
<template>
    <v-date-picker v-model="range" is-range>
        <template v-slot="{ inputValue, inputEvents }">
            <div class="flex">
                <div class="calendarInputGroup relative">
                    <small class="absolute -top-5 left-3">開始日期</small>
                    <input
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                        placeholder="年 / 月 / 日"
                        class="w-full pl-3 py-1 border-2  rounded  focus:outline-none focus:border-blue-basic"
                    />
                    <span class="absolute right-1 bottom-1.5">
                        <i class="pe-7s-date pe-lg pe-va"></i>
                    </span>
                </div>
                <div class="flex items-center justify-center">
                    <svg
                        class="w-4 h-4 mx-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#30a5ff"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </div>
                
                <div class="calendarInputGroup relative">
                    <small class="absolute -top-5 left-3">結束日期</small>
                    <input
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                        placeholder="年 / 月 / 日"
                        class="w-full pl-3 py-1 border-2  rounded  focus:outline-none focus:border-blue-basic"
                    />  
                    <span class="absolute right-1 bottom-1.5">
                        <i class="pe-7s-date pe-lg pe-va"></i>
                    </span>
                </div>
                
            </div>
        </template>
    </v-date-picker>
</template>


<!-- 
<style lang="scss" scoped>
    
    .calendarInputGroup{
        width: 300px;
        height: 32px;
        color: $colorBreadCrumbGray;
        position: relative;
        
        small{
            position: absolute;
            top: -20px;
            left: 8px;
        }
        input{
            color: $colorDropDownLink;
            font-size: $fontSize14;
            width: 100%;
            &:focus{
                border: 2px solid $colorBlue;
            }
        }
        i{
            font-size: 28px;
            position: absolute;
            top: 5px;
            right: 8px;
        }
    }
</style> -->