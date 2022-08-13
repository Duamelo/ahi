<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item href="/dashboard/product"> Products </path-item>
    <path-item :active="true"> {{ $route.params.id }}</path-item>
  </path-view>
  <alert v-model:show="show" v-if="show" :error="error" :message="message"/>
  <dashboard-card>
    <template #title> Changer un Produit </template>
    <template #left>
      <button class="button-outlined" @click="save()"> Sauvegarder </button>
    </template>
   <form class="mt-4">
      <div class="row">
        <div class="col">
          <div class="flex items-center mb-6">
            <div class="mr-16">
              <label> Nom </label>
            </div>
            <div>
              <input type="text" placeholder="Mon produit" v-model="item.name"/>
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div>
              <label> Description </label>
            </div>
            <div class="w-100">
              <textarea v-model="item.description" type="text" placeholder="Mon produit est optimal"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flex items-center mb-6">
            <div>
              <label> Prix </label>
            </div>
            <div class="w-100">
                <input type="number" min="0" placeholder="1000ft" v-model="item.price"/>

            </div>
          </div>
          <div class="flex justify-center">
            <div class="mb-3 w-96">
              <label class="center">Chosir une image</label>
              <input @change="(e) => item.image = e.target.value" id="formFileLg" type="file"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </dashboard-card>
</template>

<script setup>
import DashboardCard from "../../../components/Dashboard/DashboardCard.vue";
import PathItem from "../../../components/Path/PathItem.vue";
import PathView from "../../../components/Path/PathView.vue";
import { ref } from "@vue/reactivity";
import Alert from "../../../components/Dashboard/Alert.vue";
// import { get,put } from "../../../api/product";
import { get, put } from "../../../api/mock/product";
// import { get,put } from "../../../api/mock/error/product";
import { useRoute } from 'vue-router'
const show = ref(false);
const error = ref(false);
const message = ref("");
const router = useRoute()
const id = Number(router.params.id)
const item = ref({});
get(id,(value) => {
  return (item.value=value);
});

function save() {
  put(
    id,
    item.value,
    (item) => {
      show.value = true;
      error.value = false;
      message.value = "Produit mise a jour";
    },
   _error => {
      show.value = true;
      error.value = true;
        message.value = _error.message;
    }
  );
}
</script>

<style scoped>
</style>