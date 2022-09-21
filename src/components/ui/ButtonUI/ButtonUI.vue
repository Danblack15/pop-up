<template>
  <button :class="['button', {
    'button-home': home
  }]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    home: {
      type: Boolean,
      default: false
    }
  },
  
  name: "ButtonUI"
}
</script>

<style lang="scss">
@import "@/assets/styles/variables";
@import "./ButtonUI.scss";
</style>