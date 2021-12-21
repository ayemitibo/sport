<template>
	<div class="relative h-full">
		<div class="main-search z-10 absolute">
			<div class="bordered-box">
				<img
					src="@/assets/images/arrow-left.svg"
					alt=""
					srcset=""
					class="cursor-pointer"
					@click="goBack"
				/>
			</div>
			<div class="ml-4">
				<p class="main__search-title">Matchmaking Lobby</p>
				<h1 class="main__header">Searching for compatible opponents</h1>
				<p class="mt-6 font-akzidenz-light main__search">
					We're searching our database of players to pair you with an
					opponent of similar skill
				</p>
				<section class="relative mt-16 z-10">
					<div class="flex items-center">
						<span class="footnote flex-shrink-0 w-1/5 text-white"
							>Lobby</span
						>
						<div class="avatar ml-1">
							<img
								src="@/assets/images/avatar_01.png"
								class="object-cover rounded-full img"
							/>
						</div>
					</div>
					<div class="flex items-center mt-10">
						<div class="w-1/5 flex-shrink-0">
							<div class="bg-white rect"></div>
						</div>
						<span class="footnote"
							><span class="font-bold">4,021</span>
							<span>in Queue</span></span
						>
					</div>
				</section>
			</div>
		</div>
		<div class="overlay bg-gfinity-blue"></div>
		<div class="notifications">
			<div class="toast-wrapper bg-dark-grey">
				<span data-v-0c939f8a="" class="callout-small-bold w-2/3">
					Searching...
				</span>
				<span class="flex justify-between items-center w-1/3"
					><span class="callout-small">{{ getTime }}</span>
					<nuxt-link id="cancel" to="/">
						<svg
							width="14"
							height="14"
							viewBox="0 0 16 16"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							class=""
						>
							<rect
								x="2.34314"
								y="0.727051"
								width="18.2857"
								height="2.28571"
								transform="rotate(45 2.34314 0.727051)"
							></rect>
							<rect
								width="18.2857"
								height="2.28571"
								transform="matrix(-0.707107 0.707107 0.707107 0.707107 13.6569 0.727051)"
							></rect></svg></nuxt-link
				></span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['timerCount'],
	computed: {
		getTime() {
			return this.$utils.formatToDate(this.timerCount)
		},
	},
	methods: {
		goBack() {
			this.$router.push('/')
		},
	},
}
</script>
