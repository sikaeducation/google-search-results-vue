<template>
  <img :src="imageUrl" class="lead-image" alt="lead" />
</template>

<script>
export default {
  name: "LeadImage",
  props: {
    imageUrl: String
  }
};
</script>

<style lang="scss">
.lead-image {
  width: 390px;
}
</style>
