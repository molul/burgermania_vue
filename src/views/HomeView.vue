<template>
	<div class="space-y-6">
		<!-- Pedido a domicilio -->
		<div class="mx-auto md:max-w-5xl max-w-full rounded border-4 border-white bg-white bg-opacity-20 flex w-full items-center justify-center ">
			<div class="w-2/3">
				<img src="/img/burgers/burger1.jpg" alt="burger1">
			</div>
			
			<div class="w-1/3 text-white text-center font-condensed uppercase text-5xl font-bold">
				Pedido a domicilio
			</div>
		</div>

		<!-- 3 divs -->
		<div class="flex justify-bettween w-full text-white text-center font-condensed text-4xl uppercase font-bold space-x-6">
			<div class="w-1/3 rounded border-4 border-white">
				<div>
					<img src="/img/burgers/burger1.jpg" alt="burger1">
				</div>
				<div class="bg-white text-sky-700 py-4 space-y-4">
					<div>Reserva tu mesa</div>
					<router-link class="block font-bold uppercase font-condensed text-2xl px-4 py-2" to="/reserva">Reserva</router-link>
				</div>
				
			</div>
			<div class="w-1/3 rounded border-4 border-white">
				<div>
					<img src="/img/burgers/burger1.jpg" alt="burger1">
				</div>
				<div class="bg-white text-sky-700 py-4 space-y-4">
					<div>Reserva tu mesa</div>
					<router-link class="block font-bold uppercase font-condensed text-2xl px-4 py-2" to="/reserva">Reserva</router-link>
				</div>
				
			</div>
			<div class="w-1/3 rounded border-4 border-white">
				<div>
					<img src="/img/burgers/burger1.jpg" alt="burger1">
				</div>
				<div class="bg-white text-sky-700 py-4 space-y-4">
					<div>Reserva tu mesa</div>
					<router-link class="block font-bold uppercase font-condensed text-2xl px-4 py-2" to="/reserva">Reserva</router-link>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import TitleComp from '../components/TitleComp.vue';

export default {
    name: 'HomeView',
    title: 'Inicio',
}
</script>
