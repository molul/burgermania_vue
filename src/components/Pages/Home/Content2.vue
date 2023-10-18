<template>
  <div class="border-4 border-white flex flex-col h-full">
    <div class="h-1/2">
      <img :src="picture" :alt="pictureAlt" class="object-fit w-full h-full" />
    </div>
    <div class="h-1/2 bg-white text-sky-700 py-4 space-y-4 flex-1 px-2">
      <div class="flex flex-col justify-between space-y-4 h-full">
        <div>{{ text }}</div>

        <div class="pb-4">
          <ButtonComp :buttonText="buttonText" :buttonLink="buttonLink" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from "../../Common/ButtonComp.vue";

export default {
  name: "Content2",
  components: {
    ButtonComp,
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
