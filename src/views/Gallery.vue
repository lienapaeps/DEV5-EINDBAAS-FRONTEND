<script setup>// logica
import DonutCard from '../components/DonutCard.vue';
</script>

<template>
    <h1>De <span class="title__color">Gallerij</span></h1>
    <div class="app">
        <DonutCard />
        <DonutCard />
        <DonutCard />
        <DonutCard />
    </div>
</template>

<style scoped>
h1 {
    margin: 2em 1em 1.5em 1.5em;
}

.title__color {
    color: var(--strawberry-pink);
}

.app {
    margin: 2em;
    position: relative;
    z-index: -1;
}

/* Tablet */
@media (min-width: 768px) {
    .app {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}

/* Desktop */
@media (min-width: 992px) {
    h1 {
        margin-left: 1.5em;
        font-size: 2em;
    }

    .app {
        margin: 3em;
    }
}
</style>
