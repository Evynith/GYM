<script lang="ts">
export default {
  props: ['cardTitle', 'date']
}
</script>

<template>
<div class="aspect-square w-full h-full m-6 p-4">
  <h2 class="text-4xl">{{cardTitle}}</h2>
  <div class="flex flex-row flex-nowrap">
    <p>{{date}}</p>
    <span class="material-symbols-outlined">today</span>
  </div>
</div>

</template>

<style scoped>
*{
  background-color: blueviolet;
}
</style>
