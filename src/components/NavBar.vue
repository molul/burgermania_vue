<template>
	<nav>
		<div class="w-full flex ">
			<div class="flex justify-between w-full items-center p-4 ">
				<div class="flex items-center gap-4">
					<img src="/logo.png" />
					<div class="font-condensed font-bold text-white text-4xl">BURGERMANIA</div>
				</div>
				<div class="flex space-x-8">
					<div 
						class="px-4 py-2 border-4 border-white rounded text-white hover:bg-white hover:text-sky-700 transform duration-300"
						v-for="(item, index) in navigationItems" 
						:key="index" 
					>
						<a :href="item.link" class="font-bold uppercase font-condensed text-2xl">{{ item.label }}</a>
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