<script setup>// logica
import { ref, reactive, onMounted } from 'vue'

let donuts = reactive({
    donuts: []
});

let path = window.location.pathname;
console.log(path);

let segments = path.split('/');
console.log(segments);

</script>

<template>
    <div class="app">
        Donut details
    </div>
</template>

<style scoped>
.app {
    background-color: red;
}
</style>
