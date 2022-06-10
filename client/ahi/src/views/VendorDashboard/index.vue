
<template>
 <div class="vendor-dashboard">
    <div class="row">
      <menu-view class="col-auto" />
      <div class="col">
        <navbar
          nom="John Doe"
          role="Vendeur"
          profile="/src/assets/profile.jpg"
        />
  <router-view/>
    </div>
    </div>
  </div>
</template>

<script setup>
import MenuView from "../../components/Dashboard/MenuView.vue";
import Navbar from "../../components/Dashboard/NavbarView.vue";
</script>

<style>
.vendor-dashboard {
  min-height: 100vh;
  padding-top: 32px;
  padding-right: 26px;
  padding-bottom: 23px;
  padding-left: 12px;
  font-size: 19px;
  background-color: #eee3f6;
}
</style>