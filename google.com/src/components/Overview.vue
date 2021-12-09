<template>
  <section class="overview">
    <div>
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
    <a href="#"><FontAwesomeIcon icon="share-alt"/></a>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Overview",
  components: {
    FontAwesomeIcon
  },
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style lang="scss">
.overview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}
.overview p {
  font-size: 12px;
  color: hsl(0, 0%, 50%);
}
.overview > a {
  color: hsl(0, 0%, 50%);
}
</style>
