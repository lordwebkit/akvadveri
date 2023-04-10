<template>
  <section class="about-us">
    <div class="about-us__inner">
      <h2 class="about-us__title">Наша компания это</h2>
      <ul class="about-us__advantages advantages">
        <li class="advantages__item">
          <h3 class="advantages__title">Свое производство</h3>
          <p class="advantages__text">
            Вы покупаете напрямую у производителя, не переплачивая посредникам
          </p>
          <span class="advantages__icon advantages__icon-1"></span>
        </li>
        <li class="advantages__item">
          <h3 class="advantages__title">Наличие патента</h3>
          <p class="advantages__text">
            А также сертификатов качества и соответствие стандартам ГОСТ.
          </p>
          <span class="advantages__icon advantages__icon-2"></span>
        </li>
        <li class="advantages__item">
          <h3 class="advantages__title">16 лет на рынке</h3>
          <p class="advantages__text">
            С 2007 года более 15 000 довольных покупателей по всей России.
          </p>
          <span class="advantages__icon advantages__icon-3"></span>
        </li>
        <li class="advantages__item">
          <h3 class="advantages__title">Качество</h3>
          <p class="advantages__text">
            При производстве дверей мы используем новейшее оборудование в
            отрасли.
          </p>
          <span class="advantages__icon advantages__icon-4"></span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/grid";
@import "~/assets/styles/color";
.about-us {
  margin-top: 30px;
  background: $light-blue;
  padding: 1px 0 40px 0;
  font-family: "Montserrat", sans-serif;
  &__inner {
    @include grid;
    margin-top: 30px;
  }
  &__title {
    font-size: 30px;
    color: $blue;
    margin-bottom: 5px;
    &::after {
      content: "";
      height: 2px;
      width: 80px;
      background-color: $blue;
      display: block;
      margin-top: 12px;
      margin-bottom: 15px;
    }
  }
}
.advantages {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  &__item {
    display: grid;
    flex: 25%;
  }
  &__title {
    grid-row-start: 1;
    grid-row-end: 2;
    color: $blue;
    font-size: 18px;
    font-weight: bold;
  }
  &__text {
    margin-top: 4px;
    max-width: 240px;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    font-size: 14px;
    line-height: 1;
  }
  &__icon {
    display: inline-block;
    width: 55px;
    height: 55px;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    background-repeat: no-repeat;
  }
  &__icon-1 {
    background-image: url("@/assets/icons/about-us-1.svg");
  }
  &__icon-2 {
    background-image: url("@/assets/icons/about-us-2.svg");
  }
  &__icon-3 {
    background-image: url("@/assets/icons/about-us-3.svg");
  }
  &__icon-4 {
    background-image: url("@/assets/icons/about-us-4.svg");
    background-position: center right;
  }
}
</style>
