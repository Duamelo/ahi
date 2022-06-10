<template>
  <path-view>
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item active="true" href="/dashboard/sales">Sales</path-item>
  </path-view>
  <dashboard-card>
    <template #title>
      <input class="outlined me-3 w-75" placeholder="Filter" />
    </template>
    <template #left>
      <button class="btn btn-outline-primary">+</button>
    </template>
    <div class="mt-2">
      <table class="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Customers</th>
            <th>Status</th>
            <th>Prix</th>
            <th>Updated at</th>
            <th>Placed at</th>
            <th>Shipping</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in values()" :key="index" class="my-4">
            <td>{{ customer.code }}</td>
            <td>{{ customer.verified ? "Verifié" : "Invité" }}</td>
            <td>{{ customer.state }}</td>
            <td>{{ customer.price }}</td>
            <td>{{ customer.last_modif }}</td>
            <td>{{ customer.placed_at }}</td>
            <td>{{ customer.shipping }}</td>
            <td>
              <dropdown>
                <template #untoggled>
                  <button class="outlined d-flex">
                    <ChevronDownIcon class="w-6 h-6 my-1" />
                  </button>
                </template>
                <template #toggled>
                  <button class="outlined d-flex">
                    <ChevronUpIcon class="w-6 h-6 my-1" />
                  </button>
                </template>
                <dropdown-content>
                  <item>
                    <button>
                      <FolderIcon />
                      Ouvrir
                    </button></item
                  >
                  <item>
                    <button>
                      <TrashIcon />
                      Supprimer
                    </button>
                  </item>
                </dropdown-content>
              </dropdown>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </dashboard-card>
  <pagination
    v-model:page_index="page_index"
    v-model:limit_index="limit_index"
    :limits="limits"
    :size="sales.length"
  />
</template>
<style>
svg {
  height: 30px;
  margin-right: 4px;
}

button {
  display: inline-flex;
  margin-right: 10px;
}
</style>

<script setup>
import PathItem from "../../components/Path/PathItem.vue";
import PathView from "../../components/Path/PathView.vue";
import Products from "../../components/Dashboard/Catalogues/products.vue";
import DropdownContent from "../../components/Dropdown/DropdownContent.vue";
import Item from "../../components/Dropdown/DropdownItem.vue";
import Dropdown from "../../components/Dropdown/DropdownMenu.vue";
import DashboardCard from "../../components/Dashboard/DashboardCard.vue";
import Pagination from "../../components/Dashboard/Pagination.vue";
import { ChevronRightIcon,ChevronDownIcon, TrashIcon, FolderIcon } from "@heroicons/vue/outline";

