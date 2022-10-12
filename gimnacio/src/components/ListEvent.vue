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

<!-- En celular se vean 2 y 2 eventos -->

<template>
  <div class="px-14 flex flex-row justify-between w-full">
    <h3 class="font-bold text-3xl text-center text-yellow-400">Novedades</h3>
    <a href="">Ver más</a>
  </div>
  <div id="novedades" class="px-8 h-full w-full flex flex-row flex-nowrap justify-between items-stretch">
    <Event
      v-for="(e, i) in events"
      :key="e.id"
      :card-title="e.cardTitle"
      :date="e.date"
      :class="i % 2 == 0 ? 'bg-gradient-to-tr from-slate-900 to-violet-900' : 'bg-gradient-to-br from-blue-500 to-slate-900'"
    />
  </div>
</template>
