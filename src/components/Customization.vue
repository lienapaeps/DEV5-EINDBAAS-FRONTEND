<script setup>
    
</script>

<template>
    <div class="options">
        <h2>Glazuur</h2>
        <div class="options__container icing__container border__select">
            <input type="radio" id="strawberry" name="icing" value="rgb(216, 134, 167)" class="icinginput">
            <label for="strawberry" class="icing icing--strawberry" data-color="rgb(254, 157, 196)"></label>

            <input type="radio" id="brown" name="icing" value="rgb(130, 80, 69)" class="icinginput">
            <label for="brown" class="icing icing--brown" data-color="rgb(130, 80, 69)"></label>

            <input type="radio" id="pistache" name="icing" value="rgb(137, 167, 97)" class="icinginput">
            <label for="pistache" class="icing icing--pistache" data-color="rgb(137, 167, 97)"></label>
            
            <input type="radio" id="white" name="icing" value="rgb(190, 190, 195)" class="icinginput">
            <label for="white" class="icing icing--white" data-color="rgb(237, 239, 244)"></label>

            <input type="radio" id="lime" name="icing" value="rgb(152, 175, 149)" class="icinginput">
            <label for="lime" class="icing icing--lime" data-color="rgb(152, 175, 149)"></label>

            <input type="radio" id="cherry" name="icing" value="rgb(211, 83, 143)" class="icinginput">
            <label for="cherry" class="icing icing--cherry" data-color="rgb(211, 83, 143)"></label>

            <input type="radio" id="caramel" name="icing" value="rgb(180, 100, 2)" class="icinginput">
            <label for="caramel" class="icing icing--caramel" data-color="rgb(180, 100, 2)"></label>

            <input type="radio" id="chocloate" name="icing" value="rgb(80, 43, 40)" class="icinginput">
            <label for="chocloate" class="icing icing--chocloate" data-color="rgb(86, 49, 45)"></label>

            <input type="radio" id="banana" name="icing" value="rgb(225, 196, 79)" class="icinginput">
            <label for="banana" class="icing icing--banana" data-color="rgb(255, 233, 89)"></label>

            <input type="radio" id="ruby" name="icing" value="rgb(185, 108, 117)" class="icinginput">
            <label for="ruby" class="icing icing--ruby" data-color="rgb(223, 130, 141)"></label>

            <input type="radio" id="speculoos" name="icing" value="rgb(193, 132, 88)" class="icinginput">
            <label for="speculoos" class="icing icing--speculoos" data-color="rgb(197, 136, 91)"></label>
            
        </div>
    </div>
    <div class="options">
        <h2>Topping</h2>
        <div class="options__container topping__container border__select">
            <input type="checkbox" name="topping" id="sprinkles" value="sprinkles">
            <label for="sprinkles" class="topping topping--sprinkles"><img src="../../imgs/sprinkel_topping.jpg" alt="sprinkles"></label>

            <input type="checkbox" name="topping" id="crumbles" value="crumbles">
            <label for="crumbles" class="topping topping--crumbles"><img src="../../imgs/oreo_topping.jpg" alt="oreo"></label>

            <input type="checkbox" name="topping" id="marshmallow" value="marshmallow">
            <label for="marshmallow" class="topping topping--marshmallow"><img src="../../imgs/marshmallow_topping.jpg" alt="marshmallow"></label>

            <input type="checkbox" name="topping" id="malteser" value="malteser">
            <label for="malteser" class="topping topping--malteser"><img src="../../imgs/malteser_topping.jpg" alt="malteser"></label>
        </div>
    </div>
    <div class="options">
        <h2>Logo</h2>
        <label for="company_logo">Kies je logo!</label> <br> <br>
        <input type="file" id="company_logo" name="company_logo" accept="image/png, image/jpeg, image/jpg">
        <div class="options__container">

            <input type="radio" name="logo" id="square" value="square">
            <label for="square" class="logo logo--square"></label>

            <input type="radio" name="logo" id="rectangle" value="rectangle">
            <label for="rectangle" class="logo logo--rectangle"></label>

            <input type="radio" name="logo" id="circle" value="circle">
            <label for="circle" class="logo logo--circle"></label>

            <input type="radio" name="logo" id="oval" value="oval">
            <label for="oval" class="logo logo--oval"></label>
        </div>
    </div>
</template>

<style scoped>
input[type="radio"]{
    visibility: hidden;
    width: 0rem;
    margin: 0;
}

input[type="checkbox"]{
    visibility: hidden;
    width: 0rem;
    margin: 0;
}

input[type="file"]{
    font-family: 'Dosis', sans-serif;
    border: 2px solid var(-strawberry-pink);
}

input[type="file"]::-webkit-file-upload-button{
    border: 2px solid var(--strawberry-pink);
    background-color: var(--strawberry-pink);
    border-radius: 1.5rem;
    padding: .5rem 1rem;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    text-transform: uppercase;
    color: var(--warm-lemon);
}

input[type="file"]::-webkit-file-upload-button:hover{
    border: 2px solid var(--pink);
    background-color: var(--pink);
    border-radius: 1.5rem;
    padding: .5rem 1rem;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    text-transform: uppercase;
    color: var(--warm-lemon);
    cursor: pointer;
}

.options__container{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding-bottom: 5px;
    overflow-x:scroll;
    overflow-y: hidden;
}

.border__select input[type="radio"]+label{
    border: 3px solid transparent;
    border-radius: 50%;
}

.border__select input[type="radio"]:checked+label{
    border: 3px solid var(--strawberry-pink);
}

.border__select input[type="checkbox"]+label{
    border: 3px solid transparent;
    border-radius: 50%;
}

.border__select input[type="checkbox"]:checked+label{
    border: 3px solid var(--strawberry-pink);
}

.icing, .topping {
    display: block;
    height: 1.5rem;
    width: 1.5rem;
    min-width: 1.5rem;
    padding: .5rem;
    border-radius: 50%;
}

.options__container::-webkit-scrollbar {
    height: 10px;
    margin: 5px 5px;
    background:rgb(255, 255, 255);
    border-radius: 15px;
}

.options__container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgb(203, 26, 26); 
    background: transparent;
    color: transparent;
}
.options__container::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background:var(--strawberry-pink);
} 

.topping {
    position: relative;
}

.topping img{
    height: 2.55rem;
    width: 2.55rem;
    border-radius: 50%;
    position: absolute;
    top: -0.5px;
    left: -0.01px;

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


