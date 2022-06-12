<template>
  <path-view>
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item  href="/dashboard/sales">Sales</path-item>
    <path-item active="true" href="/dashboard/sales">{{ $route.params.id }}  </path-item>
  </path-view>
  <dashboard-card>
    <template #title> Ordre {{ $route.params.id }} </template>
    <div class="row">
      <div class="col flex-row">
          <center> Details </center>
        <div class="flex">
          <p class="mr-4">Code :</p>
          {{ order.code }}
        </div>
        <div class="flex">
          <p class="mr-4">Price :</p>
          {{ order.price }} $
        </div>
        <div class="flex">
          <p class="mr-4">Shipping :</p>
          {{ order.shipping }}
        </div>
        <div class="flex">
          <p class="mr-4">Accompli :</p>
          {{ order.verified ? "Finie" : "En cour de traitement"}}
        </div>
      </div>
      <div class="col flex-row">
          <center> Client </center>
        <div class="flex">
          <UserCircleIcon />
          {{ customer.name }}
        </div>
        <div class="flex">
          <MailIcon />
          {{ customer.email }}
        </div>
        <div v-if="verified" class="flex">
          <CheckCircleIcon />
          Verifier
        </div>
        <div v-else class="flex">
          <XCircleIcon />
          Verifier
        </div>
      </div>
    </div>
  </dashboard-card>
</template>

<script setup>
import DashboardCard from "../../../components/Dashboard/DashboardCard.vue";
import PathItem from "../../../components/Path/PathItem.vue";
import PathView from "../../../components/Path/PathView.vue";
import {
  MailIcon,
  UserCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/vue/outline";
const order = {
  code: "2b:33:14:3c:f5:f5",
  verified: false,
  state: 10003,
  price: "962.00",
  last_modif: "2022-06-09T12:16:46.800Z",
  placed_at: "2021-11-07T09:36:18.982Z",
  shipping: "MacGyver, Hettinger and Champlin",
};

const products = [
  {
    img:"https://picsum.photos/seed/picsum/200/300",
    name:"Galaxy S5",
    price: "55.5",
    count:3
  },
  {
    img:"https://picsum.photos/seed/picsum/200/300",
    name:"Intel core i9",
    price: "100",
    count:2
  }
]

const customer = {
  name: "Wallace35",
  email: "Opal12@gmail.com",
  verified: false,
};
</script>

<style scoped>
</style>