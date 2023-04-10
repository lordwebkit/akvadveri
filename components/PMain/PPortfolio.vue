<template>
  <section class="partfolio">
    <div class="partfolio__inner">
      <h2 class="partfolio__title">Объекты которые выбрали АкваДверь</h2>
      <p class="partfolio__description">
        Более тысячи объектов в России уже смогли оценить преимущества
        композитных дверей от Аквадверь
      </p>
      <div class="partfolio__slider partfolio-slider">
        <div class="partfolio-slider__item"></div>
        <div class="partfolio-slider__item"></div>
        <div class="partfolio-slider__item"></div>
        <div class="partfolio-slider__item"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/grid";
@import "~/assets/styles/color";
.partfolio {
  font-family: "Montserrat", sans-serif;
  &__inner {
    @include grid;
    margin-top: 30px;
  }
  &__title {
    font-size: 30px;
    color: $blue;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    line-height: 30px;
    word-wrap: break-word;
    &::after {
      content: "";
      height: 1px;
      width: 100%;
      background-color: $blue;
      display: inline-block;
      margin-left: 10px;
    }
  }
}
.partfolio-slider {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-bottom: 30px;
  &__item {
    background-color: $blue;
    height: 300px;
    width: 300px;
  }
}
</style>
