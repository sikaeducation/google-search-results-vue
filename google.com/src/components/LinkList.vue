<template>
  <section class="link-list">
    <h3>{{ heading }}</h3>
    <ul>
      <li v-for="link in links" :key="link.linkUrl">
        <ExternalLink
          :label="link.label"
          :linkUrl="link.linkUrl"
          :thumbnailUrl="link.thumbnailUrl"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import ExternalLink from "./ExternalLink";

export default {
  name: "LinkList",
  components: {
    ExternalLink
  },
  props: {
    heading: String,
    links: Array
  }
};
</script>

<style lang="scss">
.link-list ul {
  display: flex;
  flex-flow: row wrap;
}
.link-list li {
  width: 75px;
}
.link-list img {
  max-width: 100%;
}
</style>
