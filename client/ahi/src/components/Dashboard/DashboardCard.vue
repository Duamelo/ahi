<template>
  <div class="dashboard-card block p-6 rounded-lg shadow-sm bg-white">
    <div class="flex justify-between">
      <span class="title leading-tight font-medium mb-3 uppercase">
        <slot name="title" />
      </span>
      <slot name="left" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .dashboard-card{} */

.title {
  color: #29b9ad;
}
</style>
