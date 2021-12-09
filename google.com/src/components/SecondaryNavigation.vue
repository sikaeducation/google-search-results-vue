<template>
  <nav class="secondary-navigation">
    <ul class="search-types">
      <li v-for="searchType in searchTypes" :key="searchType.label">
        <SearchType
          :isActive="searchType.isActive"
          :icon="searchType.icon"
          :label="searchType.label"
          :linkUrl="searchType.linkUrl"
        />
      </li>
    </ul>
    <ul class="configuration">
      <li><a href="#">Settings</a></li>
      <li><a href="#">Tools</a></li>
    </ul>
  </nav>
</template>

<script>
import SearchType from "./SearchType.vue";

export default {
  name: "App",
  components: {
    SearchType
  },
  computed: {
    searchTypes() {
      return [
        {
          isActive: true,
          icon: "search",
          label: "All",
          linkUrl: "#"
        },
        {
          isActive: false,
          icon: "newspaper",
          label: "News",
          linkUrl: "#"
        },
        {
          isActive: false,
          icon: "map-marked",
          label: "Maps",
          linkUrl: "#"
        },
        {
          isActive: false,
          icon: "video",
          label: "Videos",
          linkUrl: "#"
        },
        {
          isActive: false,
          icon: "images",
          label: "Images",
          linkUrl: "#"
        },
        {
          isActive: false,
          icon: "ellipsis-v",
          label: "More",
          linkUrl: "#"
        }
      ];
    }
  }
};
</script>

<style lang="scss">
.secondary-navigation {
  grid-row: 2;
  grid-column: 2;
}
.secondary-navigation {
  padding: 0 6px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.secondary-navigation ul {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
}
.secondary-navigation a {
  display: inline-block;
  color: hsl(0, 0%, 40%);
  text-decoration: none;
  font-size: 12px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 24px 9px 16px 9px;
}
</style>
