<template>
  <a class="search-type" :class="{ active: isActive }" :href="linkUrl"
    ><FontAwesomeIcon :icon="icon" /><span>{{ label }}</span></a
  >
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "SearchType",
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: String,
    label: String,
    isActive: Boolean,
    linkUrl: String
  }
};
</script>

<style lang="scss">
.search-type {
  color: hsl(0, 0%, 40%);
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 12px;
  height: 100%;
}

.search-type i {
  margin-right: 6px;
}

.search-type.active {
  border-bottom: 2px solid hsl(210, 80%, 50%);
  color: hsl(210, 80%, 50%);
}
</style>
