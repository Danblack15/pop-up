<template>
	<div class="home">
		<ButtonUI home @click="openPopUp">Open Pop-Up</ButtonUI>
		<PopUp v-if="showPopUp" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import PopUp from '@/components/PopUp/PopUp.vue';

export default {
	components: { PopUp },

	methods: {
		...mapActions({
			openPopUp: "data/toggleShowPopUp"
		})
	},

	computed: {
		...mapGetters({
			showPopUp: 'data/getShowPopUp'
		})
	}
}
</script>

<style lang="scss">
@import "./HomePage.scss";
</style>