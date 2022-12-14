<script setup>// logica
import Button from '../components/Button.vue'
import Footr from '../components/Footr.vue'

</script>

<template>
    <div class="orderOk">
        <h2>Bedankt voor je <span style="color:var(--strawberry-pink)">bestelling</span>!</h2>
        <img class="img__order" src="../../imgs/orderconfirm.png" alt="orderOk">
        <a href="#/"><Button text="Terug naar home" class="btn btn--strawberry" textclass="btn__text"/></a>
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
</style>
