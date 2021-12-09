<template>
  <h3>
    <a :href="url">{{ label }}</a>
  </h3>
</template>

<script>
export default {
  name: "SearchResultHeading",
  props: {
    url: String,
    label: String
  }
};
</script>
