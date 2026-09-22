<script setup lang="ts">
    import type { Card } from '~/composables/useKanban';
    import draggable from 'vuedraggable'

    defineProps<{
        title: string
        cards: Card[]
        showInput: boolean
    }>()

    const emit = defineEmits<{
        addCard: [text: string]
        openAddCard: []
        deleteCard: [cardId: number]
    }>()

    function handleAddCard(text: string) {
        emit('addCard', text)
    }

    function handleOpenAddCard() {
        emit('openAddCard')
    }

    function handleDeleteCard (cardId: number) {
        emit('deleteCard', cardId)
    }
</script>

<template>
    <div class="w-[500px] min-w-[280px] max-w-[500px] bg-black rounded-xl">
        <div class="p-3">
            <div class="text-white text-sm font-semibold m-1 mb-3">
                <h2 class="text-lg font-bold text-white">
                   {{ title }}
                </h2>
            </div>

            <draggable
                :list="cards"
                group="kanban"
                item-key="id"
                animation="200"
                ghost-class="opacity-50"
                class="min-h-full"
            >
                <template #item="{ element }">
                    <KanbanCard 
                        :id="element.id"
                        :text="element.text"
                        class="my-2"
                        @delete="handleDeleteCard(element.id)"
                    />
                </template>
            </draggable>

            <div class="mt-3">
                <KanbanAddCard
                    :show-input="showInput"
                    @open="handleOpenAddCard" 
                    @add="handleAddCard"
                />
            </div>
        </div>
    </div>
</template>