<template>
  <div class="header-main">
    <div class="header-main__inner">
      <a href="#" class="header-main__logo"></a>
      <a href="#" class="header-main__catalog">Каталог</a>
      <input type="text" class="header-main__find" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/color";
@import "@/assets/styles/grid";
.header-main {
  background-color: $corporate-blue;
  &__inner {
    @include grid;
    height: 50px;
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 192px;
    height: 40px;
    background-image: url("@/assets/icons/akvadver-logo-white.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    display: inline-block;
  }
  &__catalog {
    color: #fff;
  }
}
</style>
