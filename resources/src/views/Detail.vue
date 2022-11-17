<template>
  <v-container fluid class="mt-10 mb-16">
    <v-row
      v-for="(product, index) in products"
      :key="product.id"
      :index="index"
      no-gutters
    >
      <v-col
        v-if="product.slug === slug"
        class="d-flex justify-center"
        cols="12"
        md="6"
      >
        <Images
          :maxHeight="300"
          :maxWidth="400"
          :src="product.image"
          :alt="product.name"
        />
      </v-col>
      <!-- card -->
      <v-col
        v-if="product.slug === slug"
        class="text-center mt-5"
        cols="12"
        md="6"
      >
        <h1 class="display-2 mb-3">{{ product.name }}</h1>

        <v-card class="grey lighten-4" outlined>
          <div class="display-1 pt-4">${{ product.price }}</div>

          <v-card-text>
            {{ product.description }}
          </v-card-text>
          <div class="d-flex justify-center">
            <Alert
              v-if="text"
              type="warning"
              border="left"
              color="red"
              :text="true"
              :dense="true"
              :message="text"
            />
          </div>
          <div class="d-flex justify-center">
            <v-btn
              @click="decrement()"
              class="mt-3"
              color="primary"
              fab
              x-small
              dark
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <v-col cols="4" sm="2">
              <v-text-field
                :value="quantity"
                id="qty"
                outlined
                readonly
                dense
              ></v-text-field>
            </v-col>
            <v-btn
              @click="increment(product.id)"
              class="mt-3"
              color="success"
              fab
              x-small
              dark
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <v-card-actions>
            <v-btn
              @click="
                addToCart(
                  product.id,
                  product.image,
                  product.name,
                  product.price
                )
              "
              color="success"
              ><v-icon>mdi-plus</v-icon>Add to Card
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dataFake from "../utils/dataFake.js";
import Images from "../components/Images.vue";
import Alert from "../components/Alert.vue";

export default {
  name: "Detail",

  components: {
    Alert,
    Images,
  },

  props: {
    slug: String,
  },

  data() {
    return {
      quantity: 1,
      text: "",
      products: dataFake.products,
    };
  },

  methods: {
    increment(id) {
      const i = this.products.findIndex((products) => {
        return products.id === id;
      });
      const inv = this.products[i].inventory;
      console.log(inv);
      this.quantity >= inv
        ? (this.text = "Only " + inv + " product left ")
        : this.quantity++;
      console.log(this.text);
    },
    decrement() {
      if (this.quantity !== 1) {
        this.quantity--;
      }
    },
    addToCart(itemId, image, name, price) {
      const qty = this.quantity;
      const show = true;
      const color = "success";
      const text = "Added to the Cart!";
      console.log(itemId, image, name, price);
      // this.$store.commit('addCart', { itemId, qty, image, name, price })
      // this.$store.commit('cartSnack', { show, color, text })
    },
  },
};
</script>
