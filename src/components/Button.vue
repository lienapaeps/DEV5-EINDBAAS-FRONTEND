<script setup>
    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: true
        },
        textclass : {
            type: String,
            required: true
        }
    })
</script>

<template>
    <a :class="props.class" :type="props.type">{{ props.text }}</a>
    <!-- <a class="btn" href="#">
        <span class="btn__text">Maak Donut</span>
    </a>
    <a class="btn btn--yellow" href="#">
        <span class="btn__text btn__yellow--text">Maak Donut</span>
    </a>² -->
    <!-- <a class="btn btn--shopping" href="#">
        <img class="btn__shoppingcart" src="../../imgs/shoppingcart.png" alt="Shopping cart">
    </a> -->
</template>

<style scoped>
    .btn--yellow {
        border-radius: 1.5rem;
        padding: 1.3rem 2.5rem;
        margin: 1rem;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
        background-color: var(--warm-lemon);
        color: var(--strawberry-pink);
        text-transform: uppercase;
    }

    .btn--strawberry {
        background-color: var(--strawberry-pink);
        border-radius: 1.5rem;
        padding: 1.3rem 2.5rem;
        margin: 1rem;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
        text-transform: uppercase;
        color: var(--warm-lemon);
    }
</style>