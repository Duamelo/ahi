<script setup>
import MenuView from "../components/Dashboard/MenuView.vue";
import Navbar from "../components/Dashboard/NavbarView.vue";
import VendorOverview from "../components/Dashboard/VendorOverview.vue";
import Statistics from "../components/Dashboard/Statistic/StatisticView.vue";
import Gains from "../components/Dashboard/GainsView.vue";
import VendorTasks from "../components/Dashboard/VendorTasks.vue";
import VendorChannels from "../components/Dashboard/VendorChannels.vue";
import VendorTransactions from "../components/Dashboard/VendorTransactions.vue";
const data_gains = [
  300, 200, 200, 100, 300, 50, 300, 300, 200, 300, 50, 200, 300,
];
const data_depenses = data_gains.map((i) => -i);
</script>

<template>
  <div class="vendor-dashboard bg-gray-200">
    <div class="row">
      <menu-view class="col-auto" />
      <div class="col">
        <navbar
          nom="John Doe"
          role="Vendeur"
          profile="/src/assets/profile.jpg"
        />

        <div class="justify-between me-1 ms-1 mb-3 row">
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
        <vendor-overview
          :gains="data_gains"
          :depenses="data_depenses"
          annee="2022"
        />
        <div class="justify-between row">
          <div class="col-4">
            <vendor-channels :snapchat="25" :instagram="50" :facebook="25" />
          </div>
          <div class="col-4">
            <vendor-tasks />
          </div>
          <div class="col-3">
            <vendor-transactions />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.vendor-dashboard {
  min-height: 100vh;
  padding: 39px 24px;
}
</style>
