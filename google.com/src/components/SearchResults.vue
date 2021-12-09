<template>
  <section class="search-results">
    <SearchResultTotals :resultCount="resultCount" :searchTime="searchTime" />
    <ul>
      <li v-for="displayedResult in displayedResults" :key="displayedResult.id">
        <component
          :is="displayedResult.component"
          :data="displayedResult.data"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import SearchResultTotals from "./SearchResultTotals";
import SearchResult from "./SearchResult";
import QuestionAnswers from "./QuestionAnswers";

import { head, tail } from "lodash/fp";

export default {
  name: "SearchResults",
  components: {
    SearchResultTotals,
    SearchResult,
    QuestionAnswers
  },
  props: {
    searchResults: Array,
    questions: Array,
    resultCount: Number,
    searchTime: Number
  },
  computed: {
    displayedResults() {
      let id = 0;
      const searchResults = this.searchResults.map(searchResult => {
        return {
          component: "SearchResult",
          data: searchResult,
          id: ++id
        };
      });

      return this.questions.length > 0
        ? [
            head(searchResults),
            {
              component: "QuestionAnswers",
              data: this.questions,
              id: ++id
            },
            ...tail(searchResults)
          ]
        : searchResults;
    },
    searchResult() {
      return this.searchResults[0];
    },
    searchResult2() {
      return this.searchResults[1];
    },
    appCards() {
      return this.searchResults[1].appCards;
    }
  }
};
</script>

<style lang="scss">
.search-results {
  grid-column: 2;
}
.search-results > ul {
  margin-top: 24px;
}
.search-results > ul > li {
  margin-bottom: 24px;
}
</style>
