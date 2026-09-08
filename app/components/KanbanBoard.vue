<template>
    <div class="flex min-h-screen flex-col bg-gray-800">
        <div class="p-5">
            <h1 class="flex items-center justify-center text-white font-bold text-xl">Modelo Kanban</h1>
        </div>
        <div class="flex flex-1 items-start justify-center gap-6 overflow-x-auto p-10 mx-10 bg-gray-700/60 rounded-xl shadow-xl mb-13">
            <KanbanColumn title="Pendente"/>
            <KanbanColumn title="Trabalhando"/>
            <KanbanColumn title="Revisão"/>
            <KanbanColumn title="Concluído"/>
        </div>
    </div>
</template>