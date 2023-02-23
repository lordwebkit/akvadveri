<template>
  <main class="main">
    <div class="main__inner main__inner--sliders">
      <ASlider class="main__slider" />
      <div class="main__slide main__slide-1"></div>
      <div class="main__slide main__slide-2"></div>
    </div>
    <div class="main__inner main__inner--button">
      <AButton>КАТАЛОГ ПРОДУКЦИИ</AButton>
    </div>
  </main>
</template>
<script>
import ASlider from "@/components/ASlider.vue";
import AButton from "@/components/AButton.vue";
export default {
  name: "AMain",
  components: {
    ASlider,
    AButton,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/grid";
.main {
  font-family: "Montserrat", sans-serif;
  &__inner {
    @include grid;
    margin-top: 30px;
    &--sliders {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
    &--button {
      text-align: center;
    }
  }
  &__slide {
    width: 287px;
    height: 268px;
    background-color: gray;
    &-1 {
      grid-row-start: 1;
      grid-row-end: 2;
    }
    &-2 {
      grid-row-start: 2;
      grid-row-end: 3;
      align-self: end;
    }
  }
  &__slider {
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
</style>
