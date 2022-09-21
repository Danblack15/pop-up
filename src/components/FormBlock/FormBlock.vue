<template>
	<form 
		action="form" 
		class="form"
	>
		<fieldset class="form__email">
			<label for="email" class="form__email-label">Email-adress</label>
			<input 
				type="email" 
				id="email" 
				name="email"
				class="form__email-input"
				required
			/>
		</fieldset>

		<ButtonUI class="form__btn">Subscribe!</ButtonUI>
		
		<fieldset class="form__privacy">
			<input 
				type="checkbox" 
				id="privacy" 
				name="privacy"
				class="form__checkbox-input"
				required
			/>
			<label for="privacy" class="form__privacy-label">
				<div class="form__checkbox">
					<span class="form__checkbox-state"></span>
				</div>
				<p class="form__privacy-text">I’m agree with privacy policy</p>
			</label>
		</fieldset>
	</form>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "@/assets/styles/variables";
@import "./FormBlock.scss";
</style>