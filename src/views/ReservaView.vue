<template>
	<div class="bg-white text-sky-700 p-4 h-full">
		<TitleComp title="Reserva" />

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

		<div v-if="selectedRestaurant !== -1">
			<div class="text-center bg-sky-700 text-white py-2">
				<div>
					De acuerdo, vamos a reservar mesa en:
				</div>
				<div class="font-condensed font-bold text-2xl md:text-3xl uppercase">
					{{ restaurants[selectedRestaurant].name }}
				</div>
			</div>

			<div class="py-4">
				<div>Elige fecha</div>
			</div>
			<VueDatePicker 
				v-model="date"
				:format="format"
				:enable-time-picker="false"
				auto-apply
			/>

			<VueDatePicker 
				v-model="time" 
				time-picker 
				minutes-increment="30"
				auto-apply
			/>


		</div>
	</div>
</template>

<script>
import TitleComp from "../components/TitleComp.vue";
import RestaurantSelectComp from "../components/RestaurantSelectComp.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
	name: "ReservaCompView",
	components: { 
		TitleComp,
		RestaurantSelectComp,
		VueDatePicker
	},
	data() {
		return {
			time: {
				hours: 13,
				minutes: 30,
			},
			date: new Date(),
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
		};
	},
	methods: {
		selectRestaurant(id) {
			this.restaurants.forEach ( (r) => r.id === id ? r.selected = true : r.selected = false);
			this.selectedRestaurant = id;
		},
		format (date) {
			const day = date.getDate();
			const month = date.getMonth() + 1;
			const year = date.getFullYear();

			return `${day}/${month}/${year}`;
		},
		
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