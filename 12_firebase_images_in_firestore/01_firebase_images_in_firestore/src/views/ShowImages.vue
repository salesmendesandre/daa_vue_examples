<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { listenImages, getImageById } from '../services/imagesService'

const images = ref([])
const imageById = ref(null)

onMounted(() => {
  const unsubscribe = listenImages((docs) => {
    images.value = docs
  })
  onUnmounted(unsubscribe)
})

const loadOne = async (id) => {
  imageById.value = await getImageById(id)
}
</script>

<template>
  <div>
    <h3>Imagenes guardadas</h3>
    <div v-for="img in images" :key="img.id" style="margin-bottom: 1rem;">
      <img :src="img.image" style="max-width: 150px;" />
      <button @click="loadOne(img.id)" style="display:block;">Ver detalle</button>
    </div>
    <div v-if="imageById">
      <h4>Detalle (por id)</h4>
      <p>ID: {{ imageById.id }}</p>
      <img :src="imageById.image" style="max-width: 150px;" />
    </div>
  </div>
</template>