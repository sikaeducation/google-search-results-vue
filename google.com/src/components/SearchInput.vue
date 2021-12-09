<template>
  <form class="search-input">
    <input type="text" name="searchText" /><FontAwesomeIcon icon="search" />
  </form>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "SearchInput",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss">
.search-input {
  border: 0.5px solid hsl(0, 0%, 90%);
  border-radius: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.search-input input {
  border: none;
  width: 100%;
  height: 25px;
}
.search-input svg {
  color: hsl(210, 80%, 50%);
}
</style>
