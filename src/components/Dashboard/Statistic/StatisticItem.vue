<template>
  <div class="row">
    <div class="col-3">
      <slot name="icon" />
    </div>
    <div class="col-7">
      <span class="font-bold">
        {{ count }}
        <br />
      </span>
      <span class="font-light">
        {{ name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["count", "name"],
};
</script>

<style></style>
