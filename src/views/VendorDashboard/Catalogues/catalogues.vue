<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item active="true" href="/dashboard/catalogues">Catalogues</path-item>
  </path-view>
  <dashboard-card>
    <template #title> Catalogues </template>
    <template #left>
      <div class="flex">
        <input
          class="outlined me-3"
          placeholder="Rechercher par nom"
          v-model="filtre"
        />
        <router-link :to="append($route.path, 'new')">
          <button class="button-outlined">+</button>
        </router-link>
      </div>
    </template>
    <products
      v-model:categories="categories"
      :filtre="filtre"
      class="mt-3"
    />
  </dashboard-card>
</template>

<script setup>
import PathItem from "../../../components/Path/PathItem.vue";
import PathView from "../../../components/Path/PathView.vue";
import Products from "../../../components/Dashboard/Catalogues/products.vue";
import DashboardCard from "../../../components/Dashboard/DashboardCard.vue";
import { get } from "../../../api/category";
// import { get } from "../../../api/mock/category";
// import { get } from "../../../api/mock/error/category";
import { computed, ref } from "vue";

const filtre = ref("");

const categories = ref([]);
get((value) => (categories.value = value));
</script>

<style scoped>
/* .outlined {
  outline: 2px solid #29b9ad;
  border-radius: 0.25rem;
  padding: 0.25rem;
} */
</style>
