<template>
  <section>
    <h2>Contador (Options API)</h2>
    <p>Valor actual: {{ count }}</p>
    <p>Doble: {{ doubled }}</p>
    <button @click="increment">Sumar 1</button>
    <button @click="incrementBy(5)">Sumar 5</button>
  </section>
</template>

<script>
export default {
  name: 'ContadorOptions',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    doubled() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    },
    incrementBy(value) {
      this.count += value
    }
  }
}
</script>