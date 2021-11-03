<script setup>
    const data=new Date()
    const props = defineProps({
        placeholder : String
    })
</script>

<template>
    <v-date-picker v-model="date">
        <template v-slot="{ inputValue, inputEvents }">
            <input
                :value="inputValue"
                v-on="inputEvents"
                class="myInput w-full"
                :placeholder="props.placeholder"
            />
        </template>
    </v-date-picker>
</template>