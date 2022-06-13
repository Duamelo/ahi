<template>
  <div class="dashboard-card block p-6 rounded-lg bg-white">
    <div class="flex justify-between">
      <span class="title leading-tight font-medium fw-bold mb-3 uppercase">
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

.dashboard-card .title {
  color: #29b9ad;
}
.dashboard-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.dashboard-card .outlined {
  outline: 2px solid #29b9ad;
  border-radius: 0.25rem;
  padding: 0.25rem;
}
</style>
