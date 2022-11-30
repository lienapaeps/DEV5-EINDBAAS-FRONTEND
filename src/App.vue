<script setup>// logica
import LogIn from './views/LogIn.vue';
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'

</script>

<template>
  <div class="app">
    <Nav />
  </div>
  <!-- <LogIn /> -->
  <Gallery />
  <Home />
</template>

<style scoped>
.app {}
</style>
