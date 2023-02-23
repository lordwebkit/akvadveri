<template>
  <nav class="header-nav">
    <div class="header-nav__inner">
      <ul class="header-nav__list nav-bar">
        <li class="nav-bar__inner">
          <a href="#" class="nav-bar__link">О компании</a>
        </li>
        <li class="nav-bar__inner">
          <a href="#" class="nav-bar__link">Контакты</a>
        </li>
        <li class="nav-bar__inner">
          <a href="#" class="nav-bar__link">Тех. документация</a>
        </li>
      </ul>
      <ul class="header-nav__list contact-bar">
        <li>
          <a href="tel:+7(863)2266103">+7(863) 226 61 03</a>
        </li>
        <li>
          <a href="#" class="header-info__whatsapp"></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/grid";
.header-nav {
  &__inner {
    @include grid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
  }
}
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 416px;
  &__link {
    text-decoration: none;
  }
}
</style>
