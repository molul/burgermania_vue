<template>
  <div class="bg-sky-700 flex flex-col font-mainText min-h-screen">
    <div
      class="mx-auto flex flex-col w-full md:w-4/5 md:max-w-5xl min-h-screen"
    >
      <div>
        <NavBar />
      </div>

      <div
        class="w-full align-top justify-center items-center break-words mt-16 md:mt-20 flex flex-col flex-grow"
      >
        <router-view />
      </div>

      <div>
        <Footer />
      </div>

      <div class="">
        <ScrollToTopButton />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Layout/NavBar.vue";
import Footer from "./components/Layout/Footer.vue";
import ScrollToTopButton from "./components/Common/ScrollToTopButton.vue";

export default {
  name: "AppComponent",
  components: {
    NavBar,
    Footer,
    ScrollToTopButton,
  },
};
</script>
