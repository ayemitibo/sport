<template>
	<div class="relative mt-4">
		<nav-image
			class="absolute top-0 right-0 z-0"
			image-src="fifa19-ronaldo-fg-large.png"
		>
		</nav-image>
		<div style="height: 650px" class="bg-gfinity-blue"></div>
	</div>
</template>
<script>
import NavImage from '~/components/NavImage.vue'
import UserCard from '~/components/UserCard.vue'
import FlyUp from '~/components/FlyUp.vue'
import Footer from '~/components/Footer.vue'

export default {
	components: {
		NavImage,
		// UserCard,
		// FlyUp,
		// Footer,
	},
}
</script>
<style lang="scss">
.bordered {
	border: 1px solid #cfd1c7;
}
.main__title {
	font-size: 36px;
	line-height: 44px;
	letter-spacing: -2px;
	margin-right: 14px;
	@apply text-dark-grey font-akzidenz-bold;
}

.fifa-chip {
	padding: 1px 5px;
	letter-spacing: 1.5px;
	font-size: 10px;
	@apply font-akzidenz-bold rounded-r-full
						bg-dark-grey text-white;
}

.bordered-image {
	border: 1px solid #cfd1c7;
	border-radius: 6px;
	@apply w-full h-full;
}

.main__chip {
	padding: 3px 5px 2px 5px;
	font-size: 10px;
	line-height: 12px;
	letter-spacing: 1.5px;
	@apply uppercase font-akzidenz-bold;
}

.points {
	font-size: 11px;
	line-height: 13px;
	@apply font-akzidenz-bold;
}
</style>
