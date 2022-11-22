<template>
  <v-snackbar
    class="mt-15"
    v-model="snackbar.show"
    :color="snackbar.color"
    timeout="4000"
    right
    top
  >
    {{ this.snackbar.text }}sadsad

    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"

      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import dataFake from '../utils/dataFake.js'
export default {
  name: "SnackBar",
  data: () => ({
    snackbar: dataFake.snackbar,
  }),
};
</script>
