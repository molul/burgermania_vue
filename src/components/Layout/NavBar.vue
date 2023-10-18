<template>
  <nav>
    <div
      class="flex bg-sky-700 items-center justify-between fixed w-full md:w-4/5 md:max-w-5xl top-0 font-navmenu z-50 h-16 md:h-20 text-white"
    >
      <div class="flex px-4 md:px-0 justify-between items-center w-full">
        <!-- Logo and name -->
        <div class="z-50 flex w-full items-center gap-2">
          <div
            class="font-condensed font-bold text-white hover:opacity-80 transition-opacity duration-200 text-4xl md:text-3xl lg:text-5xl"
          >
            <router-link
              class="block font-bold uppercase"
              to="/"
              @click="MenuClose()"
            >
              Burgerman<span class="bg-white text-sky-700">ia</span>
            </router-link>
          </div>
        </div>

        <!-- Menu -->
        <div class="z-50">
          <div class="space-x-4 hidden md:flex">
            <div
              class="flex border-4 border-white text-white hover:bg-white hover:text-sky-700 transition duration-200"
              v-for="(item, index) in navigationItems"
              :key="index"
            >
              <router-link
                class="block font-bold uppercase font-condensed text-md md:text-md lg:text-2xl px-4 py-2"
                :to="item.link"
                >{{ item.label }}</router-link
              >
            </div>
          </div>

          <!-- Mobile menu button -->
          <div
            class="z-50 block md:hidden cursor-pointer"
            @click="MenuToggle()"
          >
            <div
              className="mx-auto z-50 flex w-10 h-10 flex-col justify-between items-center md:hidden py-1 "
            >
              <span
                class="h-1 w-8 bg-white rounded-lg transform transition duration-200 ease-in-out"
                :class="[open ? 'rotate-45 translate-y-3.5' : '']"
              />
              <span
                class="h-1 bg-white rounded-lg transition-all duration-200 ease-in-out"
                :class="[open ? 'w-0' : 'w-10']"
              />
              <span
                class="h-1 w-8 bg-white rounded-lg transform transition duration-200 ease-in-out"
                :class="[open ? '-rotate-45 -translate-y-3.5' : '']"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        class="md:hidden absolute top-0 w-full h-screen left-0 transform transition-transform duration-200 ease-in-out bg-sky-800 bg-opacity-95 py-2 text-base space-y-4 px-4 flex flex-col items-center justify-center pb-32"
        :class="[open ? '-transform-x-0' : 'translate-x-full']"
      >
        <div
          class="flex justify-end"
          v-for="(item, index) in navigationItems"
          :key="index"
        >
          <router-link
            class="text-white hover:bg-white hover:text-sky-700 transition duration-200 font-bold uppercase font-condensed text-3xl md:text-2xl lg:text-2xl px-2 py-2 my-2"
            :to="item.link"
            @click="MenuClose()"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      navigationItems: [
        { label: "Carta", link: "/carta" },
        { label: "Reserva", link: "/reserva" },
        { label: "Pide", link: "/pide" },
        { label: "Nosotros", link: "/nosotros" },
      ],
    };
  },
  setup() {
    let open = ref(false);

    function MenuToggle() {
      open.value = !open.value;
    }

    function MenuClose() {
      open.value = false;
    }

    return { open, MenuToggle, MenuClose };
  },
};
</script>

<style></style>
