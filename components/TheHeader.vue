<template>
  <header class="header">
    <TheHeaderNav />
    <TheHeaderMain />
  </header>
</template>
<script>
import TheHeaderNav from "./TheHeaderNav.vue";
import TheHeaderMain from "./TheHeaderMain.vue";
export default {
  components: {
    TheHeaderMain,
    TheHeaderNav,
  },
};
</script>
<style lang="scss" scoped>
.header {
  font-family: "Montserrat", sans-serif;
}
</style>
