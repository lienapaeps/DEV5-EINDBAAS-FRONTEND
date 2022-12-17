<script setup>// logica
import { ref, reactive, onMounted } from 'vue'

let donuts = reactive({
    donuts: []
});

// get id from url
let donutId = window.location.pathname.split("/")[2];
// console.log(id);

onMounted(() => {
    if (localStorage.getItem("token")) {
        fetch("https://dev5-donuttello.onrender.com/api/v1/donuts/" + donutId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token"),
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
})

</script>

<template>
    <h1>Donut<span class="highlight">details</span></h1>
    <div class="details" v-for="donut in donuts.donuts" :key="donut.id">
        <!-- <img src="{{ donut.imageUrl }}" alt=" Donut afbeelding"> -->
        <div class="details__donut">
            <h2>Donut gegevens</h2>
            <p>Naam donut: <span>{{ donut.nameDonut }}</span></p>
            <p>Kleur glazuur: <span>{{ donut.icing }}</span></p>
            <p>Keuze topping: <span>{{ donut.topping }}</span></p>
            <p>Logo vorm: <span>{{ donut.logoShape }}</span></p>
            <div class="details__logo">
                <p>Logo:</p>
                <!-- <img src="{{ donut.logo }}" alt="Donut logo afbeelding"> -->
            </div>
            <p>Aantal donuts: <span>{{ donut.donutAmount }}</span></p>
            <p>Bestel datum: <span>{{ donut.createdAt }}</span></p>
            <p>Opmerkingen: <span>{{ donut.remarks }}</span></p>
            <p>Status: <span>{{ donut.status }}</span></p>
        </div>
        <div class="details__order">
            <h2>Bedrijfsgevens</h2>
            <p>Bedrijfsnaam: <span>{{ donut.nameCompany }}</span></p>
            <p>E-mail: <span>{{ donut.email }}</span></p>
            <p>Adres: <span>{{ donut.street }}, {{ donut.streetNumber }}, {{ donut.postalCode }} {{ donut.city }}</span>
            </p>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 700;
    margin: 1em;
    margin-top: 2em;
}

.highlight {
    color: var(--strawberry-pink);
    font-weight: 700;
    padding-left: .3em;
    text-transform: lowercase;
}

.details {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 2em;
    margin: 1em;
    margin-top: 2.5em;
}

.details__donut {
    border-bottom: 1px solid #e0e3e6;
    width: 100%;
    padding-bottom: 1em;
}

.details__order {
    padding-top: 1em;
}

p {
    font-weight: 600;
}

span {
    text-transform: capitalize;
    font-weight: 500;
    padding-left: .5em;
}

/* Tablet */
@media (min-width: 768px) {}

/* Desktop */
@media (min-width: 992px) {
    h1 {
        margin-left: 1.5em;
    }

    .details {
        text-align: center;
    }

    .details {
        padding: 2em;
        margin: 3em;
        margin-top: 2.5em;
    }
}
</style>
