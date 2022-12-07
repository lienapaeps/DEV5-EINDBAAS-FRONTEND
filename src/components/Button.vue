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
        min-width: 7rem;
        text-align: center;
    }

    .shoppingcart {
        background-color: var(--strawberry-pink);
        border-radius: 1.5rem;
        padding: 1.3rem 2.5rem;
        margin: 1rem;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
        text-transform: uppercase;
        color: var(--warm-lemon);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='14' viewBox='0 0 16 14' fill='none'%3E%3Cpath d='M13.8391 8.15068L15.0701 2.86943C15.159 2.48811 14.8617 2.125 14.4607 2.125H4.23198L3.99328 0.987246C3.9338 0.703658 3.67786 0.5 3.38096 0.5H0.710937C0.365755 0.5 0.0859375 0.772822 0.0859375 1.10938V1.51562C0.0859375 1.85218 0.365755 2.125 0.710937 2.125H2.53081L4.36018 10.845C3.92253 11.0904 3.6276 11.5506 3.6276 12.0781C3.6276 12.8634 4.28052 13.5 5.08594 13.5C5.89135 13.5 6.54427 12.8634 6.54427 12.0781C6.54427 11.6802 6.37638 11.3206 6.10615 11.0625H11.5657C11.2955 11.3206 11.1276 11.6802 11.1276 12.0781C11.1276 12.8634 11.7805 13.5 12.5859 13.5C13.3914 13.5 14.0443 12.8634 14.0443 12.0781C14.0443 11.5152 13.7086 11.0287 13.2219 10.7983L13.3656 10.1819C13.4545 9.80061 13.1572 9.4375 12.7561 9.4375H5.76607L5.59563 8.625H13.2296C13.5214 8.625 13.7744 8.42812 13.8391 8.15068Z' fill='%23F7E200'/%3E%3C/svg%3E");        
        background-repeat: no-repeat;
        background-position: center;
        background-size: 35%;
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