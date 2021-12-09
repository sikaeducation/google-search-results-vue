<template>
  <div class="detail">
    <dt>{{ heading }}</dt>
    <dd><slot></slot></dd>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    heading: String
  }
};
</script>

<style lang="scss">
.detail dt {
  font-weight: bold;
  color: hsl(0, 0%, 10%);
  margin-right: 0.5em;
}
.detail dt,
.detail,
dd {
  font-size: 14px;
}
</style>
