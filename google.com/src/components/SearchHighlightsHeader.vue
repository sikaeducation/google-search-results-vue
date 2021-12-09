<template>
  <header class="search-highlights-header">
    <ImageBar
      :leadImageUrl="leadImageUrl"
      :supportingImageUrls="supportingImageUrls"
    />
    <Overview :title="title" :subtitle="subtitle" />
  </header>
</template>

<script>
import ImageBar from "./ImageBar";
import Overview from "./Overview";

export default {
  name: "SearchHighlightsHeader",
  components: {
    ImageBar,
    Overview
  },
  props: {
    leadImageUrl: String,
    supportingImageUrls: Array,
    title: String,
    subtitle: String
  }
};
</script>

<style lang="scss">
.search-highlights-header {
  border-bottom: 0.5px solid hsl(0, 0%, 90%);
}
</style>
