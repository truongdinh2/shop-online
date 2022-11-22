<template>
  <v-container class="grey lighten-5 mt-10 mb-16">
    <v-row v-if="isCart >= 1" class="d-flex justify-center" no-gutters>
      <v-card elevation="1" class="mx-auto" width="450">
        <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
          <v-card-text>
            <p class="text-h4 text--primary mt-5 text-center">
              Fill out Your information
            </p>
            <p class="text-center">
              SubTotal: <b>${{ subTotal }}</b>
            </p>
            <v-divider></v-divider>
            <p class="red--text">*Fill all the Blanks</p>
            <v-col cols="12">
              <FormInput
                v-model="firstname"
                @propValue="firstname = $event"
                value="firstname"
                label="First Name"
                name="firstname"
                propRules="required|max:50"
                type="text"
              />
              <FormInput
                v-model="lastname"
                @propValue="lastname = $event"
                value="lastname"
                label="Last Name"
                name="lastname"
                type="text"
              />
              <FormInput
                v-model="email"
                @propValue="email = $event"
                value="email"
                label="E-mail"
                name="email"
                type="email"
              />
              <FormInput
                v-model="phone"
                @propValue="phone = $event"
                value="phone"
                label="Telephone"
                name="phone"
                :counter="10"
                propRules="required|digits:10"
                type="text"
              />
              <FormInput
                v-model="address"
                @propValue="address = $event"
                label="Address"
                value="address"
                name="address"
                propRules="required"
                type="text"
              />
            </v-col>
            <v-row no-gutters>
              <v-col cols="4">
                <FormInput
                  class="mr-2"
                  v-model="city"
                  @propValue="city = $event"
                  label="City"
                  name="city"
                  propRules="required"
                  type="text"
                />
              </v-col>
              <v-col cols="4">
                <FormInput
                  class="mx-3"
                  v-model="state"
                  @propValue="state = $event"
                  @input="(val) => (state = state.toUpperCase())"
                  :stateInput="true"
                  :counter="2"
                  label="State"
                  name="state"
                  propRules="required|max:2"
                  type="number"
                />
              </v-col>
              <v-col cols="4">
                <FormInput
                  v-model="zipcode"
                  @propValue="zipcode = $event"
                  value="zipcode"
                  label="Zipcode"
                  name="zipcode"
                  :counter="5"
                  propRules="required|digits:5"
                  type="number"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <div class="float-right">
            <v-btn
              type="submit"
              class="ma-3"
              color="#385F73"
              :loading="loading"
              elevation="5"
              dark
            >
              Shop
              <v-icon class="ml-1">mdi-purse</v-icon>
            </v-btn>
          </div>
        </Form>
      </v-card>
    </v-row>
  </v-container>
</template>
<script setup>
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useRouter, useRoute } from "vue-router";

const schema = yup.object({
  // firstname: yup.string().required().label("firstname"),
  // lastname: yup.string().required().label("lastname"),
  // email: yup.string().email().required().label("E-mail"),
  // phone: yup.number().required().label("phone"),
  // passwordConfirm: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords must match')
  //   .required()
  //   .label('Password confirmation'),
  // terms: yup
  //   .boolean()
  //   .required()
  //   .oneOf([true], 'You must agree to terms and conditions'),
});
const router = useRouter();
function onSubmit(values) {
  console.log("Submitted with", values, router);
  router.push("/checkout");
}
</script>
<script>
// import { mapGetters } from 'vuex'
import FormInput from "../components/FormInput.vue";
import dataFake from "../utils/dataFake.js";
import { Field, Form } from "vee-validate";

export default {
  name: "GuestForm",

  components: {
    FormInput,
    Field,
    Form,
  },

  data() {
    return {
      loading: false,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      isCart: dataFake.isCart,
      cartTotal: dataFake.cartTotal,
      subTotal: dataFake.subTotal,
    };
  },

  computed: {
    // ...mapGetters({
    //   isCart: 'cartLen',
    //   cartTotal: 'cartTotal',
    //   subTotal: 'subTotal'
    // })
  },

  methods: {
    // onSubmit() {
    //   this.loading = true;
    //   const {
    //     firstname,
    //     lastname,
    //     address,
    //     city,
    //     state,
    //     zipcode,
    //     email,
    //     phone,
    //   } = this;
    //   if (
    //     firstname &&
    //     lastname &&
    //     address &&
    //     city &&
    //     state &&
    //     zipcode &&
    //     email &&
    //     phone
    //   ) {
    //     // this.$store.commit('guestUser', {
    //     //   first_name: firstname,
    //     //   last_name: lastname,
    //     //   email,
    //     //   phone,
    //     //   address,
    //     //   city,
    //     //   state,
    //     //   zipcode
    //     // })
    //     // this.$router.push('/checkout')
    //   } else {
    //     this.loading = false;
    //   }
    // },
  },
};
</script>
