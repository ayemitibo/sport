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
					{{ getSelected }}
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
		</span>
		<div class="w-full">
			<span class="flex flex-col w-1/3 self-end">
				<span
					v-for="(value, index) in options"
					:key="index"
					:style="{
						marginBottom: !isExpanded ? '-44px' : null,
						opacity: !isExpanded ? 0 : 1,
					}"
					class="font-akzidenz-light"
					@click="select(value)"
				>
					{{ value }}
				</span>
			</span>
		</div>
	</span>
</template>
<script>
export default {
	props: ['label', 'options', 'value'],
	data() {
		return {
			isExpanded: false,
		}
	},
	computed: {
		getSelected() {
			return this.options.find((option) => option === this.value)
		},
	},
	methods: {
		select(value) {
			this.$emit('input', value)
		},
	},
}
</script>
<style scoped>
.flyup {
	max-height: 49px;
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
