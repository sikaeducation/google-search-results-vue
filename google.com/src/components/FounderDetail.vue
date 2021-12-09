<template>
  <Detail heading="Founders:">
    <span v-for="(founder, index) in founders" :key="founder.label">
      <a v-if="founder.url" :href="founder.url">{{ founder.label }}</a>
      <span v-else>{{ founder.label }}</span>
      <span v-if="index + 1 < founders.length">, </span>
    </span>
  </Detail>
</template>

<script>
import Detail from "./Detail";

export default {
  name: "FounderDetail",
  components: {
    Detail
  },
  props: {
    founders: Array
  }
};
</script>
