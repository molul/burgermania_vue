<template>
  <router-link
    class="bg-white text-yellow-700 border-4 border-yellow-700 hover:bg-yellow-700 hover:text-white transition-colors font-bold uppercase font-condensed text-lg md:text-lg px-4 py-2"
    :to="buttonLink"
  >
    {{ buttonText }}
  </router-link>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    buttonText: {
      type: String,
    },
    buttonLink: {
      type: String,
    },
  },
};
</script>
