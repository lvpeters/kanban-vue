<script setup lang="ts">
    import { ref } from 'vue'
    
    const text = ref('')

    defineProps<{
      showInput: boolean
    }>()

    const emit = defineEmits<{
        add: [text: string]
        open: []
    }>()

    function addCard () {
        if(!text.value.trim())
            return
        emit('add', text.value)
        text.value = ''
    }

</script>

<template>
  <div class="flex flex-col gap-2">

    <template v-if="showInput">
      <UInput
        v-model="text"
        placeholder="Digite o nome do cartão..."
        variant="none"
        class="w-full py-1 rounded-md bg-white/10 focus-within:bg-white/15 
        focus-within:ring-2 focus-within:ring-white/30"
      />

      <UButton
        icon="i-lucide-plus"
        class="w-full cursor-pointer bg-black py-2 text-white hover:bg-white/10 active:bg-white/20"
        label="Adicionar"
        @click="addCard()"
      />
    </template>
 
    <template v-if="!showInput">
      <UButton
        icon="i-lucide-plus"
        class="w-full cursor-pointer bg-black py-2 text-white hover:bg-white/10 active:bg-white/20"
        label="Adicionar um cartão"
        @click="emit('open')"
      />
    </template>

  </div>
</template>