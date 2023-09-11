<template>
	<div class="bg-white text-sky-700 p-4 h-full">
		<div class="md:w-3/5 mx-auto">

			<TitleComp title="Contacto" />

			<!-- Form -->
			<div v-if="formVisible">
				<form @submit.prevent="submitForm">
					<div class="flex flex-col mx-auto space-y-4 ">
						<div>
							Si tienes alguna pregunta, comentario o simplemente quieres ponerte en contacto con nosotros, por favor completa el siguiente formulario. Estaremos encantados de escucharte y responder a tus inquietudes lo antes posible.
						</div>
						
						<div class="">
							<label for="name">Nombre</label>
							<input 
								type="text" 
								name="name" 
								v-model="name"
								class=" p-2 border border-sky-700 rounded w-full"
							/>
						</div>

						<div class="">
							<label for="email">Email</label>
							<input 
								type="email" 
								name="email" 
								v-model="email"
								class=" p-2 border border-sky-700 rounded w-full"
							/>
						</div>

						<div>
							<label for="message">Mensaje</label>
							<textarea 
								name="message" 
								v-model="message"
								class=" p-2 border border-sky-700 rounded w-full"
							>
							</textarea>
						</div>

						<div v-if="formError" class="text-center text-red-500">Por favor, rellena todos los campos</div>

						<div class="text-center">
							<button 
								type="submit"
								class="  bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-600 transition-colors duration-300"
							>
								Send Message
							</button>
						</div>
					</div>
				</form>
			</div>

			<!-- Message post send -->
			<div v-if="!formVisible" class="pb-40">
				Apreciamos tu interés y te agradecemos por contactarnos. Tu opinión es importante para nosotros y nos esforzamos por brindarte la mejor atención posible. ¡Esperamos saber de ti pronto!
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
				this.formVisible = false;
			} else {
				this.formError = true;
			}
		},
	},
}
</script>