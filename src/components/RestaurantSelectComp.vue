<template>
	<div 
		class="border-4 border-sky-700 hover:cursor-pointer"
		:class="[restSelected ? 'border-yellow-700' : 'border-sky-700']"
		@click="selectRestaurant"
	>
		<div>
			<img 
				:src="restPicture" 
				alt="restaurantInterior"
				class=""
			/>
		</div>
		<div 
			class="p-4 font-condensed text-2xl md:text-3xl text-white bg-sky-700 uppercase font-bold text-center"
			:class="[restSelected ? 'bg-yellow-700' : 'bg-sky-700']"
		>
			{{ name }}
		</div>
		<div 
			class="p-4 text-xs md:text-sm text-center"
			:class="[restSelected ? 'text-yellow-700' : 'text-sky-700']"
		>
			{{address}}
		</div>

	</div>
</template>

<script>

export default {
	name: "RestaurantSelectComp",
	props: {
		id: 0,
		restSelected: false,
		restPicture: '',
		name: '',
		address: '',
		selectFunction: {
			type: Function,
		}
	},
	
	methods: {
		selectRestaurant() {
			this.$emit('select-restaurant', this.id)
		}
	}
}
</script>

<style>

</style>