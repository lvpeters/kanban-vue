<script setup lang="ts">
    defineProps<{
        text: string
    }>()
</script>

<template>
    <div>
        <h2>
            {{ text }}
        </h2>
    </div>
</template>