<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item href="/dashboard/catalogues">Catalogues</path-item>
    <path-item :active="true"> Nouveau catalogue</path-item>
  </path-view>
  <dashboard-card>
    <template #title> Creer un Catalogue </template>
    <template #left>
      <button @click="save()" class="button-outlined">Enregistrer</button>
    </template>
    <form>
      <div class="row">
        <div class="col">
          <div class="flex items-center mb-6">
            <div class="mr-16">
              <label> Nom </label>
            </div>
            <div>
              <input v-model="item.name" type="text" placeholder="Ma collection"/>
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div>
              <label>Description</label>
            </div>
            <div class="w-100">
              <textarea v-model="item.description" type="text" placeholder="Ma collection"/>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flex justify-center">
            <div class="mb-3 w-96">
              <label
                for="formFileLg"
                class="form-label inline-block mb-2 text-gray-700"
                >Chosir une image</label
              >
              <input
                
                @change="(e) => (item.image = e.target.value)"
                id="formFileLg"
                type="file"
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
const item = ref({
  name: "",
  description: "",
  image: "",
});

function save() {
  console.log(item.value);
}
</script>

<style scoped>
</style>