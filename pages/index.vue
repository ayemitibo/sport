<template>
	<div class="mt-4">
		<nav-image
			class="absolute top-0 right-0 z-0"
			image-src="fifa19-ronaldo-fg-lg.png"
		>
		</nav-image>
		<div class="ml-4 flex">
			<img src="@/assets/images/arrow.svg" alt="" srcset="" />
			<p class="text-dark-grey font-akzidenz-bold ml-6">
				Matchmaking Lobby
			</p>
		</div>
		<div class="m-4 bordered"></div>
		<main class="main mx-4">
			<h1 class="flex justify-center">
				<span class="main__title"> steveroesler’s lobby </span>
				<img src="@/assets/images/lock.svg" alt="" srcset="" />
			</h1>
			<div class="mt-3">
				<span class="fifa-chip">FIFA 19</span>
			</div>
			<div style="margin-top: 24px" class="flex items-center">
				<user-card class="mr-4">
					<template #image>
						<img
							src="@/assets/images/avatar_01.png"
							alt=""
							srcset=""
							class="w-full h-full"
						/>
					</template>
					<template #subText>
						<span> Team Leader /</span>
					</template>
					<template #footer>
						<span> steveroesler</span>
					</template>
				</user-card>
				<user-card>
					<template #image>
						<div class="bordered-image"></div>
					</template>
					<template #subText>
						<span> Team Player /</span>
					</template>
					<template #footer>
						<div class="flex">
							<span
								class="text-16 leading-19"
								style="margin-right: 11px"
								>Invite Player</span
							>
							<img src="@/assets/images/caret-right.svg" alt="" />
						</div>
					</template>
				</user-card>
			</div>
			<div
				data-v-64eaa51b=""
				class="flex items-center mt-3"
				style="line-height: 12px"
			>
				<span
					data-v-64eaa51b=""
					class="main__chip border border-dark-grey"
				>
					Ready
				</span>
				<span data-v-64eaa51b="" class="flex text-gfinity-red ml-2">
					<img src="@/assets/images/g.svg" alt="" srcset="" />
					<span data-v-64eaa51b="" class="points ml-1">
						74
					</span></span
				>
			</div>
			<div class="mt-8">
				<accordion
					v-model="type"
					:label="'Type'"
					:options="['Competitive']"
				></accordion>
				<accordion
					v-model="mode"
					:label="'Gamemode'"
					:options="['Squad Battles', 'Battles', 'Squad']"
				></accordion>
				<accordion
					v-model="status"
					:label="'Lobby Status'"
					:options="['Invite Only']"
				></accordion>
			</div>
		</main>
		<Footer></Footer>
	</div>
</template>
<script>
import NavImage from '~/components/NavImage.vue'
import UserCard from '~/components/UserCard.vue'
import Footer from '~/components/Footer.vue'
import Accordion from '~/components/Accordion.vue'

export default {
	components: {
		NavImage,
		UserCard,
		Footer,
		Accordion,
	},
	data() {
		return {
			type: 'Competitive',
			mode: 'Squad Battles',
			status: 'Invite Only',
		}
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
