<template>
  <div class="container">
    <p>{{ post }}</p>
    <p>{{xx}}</p>
    <slot></slot>
    <button @click="xx = Math.random(1, 100)"> click</button>
    <button @click="sendEmit">Emit</button>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  name: "Demo",
    props: {
      user: {
        type: Number,
        default: 213
      },
      post: {
        type: Number,
        default: 1233
      }
    },
  setup(props, context) {
    let xx = ref(123);
    console.log(context.attrs);
    console.log(context.slots);
    console.log(context.props);
    function sendEmit() {
      context.emit('send', 'send Emit');
    }
    return {
      xx, sendEmit
    }
  },
}
</script>