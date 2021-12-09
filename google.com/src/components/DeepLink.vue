<template>
  <div class="deep-link">
    <h3>
      <a :href="url">{{ label }}</a>
    </h3>
    <p>{{ truncatedDescription }}</p>
  </div>
</template>

<script>
import { truncate } from "lodash/fp";

export default {
  name: "DeepLink",
  props: {
    label: String,
    url: String,
    description: String
  },
  computed: {
    truncatedDescription() {
      return truncate({ length: 95 })(this.description);
    }
  }
};
</script>

<style lang="scss">
.deep-link {
  max-width: 225px;
  margin-right: 30px;
}
</style>
