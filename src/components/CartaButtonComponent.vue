<template>
	<div class="border-0 md:border-4 border-white  bg-white bg-opacity-50 text-yellow-700 text-center font-condensed font-bold text-lg uppercase flex justify-center py-4">
		<router-link 
			class="text-sky-700 border-4 border-sky-700 bg-white  hover:bg-sky-700 hover:text-white transition-colors font-bold uppercase font-condensed text-lg md:text-lg px-4 py-2" 
			to="/carta"
		>
		Ver carta
		</router-link>
		
	</div>
	
</template>

<script>
export default {
	name: 'CartaButtonComponent',
}
</script>

<style>

</style>