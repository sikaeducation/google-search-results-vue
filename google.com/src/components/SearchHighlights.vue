<template>
  <section class="search-highlights">
    <SearchHighlightsHeader
      :leadImageUrl="leadImageUrl"
      :supportingImageUrls="imageThumbnailUrls"
      :title="title"
      :subtitle="subtitle"
    />
    <main>
      <Details :details="details" />
      <LinkList class="profiles" heading="Profiles" :links="profiles" />
      <LinkList
        class="related-searches"
        heading="People also search for"
        :links="otherResults"
      />
    </main>
  </section>
</template>

<script>
import SearchHighlightsHeader from "./SearchHighlightsHeader";
import LinkList from "./LinkList";
import Details from "./Details";

import { pick } from "lodash/fp";

export default {
  name: "SearchHighlights",
  components: {
    SearchHighlightsHeader,
    LinkList,
    Details
  },
  props: {
    knowledgePanel: Object
  },
  computed: {
    leadImageUrl() {
      return this.knowledgePanel.leadImageUrl;
    },
    imageThumbnailUrls() {
      return this.knowledgePanel.imageThumbnailUrls;
    },
    subtitle() {
      return this.knowledgePanel.subtitle;
    },
    title() {
      return this.knowledgePanel.title;
    },
    profiles() {
      return this.knowledgePanel.profiles;
    },
    otherResults() {
      return this.knowledgePanel.otherResults;
    },
    details() {
      return pick([
        "yearFounded",
        "headquarters",
        "owner",
        "description",
        "founders",
        "employees"
      ])(this.knowledgePanel);
    }
  }
};
</script>

<style lang="scss">
.search-highlights {
  margin-left: 32px;
  margin-top: 32px;
  grid-column: 3;
  border: 0.5px solid hsl(0, 0%, 90%);
  max-width: 425px;
  border-radius: 4px;
}
.search-highlights > main {
  padding: 16px;
}
.search-highlights > main > section {
  margin-bottom: 24px;
}
</style>
