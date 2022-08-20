<script lang="ts">
import Event from './Event.vue'

export default {
components: {
  Event
}, data(){
    return {
      events: [
        { id: 1, cardTitle: 'Clase gratuita de zumba', date: '23-DIC-22' },
        { id: 2, cardTitle: 'Clase gratuita de yoga', date: '05-SEP-22' },
        { id: 3, cardTitle: 'Caminata grupal por las sierras' , date: '15-MAY-22' },
        { id: 5, cardTitle: 'Sorteo mes de los enamorados', date: '29-ENE-22' }
      ]

    }
  }
}
</script>

<template>
  <div id="novedades" class="px-16 h-[30vh] w-full flex flex-row flex-nowrap justify-between">
    <Event
      v-for="event in events"
      :key="event.id"
      :card-title="event.cardTitle"
      :date="event.date"
    />
  </div>
</template>
