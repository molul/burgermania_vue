<template>
	<nav>
		<div class="w-full flex">
			<div class="flex justify-between mx-auto items-center p-4 w-full">
				<!-- Logo and name -->
				<div class="flex items-center gap-2">
					<div class="font-condensed font-bold text-white text-xl">BURGERMANIA</div>
				</div>
				<!-- Menu -->
				<div class="flex space-x-4">
					<div 
						class="flex text-white hover:bg-white hover:text-sky-700 transform duration-300"
						v-for="(item, index) in navigationItems" 
						:key="index" 
					>
						<router-link class="block font-bold uppercase font-condensed text-lg px-4 py-2" :to="item.link">{{ item.label }}</router-link>
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
	}
}
</script>

<style>

</style>