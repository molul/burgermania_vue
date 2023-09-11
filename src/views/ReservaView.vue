<template>
	<div class="bg-white text-sky-700 p-4 h-full">

		<!-- Reservation steps -->
		<div v-show="status !== 'confirmed'">
			<TitleComp title="Reserva" />
			<!-- Select restaurant -->
			<div>
				<div class="text-center ">
					¿Dónde quieres comer hoy?
				</div>

				<div class="grid grid-cols-2 gap-4 justify-between py-4 ">
					<div 
						class="flex "
						v-for="(restaurant, index) in restaurants" 
						:key="index" 
					>
						<RestaurantSelectComp
							:restSelected="restaurant.selected" 
							@select-restaurant="selectRestaurant"
							:id="index"
							:restPicture="restaurant.picture"
							:name="restaurant.name"
							:address="restaurant.address"
						/>
					</div>
				</div>
			</div>

			<!-- Select date and time -->
			<div ref="selectDataTime" class="scroll-mt-20">
				<div v-show="selectedRestaurant !== -1">
					<div class="text-center bg-sky-700 text-white py-2">
						<div>
							De acuerdo, vamos a reservar mesa en:
						</div>
						<div class="font-condensed font-bold text-2xl md:text-3xl uppercase">
							{{ selectedRestaurant !== -1 && restaurants[selectedRestaurant].name }}
						</div>
					</div>

					<div class="py-4 text-center flex items-center justify-center mx-auto w-full gap-4">
						<div class="w-1/3">Elige fecha</div>
						<div class="w-2/3">
							<VueDatePicker 
								v-model="date"
								:format="format"
								:enable-time-picker="false"
								auto-apply
							/>
						</div>
					</div>

					<div class="py-4 text-center ">
						<div class="mb-2">Elige hora</div>
						<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
							<div 
								v-for="(h, i) in hours" 
								:key="i" 
								class="border-2 border-sky-700 p-2 cursor-pointer  transition-colors duration-200" 
								@click="selectHour(i)"
								:class="[selectedHour === i ? 'bg-sky-700 text-white' : 'hover:text-white hover:bg-sky-600']"

							>
									{{ h.hour }}
							</div>
						</div>
					</div>



				</div>
			</div>

			<!-- Confirm reservation -->
			<div ref="confirmReservation" class="scroll-mt-20">
				<div v-show="selectedHour !== -1" class="text-center py-6 space-y-4">
					<div>
						<div class="font-condensed font-bold uppercase text-2xl">
							Estos son los datos de tu reserva:
						</div>

						<div class="">
							<span class="font-bold">Restaurante: </span>
							{{ selectedRestaurant !== -1 && restaurants[selectedRestaurant].name }}
						</div>

						<div class="">
							<span class="font-bold">Fecha:</span> 
							{{  date.toLocaleDateString() }}
						</div>

						<div class="">
							<span class="font-bold">Hora:</span>
							{{ selectedHour !== -1 && hours[selectedHour].hour }}
						</div>
					</div>
					<div>
						Para terminar, pulsa el botón de debajo para confirmar tu reserva
					</div>
					<button 
						class="text-lg md:text-lg border-4 font-condensed text-2xl uppercase py-2 px-4 font-bold transition-colors duration-200 "
						:class="status === 'confirming' ? 'border-gray-500 bg-gray-500 text-gray-300' : 'border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white '"
						@click="confirmReservation"
					>
						<div class="flex gap-2 items-center">
							<div class="animate-spin" v-show="status === 'confirming'">
								<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path class="fill-white" opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#000000"/>
									<path class="fill-white" d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="#000000"/>
								</svg>
							</div>
							<div>
								{{ status === 'confirming' ? 'Confirmando...' : 'Confirmar' }}
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>

		<div v-show="status === 'confirmed'" class="text-center">
			<TitleComp title="¡Reserva confirmada!" />
			
			<div class="space-y-4">
				<div>
					Nos vemos en el restaurante {{ selectedRestaurant !== -1 && restaurants[selectedRestaurant].name }}, el {{  date.toLocaleDateString() }} a las {{ selectedHour !== -1 && hours[selectedHour].hour }}.
				</div>

				<div>
					Mientras tanto, ¿quieres ir echando un ojo a nuestra carta?
				</div>

				<div class="py-4">
					<ButtonComp buttonText="Ver carta" buttonLink="/carta" />
				</div>
			</div>
				
				

		</div>

	</div>
