<script setup>
import Donut from '../components/Donut.vue'
import OrderForm from '../components/OrderForm.vue'
import router from '../router/router';

import { onMounted } from 'vue';
import Customization from '../components/Customization.vue';

function addDonut() {
    let btn = document.querySelector(".btn--order").addEventListener("click", e => {
        let email = document.querySelector("#email").value;
        let nameCompany = document.querySelector("#companyName").value;
        let nameDonut = document.querySelector("#nameDonut").value;
        let street = document.querySelector("#street").value;
        let streetNumber = document.querySelector("#streetNumber").value;
        let postalCode = document.querySelector("#postalCode").value;
        let city = document.querySelector("#city").value;
        let remarks = document.querySelector("#remarks").value;
        let icing = document.querySelector("input[name=icing]:checked").value;
        // if(icing = )
        let topping = document.querySelector("input[name=topping]:checked").value;

        let logo = localStorage.getItem("uploadedImage");

        let logoShape = document.querySelector("input[name=logo]:checked").value;

        let imageUrl = localStorage.getItem("ImageUrl");

        let donutAmount = document.querySelector("#donutAmount").value;

        let dataDonut = {
            email,
            nameCompany,
            nameDonut,
            street,
            streetNumber,
            postalCode,
            city,
            remarks,
            icing,
            topping,
            logo,
            logoShape,
            imageUrl,
            donutAmount
        }

        console.log(dataDonut);

        fetch("https://dev5-donuttello.onrender.com/api/v1/donuts", {
            method: "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataDonut)
        })
            .then(res => {
                return res.json();
            }).then(json => {
                // console.log(json);
                // console.log(json.data.donut._id);
                router.push('/order/' + json.data.donut._id);
            }).catch(err => {
                console.log(err);
                let feedback = document.querySelector(".alert");
                feedback.textContent = "Vull alle velden correct in.";
                feedback.classList.remove("hidden");
                feedback.style.backgroundColor = "#f8d7da";
                feedback.style.color = "#721c24";
            })
    })
}

onMounted(() => {
    let colorLabels = document.querySelectorAll(".icing");
    colorLabels.forEach((color, index) => {
        let colorValue = color.dataset.color;
        color.style.backgroundColor = colorValue;
    })

    addDonut();
})
</script>

<template>

    <body>
        <h1>Configurator</h1>
        <div class="header">
            <div class="donut">
                <Donut />
            </div>
            <div class="customization">
                <Customization />
            </div>
        </div>
        <div class="order">
            <OrderForm />
        </div>
    </body>
</template>

<style scoped>
body {
    margin: 10px;
}

h1 {
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

.customization {
    max-width: 100%;
    padding: 1rem;
}

.order {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 40%;
}

@media screen and (min-width: 768px) {
    .header {
        display: flex;
        flex-direction: row;
    }

    .donut {
        width: 47vw;
        height: 50vh;
        left: 0;
        top: 5.5rem;
        overflow: hidden;
    }

    .customization {
        max-width: 50%;
    }

}

/* Desktop */
@media (min-width: 992px) {
    body {
        margin: 30px;
        padding: 0;
    }

    .customization {
        width: 40vw;
    }
}
</style>
