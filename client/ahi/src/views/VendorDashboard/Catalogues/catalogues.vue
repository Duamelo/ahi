<template>
  <path-view>
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item active="true" href="/dashboard/catalogues">Catalogues</path-item>
  </path-view>
  <dashboard-card>
    <template #title>
      <input type="checkbox" v-model="expand" />
      <span v-if="expand"> Tout Fermer </span>
      <span v-else> Tout Ouvrir </span>
    </template>
    <template #left>
      <div>
        <input class="outlined me-3" placeholder="Rechercher par nom" v-model="filtre"/>
        <router-link :to="append($route.path, 'new')">
          <button class="btn btn-outline-primary">+</button>
          </router-link>
      </div>
    </template>
    <products v-model:products="catalogue" :filtre=filtre :expand="expand"/>
  </dashboard-card>
</template>

<script setup>
import PathItem from "../../../components/Path/PathItem.vue";
import PathView from "../../../components/Path/PathView.vue";
import Products from "../../../components/Dashboard/Catalogues/products.vue";
import DashboardCard from "../../../components/Dashboard/DashboardCard.vue";
import { computed, ref } from "vue";

const expand = ref(false);
const filtre = ref("");

const catalogue = ref([
  {
    category: "Automotive",
    products: [
      {
        name: "Intelligent Steel Gloves",
        price: "75.00",
        subcategory: "Licensed",
      },
      {
        name: "Small Steel Pants",
        price: "966.00",
        subcategory: "Licensed",
      },
      {
        name: "Refined Plastic Chips",
        price: "364.00",
        subcategory: "Practical",
      },
      {
        name: "Practical Frozen Sausages",
        price: "849.00",
        subcategory: "Licensed",
      },
      {
        name: "Handcrafted Concrete Towels",
        price: "723.00",
        subcategory: "Practical",
      },
      {
        name: "Sleek Cotton Tuna",
        price: "375.00",
        subcategory: "Practical",
      },
      {
        name: "Rustic Concrete Hat",
        price: "229.00",
        subcategory: "Practical",
      },
      {
        name: "Licensed Cotton Bike",
        price: "946.00",
        subcategory: "Fantastic",
      },
      {
        name: "Licensed Concrete Hat",
        price: "896.00",
        subcategory: "Fantastic",
      },
      {
        name: "Gorgeous Granite Gloves",
        price: "881.00",
        subcategory: "Fantastic",
      },
    ],
  },
  {
    category: "Garden",
    products: [
      {
        name: "Handmade Soft Hat",
        price: "482.00",
        subcategory: "Awesome",
      },
      {
        name: "Fantastic Plastic Chips",
        price: "450.00",
        subcategory: "Awesome",
      },
      {
        name: "Licensed Frozen Hat",
        price: "426.00",
        subcategory: "Generic",
      },
      {
        name: "Tasty Cotton Chair",
        price: "357.00",
        subcategory: "Generic",
      },
      {
        name: "Practical Cotton Car",
        price: "967.00",
        subcategory: "Generic",
      },
      {
        name: "Handcrafted Wooden Table",
        price: "656.00",
        subcategory: "Generic",
      },
      {
        name: "Refined Steel Fish",
        price: "520.00",
        subcategory: "Licensed",
      },
      {
        name: "Awesome Frozen Shoes",
        price: "223.00",
        subcategory: "Licensed",
      },
      {
        name: "Refined Wooden Bike",
        price: "188.00",
        subcategory: "Licensed",
      },
      {
        name: "Handcrafted Metal Tuna",
        price: "4.00",
        subcategory: "Licensed",
      },
    ],
  },
  {
    category: "Electronics",
    products: [
      {
        name: "Handmade Frozen Bike",
        price: "40.00",
        subcategory: "Practical",
      },
      {
        name: "Tasty Cotton Ball",
        price: "864.00",
        subcategory: "Practical",
      },
      {
        name: "Intelligent Wooden Towels",
        price: "719.00",
        subcategory: "Practical",
      },
      {
        name: "Intelligent Soft Bacon",
        price: "529.00",
        subcategory: "Rustic",
      },
      {
        name: "Tasty Fresh Pants",
        price: "676.00",
        subcategory: "Rustic",
      },
      {
        name: "Small Granite Chicken",
        price: "929.00",
        subcategory: "Rustic",
      },
      {
        name: "Intelligent Granite Tuna",
        price: "691.00",
        subcategory: "Rustic",
      },
      {
        name: "Practical Cotton Ball",
        price: "442.00",
        subcategory: "Rustic",
      },
      {
        name: "Unbranded Fresh Shirt",
        price: "893.00",
        subcategory: "Rustic",
      },
      {
        name: "Intelligent Steel Gloves",
        price: "477.00",
        subcategory: "Rustic",
      },
    ],
  },
]);
</script>

<style scoped>
/* .outlined {
  outline: 2px solid #29b9ad;
  border-radius: 0.25rem;
  padding: 0.25rem;
} */
</style>
