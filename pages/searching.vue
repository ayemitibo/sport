<template>
	<div class="relative">
		<nav-image
			class="absolute top-upper right-0 z-0"
			image-src="fifa19-ronaldo-fg-large.png"
		>
		</nav-image>
		<transition name="slide-fade" mode="out-in" appear>
			<component :is="componentName" :timer-count="timerCount" />
		</transition>
	</div>
</template>
<script>
import NavImage from '~/components/NavImage.vue'
import Search from '~/components/Search.vue'
import Found from '~/components/Found.vue'

export default {
	components: {
		NavImage,
		Search,
		Found,
	},
	data() {
		return {
			timerCount: 102,
			show: true,
			componentName: 'Search',
		}
	},
	watch: {
		timerCount: {
			handler(value) {
				if (value > 0) {
					setTimeout(() => {
						this.timerCount--
					}, 1000)
				} else {
					this.componentName = 'Found'
				}
			},
			immediate: true, // This ensures the watcher is triggered upon creation
		},
	},
}
</script>
<style lang="postcss">
.main {
	font-weight: bolder;
	width: 351px;
	height: 637px;
	color: white;
}
.overlay {
	mix-blend-mode: multiply;
	width: 351px;
	height: 637px;
	position: absolute;
	top: 0;
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
}

.notifications {
	position: absolute;
	bottom: -2.25rem;
	right: -24px;
	z-index: 50;
	transform: translate(0px, 0px);
}
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
