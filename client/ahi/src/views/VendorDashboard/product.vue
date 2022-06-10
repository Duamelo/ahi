<template>
  <path-view>
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item active="true" href="/dashboard/product">Products</path-item>
  </path-view>
  <dashboard-card>
    <div class="mt-2">
      <div v-for="(product, index) in values" :key="index">
        <div class="line">
          <div class="product">
            <img :src="product.picture" />
            {{ product.name }}
          </div>
          <div class="actions">
            <button>
              <PencilIcon />
              Modifier
            </button>
            <button>
              <TrashIcon />
              Supprimer
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
.line {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}

.product,
button {
  display: inline-flex;
  margin-right: 10px;
}
</style>
<script setup>
import PathItem from "../../components/Path/PathItem.vue";
import PathView from "../../components/Path/PathView.vue";
import DashboardCard from "../../components/Dashboard/DashboardCard.vue";
import Pagination from "../../components/Dashboard/Pagination.vue";
import { TrashIcon, PencilIcon } from "@heroicons/vue/outline";
import { computed, ref } from "vue";

const limits = [10, 25, 50, 100];
const page_index = ref(0);
const limit_index = ref(1);

const values = computed(() =>
  Pagination.methods.values(
    products,
    page_index.value,
    limits[limit_index.value]
  )
);

var products = [
  {
    name: "Generic Cotton Car",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Sleek Concrete Hat",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Rustic Concrete Keyboard",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Awesome Metal Hat",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Handmade Wooden Bike",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Rustic Rubber Hat",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Awesome Fresh Bacon",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Practical Rubber Soap",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Incredible Fresh Soap",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Handcrafted Cotton Computer",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Small Frozen Chair",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Licensed Cotton Fish",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Gorgeous Cotton Shoes",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Small Steel Pants",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Refined Fresh Car",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Rustic Granite Pizza",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Tasty Soft Chicken",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Awesome Cotton Tuna",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Sleek Frozen Chair",
    picture: "http://placeimg.com/640/480/business",
  },
  {
    name: "Practical Fresh Salad",
    picture: "http://placeimg.com/640/480/business",
  },
];
</script>