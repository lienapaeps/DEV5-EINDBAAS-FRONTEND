<script setup>
import { onMounted } from 'vue';
import Button from './Button.vue'

// functie dat checkt of er maar 1 checkbox is aangeduid
function check(input) {

    var checkboxes = document.getElementsByClassName("radioCheck");

    for (var i = 0; i < checkboxes.length; i++) {
        //uncheck all
        if (checkboxes[i].checked == true) {
            checkboxes[i].checked = false;
        }
    }

    //set checked of clicked object
    if (input.checked == true) {
        input.checked = false;
    }
    else {
        input.checked = true;
    }
}

// als card__delete is aangeklikt, dan wordt de card__warning getoond
function showWarning() {

    const button = document.querySelector(".deleted");

    button.addEventListener("click", function (){
        const warning = document.querySelector(".card__warning");
        warning.classList.remove("hidden");
    })
}

function hideWarning() {

    const button = document.querySelector(".btn--strawberry");

    button.addEventListener("click", function (){
        const warning = document.querySelector(".card__warning");
        warning.classList.add("hidden");
    })
}

onMounted(() => {
        showWarning();
        hideWarning();
})



</script>

<template>
    <div class="card">
        <div class="card__warning hidden">
            <h3>Let op!</h3>
            <p>Wil je deze donut verwijderen?</p>
            <Button text="Behouden" class="btn btn--strawberry btn--login" textclass="btn__text" />
            <Button text="Verwijderen" class="btn btn--yellow btn--login" textclass="btn__text" />
        </div>
        <div class="card__image">
            <img src="../../imgs/donut-3264616-2731928.webp" alt="Image of created donut">
        </div>
        <div class="card__text">
            <span class="card__highlight">Donut</span>
            <h2>Donut naam</h2>
            <h3 class="card__text__company">Bedrijf</h3>
            <h3 class="aantal">Aantal donuts: 10</h3>
        </div>
        <div class="card__edit">
            <a href="#/configurator">
                <img src="../../imgs/pen-to-square-regular.svg" alt="Edit icon">
            </a>
        </div>
        <div class="card__delete">
            <button class="deleted">
                <img src="../../imgs/trash-regular.svg" alt="Trash icon">
            </button>
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
</template>

<style scoped>
.aantal {
    font-weight: 500;
}

/* .hidden {
    display: none;
} */

.card__warning{
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
    width: 20%;
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

.card__edit img{
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

    .card__edit img{
        width: 25%;
    }
}
</style>
