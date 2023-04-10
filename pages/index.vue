<template>
  <PMain />
  <PAboutUs />
  <PPortfolio />
</template>
<script>
import PMain from "@/components/PMain/PMain.vue";
import PAboutUs from "@/components/PMain/PAboutUs.vue";
import PPortfolio from "@/components/PMain/PPortfolio.vue";
export default {
  name: "TheIndex",
  components: {
    PMain,
    PAboutUs,
    PPortfolio,
  },
};
</script>
<style lang="scss"></style>
