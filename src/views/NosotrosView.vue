<template>
  <div class="space-y-4 bg-sky-700 h-full text-sky-800 px-4 md:px-0 flex-1">
    <div
      class="p-0 md:p-0 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4"
    >
      <div
        class="border-4 border-white bg-sky-600 text-white font-condensed text-3xl flex items-center justify-center font-bold p-4 text-center uppercase"
      >
        Acerca de nosotros
      </div>

      <div
        class="border-4 border-white bg-white text-sky-700 p-4 text-left flex items-center"
      >
        <div>
          ¡Bienvenidos a <span class="font-bold">BurgerMania</span>, el lugar
          donde la pasión por las hamburguesas se encuentra con la calidad y el
          sabor excepcionales!
        </div>
      </div>

      <div
        class="border-4 border-white bg-white text-sky-700 p-4 text-left flex items-center"
      >
        <div>
          Fundado en 2023, somos un restaurante dedicado a ofrecer a nuestros
          clientes una experiencia gastronómica única. Nuestra historia se
          remonta a décadas atrás, cuando un grupo de amigos con una pasión
          compartida por las hamburguesas decidió abrir las puertas de este
          lugar especial. Desde entonces, hemos trabajado incansablemente para
          perfeccionar nuestras recetas y técnicas, garantizando que cada bocado
          que ofrezcamos sea una explosión de sabor.
        </div>
      </div>

      <div
        class="border-4 border-white bg-white text-sky-700 p-4 text-left flex items-center"
      >
        <div>
          Lo que nos distingue es nuestro compromiso con la calidad. Utilizamos
          los ingredientes más frescos y de la mejor calidad para crear nuestras
          hamburguesas, desde la carne de res jugosa hasta las verduras
          crujientes y los condimentos caseros. Cada hamburguesa se cocina a la
          perfección, a la parrilla, para brindarte ese sabor inigualable que te
          mantendrá regresando por más.
        </div>
      </div>

      <div
        class="border-4 border-white bg-white text-sky-700 p-4 text-left flex items-center"
      >
        <div>
          En <span class="font-bold">BurgerMania</span>, no solo nos enorgullece
          la calidad de nuestra comida, sino también la experiencia que
          brindamos a nuestros clientes. Nuestro personal amable y atento está
          aquí para asegurarse de que te sientas como en casa desde el momento
          en que cruzas nuestras puertas. Ya sea que vengas solo, con amigos o
          en familia, te garantizamos un ambiente cálido y acogedor donde puedes
          disfrutar de una buena comida y crear recuerdos duraderos.
        </div>
      </div>

      <div
        class="border-4 border-white bg-white text-sky-700 p-4 text-left flex items-center"
      >
        <div>
          Estamos emocionados de compartir nuestras excepcionales hamburguesas
          contigo y esperamos que disfrutes de tu experiencia en nuestro
          restaurante tanto como nosotros disfrutamos servirte. ¡Bienvenido a la
          familia <span class="font-bold">BurgerMania</span>!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComp from "../components/Common/TitleComp.vue";

export default {
  name: "NosotrosView",
  title: "Nosotros",
  components: {
    TitleComp,
  },
};
</script>
