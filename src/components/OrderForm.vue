<script setup>


</script>

<template>
    
        <div class="form">
            <h2>Vul in!</h2>
            <form>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required>
                <label for="name">Bedrijfsnaam</label>
                <input type="text" id="name" name="name" placeholder="Naam" required>
            </form>
        </div>
   


</template>


<style scoped>

.form{
    padding-top: 20px;
}

form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input{
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
}

</style>