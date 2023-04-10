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
      <div class="header-nav__work-schedule work-shedule">
        <span class="work-shedule__icon"></span>
        <p class="work-shedule__text">
          График работы Пн - Пт: c
          <span class="work-shedule__time">07:00</span> до
          <span class="work-shedule__time">22:00</span>
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
    background-color: $blue;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}
.work-shedule {
  display: flex;
  align-items: center;
  &__icon {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url("@/assets/icons/work-shedule.svg");
    margin-right: 10px;
  }
  &__text {
    font-size: 14px;
  }
  &__time {
    color: $blue;
  }
}
</style>
