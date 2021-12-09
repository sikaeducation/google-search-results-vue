<template>
  <div class="search-result">
    <SearchResultHeading :url="url" :label="label" />
    <Url :url="url" :appPlatform="appPlatform" />
    <p class="description">{{ description }}</p>
    <p class="last-visit" v-if="hasBeenVisited">
      You've visited this page {{ formattedVisitFrequency }}. Last visit:
      {{ lastVisit }}
    </p>
    <DeepLinks
      v-if="deepLinks"
      :deepLinks="deepLinks"
      :additionalDeepLinksUrl="additionalDeepLinksUrl"
      :searchUrl="url"
    />
    <ul v-if="appCards && appCards.length > 0" class="app-cards">
      <li v-for="appCard in appCards" :key="appCard.url">
        <AppCard
          :content="appCard.content"
          :app="appCard.app"
          :recency="appCard.recency"
          :url="appCard.url"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import AppCard from "./AppCard";
import SearchResultHeading from "./SearchResultHeading";
import Url from "./Url";
import DeepLinks from "./DeepLinks";
import { format } from "date-fns";

export default {
  name: "SearchResult",
  components: {
    DeepLinks,
    SearchResultHeading,
    Url,
    AppCard
  },
  props: {
    data: Object
  },
  computed: {
    searchResult() {
      return this.data;
    },
    hasBeenVisited() {
      return this.searchResult.visitFrequency > 0;
    },
    formattedVisitFrequency() {
      if (this.searchResult.visitFrequency === 1) {
        return "1 time";
      } else if (this.searchResult.visitFrequency < 5) {
        return `${this.searchResult.visitFrequency} times`;
      } else {
        return "many times";
      }
    },
    lastVisit() {
      return format(new Date(this.searchResult.lastVisit), "M/d/yy");
    },
    label() {
      return this.searchResult.label;
    },
    description() {
      return this.searchResult.description;
    },
    url() {
      return this.searchResult.url;
    },
    deepLinks() {
      return this.searchResult.deepLinks;
    },
    additionalDeepLinksUrl() {
      return this.searchResult.additionalDeepLinksUrl;
    },
    appPlatform() {
      return this.searchResult.appPlatform;
    },
    appCards() {
      return this.searchResult.appCards;
    }
  }
};
</script>

<style lang="scss">
.search-result > .more-links {
  margin-left: 24px;
}
.search-result > p,
.search-result > h3 {
  padding: 0 16px;
}
.search-result > .url {
  color: hsl(130, 40%, 35%);
}
.search-result > .url img {
  margin-left: 6px;
  width: 12px;
}
.search-result > .last-visit {
  color: hsl(0, 0%, 45%);
}
.app-cards {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  overflow-x: auto;
  margin-top: 16px;
}
</style>
