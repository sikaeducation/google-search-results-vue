<template>
  <div class="question-answers">
    <h3>People also ask</h3>
    <QuestionAnswer
      v-for="question in questions"
      :key="question.summary"
      :summary="question.summary"
    />
  </div>
</template>

<script>
import QuestionAnswer from "./QuestionAnswer";

export default {
  name: "QuestionAnswers",
  components: {
    QuestionAnswer
  },
  props: {
    data: Array
  },
  computed: {
    questions() {
      return this.data;
    }
  }
};
</script>

<style lang="scss">
.question-answers {
  border: 0.5px solid hsl(0, 0%, 90%);
  border-radius: 4px;
}
.question-answers h3 {
  padding: 16px;
}
</style>
