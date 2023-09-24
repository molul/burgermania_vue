<template>
  <footer>
    <div class="bottom-0 w-full bg-sky-700">
      <div class="flex justify-start text-left pt-4 md:pt-2">
        <div
          class="px-4 py-4 md:px-0 w-full space-y-8 md:flex md:justify-between md:items-center md:space-y-0"
        >
          <!-- Logo and name -->
          <div class="flex items-center gap-2">
            <div class="font-condensed font-bold text-white text-3xl">
              <router-link
                class="block font-bold uppercase font-condensed hover:opacity-80 transition-opacity duration-200"
                to="/"
                >Burgerman<span class="bg-white text-sky-700"
                  >ia</span
                ></router-link
              >
            </div>
          </div>

          <!-- Menu -->
          <div
            class="md:flex md:flex-row md:items-center space-y-4 md:space-y-0"
          >
            <div class="" v-for="(item, index) in navigationItems" :key="index">
              <router-link
                class="font-bold uppercase font-condensed text-lg md:px-4 py-1 md:py-2 text-white hover:opacity-80 md:hover:opacity-100 md:hover:bg-white md:hover:text-sky-700 transform duration-200"
                :to="item.link"
                >{{ item.label }}</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full px-4 py-4 text-left md:text-center md:px-0 w-full text-white text-sm sm:text-base"
      >
        Desarrollado por
        <a
          href="https://www.luismorcilloluque.com/es"
          target="_blank"
          class="font-bold"
          >Luis Morcillo</a
        >
        con Vue &copy; 2023
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
        { label: "Carta", link: "/carta" },
        { label: "Reserva", link: "/reserva" },
        { label: "Pide", link: "/pide" },
        { label: "Nosotros", link: "/nosotros" },
        { label: "Contacto", link: "/contacto" },
      ],
    };
  },
};
</script>

<style></style>
