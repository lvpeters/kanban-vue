<script setup lang="ts">
    defineProps<{
        id: number
        text: string
    }>()

    const emit = defineEmits<{
        delete: []
    }>()
</script>

<template>
    <div class="flex justify-between bg-white/20 rounded-lg p-2 cursor-pointer hover:bg-white/30">
        <h2>
            {{ text }}
        </h2>
        <UDropdownMenu
            :items="[
                [
                    {
                        label: 'Deletar',
                        icon: 'i-lucide-trash-2',
                        color: 'neutral',
                        class: 'cursor-pointer',
                        onSelect: () => emit('delete')
                    }
                ]
            ]"
        >
            <UButton 
                icon="i-lucide-ellipsis"
                variant="ghost"
                color="neutral"
                size="sm"
                class="cursor-pointer"
                />
        </UDropdownMenu>
    </div>
</template>