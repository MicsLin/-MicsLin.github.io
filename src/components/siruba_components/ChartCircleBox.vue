<script setup>
    const props=defineProps({
        itemState: Array
    }) 
</script>

<template>
    <div v-for="(item,index) in props.itemState" :key="index">
        <div class=" w-6 h-6 rounded-full border bg-gray-400" v-if="item == 0"></div>
        <div class="w-6 h-6 rounded-full border bg-green-500" v-else-if="item == 1"></div>
        <div class="w-6 h-6 rounded-full border bg-yellow-500" v-else-if="item == 2"></div>
        <div class="w-6 h-6 rounded-full border bg-red-500" v-else-if="item == 3"></div>
        <div class="w-6 h-6 rounded-full border bg-gray-400" v-else></div>
    </div>
</template>
