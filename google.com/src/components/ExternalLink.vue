<template>
  <div class="external-link">
    <a :href="linkUrl">
      <figure>
        <img :src="thumbnailUrl" :alt="label" />
      </figure>
      <p>{{ label }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "ExternalLink",
  props: {
    label: String,
    linkUrl: String,
    thumbnailUrl: String
  }
};
</script>

<style lang="scss">
.external-link {
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.external-link a {
  text-align: center;
  font-size: 12px;
}
.external-link figure {
  height: 40px;
  margin: auto 0;
}
</style>
