<template>
  <li>
    <router-link  :to="href" class="menu-item hover:bg-gray-200 hover:text-black">
      <div class="mr-1.5"><slot name="icon" /></div>
      <slot></slot>
    </router-link>
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
  margin-bottom: 2rem;

  /* padding: 0.5rem; */
  align-items: center;
  display: flex;
  border-radius: 0.5rem;
}
.menu-item svg {
  --tw-text-opacity: 1;
  color: rgba(30, 64, 175, var(--tw-text-opacity));
  height: 31px;
}
</style>
