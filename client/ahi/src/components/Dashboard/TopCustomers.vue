<template>
  <dashboard-card class="mb-3">
    <template #title> Top Customers </template>
    <template #left>
      <div class="d-flex">
        <input class="outlined me-3" placeholder="# Search by tag" />
        <dropdown>
          <template #toggled>
              STATUS
          </template>
            <item value="1"> 1 </item>
            <item value="2"> 2 </item>
            <item value="3"> 3 </item>
        </dropdown>
      </div>
    </template>
    <div class="mt-2">
      <table class="table">
        <thead>
          <tr>
            <th>Clients</th>
            <th class="text-center"># Rank</th>
            <th class="text-center">Issue Date</th>
            <th class="text-center">Balance</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row.rank" class="my-4">
            <td class="d-flex">
              <img :src="row.client.profile" class="rounded-full w-10 h-10" />
              <div class="ms-3 fw-bolder my-auto">
                {{ row.client.name }}
              </div>
            </td>
            <td class="text-center">{{ row.rank }}</td>
            <td class="text-center">{{ row.date }}</td>
            <td class="text-center">{{ row.balance }}</td>
            <td class="text-center">{{ row.action }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </dashboard-card>
</template>

<script>
import DashboardCard from "./DashboardCard.vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/outline";
import Item from "../Dropdown/DropdownItem.vue";
import Dropdown from "../Dropdown/DropdownMenu.vue";
// console.log(this.data);
export default {
  props: ["data"],
  components: {
    DashboardCard,
    ChevronDownIcon,
    Dropdown,
    ChevronUpIcon,
    Item,
  },
};
</script>

<style></style>
