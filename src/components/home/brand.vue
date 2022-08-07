<template>
  <router-link :class="`brand ${className}`" to="/category">
    <img class="background" :src="bg" :alt="brand" />
    <img class="logo" :src="logo" :alt="brand" />
  </router-link>
</template>

<script>
export default {
  props: ["className", "brand", "bg", "logo"],
};
</script>

<style lang="postcss">
.brand {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.brand:hover {
  padding: 0.1px;
  border-radius: 10px;
  background-color: rgb(0 0 0 / 50%);
}
.logo {
  position: absolute;
  margin: auto;
}
</style>