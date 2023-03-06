<template>
  <main class="main">
    <div class="main__inner">
      <ASlider class="main__slider" />
      <div class="main__banner main__banner-1 main-banner">
        <p class="main-banner__title">ПВХ Композит</p>
      </div>
      <div class="main__banner main__banner-2 main-banner">
        <p class="main-banner__title">Все о компании</p>
      </div>
    </div>
  </main>
</template>
<script>
import ASlider from "@/components/ASlider.vue";
export default {
  name: "AMain",
  components: {
    ASlider,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/grid";
@import "@/assets/styles/color";
.main {
  font-family: "Montserrat", sans-serif;
  &__inner {
    @include grid;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  &__banner {
    width: 287px;
    height: 268px;
    background-color: gray;
    border-radius: 2px;
    color: #fff;
    display: flex;
    align-items: flex-end;
    background-size: contain;
  }
  &__banner-1 {
    grid-row-start: 1;
    grid-row-end: 2;
    background-image: url("@/assets/images/main-banner-1.jpg");
  }
  &__banner-2 {
    grid-row-start: 2;
    grid-row-end: 3;
    align-self: flex-end;
    background-image: url("@/assets/images/main-banner-2.jpg");
  }
  &__slider {
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
.main-banner {
  cursor: pointer;
  &__title {
    margin-bottom: 15px;
    margin-left: 15px;
    font-size: 18px;
    background-color: #fff;
    color: $corporate-blue;
    padding: 5px 8px;
    border-radius: 2px;
  }
}
</style>
