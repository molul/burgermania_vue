<template>
	<div class="bg-sky-700 min-h-screen flex font-mainText">
		<div class="mx-auto flex flex-col w-full md:w-4/5 md:max-w-5xl ">
			<NavBar />

			<div class="flex-1">
				<router-view/>
			</div>

			<Footer />
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
