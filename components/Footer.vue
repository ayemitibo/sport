<template>
	<div class="bg-gfinity-blue py-8 px-4 flex items-center">
		<p class="footer_text w-1/2 font-akzidenz-bold">Play Now</p>
		<div class="flex w-1/2 justify-between">
			<p class="footer_text font-akzidenz-light">4,021 in Queue</p>
			<img
				src="@/assets/images/arrow-right.svg"
				alt=""
				srcset=""
				class="cursor-pointer"
				@click="goToPlay"
			/>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		goToPlay() {
			this.$router.push('/searching')
		},
	},
}
</script>
<style scoped>
.footer_text {
	font-size: 14px;
	line-height: 16px;
	@apply text-white;
}
</style>
