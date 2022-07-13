<template>
  <select @click="toggle" class="dropdown">
    <option>
      <slot name="toggled"> </slot>
    </option>
    <slot />
  </select>
</template>

<script>
export default {};
</script>
<style >
.dropdown {
  display: block;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: 0;
  background-clip: padding-box;
  background-color: #ffffff;
  background-repeat: no-repeat;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #374151;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #1e3c87;
  border-style: solid;
  appearance: none;
}
.dropdown:focus {
color: #374151; 
border-color: #51669b; 
outline: 0; 
}
</style>