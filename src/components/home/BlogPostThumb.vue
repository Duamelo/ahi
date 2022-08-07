<template>
  <router-link
    to="/blogpost"
    class="hover-card flex flex-col gap-4 bg-green-300 rounded-lg p-2"
  >
    <img class="w-full" :src="src" :alt="`blog ${id}`" />
    <div class="w-5/6 font-semibold text-white text-lg mx-auto">
      <slot />
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["src", "id"],
};
</script>

<style scoped>
.hover-card {
  box-shadow: 3px 5px 4px rgb(0 0 0 / 50%);
}
.hover-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>