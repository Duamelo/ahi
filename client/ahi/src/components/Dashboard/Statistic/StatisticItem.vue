<template>
  <div class="row statistic-item justify-around">
    <div class="col-3 my-auto me-1">
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
  color:white;
  width: 2.5rem;
  font-size: 20px;
  height: auto;
  border-radius: 50%;
  padding: 0.35rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
</style>
