<script setup lang="ts">
    defineProps<{
        title: string
    }>()
</script>

<template>
    <div class="w-[500px] min-w-[280px] max-w-[500px] bg-black rounded-xl">
        <div class="p-3">

            <!-- Header -->
            <div class="text-white text-sm font-semibold m-1 mb-3">
                <h2 class="text-lg font-bold text-white">
                   {{ title }}
                </h2>
            </div>

            <!-- body -->
            <div class="bg-white/20 rounded-lg p-2 cursor-pointer hover:bg-gray-800">
                <KanbanCard text="teste"/>
            </div>

            <!-- Bottom -->
            <div class="mt-3">
                <KanbanAddCard />
            </div>
        </div>
    </div>
</template>