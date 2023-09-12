<template>
	<div class=" space-y-4 h-full text-sky-800 px-4 md:px-0 bg-sky-700 flex-1">
		<div class="mx-auto sm:max-w-5xl max-w-full border-4 border-white bg-white bg-opacity-90 flex flex-col sm:flex-row w-full items-center justify-center ">
			<div class="w-full sm:w-2/3 ">
				<img 
					src="/img/burgers/burgerDelMes.jpg" 
					alt="burgerDelMes"
					class="object-cover w-full"
				>
			</div>
			
			<div class="w-full sm:w-1/3 text-center space-y-8 flex flex-col py-8 px-8">
				<div class="text-sky-700 font-condensed uppercase text-5xl font-bold">
					Burger del mes
				</div>
	
				<div class="">
					Hamburguesa de Pollo con Salsa de Mango y Aguacate
				</div>
			</div>
		</div>

		<div class="p-4 mx-auto md:max-w-5xl max-w-full border-4 border-white bg-white bg-opacity-90 w-full items-center justify-center space-y-4 h-full">
			<div>
				Disfruta de una jugosa hamburguesa de pollo o nuestra opción vegetariana, ambas con nuestra deliciosa salsa de mango y aguacate. Preparadas con pechuga de pollo o una alternativa vegetariana sazonada con comino y pimentón, servidas en un pan integral. Acompañadas de hojas de lechuga, tomate y cebolla roja. Una experiencia tropical en cada bocado.
			</div>
			<div>
				<span class="font-bold">Precio: </span>12.95€
			</div>
		</div>

		<div class="py-4 border-4 border-white bg-white bg-opacity-80 flex items-center justify-center">
			<ButtonComp buttonText="Ver carta completa" buttonLink="/carta" />
		</div>
	</div>
</template>

<script>
import ButtonComp from "../components/ButtonComp.vue";

export default {
	name: 'BurgerDelMesView',
	title: 'BurgerDelMes',
	components: { 
		ButtonComp,
	},
}
</script>
