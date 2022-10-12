<script lang="ts">
export default {
  props: ['cardTitle', 'photo']
}
</script>

<template>
  <div class="w-1/5 h-full relative">
      <div class="object-contain h-full opacity-60 bg-black">
        <img v-bind:src="photo" 
            alt=""
            class="object-cover h-full"
        >
      </div>
      <div class="z-0 absolute top-0 h-full w-full p-4">
        <div class="z-10 opacity-100 relative w-full h-full border border-2 border-yellow-400">
          <p class="z-20 opacity-100 absolute inset-x-0 bottom-0 font-bold uppercase text-xl text-center text-yellow-400">{{cardTitle}}</p>
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>
