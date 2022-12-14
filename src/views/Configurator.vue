<script setup>
import Donut from '../components/Donut.vue'
import OrderForm from '../components/OrderForm.vue'
import { onMounted } from 'vue';
import Customization from '../components/Customization.vue';

function addDonut() {
    let btn = document.querySelector(".btn--order").addEventListener("click", e => {
        console.log("clicked");
        // e.preventDefault();
        let nameDonut = "Donut naam";
        let nameCompany = document.querySelector("#companyName").value;
        let email = document.querySelector("#email").value;
        let icing = document.querySelector("input[name=icing]:checked").value;
        let topping = document.querySelector("input[name=topping]:checked").value;
        let logo = "https://lienapaeps.be/imgs/meta-image.png";
        let logoShape = document.querySelector("input[name=logo]:checked").value;
        let imageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.webstaurantstore.com%2Farticle%2F593%2Ftypes-of-donuts.html&psig=AOvVaw13YcZw5WFWikaTMKs5xKtO&ust=1671087828074000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDFiLXF-PsCFQAAAAAdAAAAABAJ";

        let dataDonut = {
            email,
            nameCompany,
            nameDonut,
            icing,
            topping,
            logo,
            logoShape,
            imageUrl
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
                console.log(json);
                window.location.href = "#/orderok";
            }).catch(err => {
                console.log(err);
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
        <h1>naam donut</h1>
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
    max-width: 40%;
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
