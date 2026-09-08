<template>
    <div class="flex min-h-screen flex-col bg-gray-700">
        <div class="p-5">
            <h1 class="flex items-center justify-center text-white font-bold text-xl">Modelo Kanban</h1>
        </div>
        <div class="flex justify-center gap-4 overflow-x-auto p-10 mx-10 bg-gray-800/80 rounded-xl shadow-lg">
            <KanbanColumn title="Pendente"/>
            <KanbanColumn title="Trabalhando"/>
            <KanbanColumn title="Revisão"/>
            <KanbanColumn title="Concluído"/>
        </div>
    </div>
</template>