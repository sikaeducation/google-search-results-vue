<template>
  <p class="url">
    {{ url }}
    <img
      v-if="appPlatform"
      :src="appPlatform.imageUrl"
      :alt="appPlatform.label"
    />
  </p>
</template>

<script>
export default {
  name: "Url",
  props: {
    url: String,
    appPlatform: Object
  }
};
</script>
