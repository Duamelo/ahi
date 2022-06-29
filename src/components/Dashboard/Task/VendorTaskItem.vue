<template>
  <li class="d-flex mb-2">
    <CheckCircleIcon class="w-5 h-5 me-3" />
    <span class="fw-bolder"> <slot /> </span>
  </li>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/outline";
export default {
  components: { CheckCircleIcon },
};
</script>

<style></style>
