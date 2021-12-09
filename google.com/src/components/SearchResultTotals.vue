<template>
  <p class="search-result-totals">
    About {{ formattedResultCount }} search results ({{ searchTime }} seconds)
  </p>
</template>

<script>
export default {
  name: "SearchResultTotals",
  props: {
    resultCount: Number,
    searchTime: Number
  },
  computed: {
    formattedResultCount() {
      return this.resultCount.toLocaleString();
    }
  }
};
</script>

<style lang="scss">
.search-result-totals {
  color: hsl(0, 0%, 50%);
  font-size: 12px;
  padding: 0 16px;
}
</style>
