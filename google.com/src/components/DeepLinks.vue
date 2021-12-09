<template>
  <div class="deep-links">
    <ul>
      <li v-for="deepLink in deepLinks" :key="deepLink.label">
        <DeepLink
          :label="deepLink.label"
          :url="deepLink.url"
          :description="deepLink.description"
        />
      </li>
    </ul>
    <p class="more-links">
      <a :href="additionalDeepLinksUrl">More results from {{ searchUrl }} »</a>
    </p>
  </div>
</template>

<script>
import DeepLink from "./DeepLink.vue";

export default {
  name: "DeepLinks",
  components: {
    DeepLink
  },
  props: {
    deepLinks: Array,
    additionalDeepLinksUrl: String,
    searchUrl: String
  }
};
</script>

<style lang="scss">
.deep-links {
  margin-top: 24px;
  margin-left: 32px;
  margin-bottom: 16px;
}
.deep-links > ul {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 16px;
}
</style>
