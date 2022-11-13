<template>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
    <img src="@/assets/imgs/thong-minh.png" alt="sach" />
    <VueStarRating v-model:rating="rating"></VueStarRating>
  </template>
    
    <script>
  import {
    reactive,
    computed,
    watchEffect,
    watch,
    onMounted,
    onUpdated,
    onUnmounted,
    ref,
  } from "vue";
  import VueStarRating from "vue3-star-ratings";
  import { defineComponent } from "vue";
  export default defineComponent({
    components: {
      VueStarRating,
    },
    setup() {
      const state = reactive({
        count: 0,
        double: computed(() => state.count * 2),
      });
      const rating = ref(1);
  
      function increment() {
        state.count++;
      }
  
      watchEffect(() => {
        // chú ý vào đây
        console.log(state.count);
      });
      watch(
        () => state.count,
        (count, prevCount) => {
          console.log(count, prevCount);
        }
      );
      onMounted(() => {
        console.log("mounted!");
        setTimeout(() => {
          increment();
        }, 1000);
      });
      onUpdated(() => {
        console.log("updated!");
      });
      onUnmounted(() => {
        console.log("unmounted!");
      });
  
      return {
        state,
        increment,
        rating,
      };
    },
  });
  </script>