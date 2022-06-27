<template>
  <li class="row">
    <div class="col-2 vendor-transaction-item-icon">
      <slot name="icon" />
    </div>
    <div class="col-8 row row-span-1">
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
  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
  width: 2rem;
  top: 0;
  padding: 0.25rem;
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
}
</style>
