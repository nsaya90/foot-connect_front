<template>
    <div class="wrapper_login">
        <div class="box_titre_login">
            <h2>Connexion</h2>
        </div>
        <div class="box_login">
            <form class="form_login" action="" @submit.prevent>
                <p>{{ message }}</p>
                <input
                    class="form_input"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                />
                <p
                    class="errors"
                    v-if="this.info"
                    v-text="this.info.error_mail"
                ></p>

                <input
                    class="form_input"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="password"
                />
                <p
                    class="errors"
                    v-if="this.info"
                    v-text="this.info.error_password"
                ></p>

                <button class="btn_login" @click="login">Connexion</button>
            </form>
        </div>
        <div class="box_lien_register">
            <p>
                Vous n'avez pas de compte ?
                <router-link to="/register">Inscrivez-vous</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Register",
    data() {
        return {
            email: "",
            password: "",
            message: "",
            info: "",
            errors: "",
        };
    },
    methods: {
        async login() {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/login",

                data: {
                    email: this.email,
                    password: this.password,
                },
            }).then((response) => (this.info = response.data));

            console.log(this.info);

            localStorage.setItem("token", this.info.token);

            // console.log(this.info.id_user);

            if (this.info.succes) {
                localStorage.setItem("id", this.info.id_user);

                location = "http://localhost:8080/profil";
            } else {
                this.message = "Mauvais identifiant";
            }
        },
    },
};
</script>
<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* Styles pour cette Media Queries */
}
</style>
