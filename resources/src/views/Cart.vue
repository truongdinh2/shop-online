<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="8"
        sm="6"
      >
        <div v-if="isCart === 0">
          <h3
            class="text-center mt-16"
          >Your Cart is Empty!
          </h3>
          <div class="text-center mt-5">
            <v-btn
              to="/"
              rounded
              color="deep-purple"
              dark
            >
              Visit our Store!
            </v-btn>
          </div>
        </div>
          <v-col
            v-for="(item, index) in carts"
            :key="item.itemId"
            :index="index"
            cols="12"
          >
            <Card
              class="mx-auto mt-5"
              :image="item.image"
              :price="item.price"
              :name="item.name"
              :qty="item.qty"
              :itemId="item.itemId"
            />
          </v-col>
        </v-col>
      <v-col
        order="first" order-sm="last"
        class="mt-7"
        cols="12"
        md="4"
        sm="6"
      >
      <!-- Sub total card -->
        <v-card
          class="pa-2 mb-16 mt-5 text-center"
          elevation="3"
        >
          <h2 class="mb-2">Sub Total</h2>

          <v-divider></v-divider>

          <v-row
            no-gutters
          >
            <v-col
              class="mt-3"
              cols="6"
            >
              <h3 class="my-1">Subtotal:</h3>
            </v-col>
            <v-col
              class="mt-3"
              cols="6"
            >
              <h3 class="my-1">${{ subTotal }}</h3>
            </v-col>
          </v-row>
          <v-card-actions v-if="isCart > 0">
            <v-btn to="/pre-checkout"
              block
              color="#385F73"
              class="mt-3"
              elevation="2"
              rounded
              dark
            >Sub Total</v-btn>
          </v-card-actions>

          <p v-if="isCart >= 1"
             class="text-caption">
             *Review your transaction in next page.
          </p>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '../components/CheckoutCard.vue';
import dataFake from "../utils/dataFake.js";
export default {
  name: 'Cart',

  components: {
    Card,
  },
  data() {
    return {
      carts: dataFake.carts,
      isCart: dataFake.isCart,
      subTotal: dataFake.subTotal,
    }
  },
  computed: {
    // ...mapGetters({
    //   isCart: 'cartLen',
    //   subTotal: 'subTotal'
    // })
  }
}
</script>
