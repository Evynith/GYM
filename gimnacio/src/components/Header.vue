<script lang="ts">
    import CardDiscipline from "./CardDiscipline.vue";   
    export default {
components: {
    CardDiscipline
},
  data(){
    return {
      cards: [
        { id: 1, cardTitle: 'boxing', photo: '../src/components/photos/boxing.jpg' },
        { id: 2, cardTitle: 'pilates', photo: '../src/components/photos/pilates2.jpg' },
        { id: 3, cardTitle: 'zumba', photo: '../src/components/photos/zumba.jpg' },
        { id: 4, cardTitle: 'yoga', photo: '../src/components/photos/yoga.jpg' },
        { id: 5, cardTitle: 'indoor', photo: '../src/components/photos/indoor.jpg' }
      ]

    }
  }
}
</script>

<template>
    <div class="h-[80vh]">
        <div class="h-1/5">
            <h1>Gimnacio</h1>
            <img alt="Vue logo" src="@/assets/logo.svg" width="25" height="25" />
        </div>
        <div class="h-4/5 flex flex-row flex-nowrap">
            <CardDiscipline 
                v-for="card in cards"
                :key="card.id"
                :card-title="card.cardTitle"
                :photo="card.photo"
            />
        </div>
    </div>
</template>