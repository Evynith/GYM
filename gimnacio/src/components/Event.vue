<script lang="ts">
export default {
  props: ['cardTitle', 'date']
}
</script>

<template>
<div class="flex flex-col aspect-square grow-0 w-2/5 mx-6 p-4">
  <h2 class="text-4xl text-white">{{cardTitle}}</h2>
  <div class="absolute bottom-3 -right-5 bg-yellow-500">
    <div class="text-slate-900 before:absolute before:-inset-1 before:-skew-x-12 before:bg-yellow-500 before:-translate-x-3 m-1 flex flex-row flex-nowrap">
      <p>{{date}}</p>
      <span class="material-symbols-outlined">today</span>
    </div>
  </div>
</div>

</template>

<style scoped>

</style>
