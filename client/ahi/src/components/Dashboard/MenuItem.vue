<template>
  <li>
    <router-link :to="href" class="menu-item">
      <div class="mr-1.5"><slot name="icon" /></div>
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["href"],
};
</script>

<style >
.menu-item {
  font-weight: 700;
  margin-bottom: 2.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  padding: 0.1rem;
  align-items: center;
  display: flex;
  border-radius: 10px;
}

/* First style
 .menu-item:hover{
  --tw-bg-opacity: 1;
    background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
    color: black;
} 
First style
*/

/* Second style */

.menu-item:hover {
  background-color: #1e3c87;
  color: white;
}
.menu-item:hover svg {
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: white;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
/* Second style */
.menu-item svg {
  color: #1e3c87;
  height: 33px;
}
</style>
