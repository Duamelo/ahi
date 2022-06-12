<template>
  <div class="row">
    <div class="col">
      <div v-for="(row, index) in products.filter(((product) => product.category.includes(filtre)))" :key="index">
        <div class="line">
          <div class="category">
            <button @click="collapsed[index] = !collapsed[index]">
              <FolderIcon />
            </button>
            {{ row.category }}
          </div>
          <div class="actions">
            <div>
              <button @click="show_category(index)">
                <FolderOpenIcon />
                Contenu
              </button>
            </div>
            <div>
              <router-link :to="append($route.path, `edit/${index}`)">
                <button>
                  <PencilIcon />
                  Modifier
                </button>
              </router-link>
            </div>
            <div>
              <button @click="delete_category(index)">
                <TrashIcon />
                Supprimer
              </button>
            </div>
          </div>
        </div>
        <div v-if="collapsed[index]">
          <div
            v-for="(subcategory, i) in [
              ...new Set(row.products.map((item) => item.subcategory )),
            ].filter(((subcategory) => subcategory.includes(filtre)))"
            :key="i"
            class="line"
          >
            <div class="subcategory">
              <FolderIcon />
              {{ subcategory }}
            </div>
            <div class="actions">
              <div>
                <button @click="show_subcategory(subcategory, index)">
                  <FolderOpenIcon />
                  Contenu
                </button>
              </div>
              <div>
                <router-link :to="append($route.path, `edit/${index}`)">
                  <button>
                    <PencilIcon />
                    Modifier
                  </button>
                </router-link>
              </div>
              <div>
                <button @click="delete_subcategory(subcategory, index)">
                  <TrashIcon />
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dashboard-card v-if="shown.show" class="col product-list">
      <template #title>
        {{ this.shown.category }}({{ this.shown_products.length }} results)
      </template>
      <template #left>
        <div>
          <input class="outlined me-3 w-75" placeholder="Rechercher par nom" v-model="shown.filter_product"/>
          <button @click="shown.show = false" class="btn btn-outline-primary">
            X
          </button>
        </div>
      </template>
      <div class="scrollable">
        <table class="table">
          <tbody>
            <tr v-for="(product, index) in values" :key="index" class="my-4">
              <td>
                <div class="ms-3 fw-bolder my-auto">
                  {{ product.name }}
                </div>
              </td>
              <td>{{ product.price }} $</td>
              <td>
                <router-link :to="`/dashboard/product/edit/${index}`">
                  <button>
                    <PencilIcon />
                    Modifier
                  </button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        v-model:page_index="page_index"
        v-model:limit_index="limit_index"
        :limits="limits"
        :size="shown_products.length"
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
} from "@heroicons/vue/outline";
import DashboardCard from "../DashboardCard.vue";
import Pagination from "../Pagination.vue";

export default {
  computed: {
    shown_products(){
      return this.shown.products.filter(((product) => product.name.includes(this.shown.filter_product)))
    },
    values() {
      return Pagination.methods.values(
        this.shown_products,
        this.page_index,
        this.limits[this.limit_index]
      )
    },
  },
  methods: {
    show_category(index) {
      this.shown.show = true;
      this.shown.index = index;
      this.shown.category = this.products[index].category;
      this.shown.products = this.products[index].products;
    },
    delete_category(index) {
      this.$emit(
        "update:products",
        this.products.filter((product, i) => i != index)
      );
    },
    show_subcategory(subcategory, index) {
      this.shown.show = true;
      this.shown.index = index;
      this.shown.category = subcategory;
      this.shown.products = this.products[index].products.filter(
        (item) => item.subcategory == subcategory
      );
    },
    delete_subcategory(subcategory, index) {
      var foo = this.products;
      foo[index].products = foo[index].products.filter((product) => product.subcategory != subcategory);
      this.$emit(
        "update:products",
        this.products.filter((product, i) => i != index)
      );
    },
  },
  data() {
    return {
      limits: [5, 10, 25, 50, 100],
      shown: {
        show: false,
        filter_category: "",
        filter_product: "",
        index: undefined,
        category: "",
        products: [],
      },
      page_index: 0,
      limit_index: 0,
      collapsed: Array.from((Array(this.products.length)),(_)=>this.expand),
    };
  },
  components: {
    DashboardCard,
    FolderIcon,
    FolderOpenIcon,
    TrashIcon,
    PencilIcon,
    Pagination,
  },
  props: ["products", "expand","filtre"],
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

.subcategory,
.category,
button {
  display: inline-flex;
  margin-right: 10px;
}
.subcategory {
  margin-left: 40px;
}
.product-list {
  margin: 5px;
  /* border: inset; */
  background: #eee3f6;
  max-height: 25%;
}
</style>