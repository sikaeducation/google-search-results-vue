<template>
  <div class="primary-navigation">
    <Logo />
    <SearchInput />
    <UserNavigation :profileImage="profileImage" />
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import SearchInput from "./SearchInput.vue";
import UserNavigation from "./UserNavigation.vue";

export default {
  name: "PrimaryNavigation",
  components: {
    Logo,
    SearchInput,
    UserNavigation
  },
  props: {
    profileImage: String
  }
};
</script>

<style lang="scss">
.primary-navigation {
  display: grid;
  grid-template-columns: 130px 575px 1fr;
  grid-row: 1;
  grid-column: 1 / span 3;
}
</style>
