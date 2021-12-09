<template>
  <nav class="user-navigation">
    <ul>
      <li class="apps">
        <a href="#"><FontAwesomeIcon icon="th"/></a>
      </li>
      <li class="profile">
        <a href="#"><img :src="profileImage" alt="Profile"/></a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "UserNavigation",
  components: {
    FontAwesomeIcon
  },
  props: {
    profileImage: String
  }
};
</script>

<style lang="scss">
.user-navigation {
  width: 100%;
}
.user-navigation ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  list-style: none;
  align-items: center;
}
.user-navigation img {
  border-radius: 50%;
  max-width: 100%;
}
.user-navigation a {
  font-size: 18px;
  color: hsl(0, 0%, 40%);
}
.user-navigation .profile {
  border-radius: 50%;
  border: 2px solid hsl(120, 40%, 40%);
  margin: 0 16px;
  padding: 2px;
  height: 40px;
  width: 40px;
}
</style>
