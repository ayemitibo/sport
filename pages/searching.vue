<template>
	<div class="relative">
		<nav-image
			class="absolute top-upper right-0 z-0"
			image-src="fifa19-ronaldo-fg-large.png"
		>
		</nav-image>
		<div class="bg-gfinity-blue main">
			<div class="bordered"></div>
			<div class="ml-4">
				<p class="main__title">Matchmaking Lobby</p>
				<h1 class="main__header">Searching for compatible opponents</h1>
				<p class="mt-6 font-akzidenz-light main__search">
					We’re searching our database of players to pair you with an
					opponent of similar skill
				</p>
				<section class="relative mt-16 z-10">
					<div class="flex items-center">
						<span class="footnote flex-shrink-0 w-1/5">Lobby</span>
						<div class="avatar ml-1">
							<img
								src="@/assets/images/avatar_01.png"
								width="46"
								height="46"
								class="object-cover rounded-full"
							/>
						</div>
					</div>
					<div class="flex items-start mt-10">
						<div class="w-1/5 flex-shrink-0">
							<div class="bg-white"></div>
						</div>
						<span class="footnote"
							><span class="font-bold">4,021</span>
							<span>in Queue</span></span
						>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>
<script>
import NavImage from '~/components/NavImage.vue'

export default {
	components: {
		NavImage,
	},
}
</script>
<style lang="postcss" scoped>
.main {
	mix-blend-mode: multiply;
	width: 351px;
	height: 637px;
}
.bordered {
	height: 105px;
	width: 105px;
	@apply bg-dark-grey;
}

.top-upper {
	top: -25px;
}
.main__title {
	margin-top: 42px;
	font-size: 16px;
	line-height: 19px;
	@apply font-akzidenz-bold text-white;
}
.main__header {
	font-size: 48px;
	line-height: 44px;
	letter-spacing: -3px;
	@apply font-akzidenz-bold text-white mt-6;
}
.main__search {
	font-size: 18px;
	line-height: 22px;
	letter-spacing: -0.75px;
	@apply text-white;
}
.footnote {
	font-size: 0.75rem;
	line-height: 1rem;
	letter-spacing: 0;
	line-height: 1.167;
}
.avatar {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 46px;
	height: 46px;
}
</style>
