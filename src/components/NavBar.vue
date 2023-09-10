<template>
	<nav>
		<div class="w-full flex h-16 md:h-full">
			<div class="flex justify-between mx-auto items-center py-4 px-4 md:px-0 w-full">
				<!-- Logo and name -->
				<div class="flex items-center gap-2">
					<div class="font-condensed font-bold text-white hover:opacity-80 transition-opacity  duration-300 text-4xl md:text-3xl lg:text-5xl">
						<router-link class="block font-bold uppercase" to="/">Burgerman<span class="bg-white text-sky-700">ia</span></router-link>
					</div>
				</div>
				<!-- Menu -->
				<div class="space-x-4 hidden md:flex">
					<div 
						class="flex border-4 border-white  text-white hover:bg-white hover:text-sky-700 transition duration-300"
						v-for="(item, index) in navigationItems" 
						:key="index" 
					>
						<router-link class="block font-bold uppercase font-condensed text-md md:text-md lg:text-2xl px-4 py-2" :to="item.link">{{ item.label }}</router-link>
					</div>
				</div>

				<!-- Mobile menu button -->
				<div class="block md:hidden cursor-pointer" @click="MenuToggle()" >
					<div className="mx-auto z-50 flex w-10 h-10 flex-col justify-between items-center md:hidden py-1 ">
							<span 
								class='h-1 w-10 bg-white rounded-lg transform transition duration-300 ease-in-out'
								:class="[open ? 'rotate-45 translate-y-3.5' : '']"
							/>
							<span 
								class='h-1 w-8 bg-white rounded-lg transition-all duration-300 ease-in-out ' 
								:class="[open ? 'w-0' : 'w-full']"
							/>
							<span 
								class='h-1 w-10 bg-white rounded-lg transform transition duration-300 ease-in-out' 
								:class="[open ? '-rotate-45 -translate-y-3.5' : '']"
							/>
					</div>
				</div>

				<div 
					class="
						md:hidden
						absolute
						top-16
						w-full
						h-screen
						left-0
						transform 
						transition-transform 
						duration-300
						ease-in-out 
						bg-sky-800
						py-2 
						text-base
						space-y-0
						px-4 
					"
					:class="[open ? '-transform-x-0' : 'translate-x-full']"
				>
					<div 
						class="flex justify-end "
						v-for="(item, index) in navigationItems" 
						:key="index" 
					>
						<router-link 
							class=" text-white hover:bg-white hover:text-sky-700 transition duration-300 font-bold uppercase font-condensed text-xl md:text-2xl lg:text-2xl px-2 py-2 my-2" 
							:to="item.link"
							@click="MenuClose()"
						>
							{{ item.label }}
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { ref } from 'vue'

export default {
	data() {
		return {
			navigationItems: [
				{ label: 'Carta', link: '/carta' },
				{ label: 'Reserva', link: '/reserva' },
				{ label: 'Nosotros', link: '/nosotros' },
				{ label: 'Contacto', link: '/contacto' },
			]
		}
	},
	setup() {
		let open = ref(false)

		function MenuToggle() {
				open.value = !open.value
		}

		function MenuClose() {
				open.value = false
		}

		return {open, MenuToggle, MenuClose}

	}
}
</script>

<style>

</style>