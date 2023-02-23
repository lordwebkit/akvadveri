<template>
  <div class="slider">
    <div class="slide">
      <h1 class="slider__title">ООО “АкваДверь” МЕЖКОМНАТНЫЕ ДВЕРИ</h1>
      <p class="slider__text">Производство и продажа царговых дверей из ДПК</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.slider {
  width: 1014px;
  height: 569px;
  background-color: gray;
  color: #fff;
  &__title {
    font-size: 30px;
    margin-bottom: 12px;
  }
  &__text {
    font-size: 22px;
  }
}
.slide {
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
