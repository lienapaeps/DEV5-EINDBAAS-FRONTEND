<script setup>
import ShoppingButton from '../components/ShoppingButton.vue'
</script>

<template>
    <div class="card">
        <div class="card__image">
            <img src="../../imgs/donut-3264616-2731928.webp" alt="Image of created donut">
        </div>
        <div class="card__text">
            <span class="card__highlight">Donut</span>
            <h2>Donut naam</h2>
        </div>
        <div class="card__button">
            <ShoppingButton />
        </div>
    </div>
</template>

<style scoped>
.card {
    box-shadow: 4px 4px 9px 4px rgba(17, 17, 17, 0.2);
    margin-bottom: 2.5em;
    border-radius: 1em;
    position: relative;
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

.card__button {
    text-align: right;
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
    padding-bottom: 3em;
}

.card__button {
    position: absolute;
    bottom: 2em;
    right: 0;
}

/* Tablet */
@media (min-width: 768px) {
    .card__image {
        padding: 1em 5em;
    }
}

/* Desktop */
@media (min-width: 992px) {
    .card {
        width: 32%;
    }
}
</style>
