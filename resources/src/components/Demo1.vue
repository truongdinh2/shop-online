<template>
  <div>
    <label>My Custom Input</label>
    <input type="text" placeholder="Custom input!" @input="handleChange" />
  </div>
</template>
<script setup>
import { ref, defineEmits, onMounted } from "vue";
const emit = defineEmits({
  unvalidatedEvent: null, // if we want an event without validation
  customChange: (s) => {
    if (s && typeof s === "string") {
      return true;
    } else {
      console.warn(`Invalid submit event payload!`);
      return false;
    }
  },
});
const handleChange = (event) => {
  // no console warning
  emit("customChange", event.target.value.toUpperCase());
};
onMounted(() => {
  emit("customChange", 1); // not a string, warning!
});
</script>
<script>
import { ref, defineEmits } from "vue";
export default {
  name: "demo",
  props: {
    label: {
      type: String,
      default: 213,
    },
    post: {
      type: Number,
      default: 1233,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    // context.emit("update:title");
    let xx = ref(123);
    let reactiveProps = ref(props.label);
    console.log(context.attrs);
    console.log(context.slots);
    console.log(context.expose);
    console.log(context);
    console.log(props);
    function sendEmit() {
      context.emit("send", 3);
    }

    return {
      xx,
      sendEmit,
      reactiveProps,
    };
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
</style>