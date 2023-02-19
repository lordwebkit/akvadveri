<template>
  <ul class="header-info">
    <li class="header-info__inner--whatsapp">
      <a href="#" class="header-info__whatsapp"></a>
    </li>
    <li>
      <a href="tel:+7(863)2266103" class="header-info__phone">
        +7(863) 226 61 03
      </a>
    </li>
    <li>
      <p href="#" class="header-info__schedule">
        Пн - Пт: c <span>07:00</span> до <span>22:00</span>
      </p>
    </li>
    <li>
      <a href="#" class="header-info__callback">Заказать обратный звонок</a>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/color";
.header {
  &-info {
    display: grid;
    grid-template-columns: 58px 1fr;
    &__inner {
      &--whatsapp {
        grid-row-start: 1;
        grid-row-end: 4;
        height: 62px;
      }
    }
    &__phone,
    &__schedule,
    &__callback {
      color: #000;
      text-decoration: none;
      font-size: 16px;
    }
    &__whatsapp {
      width: 42px;
      height: 42px;
      background-image: url("~/assets/icons/whatsapp.png");
      background-size: contain;
      background-position: 1px 1px;
      display: inline-block;
      border-radius: 6px;
    }
    &__schedule {
      font-size: 14px;
      span {
        color: $corporate-blue;
        font-weight: bold;
        font-size: 13px;
      }
    }
    &__callback {
      &:hover {
        text-decoration: underline;
        padding-bottom: 10px;
      }
    }
  }
}
</style>
