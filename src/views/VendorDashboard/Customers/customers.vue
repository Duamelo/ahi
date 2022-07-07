<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item active="true" href="/dashboard/customers">Customers</path-item>
  </path-view>
  <alert v-model:show="show" v-if="show" :error="error" :message="message"/>
  <dashboard-card class="dashboard-customer">
    <template #title>
      <input class="outlined me-3" placeholder="Rechercher par nom/e-mail" v-model="filtre" />
    </template>
    <template #left>
      <router-link :to="append($route.path, 'new')">
        <button class="button-outlined" >+</button>
      </router-link>
    </template>
    <div class="mt-2 scrollable">
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Address Mail</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(customer, index) in customers_values" 
            :key="index" class="my-4">
            <td>{{ `${customer.firstName} ${customer.lastName}` }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ true ? "Verifié" : "Invité" }}</td>
            <td>
              <router-link :to="append($route.path, `edit/${customer.id}`)">
                <button class="button-outlined" >
                  <PencilIcon />
                </button>
              </router-link>
            </td>
            <td>
              <button class="button-outlined" @click="delete_customer(customer.id)">
                <TrashIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination
      v-model:page_index="page_index"
      v-model:limit_index="limit_index"
      :limits="limits"
      :size="customers_filter.length"
    />
  </dashboard-card>
</template>
<style scopeed>
.dashboard-customer
svg {
  height: 30px;
  margin-right: 4px;
}

button  {
  display: inline-flex;
  margin-right: 10px;
}
table {
  transition-duration: 300ms;
}
</style>

<script setup>
import PathItem from "../../../components/Path/PathItem.vue";
import PathView from "../../../components/Path/PathView.vue";
import Products from "../../../components/Dashboard/Catalogues/products.vue";
import DashboardCard from "../../../components/Dashboard/DashboardCard.vue";
import Pagination from "../../../components/Dashboard/Pagination.vue";
import { TrashIcon, PencilIcon } from "@heroicons/vue/outline";
import { computed, ref } from "vue";
import Alert from "../../../components/Dashboard/Alert.vue";
const show = ref(false);
const error = ref(false);
const message = ref("");
import { get } from "../../../api/customer";
// import { get,remove } from "../../../api/mock/customer";
// import { get } from "../../../api/mock/error/customer";

const limits = [10, 25, 50, 100];
const page_index = ref(0);
const limit_index = ref(1);
const filtre = ref("")
const customers = ref([])

get(value => customers.value = value)

const customers_filter = computed(()=> customers.value.filter(
  (customer) => customer.firstName.includes(filtre.value) 
  || customer.lastName.includes(filtre.value)
  || customer.email.includes(filtre.value)))


const customers_values = computed(() =>
  Pagination.methods.values(
    customers_filter.value,
    page_index.value,
    limits[limit_index.value]
  )
);

function delete_customer(id){
  remove(id,
  id => customers.value = customers.value.filter(customer => customer.id != id),
  error => {
    show.value = true
    error.value = true
    message.value = error}
  )
}
</script>