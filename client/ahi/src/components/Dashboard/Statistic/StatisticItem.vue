<template>
  <div class="row statistic-item">
    <div class="col-3 me-1">
      <slot name="icon" />
    </div>
    <div class="col-7">
      <span class="font-bold text-nowrap">
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

<style>
.statistic-item svg {
  background: #1e3c87;
  width: 2rem;
  border-radius: 50% !important;
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
</style>
