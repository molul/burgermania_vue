<template>
  <div class="px-4 md:px-0">
    <div
      class="mx-auto lg:max-w-5xl max-w-full border-4 border-white bg-white bg-opacity-90 flex flex-col lg:flex-row w-full items-center justify-center lg:h-[380px] overflow-hidden"
    >
      <div class="w-full xl:w-1/2 h-full overflow-hidden">
        <img
          :src="burgerData.picture"
          alt="burgerDelMes"
          class="object-contain w-full"
        />
      </div>

      <div
        class="lg:w-1/2 text-center flex flex-col justify-between h-full space-y-0 pt-4"
      >
        <div
          class="text-sky-700 font-condensed uppercase text-3xl xl:text-5xl font-bold"
        >
          Burger del mes
        </div>

        <div
          class="py-4 md:py-6 px-4 flex items-center justify-center text-sm md:text-base font-semibold"
        >
          {{ burgerData.name }}
        </div>

        <div
          class="md:flex-1 flex flex-col h-full mx-auto md:max-w-5xl max-w-full bg-white bg-opacity-90 w-full justify-center space-y-4 text-sm md:text-base p-4 text-left"
        >
          <div>
            {{ burgerData.description }}
          </div>
          <div>
            <span class="font-bold">Precio: </span> {{ burgerData.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBurgerDelMesComp",
  title: "MenuBurgerDelMesComp",
  props: {
    burgerData: {
      type: Object,
    },
  },
};
</script>

<style></style>
