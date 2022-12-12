<script setup>
    import Donut from '../components/Donut.vue'
    import OrderForm from '../components/OrderForm.vue'
    import { onMounted } from 'vue';
    import Customization from '../components/Customization.vue';

   onMounted( () => {
        let colorLabels = document.querySelectorAll(".icing");
        colorLabels.forEach((color, index)=>{
            let colorValue = color.dataset.color;
            color.style.backgroundColor = colorValue;
        })
    })
</script>

<template>
    <body>
        <h1>naam donut</h1>
        <div class="header">
            <div class="donut">
                <Donut/>
            </div>
            <div class="customization">
                <Customization/>
            </div>

        </div>
        <div class="order">
            <OrderForm/>
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

.donut {
    width: 100vw;
    height: 50vh;
    left: 0;
    top: 6rem;
    overflow: hidden;
}



@media screen and (min-width: 768px) {
    .header{
        display: flex;
        flex-direction: row;
    }
    .donut {
        width: 50vw;
        height: 50vh;
        left: 0;
        top: 5.5rem;
        overflow: hidden;
    }
    .customization {
    width: 50vw;
    }
}
</style>
