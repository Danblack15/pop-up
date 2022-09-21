<template>
	<div class="pop-up">
		<div class="pop-up__general">
			<h2 class="pop-up__title">10%<span class="pop-up__title--small">off</span></h2>
			<h3 class="pop-up__subtitle">your first order</h3>
			<p class="pop-up__text">Subscrive to recieve 10% off promocode plus exclusive offers and deals</p>

			<FormBlock />

			<BackgroundBlock class="pop-up__background"/>
		</div>
	</div>
</template>

<script>
import FormBlock from '@/components/FormBlock/FormBlock';
import BackgroundBlock from '@/components/BackgroundBlock/BackgroundBlock';

export default {
	components: {
		FormBlock,
		BackgroundBlock
	}
}
</script>

<style lang="scss">
@import "@/assets/styles/variables";
@import "./PopUp.scss";
</style>