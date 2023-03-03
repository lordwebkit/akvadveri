<template>
  <div class="slider">
    <ASliderSlide />
  </div>
</template>
<script>
import ASliderSlide from "./ASliderSlide.vue";
export default {
  components: {
    ASliderSlide,
  },
};
</script>
<style lang="scss" scoped>
.slider {
  width: 1014px;
  height: 569px;
  border-radius: 2px;
}
</style>
