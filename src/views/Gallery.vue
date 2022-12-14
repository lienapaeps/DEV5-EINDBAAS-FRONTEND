<script setup>// logica
import DonutCard from '../components/DonutCard.vue';

import { ref, onMounted } from 'vue'

// let donuts = ref([]);

// enkel ingelogde gebruiker (donuttello) mag deze pagina bezoeken
function checkLogin() {
    fetch("https://dev5-donuttello.onrender.com/api/v1/donuts", {
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => res.json())
        .then(json => {
            console.log(json);
        }).catch(err => {
            console.log("Only admin can access this page");
            window.location.href = "#/home";
        })
}

onMounted(() => {
    checkLogin();
});

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
