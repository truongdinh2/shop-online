<template>
    <v-img
      :height="height"
      :width="width"
      :max-height="maxHeight"
      :max-width="maxWidth"
      :src="`${myImage}/${src}`"
      :lazy-src="`${myImage}/${src}`"
      alt="alt"
      :contain="contain"
      :transition="transition"
      aspect-ratio="1"
    ></v-img>
  </template>
  <script>
  export default {
    name: 'Images',
    props: {
      src: String,
      height: Number,
      width: Number,
      maxHeight: Number,
      maxWidth: Number,
      contain: Boolean,
      transition: String,
      alt: String
    },
    data () {
        return {
            myImage: new URL(`../assets/imgs/`, import.meta.url).href,
        }
    }
  }
  </script>