<template>
  <header class="app-header">
    <PrimaryNavigation :profileImage="profileImage" />
    <SecondaryNavigation />
  </header>
</template>

<script>
import PrimaryNavigation from "./PrimaryNavigation.vue";
import SecondaryNavigation from "./SecondaryNavigation.vue";

export default {
  name: "AppHeader",
  components: {
    PrimaryNavigation,
    SecondaryNavigation
  },
  props: {
    profileImage: String
  }
};
</script>

<style lang="scss">
.app-header {
  width: 100%;
  border-bottom: 0.5px solid hsl(0, 0%, 90%);
  display: grid;
  grid-template-columns: 130px 575px 1fr;
  margin-bottom: 16px;
}
</style>
