<script setup>
import MenuView from "../components/Dashboard/MenuView.vue";
import Navbar from "../components/Dashboard/NavbarView.vue";
import DashboardCard from "../components/Dashboard/DashboardCard.vue";
import Statistics from "../components/Dashboard/Statistic/StatisticView.vue";
import Gains from "../components/Dashboard/GainsView.vue";
</script>

<template>
  <div class="app bg-gray-200">
    <div class="row">
      <menu-view class="col-auto" />
      <div class="col">
        <navbar
          nom="John Doe"
          role="Vendeur"
          profile="/src/assets/profile.jpg"
        />
        <div class="row justify-around">
          <!-- <div class="col-1"></div> -->
          <statistics
            class="col-4"
            clients="9.842K"
            revenue="700k (fcfa)"
            produits="240k"
            ventes="100k"
          />
          <gains class="col-7" benefices="+100 k" rapport="75" entries="70" />
        </div>
        <dashboard-card class="m-3">
          <template #title> Overview </template>
          <template #left>
            <ul class="flex list-disc">
              <li class="me-4 text-purple-500">Gains</li>
              <li class="text-yellow-500">Dépense</li>
            </ul>
          </template>
        </dashboard-card>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .dahsboard {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
