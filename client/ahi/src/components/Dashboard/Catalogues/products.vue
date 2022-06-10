<template>
  <div class="row">
    <div class="col">
      <div v-for="(row, index) in products" :key="index">
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
              <button>
                <PencilIcon />
                Modifier
              </button>
            </div>
            <div>
              <button>
                <TrashIcon />
                Supprimer
              </button>
            </div>
          </div>
        </div>
        <div v-if="collapsed[index]">
          <div
            v-for="(subcategory, i) in [
              ...new Set(row.products.map((item) => item.subcategory)),
            ]"
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
                <button>
                  <PencilIcon />
                  Modifier
                </button>
              </div>
              <div>
                <button>
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
        {{ this.shown.category }}({{ this.shown.products.length }} results)
      </template>
      <template #left>
        <div>
          <input
            class="outlined me-3 w-75"
            placeholder="Filter"
          />
          <button @click="shown.show = false" class="btn btn-outline-primary">+</button>
        </div>
      </template>
      <table class="table overflow-scroll">
        <tbody>
          <tr
            v-for="(product, index) in shown.products"
            :key="index"
            class="my-4"
          >
            <td>
              <div class="ms-3 fw-bolder my-auto">
                {{ product.name }}
              </div>
            </td>
            <td>{{ product.price }} $</td>
            <td>
              <button>
                <PencilIcon />
                Modifier
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
export default {
  methods: {
    show_category(index) {
      this.shown.show = true;
      this.shown.index = index;
      this.shown.category = this.products[index].category;
      this.shown.products = this.products[index].products;
      console.log(this.shown);
    },
    show_subcategory(subcategory, index) {
      this.shown.show = true;
      this.shown.index = index;
      this.shown.category = subcategory;
      this.shown.products = this.products[index].products.filter(
        (item) => item.subcategory == subcategory
      );
      console.log(this.shown);
    },
  },
  data() {
    return {
      shown: {
        show: false,
        filter_category:"",
        filter_product:"",
        index: undefined,
        category: "",
        products: [],
      },
      collapsed: Array.from((this.products.length, (_) => expand)),
    };
  },
  components: {
    DashboardCard,
    FolderIcon,
    FolderOpenIcon,
    TrashIcon,
    PencilIcon,
  },
  props: ["products", "expand"],
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