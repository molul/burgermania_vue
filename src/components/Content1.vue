<template>
  <div
    class="mx-auto lg:max-w-5xl max-w-full border-0 md:border-4 border-white bg-white bg-opacity-90 flex flex-col lg:flex-row w-full items-center justify-center"
  >
    <div class="w-full lg:w-2/3">
      <img :src="picture" :alt="pictureAlt" class="object-cover w-full" />
    </div>

    <div class="px-4 w-full lg:w-1/3 text-center space-y-8 flex flex-col py-8">
      <div class="text-sky-700 font-condensed uppercase text-5xl font-bold">
        {{ text }}
      </div>

      <div class="">
        <ButtonCompVue :buttonText="buttonText" :buttonLink="buttonLink" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCompVue from "./ButtonComp.vue";

export default {
  name: "Content1",
  components: {
    ButtonCompVue,
  },
  props: {
    picture: {
      type: String,
    },
    pictureAlt: {
      type: String,
    },
    text: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    buttonLink: {
      type: String,
    },
  },
};
</script>
