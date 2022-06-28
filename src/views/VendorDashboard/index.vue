
<template>
  <div class="vendor-dashboard">
    <div class="row">
      <div class="blur-bg backdrop-blur-sm nav-lg-none" v-if="show_sidebar">  </div>
      <menu-view v-model:show="show_sidebar"/>
      <div class="col">
        <navbar
          nom="John Doe"
          role="Vendeur"
          profile="/src/assets/profile.jpg"
          v-model:show_sidebar="show_sidebar"
        />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuView from "../../components/Dashboard/MenuView.vue";
import Navbar from "../../components/Dashboard/NavbarView.vue";
import { ref } from '@vue/reactivity';

var show_sidebar = ref(false) 
</script>

<style>
/* Laptop */
 @media (min-width: 1440px) {

 }
/* Tablet */
 @media (min-width: 768px) {

 }
/* Mobile */
 @media (max-width: 350px) {

 }


.vendor-dashboard {
  min-height: 100vh;
  padding-top: 32px;
  padding-right: 7px;
  padding-bottom: 23px;
  padding-left: 12px;
  font-size: 19px;
  background: #eee3f6;
}

.vendor-dashboard .scrollable {
  max-height:60vh;
  overflow-y: auto;
}

.button-outlined {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  padding: 0.35rem 0.75rem;
  border: #1e3c87;
  border: solid;
  border-width: 1px;
  align-items: center;
  display: flex;
  border-radius: 10px;
  border-color: #1e3c87;
  text-decoration: none;
}
.button-outlined:focus {
  box-shadow: 0 0 0 0.25rem #51669b;
}
.button-outlined:hover {
  background-color: #1e3c87;
  color: white;
}
.button-outlined:hover svg {
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: white;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.button-outlined svg {
  color: #1e3c87;
  height: 33px;
}

.line {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0.25rem;
  align-items: center;
  border-radius: 0.5rem;
  border-width: 1px;
  align-items: center;
}
.line:hover {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); 
}

.vendor-dashboard label {
  display: block;
  padding-right: 1rem;
  margin-bottom: 0.25rem;
  color: #6b7280;
  font-weight: 700;
  text-align: right;
}

.vendor-dashboard input,
.vendor-dashboard textarea {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #e5e7eb;
  color: #374151;
  line-height: 1.25;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 2px;
  border-color: #e5e7eb;
  appearance: none;
}
.vendor-dashboard input:focus,
.vendor-dashboard textarea:focus {
  background-color: #ffffff;
  border-color: #1e3c87;
  outline: 0;
}

.vendor-dashboard input[type="file"] {
  display: block;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin: 0;
  background-clip: padding-box;
  background-color: #ffffff;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #374151;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 400;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #d1d5db;
  border-style: solid;
}
.blur-bg{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 3;
  background-color: rgb(0 0 0/.2);
}
.vendor-dashboard input[type="file"]:hover {
  background-color: #ffffff;
  color: #374151;
  border-color: #2563eb;
  outline: 0;
}
</style>