var limits = [10, 25, 50, 100];
var page_index = 0;
var limit_index = 0;
function values() {
  let begin = page_index * limits[limit_index];
  let end = Math.min(begin + limits[limit_index], sales.length);
  return sales.slice(begin, end);
}
const sales = [
  {
    code: "02:a3:5b:54:42:40",
    verified: false,
    state: 38985,
    price: "80.00",
    last_modif: "2022-06-09T11:42:56.260Z",
    placed_at: "2022-01-14T10:25:08.332Z",
    shipping: "Baumbach, Ebert and Lemke",
  },
  {
    code: "66:b2:bf:20:1b:ba",
    verified: true,
    state: 64517,
    price: "757.00",
    last_modif: "2022-06-10T00:45:12.036Z",
    placed_at: "2022-01-26T10:36:09.495Z",
    shipping: "Prosacco, Rosenbaum and Walker",
  },
  {
    code: "59:18:77:a4:a2:b7",
    verified: false,
    state: 6977,
    price: "682.00",
    last_modif: "2022-06-10T09:06:28.687Z",
    placed_at: "2021-10-20T19:08:56.154Z",
    shipping: "Gibson - Morissette",
  },
  {
    code: "a1:9b:9b:bd:2c:32",
    verified: false,
    state: 9187,
    price: "388.00",
    last_modif: "2022-06-10T03:04:27.500Z",
    placed_at: "2022-04-02T21:50:30.645Z",
    shipping: "Bahringer Inc",
  },
  {
    code: "c0:2b:e2:7c:87:7c",
    verified: false,
    state: 12185,
    price: "595.00",
    last_modif: "2022-06-09T16:04:01.130Z",
    placed_at: "2021-10-10T02:36:30.777Z",
    shipping: "Barrows Group",
  },
  {
    code: "02:44:86:b5:a4:13",
    verified: false,
    state: 49172,
    price: "297.00",
    last_modif: "2022-06-09T14:04:03.587Z",
    placed_at: "2021-08-14T08:46:49.019Z",
    shipping: "Franecki - Sipes",
  },
  {
    code: "22:c4:66:94:6d:33",
    verified: false,
    state: 40398,
    price: "127.00",
    last_modif: "2022-06-10T04:33:03.169Z",
    placed_at: "2021-07-18T11:15:15.702Z",
    shipping: "Walsh - Hamill",
  },
  {
    code: "81:26:ac:85:a0:9c",
    verified: true,
    state: 63400,
    price: "66.00",
    last_modif: "2022-06-09T22:10:06.995Z",
    placed_at: "2022-02-20T19:14:45.203Z",
    shipping: "Kautzer, Torp and Muller",
  },
  {
    code: "99:72:af:e4:83:46",
    verified: true,
    state: 21197,
    price: "752.00",
    last_modif: "2022-06-10T01:07:32.570Z",
    placed_at: "2022-04-05T13:36:40.180Z",
    shipping: "Wiza, McLaughlin and Balistreri",
  },
  {
    code: "df:f1:91:e0:77:e0",
    verified: false,
    state: 15514,
    price: "849.00",
    last_modif: "2022-06-09T18:02:55.920Z",
    placed_at: "2021-12-29T21:08:34.060Z",
    shipping: "Bergstrom LLC",
  },
  {
    code: "bf:7e:fa:d4:34:4b",
    verified: true,
    state: 84011,
    price: "922.00",
    last_modif: "2022-06-09T22:47:34.266Z",
    placed_at: "2022-01-04T21:49:03.590Z",
    shipping: "Haag, Dach and Windler",
  },
  {
    code: "6a:cd:12:2c:f8:37",
    verified: false,
    state: 10502,
    price: "545.00",
    last_modif: "2022-06-10T05:23:58.785Z",
    placed_at: "2022-03-31T10:12:07.057Z",
    shipping: "Macejkovic Group",
  },
  {
    code: "c5:a1:7c:c3:fd:da",
    verified: true,
    state: 92669,
    price: "506.00",
    last_modif: "2022-06-09T10:13:51.675Z",
    placed_at: "2022-05-21T03:39:45.353Z",
    shipping: "Williamson - Collins",
  },
  {
    code: "8d:1c:da:e2:55:26",
    verified: false,
    state: 39059,
    price: "26.00",
    last_modif: "2022-06-09T20:57:05.643Z",
    placed_at: "2021-09-16T20:45:20.390Z",
    shipping: "Nikolaus - Watsica",
  },
  {
    code: "ff:a9:0f:3e:5c:7b",
    verified: true,
    state: 5861,
    price: "526.00",
    last_modif: "2022-06-09T10:57:47.978Z",
    placed_at: "2022-01-20T15:33:17.104Z",
    shipping: "Von, Lang and Schoen",
  },
  {
    code: "76:d5:cf:5f:63:04",
    verified: true,
    state: 58365,
    price: "538.00",
    last_modif: "2022-06-09T13:40:06.871Z",
    placed_at: "2022-02-20T14:36:32.976Z",
    shipping: "Osinski, Veum and Harber",
  },
  {
    code: "e0:fa:8e:f1:81:cb",
    verified: false,
    state: 12697,
    price: "566.00",
    last_modif: "2022-06-10T07:19:49.356Z",
    placed_at: "2022-03-24T15:15:45.977Z",
    shipping: "Lueilwitz Group",
  },
  {
    code: "2b:33:14:3c:f5:f5",
    verified: false,
    state: 10003,
    price: "962.00",
    last_modif: "2022-06-09T12:16:46.800Z",
    placed_at: "2021-11-07T09:36:18.982Z",
    shipping: "MacGyver, Hettinger and Champlin",
  },
  {
    code: "b6:ba:e9:ea:98:09",
    verified: true,
    state: 68332,
    price: "770.00",
    last_modif: "2022-06-09T17:38:53.696Z",
    placed_at: "2021-06-15T22:57:16.464Z",
    shipping: "Deckow Inc",
  },
  {
    code: "f7:b9:9d:5e:61:e5",
    verified: false,
    state: 36044,
    price: "482.00",
    last_modif: "2022-06-09T21:08:24.696Z",
    placed_at: "2021-12-12T05:34:48.693Z",
    shipping: "West Group",
  },
];
</script>