<template>
  <div class="bg-white text-sky-700 p-8 h-full flex-1">
    <TitleComp title="PEDIDO A DOMICILIO" />

    <div class="space-y-4">
      <div class="text-center">
        ¿No tienes ganas de salir de casa pero sí de BurgerMania? ¡Estupendo!
        Puedes pedir nuestras deliciosas hamburgesas desde los principales
        servicios de delivery:
      </div>

      <div class="grid grid-cols-1 md:px-28 lg:px-0 lg:grid-cols-3 gap-4">
        <div>
          <a href="https://glovoapp.com/es/es/" target="_blank">
            <img
              src="/img/logos/glovo.webp"
              alt="glovo"
              class="object-fit w-full h-full"
            />
          </a>
        </div>

        <div>
          <a href="https://www.just-eat.es/" target="_blank">
            <img
              src="/img/logos/justEat.webp"
              alt="justEat"
              class="object-fit w-full h-full"
            />
          </a>
        </div>
        <div>
          <a href="https://www.ubereats.com/es" target="_blank">
            <img
              src="/img/logos/uberEats.webp"
              alt="uberEats"
              class="object-fit w-full h-full"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComp from "../components/TitleComp.vue";

export default {
  name: "PideCompView",
  components: {
    TitleComp,
  },
};
</script>

<style></style>
