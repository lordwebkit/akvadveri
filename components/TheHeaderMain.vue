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
      <div class="contact-bar">
        <a class="contact-bar__phone phone" href="tel:+7(863)2266103">
          <span class="phone__icon"></span>
          <p class="phone__number">8 (863) 226-61-03</p>
        </a>
        <div class="contact-bar__social social">
          <span class="social__whatsapp" title="Мы в Whatsapp"></span>
          <span class="social__telegram" title="Мы в Telegram"></span>
        </div>
      </div>
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
  background-color: $blue;
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
    color: $blue;
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
    border-left: 1px solid $blue;
    background-color: transparent;
    background-image: url("@/assets/icons/find-blue.svg");
    background-repeat: no-repeat;
    background-position: center center;
    &:hover {
      cursor: pointer;
    }
  }
}

.contact-bar {
  display: flex;
  align-items: center;
  flex: 1;
  &__phone {
    margin-left: 80px;
    margin-right: 30px;
  }
}

.phone {
  color: $white;
  text-decoration: none;
  display: flex;
  align-items: center;
  &__icon {
    width: 17px;
    height: 17px;
    display: inline-block;
    background-image: url("@/assets/icons/phone.svg");
    margin-right: 5px;
  }
  &__number {
    line-height: 16px;
    font-size: 17px;
  }
}

.social {
  display: flex;
  &__whatsapp,
  &__telegram {
    width: 35px;
    height: 35px;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
    }
  }
  &__whatsapp {
    margin-right: 20px;
    background: $white url("@/assets/icons/whatsapp.svg") no-repeat center
      center;
    background-size: 28px 27px;
  }
  &__telegram {
    background: $white url("@/assets/icons/telegram.svg") no-repeat center
      center;
    background-size: 35px 35px;
  }
}
</style>
