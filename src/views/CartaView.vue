<template>
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0">
		<div 
			class="flex flex-col border-4 border-white text-white  "
			v-for="(burger, index) in burgers" 
			:key="index" 
		>
			<MenuBurgerComp :burger="burger" />
		</div>
	</div>
</template>

<script>
import MenuBurgerComp from '../components/MenuBurgerComp.vue';

export default {
	name: 'CartaView',
	title: 'Carta',
	components: {
		MenuBurgerComp
	},
	data() {
		return {
			burgers: [
				{ 
					name: 'Clásica', 
					ingredients: 'Carne de res, pan de hamburguesa, lechuga, tomate, cebolla, queso cheddar, kétchup, mostaza, mayonesa.',
					description: 'La hamburguesa tradicional con carne jugosa, queso cheddar derretido y condimentos clásicos. Simplemente deliciosa.',
					picture: '/img/carta/clasica.jpg',
					price: 11.95,
				},
				{ 
					name: 'BBQ', 
					ingredients: 'Carne de res, pan de hamburguesa, cebolla caramelizada, bacon, queso suizo, salsa BBQ.',
					description: 'Una explosión de sabor con carne a la parrilla, cebolla caramelizada, bacon crujiente y salsa BBQ.',
					picture: '/img/carta/bbq.jpg',
					price: 12.95,
				},
				{ 
					name: 'Pavo', 
					ingredients: 'Carne de pavo, pan integral, espinacas, tomate, aguacate, mayonesa de cilantro.',
					description: 'Una opción más ligera con carne de pavo magra, aguacate cremoso y una mayonesa de cilantro refrescante.',
					picture: '/img/carta/pavo.jpg',
					price: 12.95,
				},
				{ 
					name: 'Vegana de Garbanzos', 
					ingredients: 'Hamburguesa vegana de garbanzos, pan vegano, lechuga, tomate, pepinillos, salsa vegana.',
					description: 'Una alternativa vegana sabrosa con una hamburguesa de garbanzos, vegetales frescos y salsa vegana.',
					picture: '/img/carta/vegana-garbanzos.jpg',
					price: 13.95,
				},
				{ 
					name: 'Tex-Mex', 
					ingredients: 'Carne de res, pan de hamburguesa, guacamole, jalapeños, cebolla morada, queso pepper jack.',
					description: 'Un toque picante con carne, guacamole cremoso, jalapeños y queso pepper jack fundido.',
					picture: '/img/carta/texmex.jpg',
					price: 12.95,
				},
				{ 
					name: 'Ternera con Queso Azul', 
					ingredients: 'Carne de ternera, pan de hamburguesa, lechuga, tomate, cebolla caramelizada, queso azul, mayonesa de mostaza.',
					description: 'Una combinación irresistible con carne de ternera jugosa, queso azul derretido, cebolla caramelizada y una mayonesa de mostaza que realza los sabores.',
					picture: '/img/carta/ternera-queso-azul.jpg',
					price: 14.95,
				},
				{ 
					name: 'Pollo Picante', 
					ingredients: 'Pechuga de pollo, pan de hamburguesa, jalapeños en rodajas, lechuga, cebolla morada, salsa picante.',
					description: 'Un toque de calor con pechuga de pollo a la parrilla, jalapeños y salsa picante.',
					picture: '/img/carta/pollo-picante.jpg',
					price: 12.95,
				},
				{ 
					name: 'Champiñones Portobello', 
					ingredients: 'Champiñones Portobello, pan integral, espinacas, tomate, queso suizo, aioli de ajo asado.',
					description: 'Una opción vegetariana con champiñones Portobello a la parrilla, queso suizo y aioli de ajo asado.',
					picture: '/img/carta/champi-portobello.jpg',
					price: 11.95,
				},
				{ 
					name: 'Hawaiana', 
					ingredients: 'Carne de res, pan de hamburguesa, piña a la parrilla, jamón, queso suizo, salsa de piña y teriyaki.',
					description: 'Un toque tropical con carne, piña a la parrilla, jamón, queso suizo y salsa de piña y teriyaki.',
					picture: '/img/carta/hawaiana.jpg',
					price: 14.95,
				},
				{ 
					name: 'Mediterránea de Cordero', 
					ingredients: 'Carne de cordero, pan de pita, lechuga, tomate, cebolla roja, tzatziki.',
					description: 'Sabores mediterráneos con carne de cordero, tzatziki fresco y vegetales crujientes.',
					picture: '/img/carta/mediterranea-cordero.jpg',
					price: 15.95,
				},
				{ 
					name: 'Vegana de Avena y Lentejas', 
					ingredients: 'Hamburguesa vegana de avena y lentejas, pan vegano, espinacas, tomate, cebolla caramelizada, mayonesa vegana.',
					description: 'Una opción vegana con una hamburguesa de avena y lentejas, cebolla caramelizada y mayonesa vegana.',
					picture: '/img/carta/vegana-avena-lentejas.jpg',
					price: 13.95,
				},
				{ 
					name: 'Pato a la Naranja', 
					ingredients: 'Confit de pato, pan de hamburguesa de brioche, rúcula, naranja confitada, salsa de naranja agridulce.',
					description: 'Un toque gourmet con confit de pato, naranja confitada y una deliciosa salsa de naranja agridulce.',
					picture: '/img/carta/pato-naranja.jpg',
					price: 15.95,
				},
				
			]
		}
	},

}
</script>
