<script setup>
    import { computed } from 'vue';
    const props=defineProps({
        process_percent: Number  
    })
    const process_percent =computed(()=>{
        return props.process_percent
    })

</script>

<template>
    <span v-if="process_percent == 100" class="bg-green-500">{{process_percent}}%</span>
    <span v-else-if="process_percent >= 90" class="bg-green-300">{{process_percent}}%</span>
    <span v-else-if="process_percent >= 80" class="bg-yellow-400">{{process_percent}}%</span>
    <span v-else-if="process_percent >= 70" class=" bg-yellow-300 bg-opacity-70">{{process_percent}}%</span>
    <span v-else-if="process_percent >= 60" class="bg-yellow-400">{{process_percent}}%</span>
    <span v-else-if="process_percent >= 50" class="bg-yellow-700 bg-opacity-60">{{process_percent}}%</span>
    <span v-else class="bg-red-400">{{process_percent}}%</span>
</template>