<template>
	<div :class="['hint', {
		'hint--error': error
	}]">
		<p class="hint__text" v-if="!error">You have successfully subscribed to the newsletter</p>
		<p class="hint__text" v-else>You have already subscribed to the newsletter</p>
	</div>
</template>

<script>
export default {
	props: {
		error: {
			type: Boolean,
			default: false
		}
	},

	name: "HintBlockUI"
}
</script>

<style lang="scss">
@import "@/assets/styles/variables";
@import "./HintBlockUI.scss";
</style>