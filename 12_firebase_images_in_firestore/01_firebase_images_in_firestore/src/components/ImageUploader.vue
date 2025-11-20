<script setup>
import { ref } from 'vue'

const imageBase64 = ref(null)

const handleFile = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
        imageBase64.value = reader.result   // aqui esta la magia
    }

  reader.readAsDataURL(file) // convierte a Base64 automaticamente
}

import { saveImageBase64 } from '../services/imagesService'

const savedId = ref(null)

const save = async () => {
    if (!imageBase64.value) return
    const id = await saveImageBase64(imageBase64.value)
    savedId.value = id
    alert(`Imagen guardada en Firestore con id: ${id}`)
}

</script>

<template>
    <div>
        <h3>Subir imagen como Base64</h3>

        <input type="file" accept="image/*" @change="handleFile" />

        <div v-if="imageBase64" style="margin-top: 1rem;">
        <h4>Vista previa:</h4>
        <img :src="imageBase64" style="max-width: 200px; border:1px solid #ccc;" />

        <h4>Cadena Base64:</h4>
        <textarea style="width:100%; height:150px;">{{ imageBase64 }}</textarea>
        </div>
    </div>
     <div>
        <button @click="save" :disabled="!imageBase64">Guardar en Firestore</button>
        <p v-if="savedId">ID guardado: {{ savedId }}</p>
    </div>
</template>