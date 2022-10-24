<template>
    <nav class="home">
        <router-link to="/"
            ><img
                src="../src/assets/logo-png.png"
                alt="logo"
                width="250"
                height="150"
            />
        </router-link>
    </nav>
    <nav class="link">A mettre Calendrier réservation</nav>
    <router-view />
</template>

<style>
h2 {
    font-family: "Ubuntu", sans-serif;
}

nav {
    padding: 30px;
    display: flex;
    justify-content: center;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
.link {
    background: red;
}
</style>
