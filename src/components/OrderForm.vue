<script setup>
import Button from '../components/Button.vue'

</script>

<template>

    <div class="form">
        <h2>Bestel hier</h2>
        <form class="form form__order">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required>
            <label for="name">Bedrijfsnaam</label>
            <input type="text" id="name" name="name" placeholder="Naam" required>
        </form>
        <a href="#/orderok"><Button text="Bestel" class="btn btn--strawberry" textclass="btn__text"/></a>
    </div>



</template>


<style scoped>
.form {
    padding-top: 20px;
}

.form__order {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
}

/* Tablet */
@media (min-width: 768px) {
    body {
        margin: 0;
        padding: 0;
    }

}

/* Desktop */
@media (min-width: 992px) {
    body {
        margin: 0;
        padding: 0;
    }

    form {
        width: 20%;
    }
}
</style>