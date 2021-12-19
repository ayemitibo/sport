<template>
	<!-- <div> -->
	<div
		class="
			relative
			bg-sand
			min-h-screen
			sm:max-w-375
			flex flex-col
			mx-auto
			overflow-x-hidden
		"
	>
		<nav-bar></nav-bar>
		<nuxt />
	</div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
export default {
	components: {
		NavBar,
	},
}
</script>