</template>

<script>
import TitleComp from "../components/TitleComp.vue";
import RestaurantSelectComp from "../components/RestaurantSelectComp.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import ButtonComp from "../components/ButtonComp.vue";

export default {
	name: "ReservaCompView",
	components: { 
		TitleComp,
		RestaurantSelectComp,
		VueDatePicker,
		ButtonComp
	},
	data() {
		return {
			status: 'started',
			date: new Date(),
			hours: [ 
				{ id: 1, hour: "13:00"}, 
				{ id: 2, hour: "13:30"}, 
				{ id: 3, hour: "14:00"}, 
				{ id: 4, hour: "14:30"}, 
				{ id: 5, hour: "15:00"}, 
				{ id: 6, hour: "15:30"}, 
				{ id: 7, hour: "16:00"}, 
				{ id: 8, hour: "16:30"}, 
				{ id: 9, hour: "20:00"}, 
				{ id: 10, hour: "20:30"}, 
				{ id: 11, hour: "21:00"}, 
				{ id: 12, hour: "21:30"}, 
				{ id: 13, hour: "22:00"}, 
				{ id: 14, hour: "22:30"}, 
				{ id: 15, hour: "23:00"},
			],
			restaurants: [
				{ 
					id: 0,
					name: 'Los Ángeles', 
					address: 'Avenida de Los Ángeles de San Rafael, 7 - Castellón',
					picture: '/img/restaurant/restaurant1Interior.jpg',
					selected: false,
				},
				{ 
					id: 1,
					name: 'Sol', 
					address: 'Avenida del Sol , 15 - Alicante',
					picture: '/img/restaurant/restaurant2Interior.jpg',
					selected: false,
				},
			],
			selectedRestaurant: -1,
			selectedHour: -1,
		};
	},
	methods: {
		selectRestaurant(id) {
			this.restaurants.forEach ( (r) => r.id === id ? r.selected = true : r.selected = false);
			this.selectedRestaurant = id;

			setTimeout ( () => {
				this.$refs.selectDataTime.scrollIntoView({ behavior: 'smooth' });
			}, 250)

		},
		format (date) {
			const day = date.getDate();
			const month = date.getMonth() + 1;
			const year = date.getFullYear();

			return `${day}/${month}/${year}`;
		},
		selectHour(id) {
			this.selectedHour = id;
			
			setTimeout ( () => {
				this.$refs.confirmReservation.scrollIntoView({ behavior: 'smooth' });
			}, 250)
		},
		confirmReservation () {
			this.status = 'confirming';

			setTimeout ( () => {
				this.status = 'confirmed';
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			}, 2500)
		}
		
	}
}
</script>

<style>
.dp__theme_light {
   --dp-background-color: #ffffff;
   --dp-text-color: #0369a1;
   --dp-hover-color: #f3f3f3;
   --dp-hover-text-color: #212121;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #0369a1;
   --dp-primary-text-color: #f8f5f5;
   --dp-secondary-color: #c0c4cc;
   --dp-border-color: #ddd;
   --dp-menu-border-color: #ddd;
   --dp-border-color-hover: #aaaeb7;
   --dp-disabled-color: #f6f6f6;
   --dp-scroll-bar-background: #f3f3f3;
   --dp-scroll-bar-color: #959595;
   --dp-success-color: #76d275;
   --dp-success-color-disabled: #a3d9b1;
   --dp-icon-color: #959595;
   --dp-danger-color: #ff6f60;
   --dp-highlight-color: rgba(25, 118, 210, 0.1);
}
</style>