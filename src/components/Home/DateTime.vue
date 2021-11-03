<template>
    <span>{{dateTime}}</span>   
</template>

<script>
import {ref,onUnmounted} from 'vue'
export default {
    setup(){
        //取得現在時間
        const dateTime = ref()
        function getNow(){
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            dateTime.value = date +' '+ time;
        }
        setInterval(() => {
            getNow()
        }, 1000)     
        onUnmounted(()=>{
            // 在Vue实例销毁前，清除我们的定时器
            clearInterval(getNow())
        }) 
        return{dateTime}
    }
}
</script>