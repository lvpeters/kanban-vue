<script setup lang="ts">
    import { ref } from 'vue'

    const props = defineProps<{
        id: number
        text: string
    }>()

    const emit = defineEmits<{
        delete: []
        editCard: [cardId: number, text: string]
    }>()
    
    const novoTexto = ref('')

    const editando = ref(false)

    const saveBtn = ref(false)

    function startEdition(){
        editando.value = true
        novoTexto.value = props.text
    }

    function emitEditEvent() {
        emit('editCard', props.id, novoTexto.value.trim())
        editando.value = false
    }
</script>

<template>
    <div class="flex justify-between bg-white/20 rounded-lg p-2 cursor-pointer hover:bg-white/30">
        <h2 v-if="!editando">
            {{ text }}
        </h2>
        <UInput
            v-model="novoTexto"
            v-if="editando"
            placeholder="Digite o nome do cartão..."
            variant="none"
            class="w-full"
        />
        <UDropdownMenu
            v-if="!editando"
            :items="[
                [
                    {
                        label: 'Deletar',
                        icon: 'i-lucide-trash-2',
                        color: 'neutral',
                        class: 'cursor-pointer',
                        onSelect: () => emit('delete')
                    },
                    {
                        label: 'Editar',
                        icon: 'i-lucide-pencil',
                        color: 'neutral',
                        class: 'cursor-pointer',
                        onSelect: () => startEdition()
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
            <UButton
                v-if="novoTexto.trim().length > 0"
                icon="i-lucide-check"
                variant="soft"
                color="success"
                size="sm"
                class="cursor-pointer ml-1 rounded-lg"
                @click="emitEditEvent()"
                />
    </div>
</template>