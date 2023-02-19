<template>
  <nav class="header-nav">
    <div class="header-nav__inner">
      <p class="header-nav__text">Официальный сайт производителя</p>
      <ul class="header-nav__bar nav-bar">
        <li class="nav-bar__inner">
          <a href="#" class="nav-bar__link">Каталог</a>
        </li>
        <li class="nav-bar__inner">
          <a href="#" class="nav-bar__link">О Компании</a>
        </li>
        <li class="nav-bar__inner">
          <a href="#" class="nav-bar__link">Контакты</a>
        </li>
        <li class="nav-bar__inner">
          <a href="#" class="nav-bar__link">Тех. Документация</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/color";
@import "~/assets/styles/grid";
.header {
  &-nav {
    background-color: $corporate-blue;
    &__inner {
      @include grid;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__text {
      color: #fff;
    }
  }
}
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 564px;
  &__link {
    color: #fff;
    text-decoration: none;
  }
}
</style>
