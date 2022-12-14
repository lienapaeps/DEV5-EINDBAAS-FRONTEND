<script setup>
import { ref, computed } from 'vue'

import LogIn from '../views/LogIn.vue';
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Configurator from '../views/Configurator.vue'
import OrderOk from '../views/OrderOk.vue'
import ChangePassword from './ChangePassword.vue';

// routing with dynamc components
// https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
const routes = {
    '/': Home,
    '/login': LogIn,
    '/gallery': Gallery,
    '/configurator': Configurator,
    '/orderok': OrderOk,
    '/changepassword': ChangePassword
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
        <label for="toggle">&#8801</label>
        <input type="checkbox" id="toggle" />
        <ul class="nav__menu">
            <li><a href="#/">Home</a></li>
            <li><a href="#/configurator">Configurator</a></li>
            <li><a href="#/gallery">Gallerij</a></li>
            <!-- <a href="#/login">Log in</a> -->
        </ul>
    </nav>
    <component :is="currentView" />
</template>

<style scoped>
nav {
    background-color: var(--strawberry-pink);
    height: 5.5rem;
    width: 100%;
}

.nav__logo img {
    width: 35%;
    top: .5em;
    left: 1em;
    /* position: absolute; */
}

.nav__menu li {
    width: 100%;
    list-style: none;
    padding: 1em 0;
}

.nav__menu a {
    text-decoration: none;
}

label {
    display: block;
    position: absolute;
    top: 1.1em;
    right: 1em;
    font-size: 2em;
    color: white;
    text-align: center;
}

#toggle {
    position: absolute;
    top: 3em;
    right: 0;
    display: none;
}

.nav__menu {
    text-align: center;
    width: 100%;
    background-color: var(--strawberry-pink);
    padding: 2em 0;
    position: absolute;
    top: 4rem;
    left: 0;
    display: none;
}

#toggle:checked~.nav__menu {
    display: block;
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
    .nav__logo img {
        width: 20%;
    }

    label {
        display: none;
    }

    .nav__menu {
        display: flex;
        top: 1rem;
        padding: 0;
        width: 60%;
        margin: 0;
        margin-left: 40%;
    }
}

/* Desktop */
@media (min-width: 992px) {
    .nav__logo {
        width: 60%;
    }

    .nav__menu {
        margin-left: 60%;
        width: 40%;
    }

    .nav__menu a {
        font-size: 1.2em;
    }

    .nav__menu a:hover {
        color: var(--lemon-yellow);
    }
}
</style>
