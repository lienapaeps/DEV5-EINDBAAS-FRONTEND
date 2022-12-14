<script setup>
import Button from '../components/Button.vue'

</script>

<template>

    <div class="form">
        <h2>Bestel hier</h2>
        <form class="form__order">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required>
            <label for="companyName">Bedrijfsnaam</label>
            <input type="text" id="companyName" name="companyName" placeholder="Bedrijfsnaam" required>
            <label for="donutAmount">Aantal donuts</label>
            <input style="width: 3rem" type="number" id="donutAmount" name="donutAmount" placeholder="20" required>
        </form>
        <Button text="Bestel" class="btn btn--strawberry btn--order" textclass="btn__text" />
    </div>
</template>


<style scoped>
.form {
    margin: 3rem 0;
    min-width: 50%;
    padding: 2rem 3rem;
    background: rgba(250, 232, 243, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 10px;
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
}
</style>