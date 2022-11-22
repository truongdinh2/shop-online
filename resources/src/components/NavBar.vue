<template>
  <div>
    <v-app-bar
      fixed
      color="gray-darken-3"
      image="https://i.picsum.photos/id/849/1920/1080.jpg?hmac=rMqULP8b0wLF6apRoNTFn3oZM2-4b5NxR9Dpplwn5Ts"
      dark
      app
    >
      <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          :contain="true"
          :src="'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png'"
          transition="scale-transition"
          :width="40"
        >
        </v-img>
      </router-link>

      <v-toolbar-title class="text-white fw-bold fs-1">Store</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn v-if="isLogin" class="mr-3" elevation="0" to="/profile">
        {{ this.$store.state.user.first_name }}
      </v-btn>

      <v-btn to="/cart" icon>
        <p>{{ count }}</p>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/cart">
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cart</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="isLogin != true" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="isLogin != true" to="/register">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sign Up</v-list-item-title>
          </v-list-item>

          <div v-if="isLogin">
            <v-list-item to="/profile">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>

            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import Images from "./Images.vue";
import dataFake from "../utils/dataFake.js";

export default {
  name: "NavBar",

  components: {
    Images,
  },

  data: () => ({
    drawer: false,
    group: null,
    count: dataFake.count,
    isLogin: dataFake.isLogin,
  }),

  computed: {
    // ...mapGetters({
    //   count: 'cartLen',
    //   isLogin: 'isLoggedIn'
    // })
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
