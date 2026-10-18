<template>
  <section>
    <form @submit.prevent="subir">
      <label>
        Selecciona imagen
        <input type="file" accept="image/*" @change="onFile" />
      </label>
      <button type="submit" :disabled="!archivo || cargando">
        {{ cargando ? 'Subiendo...' : 'Subir imagen' }}
      </button>
    </form>

    <p v-if="error" style="color: red">{{ error }}</p>

    <figure v-if="url">
      <img :src="url" alt="Imagen subida" style="max-width: 300px" />
      <figcaption>URL: {{ url }}</figcaption>
    </figure>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const archivo = ref(null)
const url = ref('')
const error = ref('')
const cargando = ref(false)

const onFile = (event) => {
  archivo.value = event.target.files?.[0] ?? null
  url.value = ''
  error.value = ''
}

const subir = async () => {
  if (!archivo.value) return
  const formData = new FormData()
  formData.append('imagen', archivo.value)

  cargando.value = true
  error.value = ''

  try {
    const { data } = await axios.post('http://localhost:4000/upload/imagen', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log(data)
    url.value = data.imageUrl || ''
  } catch (err) {
    error.value = err.response?.data?.error || err.message || 'No se pudo subir la imagen'
  } finally {
    cargando.value = false
  }
}
</script>