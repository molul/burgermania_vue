<template>
  <div class="space-y-4 h-full text-sky-800 px-4 md:px-0 bg-sky-700 flex-1">
    <div
      class="mx-auto lg:max-w-5xl max-w-full border-4 border-white bg-white bg-opacity-90 flex flex-col lg:flex-row w-full items-center justify-center"
    >
      <div class="w-full lg:w-2/3">
        <img
          :src="burgerDelMes.picture"
          alt="burgerDelMes"
          class="object-cover w-full"
        />
      </div>

      <div
        class="w-full lg:w-1/3 text-center space-y-8 flex flex-col py-8 px-8"
      >
        <div class="text-sky-700 font-condensed uppercase text-5xl font-bold">
          Burger del mes
        </div>

        <div class="">{{ burgerDelMes.name }}</div>
      </div>
    </div>

    <div
      class="p-4 mx-auto lg:max-w-5xl max-w-full border-4 border-white bg-white bg-opacity-90 w-full items-center justify-center space-y-4 h-full"
    >
      <div>
        {{ burgerDelMes.description }}
      </div>
      <div><span class="font-bold">Precio: </span>{{ burgerDelMes.price }}</div>
    </div>

    <div
      class="py-4 border-4 border-white bg-white bg-opacity-80 flex items-center justify-center"
    >
      <ButtonComp buttonText="Ver carta completa" buttonLink="/carta" />
    </div>
  </div>
</template>

<script>
import ButtonComp from "../components/Common/ButtonComp.vue";
import { burgerDelMesData } from "../data/burgerDelMes";

export default {
  name: "BurgerDelMesView",
  title: "BurgerDelMes",
  components: {
    ButtonComp,
  },
  data() {
    return {
      burgerDelMes: burgerDelMesData,
    };
  },
};
</script>
