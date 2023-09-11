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
				<div class="font-condensed font-bold text-lg uppercase">
					{{ restaurants[selectedRestaurant].name }}
				</div>
			</div>

			<div class="py-4">
				<div>Elige fecha</div>

			</div>

		</div>
	</div>
</template>

<script>
import TitleComp from "../components/TitleComp.vue";
import RestaurantSelectComp from "../components/RestaurantSelectComp.vue";


export default {
	name: "ReservaCompView",
	components: { 
		TitleComp,
		RestaurantSelectComp,
	},
	data() {
		return {
			time0: null,
			time1: null,
			time2: null,
			time3: null,
			//picked: new Date(),
			//date: null,
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
		
	}
}
</script>

<style>

</style>