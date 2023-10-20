<template>
  <div class="flex flex-col h-full">
    <div class="">
      <img
        :src="burger.picture"
        :alt="burger.pictureAlt"
        class="object-cover w-full"
      />
    </div>

    <div
      class="flex flex-col items-top justify-between bg-white gap-0 sm:gap-2 px-2 py-4 space-y-2"
    >
      <div
        class="text-sky-700 font-bold text-center font-condensed text-2xl md:text-xl uppercase break-words"
      >
        {{ burger.name }}
      </div>
      <div class="text-base md:text-base mx-auto">
        <span class="font-semibold bg-sky-700 text-white px-2 py-1">
          {{ burger.price }}€
        </span>
      </div>
    </div>

    <div class="flex flex-col h-full">
      <div class="bg-sky-700 p-2 md:p-4 text-left text-sm md:text-base flex-1">
        {{ burger.description }}
      </div>

      <div class="bg-white p-2 md:p-4 text-sky-700 text-sm md:text-base italic">
        <span class="font-bold">Ingredientes: </span>{{ burger.ingredients }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBurgerComp",
  title: "MenuBurgerComp",
  props: {
    burger: {
      type: Object,
    },
  },
};
</script>

<style></style>
