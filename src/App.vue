<script setup>// logica
import LogIn from './views/LogIn.vue';
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'

</script>

<template>
  <div class="app">
    <Nav />
  </div>
  <!-- <LogIn /> -->

  <Home />
</template>

<style scoped>
.app {
  background-color: var(--strawberry-pink);

}
</style>
