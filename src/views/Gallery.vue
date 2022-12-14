<script setup>// logica

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

onMounted(() => {
    checkLogin();
});

</script>

<template>
    <h1>De <span class="title__color">Gallerij</span></h1>
    <div class="app">
        <div class="card" v-for="donut in donuts.donuts.donuts" :key="donut.id">
            <div class="card__image">
                <img src="../../imgs/donut-3264616-2731928.webp" alt="Image of created donut">
            </div>
            <div class="card__text">
                <span class="card__highlight">Donut</span>
                <h2> {{ donut.nameDonut }}</h2>
                <h3 class="card__text__company">{{ donut.nameCompany }}</h3>
                <h3 class="aantal">Aantal donuts: {{ donut.donutAmount }}</h3>
            </div>
            <div class="card__delete">
                <a href="">
                    <img src="../../imgs/trash-regular.svg" alt="Trash icon">
                </a>
            </div>
            <div class="card__status">
                <form class="card__status__form" action="">
                    <label for="status">Status:</label>
                    <select name="status" id="status">
                        <option value="opgeslagen">Opgeslagen</option>
                        <option value="productie">In productie</option>
                        <option value="klaar">Klaar</option>
                    </select>
                </form>
            </div>
        </div>
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
    /* z-index: -1; */
}

.aantal {
    font-weight: 500;
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

.card__delete {
    background-color: var(--strawberry-pink);
    width: 20%;
    text-align: center;
    position: absolute;
    top: 2em;
    right: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.card__delete a {
    display: block;
    padding: 1em 0;
}

.card__delete img {
    width: 35%;
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

    .card__delete a {
        padding: 1em 0;
    }

    .card__delete img {
        width: 25%;
    }
}
</style>
