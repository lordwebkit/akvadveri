<template>
  <header class="header">
    <div class="header__inner">
      <a class="header__logo"></a>
      <TheHeaderInfo class="header__info" />
    </div>
    <TheHeaderNav />
  </header>
</template>
<script>
import TheHeaderInfo from "./TheHeaderInfo.vue";
import TheHeaderNav from "./TheHeaderNav.vue";
export default {
  components: {
    TheHeaderInfo,
    TheHeaderNav,
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/grid";

.header {
  font-family: "Montserrat", sans-serif;
  &__inner {
    @include grid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }
  &__logo {
    width: 237px;
    height: 78px;
    background-image: url("../assets/icons/akvadver-logo.png");
    background-size: contain;
    cursor: pointer;
  }
}
</style>
