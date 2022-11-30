<script setup>
import { ref, computed } from 'vue'

import LogIn from '../views/LogIn.vue';
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Configurator from '../views/Configurator.vue'

// routing with dynamc components
// https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
const routes = {
    '/': Home,
    '/login': LogIn,
    '/gallery': Gallery,
    '/configurator': Configurator,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
})

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || Home
})
</script>

<template>
    <nav>
        <div class="nav__logo">
            <img src="../../imgs/donuttello-logo.png" alt="Logo">
        </div>
        <div class="nav__menu">
            <a href="#/">Home</a>
            <a href="#/configurator">Configurator</a>
            <a href="#/gallery">Gallerij</a>
            <a href="#/login">Log in</a>
        </div>
        <component :is="currentView" />
    </nav>
</template>

<style scoped>
nav {
    background-color: var(--strawberry-pink);
    height: 5.5rem;
    width: 100vw;
}

.nav__logo {
    max-width: 100%;
    width: 40%;
}

.nav__menu {
    display: flex;
    justify-content: space-around;
    padding: 1em;
    background-color: red;
}

.nav__menu a {
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
}

/* Tablet */
@media (min-width: 768px) {
    .nav__logo {
        max-width: 100%;
        margin-left: 2em;
    }

    .nav__menu {
        background-color: var(--strawberry-pink);
        position: absolute;
        top: 1em;
        right: 0;
        width: 60%;
    }
}

/* Desktop */
@media (min-width: 992px) {
    .nav__logo {
        max-width: 100%;
        margin-left: 2em;
    }

    .nav__menu a {
        font-size: 1.2em;
    }
}
</style>
