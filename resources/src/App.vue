<template>
  <div>
    <v-app>
      <nav-bar />
      <v-main>
        <router-view />
        <snack-bar />
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import SnackBar from "./components/SnackBar.vue";
export default {
  name: "App",

  components: {
    NavBar,
    Footer,
    SnackBar,
  },
};
</script>

<style>
</style>