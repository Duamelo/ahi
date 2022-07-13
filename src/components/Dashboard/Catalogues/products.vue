<template>
  <div class="row">
    <empty v-if="categories_values.length == 0"/>
      <div v-for="(category, index) in categories_values" :key="index">
        <div class="line">
          <div class="category">
            <button  class="button-outlined" @click="toggle(index)">
              <FolderIcon />
            </button>
            <span>{{ category.name }}</span>
          </div>
          <div class="actions">
            <div>
              <router-link  :to="append($route.path, `edit/${category.id}`)">
                <button class="button-outlined">
                  <PencilIcon />
                </button>
              </router-link>
            </div>
            <div>
              <button  class="button-outlined" @click="delete_category(category.id)">
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
        :size="categories_fitered.length"
      />
    <dashboard-card v-if="show_products" class="col product-list">
    <empty v-if="products_values.length == 0"/>
      <template #title>
        {{ `${categories_values[shown].name} ${products_values.length}` }} 
      </template>
      <template #left>
        <div class="flex justify-items-center">
          <input class="outlined me-3 w-75" placeholder="Rechercher par nom" v-model="filter_product"/>
          <button  class="button-outlined" >
          <XIcon @click="show_products = false"/>            
          </button>
        </div>
      </template>
      <div class="scrollable mt-4">
        <table class="table">
          <tbody>
            <tr v-for="(product, index) in products_values" :key="index" class="my-4">
              <td>
                <div class="ms-3 fw-bolder my-auto">
                  {{ product.name }}
                </div>
              </td>
              <td>{{ product.price }} $</td>
              <td>
                <router-link  :to="`/dashboard/product/edit/${index}`">
                  <button class="button-outlined">
                    <PencilIcon />
                  </button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        v-model:page_index="product_page_index"
        v-model:limit_index="product_limit_index"
        :limits="limits"
        :size="products_filtered.length"
      />
    </dashboard-card>
  </div>
</template>

<script>
import {
  FolderIcon,
  FolderOpenIcon,
  TrashIcon,
  PencilIcon,
  XIcon
} from "@heroicons/vue/outline";
import DashboardCard from "../DashboardCard.vue";
import Pagination from "../Pagination.vue";
import Empty from "../Empty.vue";
import { remove } from "../../../api/category";
// import { remove } from "../../../api/mock/category";
// import { remove } from "../../../api/mock/error/category";
const products = [
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
    ];
export default {
  computed: {
    products_filtered(){
        return products.filter(((product) => product.name.includes(this.filter_product)))
    },
    products_values(){
      return  Pagination.methods.values(
        this.products_filtered,
        this.product_page_index,
        this.limits[this.product_limit_index]
      )
    },
    categories_fitered(){
        return this.categories.filter(((category) => category.name.includes(this.filtre)))
    },
    categories_values() {
      return Pagination.methods.values(
        this.categories_fitered,
        this.page_index,
        this.limits[this.limit_index]
      )
    },
  },
  methods: {
    toggle(index){
      this.show_products = !this.show_products || this.shown  != index
      this.shown = index;
    },
    delete_category(id) {
      remove(id,id => this.$emit(
        "update:categories", 
        this.categories.filter(category => category.id != id)
      ));
      
    }
  },
  data() {
    return {
      limits: [5, 10, 25, 50, 100],
      filter_product: "",
      show_products:false,
      shown: 0,
      page_index: 0,
      limit_index: 0,
      product_page_index: 0,
      product_limit_index: 0,
    };
  },
  components: {
    DashboardCard,
    Empty,
    FolderIcon,
    XIcon,
    FolderOpenIcon,
    TrashIcon,
    PencilIcon,
    Pagination,
  },
  props: ["categories","filtre"],
};
</script>

<style scoped>
svg {
  height: 30px;
  margin-right: 4px;
}
.line {
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}

.line,
.actions {
  display: flex;
}

.category,
button {
  display: inline-flex;
  margin-right: 10px;
}
.category > span {
  margin-top: auto;
  margin-bottom: auto;
}
.product-list {
  margin: 5px;
  /* border: inset; */
  background: #eee3f6;
  max-height: 25%;
}
</style>