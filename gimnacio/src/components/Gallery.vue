<script lang="ts">

export default {
data(){
    return {
      images: [
        { id: 1, url: "./src/components/photos/gallery/photo1.png" },
        { id: 2, url: "./src/components/photos/gallery/photo2.png" },
        { id: 3, url: "./src/components/photos/gallery/photo3.png" }
      ]

    }
  }
}
</script>

<template>
  <div class="py-16">
    <div class="px-14 flex flex-row justify-between w-full">
      <h3 class="font-bold text-3xl text-center text-yellow-400">Galería</h3>
      <a href="">Ver más</a>
    </div>
    <div id="galeria" class="px-10 h-full w-full flex flex-row flex-nowrap justify-between items-stretch">
      <img class="w-1/3 aspect-square mx-5 object-cover" v-for="image in images" :key="image.id" :src="image.url"/>
    </div>
  </div>
</template>