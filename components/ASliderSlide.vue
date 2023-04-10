<template>
  <div class="slider-slide">
    <div class="slider-slide__inner">
      <h1 class="slider-slide__title">
        <span class="slider-slide__company">АкваДверь</span>
      </h1>
      <p class="slider-slide__text">
        Производство и продажа царговых дверей из ДПК
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/color";
.slider-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border-radius: 2px;
  background-image: url("@/assets/images/slider-slide-1-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  position: relative;
  &__title {
    font-size: 30px;
    margin-bottom: 12px;
    margin-left: 80px;
  }
  &__company {
    font-weight: 700;
    font-size: 42px;
  }
  &__text {
    font-size: 22px;
    margin-left: 80px;
  }
}
</style>
