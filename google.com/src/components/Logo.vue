<template>
  <span id="logo"
    ><a href="https://google.com"
      ><img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        alt="Google logo"/></a
  ></span>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss">
#logo {
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#logo img {
  max-width: 90px;
}
</style>
