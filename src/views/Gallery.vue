<script setup>// logica
import Button from '../components/Button.vue'

import { ref, reactive, onMounted } from 'vue'

let donuts = reactive({
    donuts: []
});

// enkel ingelogde gebruiker (donuttello) mag deze pagina bezoeken
function checkLogin() {
    fetch("https://dev5-donuttello.onrender.com/api/v1/donuts", {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => res.json())
        .then(json => {
            // console.log(json.data.donuts);
            donuts.donuts = json.data;

            // console.log(donuts);
        }).catch(err => {
            console.log("Only admin can access this page");
            window.location.href = "#/home";
        })
}

// als card__delete is aangeklikt, dan wordt de card__warning getoond
function showWarning() {
    const button = document.querySelector(".deleted");
    button.addEventListener("click", function () {
        const warning = document.querySelector(".card__warning");
        warning.classList.remove("hidden");
    })
}

function hideWarning() {
    const button = document.querySelector(".btn--strawberry");
    button.addEventListener("click", function () {
        const warning = document.querySelector(".card__warning");
        warning.classList.add("hidden");
    })
}

const changeStatus = () => {
    const select = document.getElementById("status");

    select.addEventListener("change", e => {
        console.log(e.target.value);
        if (select === "opgeslagen") {
            console.log("Opgeslagen");
        } else if (select === "productie") {
            console.log("In productie");
        } else if (select === "klaar") {
            console.log("Klaar");
        }
    })
}

const deleteDonut = (id) => {
    if (localStorage.getItem("token")) {
        fetch("https://dev5-donuttello.onrender.com/api/v1/donuts/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        }).then(res => res.json())
        console.log("Donut verwijderd");
        // succes bericht tonen
        let feedback = document.querySelector(".alert");
        feedback.textContent = "Donut is succesvol verwijderd!";
        feedback.classList.remove("hidden");
        feedback.style.backgroundColor = "#d4edda";
        feedback.style.color = "#2e6a3b";

        // donut met deze id verwijderen uit de array
        // donuts.donuts.donuts.splice(0, 1);

        // ENKEL donut met deze id verwijderen uit de DOM
        // window.location.reload();

        // na 3 seconden verdwijnt het succes bericht
        // setTimeout(() => {
        //     feedback.classList.add("hidden");
        // }, 3000);
    }
}

onMounted(() => {
    checkLogin();
    // showWarning();
    // hideWarning();
    // changeStatus();
});

</script>

<template>
    <h1>De <span class="title__color">Gallerij</span></h1>
    <div class="alert hidden">
        Here is some feedback
    </div>
    <div class="app">
        <div class="card" v-for="donut in donuts.donuts.donuts" :key="donut.id">
            <div class="donut-card">
                <div class="card__warning hidden">
                    <h3>Let op!</h3>
                    <p>Wil je deze donut verwijderen?</p>
                    <Button text="Behouden" class="btn btn--strawberry btn--login" textclass="btn__text" />
                    <Button text="Verwijderen" class="btn btn--yellow btn--login" textclass="btn__text" />
                </div>
                <div class="card__image">
                    <a v-bind:href="'#/details/' + donut._id">
                        <img src="../../imgs/donut-3264616-2731928.webp" alt="Image of created donut">
                    </a>
                </div>
                <div class="card__text">
                    <span class="card__highlight">Donut</span>
                    <h2> {{ donut.nameDonut }}</h2>
                    <h3 class="card__text__company">{{ donut.nameCompany }}</h3>
                    <h3 class="amount">Aantal donuts: {{ donut.donutAmount }}</h3>
                    <h3 class="date">Besteldatum: {{ donut.createdAt }}</h3>
                </div>
                <div class="card__edit">
                    <a href="#/configurator">
                        <img src="../../imgs/pen-to-square-regular.svg" alt="Edit icon">
                    </a>
                </div>
                <div class="card__delete">
                    <button class="deleted" v-on:click="deleteDonut(donut._id)">
                        <img src="../../imgs/trash-regular.svg" alt="Trash icon">
                    </button>
                </div>
                <div class="card__status">
                    <p class="status__text">Status: <b>{{ donut.status }}</b></p>
                    <!-- <form class="card__status__form" action="">
                    <label for="status">Status:</label>
                    <select name="status" id="status" @change="changeStatus()">
                        <option value="opgeslagen" selected>Opgeslagen</option>
                        <option value="productie">In productie</option>
                        <option value="klaar">Klaar</option>
                    </select>
                </form> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* alert */
.alert {
    margin: 3em;
}

.deleted {
    cursor: pointer;
}

h1 {
    margin: 2em 1em 1.5em 1.5em;
}

.title__color {
    color: var(--strawberry-pink);
}

.app {
    margin: 2em;
    position: relative;
    /* z-index: -1; */
}

.amount,
.date {
    font-weight: 500;
}

.card__warning {
    position: absolute;
    background-color: #ffffffd3;
    border-radius: 1em;
    top: 0em;
    left: 0em;
    width: 100%;
    height: 100%;
    text-align: center;
    z-index: 1;
}

.card {
    box-shadow: 4px 4px 9px 4px rgba(17, 17, 17, 0.2);
    margin-bottom: 2.5em;
    border-radius: 1em;
    position: relative;
    padding-bottom: 1em;
}

.card__image {
    background-color: var(--lemon-yellow);
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    padding: 1.6em 0;
    text-align: center;
}

.card img {
    width: 200px;
}

.card__highlight {
    color: var(--strawberry-pink);
    display: block;
    margin-top: 1em;
}

.card__text {
    padding: 1em;
    padding-bottom: .5em;
}

.card__text h2 {
    margin: 0;
    margin-top: .5em;
}

.card__text__company {
    font-weight: 600;
    opacity: .5;
    margin-bottom: 0.5;
}

.deleted {
    background-color: var(--strawberry-pink);
    width: 15%;
    text-align: center;
    position: absolute;
    top: 7em;
    right: 0;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.card__edit {
    background-color: var(--strawberry-pink);
    width: 15%;
    text-align: center;
    position: absolute;
    top: 2em;
    right: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.deleted {
    display: block;
    padding: 1em 0;
}

.card__edit img {
    width: 35%;
}

.card__delete img {
    width: 35%;
}

.card__edit a {
    display: block;
    padding: 1em 0;
}

.card__status {
    padding: 0 1em 1em 1em;
}

.card__status h3 {
    font-weight: 500;
}

.card__status__form {
    display: flex;
    align-items: center;
    gap: 1em;
}

select {
    border-radius: 6px;
    padding: .5em 1em;
    font-size: 1em;
}

/* Tablet */
@media (min-width: 768px) {
    .app {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .card__image {
        padding: 1em 5em;
    }

    .card__status__form {
        display: flex;
        justify-content: flex-start;
        gap: 1.5em;
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

    .card {
        width: 32%;
    }

    .card__delete {
        width: 15%;
    }

    .card__edit {
        width: 15%;
    }

    .card__delete a {
        padding: 1em 0;
    }

    .card__edit a {
        padding: 1em 0;
    }

    .card__delete img {
        width: 25%;
    }

    .card__edit img {
        width: 25%;
    }
}
</style>
