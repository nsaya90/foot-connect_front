<template>
    <div class="wrapper_profil">
        <div class="box_info">
            <h2>Vos informations</h2>
            <p>Nom : {{ info.name }}</p>
            <p>Téléphone : {{ info.phone }}</p>
            <p>Email : {{ info.email }}</p>
            <p>Mot de passe : {{ info.password }}</p>

            <button class="btn_update" @click="formUpdate">
                Modifier vos informations
            </button>
        </div>

        <div class="box_update" v-if="update">
            <form class="form_update" action="" @submit.prevent>
                <h2>Modifier vos informations</h2>

                <input
                    class="form_input"
                    type="text"
                    placeholder="Nom"
                    v-model="name"
                />
                <p
                    class="errors"
                    v-if="this.errors.name"
                    v-text="errors.name[0]"
                ></p>

                <input
                    class="form_input"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                />
                <p
                    class="errors"
                    v-if="this.errors.email"
                    v-text="errors.email[0]"
                ></p>

                <input
                    class="form_input"
                    type="number"
                    placeholder="Téléphone"
                    v-model="phone"
                />
                <p
                    class="errors"
                    v-if="this.errors.email"
                    v-text="errors.email[0]"
                ></p>

                <input
                    class="form_input"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="password"
                />
                <p
                    class="errors"
                    v-if="this.errors.password"
                    v-text="errors.password[0]"
                ></p>

                <button class="btn_update" @click="updateInfo">Valider</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

const idUser = localStorage.getItem("id");
const token = localStorage.getItem("token");
export default {
    name: "Profil",
    components: {},
    data() {
        return {
            name: "",
            phone: "",
            email: "",
            password: "",
            info: "",
            infoUpdate: "",
            update: "",
            errors: "",
        };
    },
    async mounted() {
        await axios({
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
            url: "http://127.0.0.1:8000/api/profil/" + idUser,
        }).then((response) => (this.info = response.data.user));

        console.log(this.info);
    },
    methods: {
        formUpdate() {
            this.update = true;
        },
        async updateInfo() {
            await axios({
                method: "put",
                headers: { Authorization: `Bearer ${token}` },
                url: "http://127.0.0.1:8000/api/profil/" + idUser,

                data: {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    password: this.password,
                },
            })
                .then((response) => (this.infoUpdate = response.data))
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
            if (this.infoUpdate.message) {
                window.location.reload();
            }
            console.log(this.infoUpdate.message);
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .wrapper_profil {
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .box_info {
        background: #f1e9db;
        padding: 15px;
        text-align: center;
    }

    .box_update {
        background: #a7d0dd;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form_update {
        display: flex;
        flex-direction: column;
        padding: 15px;
    }
    .form_update input {
        margin: 10px;
        height: 25px;
    }

    .btn_update {
        position: relative;
        font-size: 17px;
        text-transform: uppercase;
        text-decoration: none;
        padding: 0.7em 1em;
        display: inline-block;
        border-radius: 6em;
        transition: all 0.2s;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 500;
        color: white;
        background-color: #5db7de;
    }

    .btn_update:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn_update:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn_update::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
    }

    .btn_update::after {
        background-color: #fff;
    }

    .btn_update:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
}
</style>
