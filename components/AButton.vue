<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "AButton",
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/color";
.button {
  transition: all 0.2s ease;
  padding: 18px 26px;
  background-color: transparent;
  color: $corporate-blue;
  border: 1px solid $corporate-blue;
  cursor: pointer;
  &:hover {
    background-color: $corporate-blue;
    color: #fff;
  }
}
</style>
