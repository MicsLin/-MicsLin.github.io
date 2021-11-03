<template>
    <h2>我是機器狀況表 MachineStatusLine</h2>
    <button @click="backMachineStatus">返回</button>
</template>

<script>
export default {
    name:'MachineStatusLine',
    data(){
        return{
            showing:false
        }
    },
    methods:{
        backMachineStatus(){
            this.$emit('showing',this.showing)
        }
    }
}
</script>