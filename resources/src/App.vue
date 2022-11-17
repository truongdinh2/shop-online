<template>
  <div>
    <v-app>
      <v-main>
        <nav-bar />
        <router-view />
        <Footer />
        <snack-bar />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import SnackBar from './components/SnackBar.vue'
export default {
  name: 'App',

  components: {
    NavBar,
    Footer,
    SnackBar,
  }
}
</script>

<style>
</style>