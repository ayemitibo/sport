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
				<h1 class="main__header">A match has been found for you!</h1>
				<p class="mt-6 font-akzidenz-light main__search">
					We’ve found a compatible opponent for you to play Squad
					Battles with in FIFA 19
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
							>By tapping accept, you agree to play a match that
							may last for up to 30 minutes.</span
						>
					</div>
				</section>
			</div>
		</div>
		<div class="overlay bg-dark-grey"></div>
		<div class="notifications">
			<div class="toast-wrapper bg-gfinity-blue">
				<span data-v-0c939f8a="" class="callout-small-bold w-2/3">
					Accept
				</span>
				<span class="flex justify-between items-center w-1/3"
					><span class="callout-small">{{ '-00:17' }}</span>
					<button>
						<img
							src="@/assets/images/arrow-right.svg"
							alt=""
							srcset=""
						/></button
				></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['timerCount'],
	methods: {
		goBack() {
			this.$router.push('/')
		},
	},
}
</script>
