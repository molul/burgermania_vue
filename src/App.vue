<template>
	<div class="bg-sky-700 min-h-screen flex ">
		<div class="mx-auto flex flex-col w-4/5 max-w-4xl">
			<NavBar />
			<div class="bg-white flex-1">
				content
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
	name: "AppComponent",
	components: { NavBar},
}
</script>
