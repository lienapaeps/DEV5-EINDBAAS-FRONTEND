<script setup>// logica
import { ref, reactive, onMounted } from 'vue'

let donuts = reactive({
    donuts: []
});

// get id from url
let donutId = window.location.pathname.split("/")[2];
// console.log(id);

onMounted(() => {
    fetch("https://dev5-donuttello.onrender.com/api/v1/donuts/" + donutId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: 'cors',
    })
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            // console.log(json.data);
            donuts.donuts = json.data.donut;
        })
}
)

</script>

<template>
    <h1>Jouw <span class="higlight">donut</span></h1>
    <div class="share" v-for="donut in donuts.donuts" :key="donut.id">
        <img class="donut__img" :src="donut.imageUrl" alt="Donut afbeelding">
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.higlight {
    color: var(--strawberry-pink);
}

.donut__img {
    width: 200%;
    height: 200%;
    margin-left: -45%;
}

/* Tablet */
@media (min-width: 768px) {}

/* Desktop */
@media (min-width: 992px) {
    .donut__img {
        width: 60%;
        height: 60%;
        margin-left: 20%;
    }
}
</style>
