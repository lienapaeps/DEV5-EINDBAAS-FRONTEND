<script setup>// logica

</script>

<template>
    <body>
    <h1>naam donut</h1>
    <div class="options">
        <h2>Glazuur</h2>
        <div class="options__container">
            <a href="#" class="glaze glaze--red"></a>
            <a href="#" class="glaze glaze--pink"></a>
            <a href="#" class="glaze glaze--brown"></a>
            <a href="#" class="glaze glaze--green"></a>
        </div>
    </div>
    <div class="options">
        <h2>Topping</h2>
        <div class="options__container">
            <a href="#" class="topping topping--sprinkles"><img src="../../imgs/sprinkel_topping.jpg" alt="marshmallow"></a>
            <a href="#" class="topping topping--crumbles"><img src="../../imgs/oreo_topping.jpg" alt="marshmallow"></a>
            <a href="#" class="topping topping--marshmallow"><img src="../../imgs/marshmallow_topping.jpg" alt="marshmallow"></a>
            <a href="#" class="topping topping--malteser"><img src="../../imgs/malteser_topping.jpg" alt=""></a>
        </div>
    </div>
    <div class="options">
        <h2>Logo</h2>
        <label for="company_logo">Kies je logo!</label> <br> <br>
        <input type="file" id="company_logo" name="company_logo" accept="image/png, image/jpeg, image/jpg">
        <div class="options__container">
            <a href="#" class="logo logo--square"></a>
            <a href="#" class="logo logo--rectangle"></a>
            <a href="#" class="logo logo--circle"></a>
            <a href="#" class="logo logo--oval"></a>
        </div>
    </div>
    
    </body>
</template>

<style scoped>

body{
    margin: 10px;
}

h1{
    text-align: center;
    text-transform: uppercase;
}

.options__container{
    display: flex;
    flex-direction: row;
    gap: 15px;
}

.glaze {
    display: block;
    height: 30px;
    width: 30px;
    padding: 2px;
    border-radius: 50%;
}

.glaze--red {
    background-color: red;
}

.glaze--pink {
    background-color: pink;
}

.glaze--brown {
    background-color: rgb(165, 81, 42);
}

.glaze--green {
    background-color: green;
}

.topping img{
    display: block;
    height: 34px;
    width: 34px;
    border-radius: 50%;
}

.logo{
    display: block;
}

.logo--square{
    height: 50px;
    width: 50px;
    border: solid black 2px;
}

.logo--rectangle{
    height: 50px;
    width: 80px;
    border: solid black 2px;
}

.logo--circle{
    height: 50px;
    width: 50px;
    border: solid black 2px;
    border-radius: 50%;
}

.logo--oval{
    height: 50px;
    width: 80px;
    border: solid black 2px;
    border-radius: 50%;
}

#company_logo{
    padding-bottom: 20px;
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
