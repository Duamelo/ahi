<script setup>
import VendorOverview from "../../components/Dashboard/VendorOverview.vue";
import Statistics from "../../components/Dashboard/Statistic/StatisticView.vue";
import Gains from "../../components/Dashboard/GainsView.vue";
import VendorTasks from "../../components/Dashboard/Task/VendorTasks.vue";
import VendorChannels from "../../components/Dashboard/VendorChannels.vue";
import VendorTransactions from "../../components/Dashboard/Transaction/VendorTransactions.vue";
import TopCustomers from "../../components/Dashboard/TopCustomers.vue";

const data_gains = [
  300, 200, 200, 100, 300, 50, 300, 300, 200, 300, 50, 200, 300,
];
const data_depenses = data_gains.map((i) => -i);
const top_costumers = [
  {
    client: { name: "William Schiler", profile: "/src/assets/profile.jpg" },
    rank: 110,
    date: "25 September 2022",
    balance: "F 250k",
    action: "Promote",
  },
  {
    client: { name: "Sillas Kroud", profile: "/src/assets/profile.jpg" },
    rank: 111,
    date: "25 October 2022",
    balance: "F 250k",
    action: "View activity",
  },
  {
    client: { name: "Sarah Fishin", profile: "/src/assets/profile.jpg" },
    rank: 112,
    date: "25 mai 2022",
    balance: "F 250k",
    action: "Promote",
  },
  {
    client: { name: "Dane Phishon", profile: "/src/assets/profile.jpg" },
    rank: 113,
    date: "25 avril 2022",
    balance: "F 250k",
    action: "Promote",
  },
  {
    client: { name: "Mark Twain", profile: "/src/assets/profile.jpg" },
    rank: 114,
    date: "25 juillet 2022",
    balance: "F 250k",
    action: "Promote",
  },
  {
    client: { name: "Freddy Colder", profile: "/src/assets/profile.jpg" },
    rank: 115,
    date: "25 aout 2022",
    balance: "F 250k",
    action: "Promote",
  },
];
</script>

<template>
  <div
    class="
      justify-between
      me-1
      ms-1
      mb-3
      grid grid-cols-1
      place-items-center
      md:grid-cols-3
      gap-4
    "
  >
    <!-- <div class="col-1"></div> -->
    <statistics
      class="col-span-1"
      clients="9.842K"
      revenue="700k (fcfa)"
      produits="240k"
      ventes="100k"
    />
    <gains
      class="col-span-2 mb-3"
      benefices="+100 k"
      rapport="75"
      entries="70"
    />
  </div>
  <vendor-overview :gains="data_gains" :depenses="data_depenses" annee="2022" />
  <div
    class="
      justify-between
      grid
      lg:grid-cols-3
      sm:grid-cols-4
      gap-3
      channel_task_transaction
    "
  >
    <vendor-channels class="lg:col-span-1 sm:col-span-2" :snapchat="25" :instagram="50" :facebook="25" />
    <vendor-tasks class="lg:col-span-1 sm:col-span-2" />
    <vendor-transactions class="lg:col-span-1 sm:col-span-4" />
  </div>
  <div>
    <top-customers :data="top_costumers"></top-customers>
  </div>
</template>

<style>
/* .channel_task_transaction .dashboard-card {
  min-height: 320px;
} */
</style>
