<template>
	<div class="flex flex-col h-full">
		<div class="">
			<img 
				:src="burger.picture" 
				:alt="burger.pictureAlt"
				class="object-cover w-full"
			>
		</div>

		<div class="flex flex-col sm:flex-row items-top justify-between bg-white gap-0 sm:gap-2 px-2 py-4 ">
			<div class="text-sky-700 font-bold text-left font-condensed text-lg md:text-xl uppercase break-words">
				{{ burger.name }}
			</div>
			<div class="text-sky-700 text-base md:text-lg ">
				{{ burger.price }}€
			</div>
		</div>


		<div class="flex flex-col h-full">
			<div class="bg-sky-700 p-4 text-left text-sm md:text-base flex-1">
				{{ burger.description }}
			</div>

			<div class="bg-white p-2 text-sky-700 text-xs md:text-sm italic">
				<span class="font-bold">Ingredientes: </span>{{ burger.ingredients }}
			</div>
		</div>

	</div>

</template>

<script>
export default {
	name: 'MenuBurgerComp',
	title: 'MenuBurgerComp',
	props: {
		burger: {
			type: Object,
		}
	}


}
</script>

<style>

</style>