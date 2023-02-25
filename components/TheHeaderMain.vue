<template>
  <div class="header-main">
    <div class="header-main__inner">
      <a href="#" class="header-main__logo"></a>
      <a href="#" class="header-main__catalog">Каталог</a>
      <form class="header-main__form">
        <input
          type="text"
          class="header-main__find"
          placeholder="Искать на Аквадверь"
        />
        <input type="button" class="header-main__find-button" />
      </form>
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
    height: 60px;
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 178px;
    height: 42px;
    background-image: url("@/assets/icons/akvadver-logo.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    display: inline-block;
    margin-right: 40px;
  }
  &__form {
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    align-items: center;
  }
  &__catalog {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 2px;
    margin-right: 40px;
    height: 38px;
    color: $corporate-blue;
    background-color: #fff;
    text-decoration: none;
    font-weight: 700;
    &::before {
      content: "";
      width: 24px;
      height: 25px;
      margin-right: 5px;
      background-image: url("@/assets/icons/catalog.svg");
    }
  }
  &__find {
    width: 550px;
    height: 37px;
    border-radius: 2px;
    border: none;
    font-size: 15px;
    outline: none;
    padding-left: 16px;
  }
  &__find-button {
    height: 26px;
    width: 36px;
    border: none;
    padding: 0;
    margin-right: 3px;
    border-left: 1px solid $corporate-blue;
    background-color: transparent;
    background-image: url("@/assets/icons/find-blue.svg");
    background-repeat: no-repeat;
    background-position: center center;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
