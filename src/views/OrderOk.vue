<script setup>// logica
import Button from '../components/Button.vue'
import Footr from '../components/Footr.vue'
import { onMounted, reactive } from 'vue'

let donuts = reactive({
    donuts: []
})

let donutId = window.location.pathname.split('/')[2];

onMounted(() => {
        fetch("https://dev5-donuttello.onrender.com/api/v1/donuts/" + donutId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                // console.log(json.data);
                donuts.donuts = json.data.donut;
            })
})

</script>

<template>
    <div class="orderOk">
        <h2>Bedankt voor je <span style="color:var(--strawberry-pink)">bestelling</span>!</h2>
        <img class="img__order" src="../../imgs/orderconfirm.png" alt="orderOk">

        <div class="orderDonut" v-for="donut in donuts.donuts" :key="donut.id">
            <h2>Donut gegevens</h2>
            <p>Naam donut: <span>{{ donut.nameDonut }}</span></p>
            <p>Kleur glazuur: <span>{{ donut.icing }}</span></p>
            <p>Keuze topping: <span>{{ donut.topping }}</span></p>
            <p>Logo vorm: <span>{{ donut.logoShape }}</span></p>
            <div class="details__logo">
                <p>Logo:</p>
                <img :src="donut.logo" alt="Donut logo afbeelding" class="imgLogo">
            </div>
            <p>Aantal donuts: <span>{{ donut.donutAmount }}</span></p>
            <p>Bestel datum: <span>{{ donut.createdAt }}</span></p>
            <p>Opmerkingen: <span>{{ donut.remarks }}</span></p>
            <p>Status: <span>{{ donut.status }}</span></p>
        
            <a target="_blank" :href="donut.imageUrl"> Deel jouw donut</a>

        </div>

        

        <router-link exact to="/">
            <Button text="Terug naar home" class="btn btn--strawberry" textclass="btn__text" />
        </router-link>
    </div>

    <Footr />
</template>

<style scoped>
.orderOk {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
}

.img__order {
    width: 25vh;
}

.imgLogo{
    max-width: 40%;
}

.orderDonut{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
}

.details__logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
</style>
