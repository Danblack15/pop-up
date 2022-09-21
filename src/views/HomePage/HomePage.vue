<template>
	<div class="home">
		<ButtonUI home>Open Pop-Up</ButtonUI>
		<PopUp />
	</div>
</template>

<script>
import PopUp from '@/components/PopUp/PopUp.vue';

export default {
    components: { PopUp }
}
</script>

<style lang="scss">
@import "./HomePage.scss";
</style>