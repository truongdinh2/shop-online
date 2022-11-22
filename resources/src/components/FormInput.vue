<template>
  <div>
    <!-- <ValidationProvider
        v-if="!passwordInput"
        :name="name"
        :rules="propRules"
        v-slot="{ errors }"
      > -->
    <v-text-field
      v-if="!passwordInput"
      v-model="value"
      @input="$emit('propValue', $event.target.value)"
      :error-messages="errors"
      :label="label"
      :counter="counter"
      required
      outlined
      dense
      :type="type"
    ></v-text-field>
    <!-- </ValidationProvider> -->
    <!-- password input -->
    <!-- <ValidationProvider
        v-if="passwordInput"
        :name="name"
        :rules="propRules"
        v-slot="{ errors }"
      v-model="propValue"
      > -->
    <v-text-field
      v-if="passwordInput"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      :error-messages="errors"
      :hint="hint"
      persistent-hint
      :label="label"
      @input="$emit('propValue', $event.target.value)"
      @click:append="show = !show"
      counter
      outlined
      required
      dense
    ></v-text-field>
    <!-- </ValidationProvider> -->
    <!-- </validation-observer> -->
  </div>
</template>
<script>
// import '../validation.js'
// import { ValidationObserver, ValidationProvider } from "vee-validate";

// export default {
//   name: "FormInput",

//   components: {
//     ValidationObserver,
//     ValidationProvider,
//   },

//   props: {
//     value: String,
//     label: String,
//     name: String,
//     hint: String,
//     propRules: String,
//     passwordInput: Boolean,
//     counter: Number,
//   },

//   data() {
//     return {
//       propValue: this.value,
//       show: false,
//     };
//   },
// };
</script>
<script setup>
import { defineProps, toRef, ref } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    requird: true,
  },
  value: {
    type: String,
    requird: false,
  },
  label: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    required: false,
  },
  propRules: {
    type: String,
    required: false,
  },
  passwordInput: {
    type: Boolean,
    required: false,
  },
  counter: {
    type: Number,
    required: false,
  },
  type: {
    type: String,
    requird: false,
  },
});
function validateField(value) {
  if (!value) {
    return 'this field is required';
  }

  if (value.length < 8) {
    return 'this field must contain at least 8 characters';
  }
  console.log(value);
  return true;
}
validateField();
const { value, errorMessage, errors } = useField(toRef(props, 'name'));
// const { value, handleBlur, errors } = useField(toRef(props, 'name'), props.propRules);
</script>
