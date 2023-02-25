<template>
  <nav class="header-nav">
    <div class="header-nav__inner">
      <ul class="header-nav__list nav-bar">
        <li class="nav-bar__item">
          <a href="#" class="nav-bar__link">
            О компании <span class="nav-bar__decore"></span>
          </a>
        </li>
        <li class="nav-bar__item">
          <a href="#" class="nav-bar__link">
            Контакты <span class="nav-bar__decore"></span>
          </a>
        </li>
        <li class="nav-bar__item">
          <a href="#" class="nav-bar__link">
            Тех. документация <span class="nav-bar__decore"></span>
          </a>
        </li>
      </ul>
      <div class="header-nav__list contact-bar">
        <a href="#" class="contact-bar__whatsapp"></a>
        <a class="contact-bar__phone" href="tel:+7(863)2266103">
          +7(863) 226 61 03
        </a>
        <p class="contact-bar__time">
          Пн - Пт: c <span class="contact-bar__hours">07:00</span> до
          <span class="contact-bar__hours">22:00</span>
        </p>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/grid";
@import "@/assets/styles/color";
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
  &__item {
    position: relative;
    height: 26px;
    display: flex;
    align-items: center;
  }
  &__link {
    text-decoration: none;
    &:hover .nav-bar__decore {
      opacity: 1;
    }
  }
  &__decore {
    width: 100%;
    height: 2px;
    background-color: $corporate-blue;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}
.contact-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 335px;
  &__phone {
    text-decoration: none;
    color: $corporate-blue;
  }
  &__whatsapp {
    width: 22px;
    height: 22px;
    display: inline-block;
    border-radius: 2px;
    background-image: url("@/assets/icons/whatsapp-green.svg");
    background-repeat: no-repeat;
  }
  &__time {
    font-size: 12px;
    border-left: 1px solid $corporate-blue;
    padding-left: 10px;
  }
  &__hours {
    color: $corporate-blue;
    font-weight: 700;
  }
}
</style>
