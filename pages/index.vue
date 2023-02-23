<template>
  <PMain />
  <PAboutUs />
</template>
<script>
import PMain from "@/components/PMain/PMain.vue";
import PAboutUs from "@/components/PMain/PAboutUs.vue";
export default {
  name: "TheIndex",
  components: {
    PMain,
    PAboutUs,
  },
};
</script>
<style lang="scss" scoped></style>
