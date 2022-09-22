<template>
	<div :class="['pop-up', {
		'pop-up--close': closingPopUp
	}]">
		<img 
			src="@/assets/svg/cross.svg" 
			alt="close" 
			class="pop-up__close" 
			@click="closePopUpFun"
		/>

		<HintBlockUI 
			v-if="showHint" 
			:error="errorHint" 
			class="pop-up__hint"
		/>

		<div class="pop-up__general">
			<h2 class="pop-up__title">10%<span class="pop-up__title--small">off</span></h2>
			<h3 class="pop-up__subtitle">your first order</h3>
			<p class="pop-up__text">Subscrive to recieve 10% off promocode plus exclusive offers and deals</p>

			<FormBlock />

			<BackgroundBlock class="pop-up__background" />
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import FormBlock from '@/components/FormBlock/FormBlock';
import BackgroundBlock from '@/components/BackgroundBlock/BackgroundBlock';

export default {
	components: {
		FormBlock,
		BackgroundBlock
	},

	data() {
		return {
			closingPopUp: false
		}
	},

	methods: {
		...mapActions({
			closePopUp: "data/toggleShowPopUp"
		}),

		closePopUpFun() {
			this.closingPopUp = true

			setTimeout(() => {
				this.closePopUp()
			}, 500)
		}
	},

	computed: {
		...mapGetters({
			showHint: 'data/getShowHint',
			errorHint: 'data/getErrorHint'
		})
	},
	
}
</script>

<style lang="scss">
@import "@/assets/styles/variables";
@import "./PopUp.scss";
</style>