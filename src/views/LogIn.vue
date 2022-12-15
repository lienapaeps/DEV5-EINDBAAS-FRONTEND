<script setup>// logica
import LogInForm from '../components/LogInForm.vue'

</script>

<template>
    <div class="app">
        <LogInForm />
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
        margin-top: 8em;
    }
}

/* Desktop */
@media (min-width: 992px) {
    .app {
        margin-top: 6em;
    }
}
</style>
