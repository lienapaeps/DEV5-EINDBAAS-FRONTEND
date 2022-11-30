<script setup>// logica
import Form from '../components/Form.vue'
</script>

<template>
    <div class="app">
        <h1>Admin log in</h1>
        <Form />
    </div>
</template>

<style scoped>
h1 {
    margin-top: 2em;
}

.app {
    margin: 2em;
    margin-top: 6em;
}

/* Tablet */
@media (min-width: 768px) {
    .app {
        width: 60%;
        margin: 0 auto;
        margin-top: 10em;
    }
}

/* Desktop */
@media (min-width: 992px) {
    .app {
        margin-top: 8em;
    }
}
</style>
