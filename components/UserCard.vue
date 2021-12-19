<template>
	<div>
		<div class="img-container">
			<slot name="image" />
		</div>

		<p
			class="font-akzidenz-light text-light-grey mt-4"
			style="font-size: 12px"
		>
			<slot name="subText" />
		</p>
		<p class="font-akzidenz-bold">
			<slot name="footer" />
		</p>
	</div>
</template>

<style scoped>
.img-container {
	width: 140px;
	height: 187px;
}
</style>
