<template>
	<div class="space-y-6 h-full flex-1">
		<!-- Pedido a domicilio -->
		<Content1 
			picture="/img/burgers/burgerMain2.webp" 
			pictureAlt="burger1" 
			text="¿Qué te apetece hoy?"
			buttonText="Ver carta"
			buttonLink="/carta"
		/>

		<!-- 3 divs -->
		<div class="lg:grid lg:grid-cols-3 lg:gap-4 space-y-4 px-4 lg:space-y-0 md:px-0 w-full text-white text-center align-top font-condensed text-4xl uppercase font-bold">
			<Content2 
				picture="/img/restaurant/restaurant1Interior.webp" 
				pictureAlt="restaurantInterior" 
				text="Reserva tu mesa"
				buttonText="Haz tu reserva"
				buttonLink="/reserva"
			/>

			<Content2 
				picture="/img/burgers/burgerMain1.webp" 
				pictureAlt="burger2" 
				text="Burger del mes"
				buttonText="Ver"
				buttonLink="/burger-del-mes"
			/>

			<Content2 
				picture="/img/burgers/burger3.webp" 
				pictureAlt="burger3" 
				text="Burgermania en tu casa"
				buttonText="Haz tu pedido"
				buttonLink="/pide"
			/>
		</div>

	</div>
</template>

<script>
import Content1 from '../components/Content1.vue';
import Content2 from '../components/Content2.vue';

export default {
	name: 'HomeView',
	title: 'Inicio',
	components: {
		Content1,
		Content2,
	}
}
</script>
