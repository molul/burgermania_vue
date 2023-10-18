<template>
  <div
    class="fixed w-12 h-12 cursor-pointer bottom-4 right-4 transition duration-300"
    @click="scrollToTop()"
    :class="[isTop ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20']"
  >
    <div
      class="border-4 border-yellow-700 bg-white p-2 hover:bg-yellow-700 transition duration-200 fill-yellow-700 hover:fill-white transition duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24">
        <path
          d="m3.293 11.293 1.414 1.414L11 6.414V20h2V6.414l6.293 6.293 1.414-1.414L12 2.586l-8.707 8.707z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollToTopButton",
  data() {
    return {
      isTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scroll({ behavior: "smooth", left: 0, top: 0 });
    },
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        that.isTop = true;
      } else {
        that.isTop = false;
      }
    });
  },
};
</script>
