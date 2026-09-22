import { ref } from 'vue'

export type Card = {
    id: number
    text: string
}

export type Column = {
  id: string
  title: string
  cards: Card[]
}

export function useKanban () {
    const columns = ref<Column[]>([
        {
            id: 'pendente',
            title: 'Pendente',
            cards: []
        },
        {
            id: 'trabalhando',
            title: 'Trabalhando',
            cards: []
        },
        {
            id: 'revisao',
            title: 'Revisão',
            cards: []
        },
        {
            id: 'concluido',
            title: 'Concluído',
            cards: []
        }
    ])
    function addCard(columnId: string, text: string) {
        const column = columns.value.find(
            column => column.id === columnId
        )
        if(!column)
            return

        column.cards.push({
            id: Date.now(),
            text
        })
    }
    function removeCard(columnId: string, cardId: number) {
        const column = columns.value.find(
            column => column.id === columnId
        )
        if(!column)
            return

        const cardIndex = column.cards.findIndex(
            card => card.id === cardId
        )

        if(cardIndex === -1)
            return

        column.cards.splice(cardIndex, 1)
    }    
    return{
        columns,
        addCard,
        removeCard
    }
}