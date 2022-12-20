<script setup>
import Button from './Button.vue'
import router from '../router/router';

import { onMounted } from 'vue'

// enkel ingelogde gebruiker (donuttello) mag deze pagina bezoeken
function checkLogin() {
    fetch("https://dev5-donuttello.onrender.com/api/v1/donuts", {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => res.json())
        .then(json => {
            // console.log(json);
        }).catch(err => {
            console.log("Only admin can access this page");
            router.push('/')
        })
}


function changePassword() {
    let btnChange = document.querySelector(".btn--change").addEventListener("click", function () {
        let username = document.querySelector("#username").value;
        let oldPassword = document.querySelector("#oldPassword").value;
        let newPassword = document.querySelector("#newPassword").value;

        fetch("https://dev5-donuttello.onrender.com/api/v1/users/changePassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                oldPassword: oldPassword,
                newPassword: newPassword
            })
        })
            .then(response => response.json())
            .then((json) => {
                if (json.status === "success") {
                    let feedback = document.querySelector(".alert");
                    feedback.textContent = "Wachtwoord is succesvol veranderd!";
                    feedback.classList.remove("hidden");
                    feedback.style.backgroundColor = "#d4edda";
                    feedback.style.color = "#2e6a3b";
                    document.querySelector("#username").value = "";
                    document.querySelector("#oldPassword").value = "";
                    document.querySelector("#newPassword").value = "";
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
    checkLogin();
    changePassword();
});

</script>

<template>
    <form class="form form__login" action="#">

        <h3>Wachtwoord veranderen</h3>

        <div class="alert hidden">
            Here is some feedback
        </div>

        <div class="form-group">
            <label for="username">Gebruikersnaam</label>
            <input type="text" name="username" id="username" />
        </div>

        <div class="form-group">
            <label for="oldPassword">Vorig wachtwoord</label>
            <input type="password" name="oldPassword" id="oldPassword" />
        </div>

        <div class="form-group">
            <label for="newPassword">Nieuw wachtwoord</label>
            <input type="password" name="newPassword" id="newPassword" />
        </div>

        <div class="form-group">
            <Button text="Verander wachtwoord" class="btn btn--strawberry btn--change" textclass="btn__text" />
        </div>
    </form>


</template>

<style>
.form-group input {
    width: 100%;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.form__login {
    padding: 2em;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1em;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.form-group label {
    padding: 1em 1em 1em 0;
    display: inline-block;
}

.btn {
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
}

/* Desktop */
@media (min-width: 992px) {
    .form__login {
        margin-top: 3em;
        width: 20%;
    }
}
</style>