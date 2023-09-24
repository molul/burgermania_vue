<template>
  <div class="bg-white text-sky-700 h-full flex-1 p-8">
    <div class="md:w-3/5 mx-auto">
      <TitleComp title="Contacto" />

      <!-- Form -->
      <div v-if="formVisible" class="text-sm md:text-base">
        <form @submit.prevent="submitForm">
          <div class="flex flex-col mx-auto space-y-4">
            <div>
              Si tienes alguna pregunta, comentario o simplemente quieres
              ponerte en contacto con nosotros, por favor completa el siguiente
              formulario. Estaremos encantados de escucharte y responder a tus
              inquietudes lo antes posible.
            </div>

            <div class="">
              <label for="name">Nombre</label>
              <input
                type="text"
                name="name"
                v-model="name"
                class="p-2 border border-sky-700 rounded w-full"
              />
            </div>

            <div class="">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                v-model="email"
                class="p-2 border border-sky-700 rounded w-full"
              />
            </div>

            <div>
              <label for="message">Mensaje</label>
              <textarea
                name="message"
                v-model="message"
                class="p-2 border border-sky-700 rounded w-full"
              >
              </textarea>
            </div>

            <div v-if="formError" class="text-center text-red-500">
              Por favor, rellena todos los campos
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="text-lg md:text-lg border-4 font-condensed text-2xl uppercase py-2 px-4 font-bold transition-colors duration-200"
                :class="
                  status === 'submitting'
                    ? 'border-gray-500 bg-gray-500 text-gray-300'
                    : 'border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white '
                "
              >
                <div class="flex gap-2 items-center">
                  <div class="animate-spin" v-show="status === 'submitting'">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="fill-white"
                        opacity="0.2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        fill="#000000"
                      />
                      <path
                        class="fill-white"
                        d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                        fill="#000000"
                      />
                    </svg>
                  </div>
                  <div>
                    {{ status === "submitting" ? "Enviando..." : "Enviar" }}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- Message post send -->
      <div v-if="!formVisible" class="pb-40">
        Apreciamos tu interés y te agradecemos por contactarnos. Tu opinión es
        importante para nosotros y nos esforzamos por brindarte la mejor
        atención posible. ¡Esperamos saber de ti pronto!
      </div>
    </div>
  </div>
</template>

<script>
import TitleComp from "../components/TitleComp.vue";

export default {
  name: "ContactoCompView",
  components: {
    TitleComp,
  },
  data() {
    return {
      status: "",
      formVisible: true,
      formError: false,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      if (this.name != "" && this.email != "" && this.message != "") {
        this.formError = false;

        this.status = "submitting";

        setTimeout(() => {
          this.status = "submitted";
          this.formVisible = false;
        }, 2000);
      } else {
        this.formError = true;
      }
    },
  },
};
</script>
