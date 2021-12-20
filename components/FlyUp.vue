<template>
	<span
		class="flex flex-col cursor-pointer flyup"
		:class="{ expanded: isExpanded }"
		@click="isExpanded = !isExpanded"
	>
		<span
			class="
				flex
				w-full
				border-t border-gfinity-grey
				py-4
				justify-between
			"
		>
			<span class="font-akzidenz-bold flyup__title">
				{{ label }}
			</span>
			<span class="flex items-center pr-2 w-1/3">
				<span class="font-akzidenz-light">
					{{ type }}
				</span>
			</span>
			<span class="w-1/3 flex flex-wrap justify-end">
				<img
					src="@/assets/images/caret-down.svg"
					alt=""
					srcset=""
					class="h-auto"
				/>
			</span>
			<div v-if="isExpanded">
				<p></p>
			</div>
		</span>
	</span>
</template>
<script>
export default {
	props: ['label', 'type'],
	data() {
		return {
			isExpanded: false,
		}
	},
}
</script>
<style scoped>
.flyup {
	max-height: 49px;
	transition: max-height 500ms;
}
.flyup__title {
	font-size: 14px;
	line-height: 16px;
	@apply w-1/3;
}

.expanded {
	@apply max-h-screen;
}
</style>
