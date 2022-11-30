<script setup>// logica

</script>

<template>
    <div class="container form">
        <h1>Admin log in</h1>
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
                <input type="submit" value="Log in">
            </div>
        </form>
    </div>
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

input[type=submit] {
    background-color: red;
    color: white;
    padding: 1em 1.5em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-top: 1.5em;
}

.container {
    padding: 1.5em;
}
</style>
