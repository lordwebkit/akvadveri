<template>
  <section class="about-us">
    <div class="about-us__inner">
      <h2 class="about-us__title">ООО “АкваДверь”</h2>
      <p class="about-us__text">
        Производит влагоустойчивые, долговечные межкомнатные двери из
        древесно-полимерного композита (ДПК), делая акцент на качестве изделий.
      </p>
      <button>Подробнее</button>
      <p class="about-us__text">
        Благодаря современным технологиям производства, экологичным материалам и
        многолетниму опыту компании «цена — качество» изделий является лучшим в
        России.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "PAboutUS",
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/grid";
@import "~/assets/styles/color";
.about-us {
  font-family: "Montserrat", sans-serif;
  background-color: $corporate-blue;
  &__inner {
    @include grid;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 320px 1020px;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
