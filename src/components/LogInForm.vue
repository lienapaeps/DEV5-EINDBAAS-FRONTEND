<script setup>// logica
import Button from './Button.vue'
import router from '../router/router';

import { ref, onMounted } from 'vue'

// inloggen
function login() {
    let btnLogin = document.querySelector(".btn--login").addEventListener("click", function () {
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;

        fetch("https://dev5-donuttello.onrender.com/api/v1/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => response.json())
            .then((json) => {
                if (json.status === "success") {
                    let token = json.data.token;
                    localStorage.setItem("token", token);

                    router.push('/gallerij');

                } else {
                    let feedback = document.querySelector(".alert");
                    feedback.textContent = "Gebruikersnaam of wachtwoord zijn fout";
                    feedback.classList.remove("hidden");
                    feedback.style.backgroundColor = "#f8d7da";
                    feedback.style.color = "#721c24";
                }
            })
            .catch(error => console.log(error));
    });
}

onMounted(() => {
    login();
});

</script>

<template>
    <form class="form form__login" action="#">
        <h3>Admin login</h3>
        <div class="alert hidden">
            Here is some feedback
        </div>
        <div class="row">
            <label for="username">Gebruikersnaam</label>
            <input type="text" id="username" name="username">
        </div>
        <div class="row">
            <label for="password">Wachtwoord</label>
            <input type="password" id="password" name="password">
        </div>
        <div class="row">
            <Button text="Log in" class="btn btn--strawberry btn--login" textclass="btn__text" />
        </div>
    </form>
</template>

<style scoped>
input[type=text],
input[type=password] {
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
