<template>
  <ul class="supporting-images">
    <li
      v-for="supportingImageUrl in supportingImageUrls"
      :key="supportingImageUrl"
      :style="{ backgroundImage: `url(${supportingImageUrl})` }"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "SupportingImages",
  props: {
    supportingImageUrls: Array
  }
};
</script>

<style lang="scss">
.supporting-images {
  display: flex;
  flex-flow: row wrap;
}
.supporting-images li {
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}
</style>
