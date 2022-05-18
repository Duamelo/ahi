<template>
  <li>
    <a :href="href" class="menu-item hover:bg-gray-200 hover:text-black">
      <div class="mr-1.5"><slot name="icon" /></div>
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: ["href"],
};
</script>

<style>
.menu-item {
  font-weight: 700;
  padding: 0.5rem;
  align-items: center;
  display: flex;
  border-radius: 0.5rem;
}
</style>
