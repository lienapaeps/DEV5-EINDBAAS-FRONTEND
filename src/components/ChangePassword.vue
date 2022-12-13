<script setup>
import Button from './Button.vue'
import { onMounted } from 'vue'
function changePassword() {
    let btnChange = document.querySelector(".btn--change").addEventListener("click", function () {
        console.log("clicked");
        let username = document.querySelector("#username").value;
        let oldPassword = document.querySelector("#oldPassword").value;
        let newPassword = document.querySelector("#newPassword").value;

        fetch("https://dev5-donuttello.onrender.com/api/v1/users/changePassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
                    window.location.href = "#/login";
                } else {
                    let feedback = document.querySelector(".alert");
                    feedback.textContent = "Username or password is invalid";
                    feedback.classList.remove("hidden");
                    feedback.style.backgroundColor = "#f8d7da";
                    feedback.style.color = "#721c24";
                }
            })
            .catch(error => console.log(error));
    });
}

onMounted(() => {
    changePassword();
});

</script>

<template>
    <form action="#">

        <h3>Wachtwoord veranderen</h3>

        <div class="alert hidden">
            Here is some feedback
        </div>

        <div class="form-group">
            <label for="username">Username</label>
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
            <Button text="Verander" class="btn btn--strawberry btn--change" textclass="btn__text" />
        </div>
    </form>


</template>

<style>
input {
    width: 100%;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

form {
    padding: 2em;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1em;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
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

/* Desktop */
@media (min-width: 992px) {
    form {
        margin-top: 1em;
        padding: 2em;
        width: 20%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 1em;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    }
}
</style>