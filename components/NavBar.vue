<template>
	<nav class="flex justify-between items-center pr-6 z-10">
		<div class="relative w-105 h-105">
			<transition name="slide">
				<button class="square-link transform translate-y-full"></button>
			</transition>
			<a class="square-link" href="https://www.gfinityesports.com/">
				<img src="@/assets/images/gfinity.svg" alt="" srcset="" />
			</a>
		</div>
		<div class="flex items-center">
			<span
				class="
					navbar-text
					text-dark-grey
					uppercase
					mr-6
					font-akzidenz-bold
				"
			>
				FIFA 19
			</span>
			<button>
				<img src="@/assets/images/hamburger.svg" alt="" srcset="" />
			</button>
		</div>
	</nav>
</template>
<style lang="postcss" scoped>
.square-link {
	@apply absolute top-0 left-0 flex	justify-center	items-center	bg-dark-grey text-white w-full h-full border-none shadow-none rounded-none;
}

.slide-enter,
.slide-leave-to {
	transform: translate3d(0, 0, 0);
}

.slide-enter-active,
.slide-leave-active {
	/* @apply transition-transform duration-500; */
}

.navbar-text {
	font-size: 14px;
	line-height: 16px;
	letter-spacing: -0.5px;
	color: #1b1b1b;
}
</style>
