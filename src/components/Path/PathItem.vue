<template>
  <li>
    <span v-if="active" class="font-bold">
      <slot>
        {{ href }}
      </slot>
    </span>

    <router-link v-else :to="href" class="font-medium hover:font-semibold">
      <slot>
        {{ href }}
      </slot>
    </router-link>
  </li>
  <li v-if="!active">
    <span class="text-gray-500 mx-2"> > </span>
  </li>
</template>

<script>
export default {
  props: ["active", "href"],
};
</script>

<style></style>
