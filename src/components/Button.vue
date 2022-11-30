<script setup>

</script>

<template>
    <a class="btn" href="#">
        <span class="btn__text">Maak Donut</span>
    </a>
    <a class="btn btn--yellow" href="#">
        <span class="btn__text btn__yellow--text">Maak Donut</span>
    </a>
</template>

<style scoped>
    .btn {
        background-color: var(--strawberry-pink);
        border-radius: 1.5rem;
        padding: 1.3rem 2.5rem;
        margin: 1rem;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .btn--yellow {
        background-color: var(--warm-lemon);
    }

    .btn__text {
        color: var(--warm-lemon);
        font-size: 1.15rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    .btn__yellow--text {
        color: var(--strawberry-pink);
    }
</style>
