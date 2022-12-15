<script setup>// logica
import { ref, reactive, onMounted } from 'vue'

let donuts = reactive({
    donuts: []
});

let id = window.location.pathname.split("/")[2];

console.log(id);

onMounted(() => {
    if (localStorage.getItem("token")) {
        fetch("https://dev5-donuttello.onrender.com/api/v1/donuts/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token"),
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                donuts.donuts = json.data;
            })
    }
})

</script>

<template>
    <div class="donut-details" v-for="donut in donuts.donuts">
        <h1>Donut details</h1>
        <p>{{ donut.nameDonut }}</p>
        <p>{{ donut.nameCompany }}</p>
        <p>{{ donut.donutAmount }}</p>
        <p>{{ donut.createdAt }}</p>
        <p>{{ donut.status }}</p>
    </div>
</template>

<style scoped>

</style>
