<template>
  <div>
    <validation-observer
      ref="observer"
    >
      <ValidationProvider
        v-if="!passwordInput"
        :name="name"
        :rules="propRules"
        v-slot="{ errors }"
      >
        <v-text-field
          v-model="propValue"
          @input="$emit('propValue', $event)"
          :error-messages="errors"
          :label="label"
          :counter="counter"
          required
          outlined
          dense
        ></v-text-field>
      </ValidationProvider>
      <!-- password input -->
      <ValidationProvider
        v-if="passwordInput"
        :name="name"
        :rules="propRules"
        v-slot="{ errors }"
      >
      <v-text-field
        v-model="propValue"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        :error-messages="errors"
        :hint="hint"
        persistent-hint
        :label="label"
        @input="$emit('propValue', $event)"
        @click:append="show = !show"
        counter
        outlined
        required
        dense
      ></v-text-field>
      </ValidationProvider>
    </validation-observer>
  </div>
</template>
<script>
// import '../validation.js'
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'FormInput',

  components: {
    ValidationObserver,
    ValidationProvider
  },

  props: {
    value: String,
    label: String,
    name: String,
    hint: String,
    propRules: String,
    passwordInput: Boolean,
    counter: Number
  },

  data () {
    return {
      propValue: this.value,
      show: false
    }
  }
}
</script>
<script setup>
import { useField } from 'vee-validate';
import { defineProps, toRef } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required';
}
// make sure to convert the name prop to a ref to maintain its reactivity
// this way vee-validate can react to the field name changing
const nameRef = toRef(props, 'name');
const { errorMessage, value } = useField(nameRef, isRequired);
</script>
