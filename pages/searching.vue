<template>
	<div class="relative">
		<nav-image
			class="absolute top-upper right-0 z-0"
			image-src="fifa19-ronaldo-fg-large.png"
		>
		</nav-image>
		<div class="bg-gfinity-blue main">
			<div class="bordered">
				<img src="@/assets/images/arrow-left.svg" alt="" srcset="" />
			</div>
			<div class="ml-4">
				<p class="main__title">Matchmaking Lobby</p>
				<h1 class="main__header">Searching for compatible opponents</h1>
				<p class="mt-6 font-akzidenz-light main__search">
					We’re searching our database of players to pair you with an
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
		<div class="notifications">
			<div class="toast-wrapper">
				<span data-v-0c939f8a="" class="callout-small-bold w-2/3">
					Searching...
				</span>
				<span class="flex justify-between items-center w-1/3"
					><span class="callout-small">05:38</span>
					<button>
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
							></rect>
						</svg></button
				></span>
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
	@apply bg-dark-grey flex justify-center items-center;
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
	@apply text-white;
}
.avatar {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 46px;
	height: 46px;

	&::after {
		@apply absolute border-2 rounded-full z-10;
		content: '';
		width: 120%;
		height: 120%;
	}
}
.img {
	height: 46px;
	width: 46px;
}

.rect {
	width: 12px;
	height: 2px;
}
.toast-wrapper {
	display: flex;
	align-items: center;
	color: white;
	width: 294px;
	height: 89px;
	padding-right: 24px;
	padding-left: 24px;
	border-radius: 0;
	--tw-bg-opacity: 1;
	background-color: rgba(27, 27, 27, var(--tw-bg-opacity));
}

.notifications {
	position: absolute;
	bottom: -2.25rem;
	right: 0px;
	z-index: 50;
	transform: translate(0px, 0px);
}
</style>
