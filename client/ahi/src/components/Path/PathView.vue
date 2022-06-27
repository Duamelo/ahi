<template>
  <nav class="bg-grey-light rounded-md w-full">
    <ol class="list-reset flex">
      <slot />
    </ol>
  </nav>
</template>

<script>
export default {
  computed: {
    size() {
      console.log(this.$children);
      return this.$children.length;
    },
  },
};
</script>

<style></style>
