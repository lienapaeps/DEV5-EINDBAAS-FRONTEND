<script setup>
import Button from '../components/Button.vue'

</script>

<template>

    <div class="form">
        <h2>Bestel hier</h2>
        <form class="form__order">
            <label for="nameDonut">Donut naam</label>
            <input type="text" id="nameDonut" name="nameDonut" placeholder="Donut naam" required>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required>
            <label for="companyName">Bedrijfsnaam</label>
            <input type="text" id="companyName" name="companyName" placeholder="Bedrijfsnaam" required>
            <div class="form__order__group">
                <div>
                    <label for="street">Straat</label>
                    <input type="text" id="street" name="street" placeholder="Straat" required>
                </div>
                <div>
                    <label for="streetNumber">Straat nummer</label>
                    <input type="text" id="streetNumber" name="streetNumber" placeholder="Straat nummer" required>
                </div>
            </div>
            <div class="form__order__group">
                <div>
                    <label for="postalCode">Postcode</label>
                    <input type="text" id="postalCode" name="postalCode" placeholder="Postcode" required>
                </div>
                <div>
                    <label for="city">Gemeente</label>
                    <input type="text" id="city" name="city" placeholder="Gemeente" required>
                </div>
            </div>
            <label for="donutAmount">Aantal donuts</label>
            <input style="width: 3rem" type="number" id="donutAmount" name="donutAmount" placeholder="10" min="10"
                required>
            <label for="remarks">Opmerkingen</label>
            <textarea name="remarks" id="remarks" cols="30" rows="10" placeholder="Opmerkingen"></textarea>
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

input,
textarea {
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

    .form__order__group {
        display: flex;
        flex-direction: row;
        gap: 1.5em;
    }

    .form__order__group label {
        padding-bottom: 10px;
    }

    .form__order__group div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

}
</style>