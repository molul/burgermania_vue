<template>
  <div class="px-4 md:px-0">
    <div
      class="mx-auto lg:max-w-5xl max-w-full border-4 border-white lg:grid lg:grid-cols-5 w-full"
    >
      <!-- Image -->
      <div class="lg:col-span-3">
        <img
          :src="burgerData.picture"
          alt="burgerDelMes"
          class="object-cover w-full h-full"
        />
      </div>

      <!-- Text -->
      <div
        class="text-center flex flex-col justify-between space-y-0 lg:col-span-2"
      >
        <!-- First text block -->
        <div
          class="py-8 bg-white bg-opacity-90 h-1/2 flex flex-col items-center justify-center"
        >
          <div
            class="text-sky-700 font-condensed uppercase text-3xl xl:text-5xl font-bold"
          >
            Burger del mes
          </div>
          <div
            class="px-4 flex items-center justify-center text-sm md:text-base font-semibold"
          >
            {{ burgerData.name }}
          </div>
        </div>

        <!-- Descripcion and price -->
        <div class="py-4 lg:py-12 bg-white h-1/2">
          <div
            class="flex flex-col h-full mx-auto md:max-w-5xl max-w-full w-full justify-center space-y-6 text-sm md:text-base p-4 text-left"
          >
            <div>
              {{ burgerData.description }}
            </div>
            <div class="text-center">
              <span
                class="text-center font-semibold bg-sky-700 text-white px-4 py-2 text-xl"
              >
                {{ burgerData.price }}€
              </span>
            </div>
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
