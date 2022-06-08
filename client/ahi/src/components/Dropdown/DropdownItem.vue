<template>
  <li>
    <button
      class="btn"
      :class="[
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
        'block px-4 py-2 text-sm',
      ]"
    >
      <slot />
    </button>
  </li>
</template>

<script>
export default {};
</script>

<style></style>
