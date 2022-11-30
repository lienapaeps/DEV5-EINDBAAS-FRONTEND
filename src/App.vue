<script setup>// logica
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'

</script>

<template>
  <div class="app">
    <Nav />
  </div>

  <Home />
</template>

<style scoped>

.app {
  background-color: var(--strawberry-pink);

}

.container{
  margin-left: 2em;
  margin-right: 2em;
}
</style>
