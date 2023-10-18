<template>
  <div class="bg-sky-700 space-y-4">
    <!-- Burger del mes -->
    <MenuBurgerDelMesComp :burgerData="burgerDelMes" />
    <!-- Menu list -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0"
    >
      <div
        class="flex flex-col border-4 border-white text-white"
        v-for="(burger, index) in burgers"
        :key="index"
      >
        <MenuBurgerComp :burger="burger" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuBurgerComp from "../components/Pages/Carta/MenuBurgerComp.vue";
import MenuBurgerDelMesComp from "../components/Pages/Carta/MenuBurgerDelMesComp.vue";
import { burgersData } from "../data/burgers";
import { burgerDelMesData } from "../data/burgerDelMes";

export default {
  name: "CartaView",
  title: "Carta",
  components: {
    MenuBurgerComp,
    MenuBurgerDelMesComp,
  },
  data() {
    return {
      burgers: burgersData,
      burgerDelMes: burgerDelMesData,
    };
  },
};
</script>
