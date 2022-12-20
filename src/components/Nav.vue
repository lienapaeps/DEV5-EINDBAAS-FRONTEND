<script setup>
import { onMounted } from 'vue'
import router from '../router/router';

const logOut = () => {
    localStorage.removeItem("token");
    router.push('/')
    window.location.reload()
}

const loggedIn = () => {
    if (localStorage.getItem("token") === null) {
        return false;
    } else {
        return true;
    }
}

onMounted(() => {
    loggedIn();
})

</script>

<template>
    <nav>
        <div class="nav__logo">
            <router-link exact to="/"><img src="../../imgs/donuttello-logo.png" alt="logo"></router-link>
        </div>
        <label for="toggle">&#8801</label>
        <input type="checkbox" id="toggle" />
        <div class="nav__menu">
            <!-- if user logged in  -->
            <template v-if="loggedIn()">
                <router-link exact to="/gallerij">Gallerij</router-link>
                <router-link exact to="/instellingen">Instellingen</router-link>
                <router-link @click="logOut()" exact to="/">Uitloggen</router-link>
            </template>
            <!-- if user not logged in  -->
            <template v-else>
                <router-link exact to="/">Home</router-link>
                <router-link exact to="/configurator">Configurator</router-link>
                <router-link exact to="/admin">Inloggen</router-link>
            </template>
        </div>
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
}

.nav__menu li {
    width: 30%;
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
    margin: 0 1em;
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
        top: 2rem;
        padding: 0;
        margin-left: 45%;
    }
}

/* Desktop */
@media (min-width: 992px) {
    .nav__logo {
        margin-left: 8em;
        padding-top: 1em;
    }

    .nav__logo img {
        width: 10%;
    }

    .nav__menu {
        margin-left: 70%;
    }

    .nav__menu a {
        font-size: 1.2em;
    }

    .nav__menu a:hover {
        color: var(--lemon-yellow);
    }
}
</style>
