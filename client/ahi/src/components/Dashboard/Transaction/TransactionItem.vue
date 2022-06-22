<template>
  <li class="grid grid-cols-6">
    <div class="col-span-1 vendor-transaction-item-icon">
      <slot name="icon" />
    </div>
    <div class="col-span-5 grid grid-cols-1">
      <span class="fw-bolder"><slot name="leading" /></span>
      <span class="text-muted"><slot name="subtitle" /></span>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style>
.vendor-transaction-item-icon svg {
  background-color: #eee3f6;
  width: 2rem;
  padding: 0.25rem;
  /* top: 0; */
  /* margin-top: 0.375rem;
  margin-bottom: 0.375rem; */
}
</style>
