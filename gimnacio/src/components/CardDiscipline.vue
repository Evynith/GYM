<script lang="ts">
export default {
  props: ['cardTitle', 'photo']
}
</script>

<template>
  <div class="w-1/5 h-full relative">
      <div class="object-contain h-full">
        <img v-bind:src="photo" 
            alt=""
            class="object-cover h-full"
        >
      </div>
      <div class="absolute top-0 h-full w-full p-4">
        <div class="relative w-full h-full border border-yellow-400">
          <p class="absolute inset-x-0 bottom-0 text-center text-yellow-400">{{cardTitle}}</p>
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>
