<template>
	<form 
		action="form" 
		class="form"
		@submit.prevent="submitFormFun"
	>
		<fieldset class="form__email">
			<label for="email" class="form__email-label">Email-adress</label>
			<input 
				type="email" 
				id="email" 
				name="email"
				class="form__email-input"
				v-model.trim="mail"
				:disabled="showHint"
				required
			/>
		</fieldset>

		<ButtonUI class="form__btn" :disabled="showHint">Subscribe!</ButtonUI>
		
		<fieldset class="form__privacy">
			<input 
				type="checkbox" 
				id="privacy" 
				name="privacy"
				class="form__checkbox-input"
				:disabled="showHint"
				v-model="privacy"
			/>
			<label 
				for="privacy" 
				class="form__privacy-label" 
				tabindex="0" 
				@keyup.enter="privacy = !privacy"
			>
				<div class="form__checkbox">
					<span class="form__checkbox-state"></span>
				</div>
				<p :class="['form__privacy-text', {
						'form__privacy-text--error': errorPrivacy
					}]"
				>I’m agree with privacy policy</p>
			</label>
		</fieldset>
	</form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	data() {
		return {
			mail: '',
			privacy: false,
			errorPrivacy: false
		}
	},

  methods: {
		...mapActions({
			submitForm: "data/submitForm"
		}),

		submitFormFun() {
			if (!this.privacy) {
				this.errorPrivacy = true

				setTimeout(() => {
					this.errorPrivacy = false
				}, 1000)
			} else {
				this.errorPrivacy = false
				this.submitForm(this.mail)

				this.privacy = false
				this.mail = ''
			}
		}
	},

	computed: {
		...mapGetters({
			showHint: 'data/getShowHint'
		})
	}
}
</script>

<style lang="scss">
@import "@/assets/styles/variables";
@import "./FormBlock.scss";
</style>