<template>
	<nav>
		<div class="w-full flex ">
			<div class="flex justify-between mx-auto items-center py-4 px-4 md:px-0 w-full">
				<!-- Logo and name -->
				<div class="flex items-center gap-2">
					<div class="font-condensed font-bold text-white hover:opacity-80 transition-opacity  duration-300 text-3xl md:text-3xl lg:text-5xl">
						<router-link class="block font-bold uppercase" to="/">Burgermania</router-link>
					</div>
				</div>
				<!-- Menu -->
				<div class="space-x-4 hidden md:flex">
					<div 
						class="flex border-4 border-white  text-white hover:bg-white hover:text-sky-700 transition duration-300"
						v-for="(item, index) in navigationItems" 
						:key="index" 
					>
						<router-link class="block font-bold uppercase font-condensed text-md md:text-lg lg:text-2xl px-4 py-2" :to="item.link">{{ item.label }}</router-link>
					</div>
				</div>

				<!-- Mobile menu button -->
				<div class="block md:hidden">
					<div className="mx-auto z-50 flex w-10 h-10 flex-col justify-between items-center md:hidden py-1 ">
							<span class='h-1 w-8 bg-white rounded-lg transform transition duration-menuDuration ease-in-out'/>
							<span class='h-1 w-8 bg-white rounded-lg transition-all duration-menuDuration ease-in-out ' />
							<span class='h-1 w-8 bg-white rounded-lg transform transition duration-menuDuration ease-in-out' />
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			navigationItems: [
			{ label: 'Carta', link: '/carta' },
			{ label: 'Reserva', link: '/reserva' },
			{ label: 'Pide', link: '/pide' },
			{ label: 'Nosotros', link: '/nosotros' },
			]
		}
	},
}
</script>

<style>

</style>