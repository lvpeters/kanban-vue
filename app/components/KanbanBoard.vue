<script setup lang="ts">
    import { ref } from 'vue'

    const { columns, addCard } = useKanban()

    const openColumnId = ref<string | null>(null)

    function openAddCard (columnId: string) {
        openColumnId.value = columnId
    }

    function handleAddCard(columnId: string, text: string) {
        addCard(columnId, text)
        openColumnId.value = null
}

</script>

<template>
    <div class="flex min-h-screen flex-col bg-gray-800">
        <div class="p-5">
            <h1 class="flex items-center justify-center text-white font-bold text-xl">Modelo Kanban</h1>
        </div>
        <div class="flex flex-1 items-start justify-center gap-6 overflow-x-auto p-10 mx-10 bg-gray-700/60 rounded-xl shadow-xl mb-13">
            <KanbanColumn
                v-for="column in columns"
                :key="column.id"
                :title="column.title"
                :cards="column.cards"
                :show-input="openColumnId === column.id"
                @open-add-card="openAddCard(column.id)"
                @add-card="handleAddCard(column.id, $event)"
            />
        </div>
    </div>
</template>