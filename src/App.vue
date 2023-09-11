<template>
	<div class="bg-sky-700 min-h-screen flex flex-col font-mainText ">
		<div class="flex-1 h-full mx-auto flex flex-col w-full md:w-4/5 md:max-w-5xl ">
			<div>
				<NavBar />
			</div>

			<div class="
					w-full
					align-top
					justify-center
					items-center
					break-words
					mt-16
					md:mt-20
					
					flex
					flex-grow
					bg-white
			">
				<router-view/>
			</div>

			<div>
				<Footer />
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
	name: "AppComponent",
	components: { 
		NavBar,
		Footer,
	},
}
</script>
