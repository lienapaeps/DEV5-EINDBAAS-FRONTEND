<script setup>// logica
import Button from '../components/Button.vue'
</script>

<template>
    <form action="#">
        <div class="row">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email">
        </div>
        <div class="row">
            <label for="password">Wachtwoord</label>
            <input type="text" id="password" name="password">
        </div>
        <div class="row">
            <Button text="Log in" class="btn btn--strawberry" textclass="btn__text" />
        </div>
    </form>
</template>

<style scoped>
input[type=text],
input[type=email] {
    width: 100%;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

label {
    padding: 1em 1em 1em 0;
    display: inline-block;
}

.btn {
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
}

.row .btn {
    margin-top: 1.5em;
    margin-left: 0;
}
</style>
