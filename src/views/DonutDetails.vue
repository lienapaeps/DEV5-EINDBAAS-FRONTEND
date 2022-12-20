<script setup>// logica
import { ref, reactive, onMounted } from 'vue'

let donuts = reactive({
    donuts: []
});

// get id from url
let donutId = window.location.pathname.split("/")[2];
// console.log(id);

// update status from donut when button is clicked
const updateStatus = (status) => {
    if (localStorage.getItem("token")) {
        fetch('https://dev5-donuttello.onrender.com/api/v1/donuts/' + donutId, {
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            'body': JSON.stringify({
                status: status
            })
        }).then(res => res.json())
        console.log("Status is aangepast");
    }
}

onMounted(() => {
    if (localStorage.getItem("token")) {
        fetch("https://dev5-donuttello.onrender.com/api/v1/donuts/" + donutId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                // console.log(json.data);
                donuts.donuts = json.data.donut;
            })
    }
});



</script>

<template>
    <h1>Donut<span class="highlight">details</span></h1>
    <div class="details" v-for="donut in donuts.donuts" :key="donut.id">
        <img class="donut__img" :src="donut.imageUrl" alt="Donut afbeelding">
        <div class="details__donut">
            <h2>Donut gegevens</h2>
            <p>Naam donut: <span>{{ donut.nameDonut }}</span></p>
            <p>Kleur glazuur: <span>{{ donut.icing }}</span></p>
            <p>Keuze topping: <span>{{ donut.topping }}</span></p>
            <p>Logo vorm: <span>{{ donut.logoShape }}</span></p>
            <div class="details__logo">
                <p>Logo:</p>
                <img class="logo__img" :src="donut.logo" alt="Donut logo afbeelding">
            </div>
            <p>Aantal donuts: <span>{{ donut.donutAmount }}</span></p>
            <p>Bestel datum: <span>{{ donut.createdAt }}</span></p>
            <p>Opmerkingen: <span>{{ donut.remarks }}</span></p>
            <p>Status: <span>{{ donut.status }}</span></p>
            <h3>Status wijzigen</h3>
            <div class="status__options">
                <button v-on:click="updateStatus('Opgeslagen')" class="btn--status">Opgeslagen</button>
                <button v-on:click="updateStatus('In productie')" class="btn--status">In productie</button>
                <button v-on:click="updateStatus('Klaar')" class="btn--status">Klaar</button>
            </div>
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
    border: 2px solid #dee2e6;
    border-radius: 8px;
    padding: 2em;
    margin: 1em;
    margin-top: 2.5em;
}

.details__donut {
    border-bottom: 2px solid #e0e3e6;
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

.donut__img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: 45% 20%;
}

.logo__img {
    max-width: 100%;
}

h3 {
    font-weight: 500;
    margin-top: 1em;
}

.status__options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5em;
    margin-top: 1em;
}

.btn--status {
    padding: 1em;
    border: 1px solid #dee2e6;
    border-radius: 8px;
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

    .donut__img {
        width: 30%;
        height: 400px;
        object-fit: cover;
        object-position: 45% 20%;
    }

    .logo__img {
        max-width: 20%;
    }

    .status__options {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1.5em;
    }

    .status__options button {
        cursor: pointer;
    }

    .status__options button:hover {
        background-color: var(--strawberry-pink);
        color: var(--lemon-yellow)
    }
}
</style>
