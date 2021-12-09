<template>
  <section class="details">
    <p class="description">{{ description }}</p>
    <ul>
      <li>
        <FounderDetail :founders="founders" />
      </li>
      <li>
        <Detail heading="Employees:">
          {{ employees }}
        </Detail>
      </li>
      <li>
        <Detail heading="Owner:">
          <a :href="owner.url">{{ owner.label }}</a>
        </Detail>
      </li>
      <li>
        <Detail heading="Headquarters location:">
          <a :href="headquarters.url">{{ headquarters.label }}</a>
        </Detail>
      </li>
      <li>
        <Detail heading="Founded:">
          {{ yearFounded }}
        </Detail>
      </li>
    </ul>
  </section>
</template>

<script>
import Detail from "./Detail";
import FounderDetail from "./FounderDetail";

export default {
  name: "App",
  components: {
    Detail,
    FounderDetail
  },
  props: {
    details: Object
  },
  computed: {
    yearFounded() {
      return this.details.yearFounded;
    },
    headquarters() {
      return this.details.headquarters;
    },
    owner() {
      return this.details.owner;
    },
    description() {
      return this.details.description;
    },
    founders() {
      return this.details.founders;
    },
    employees() {
      return this.details.employees;
    }
  }
};
</script>

<style lang="scss">
.details > p {
  margin-bottom: 16px;
  color: hsl(0, 0%, 10%);
}
.details li {
  display: flex;
  margin-bottom: 16px;
}
</style>
