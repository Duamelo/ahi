<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item active="true" href="/dashboard/product">Products</path-item>
  </path-view>
  <dashboard-card>
    <template #title>
      Product
    </template>
    <template #left>
      <div class="flex">
        <input class="outlined me-3" placeholder="Rechercher par nom" v-model="filtre" />
        <router-link :to="append($route.path, 'new')">
          <button class="button-outlined">+</button>
        </router-link>
      </div>
    </template>
    <empty v-if="values.length == 0"/>
    <div class="mt-7 scrollable">
      <div v-for="(product, index) in values" :key="index">
        <div class="line">
          <div class="produc_t">
            <img :src="product.picture" />
            {{ product.name }}
          </div>
          <div class="actions">
            <router-link :to="append($route.path, `edit/${index}`)">
              <button class="button-outlined">
                <PencilIcon />
              </button>
            </router-link>
            <button @click="delete_products(product.id)" class="button-outlined">
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
    <pagination
      v-model:page_index="page_index"
      v-model:limit_index="limit_index"
      :limits="limits"
      :size="products.length"
    />
  </dashboard-card>
</template>
<style scoped>
img {
  height: 30px;
  margin-right: 4px;
}

.produc_t,
button {
  display: inline-flex;
  margin-right: 10px;
}
</style>
<script setup>
import PathItem from "../../../components/Path/PathItem.vue";
import PathView from "../../../components/Path/PathView.vue";
import DashboardCard from "../../../components/Dashboard/DashboardCard.vue";
import Pagination from "../../../components/Dashboard/Pagination.vue";
import { TrashIcon, PencilIcon } from "@heroicons/vue/outline";
import { computed, ref } from "vue";
import { get } from "../../../api/product";
// import { get,remove } from "../../../api/mock/product";
// import { get } from "../../../api/mock/error/product";
import Empty from "../../../components/Dashboard/Empty.vue";

const expand = ref(false);
const limits = [10, 25, 50, 100];
const page_index = ref(0);
const limit_index = ref(1);
const filtre = ref("");

const products = ref([])
get(value => products.value = value)

const products_filtered = computed(()=> products.value.filter((product) => product.name.includes(filtre.value)))


const values = computed(() =>
  Pagination.methods.values(
    products_filtered.value,
    page_index.value,
    limits[limit_index.value]
  )
)
function delete_products(id){
  products.value = products.value.filter(product=> product.id != id)
}
</script>