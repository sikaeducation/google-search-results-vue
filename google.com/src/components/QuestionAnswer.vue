<template>
  <div class="question-answer">
    <header>
      <h3>{{ summary }}</h3>
      <FontAwesomeIcon icon="angle-up" />
    </header>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "QuestionAnswer",
  components: {
    FontAwesomeIcon
  },
  props: {
    summary: String
  }
};
</script>

<style lang="scss">
.question-answer {
  border-top: 0.5px solid hsl(0, 0%, 90%);
}

.question-answer time {
  color: hsl(0, 0%, 50%);
  font-size: 12px;
}

.question-answer header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.question-answer main {
  padding: 16px;
}
.question-answer main h3 {
  margin-top: 16px;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.question-answer main .url {
  color: hsl(130, 40%, 35%);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 16px;
}
.question-answer header i {
  color: hsl(0, 0%, 50%);
  padding-right: 16px;
}
</style>
