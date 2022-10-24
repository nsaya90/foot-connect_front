import { createRouter, createWebHistory } from "vue-router";

import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import ProfilView from "../views/ProfilView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/profil",
        name: "ProfilView",
        component: ProfilView,
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterView,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
