<template>
  <div class="app-card">
    <a :href="url">
      <p>{{ content }}</p>
      <p class="details">
        <span class="app">{{ app }}</span>
        <time>{{ recency }}</time>
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    content: String,
    app: String,
    recency: String,
    url: String
  }
};
</script>

<style lang="scss">
.app-card {
  border: 0.5px solid hsl(0, 0%, 90%);
  border-radius: 4px;
  padding: 16px;
  margin-right: 8px;
}
.app-card > p {
  overflow: ellipsis;
}
.app-card a {
  color: inherit;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 145px;
  height: 180px;
}
.app-card .details {
  font-size: 12px;
}
.app-card .details time {
  color: hsl(0, 0%, 50%);
}
.app-card .details time::before {
  content: " · ";
}
</style>
