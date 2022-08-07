<template>
  <router-link to="/category" class="category">
    <img class="icon" :src="category.src" :alt="category.alt" />
    <span class="label">{{ category.label }}</span>
  </router-link>
  <!-- <router-link
    to="/category"
    class="
      flex
      w-auto
      gap-3
      items-center
      bg-white
      hover:bg-gray-100
      shadow-lg
      rounded-xl
      p-3
      md:px-8 md:py-3
    "
  >
    <img class="flex w-4" :src="category.src" :alt="category.alt" />
    <span class="font-medium">{{ category.label }}</span>
  </router-link> -->
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style scoped>
.category {
  display: flex;
  width: auto;
  color: black;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  gap: 12px;
  border-radius: 10px;
  padding: 17px 47px;
}
.category:hover {
  color: blue;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.12), -2px -4px 8px rgb(0, 0, 0, 0.12);
}
/* .icon {
} */
.label {
  font-weight: 500;
}
</style>