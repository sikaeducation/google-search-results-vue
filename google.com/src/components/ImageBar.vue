<template>
  <div class="image-bar">
    <LeadImage :imageUrl="leadImageUrl" />
    <SupportingImages :supportingImageUrls="supportingImageUrls" />
  </div>
</template>

<script>
import SupportingImages from "./SupportingImages";
import LeadImage from "./LeadImage";

export default {
  name: "ImageBar",
  components: {
    SupportingImages,
    LeadImage
  },
  props: {
    leadImageUrl: String,
    supportingImageUrls: Array
  }
};
</script>

<style lang="scss">
.image-bar {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
}
</style>
