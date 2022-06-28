<template>
  <path-view class="mb-3">
<path-item href="/dashboard"> Dashboard </path-item>
    <path-item href="/dashboard/product"> Products </path-item>
    <path-item :active="true"> Nouveau produit</path-item>
  </path-view>
  <dashboard-card>
    <template #title> Creer un produit </template>
    <template #left>
      <button class="button-outlined" @click="save()" >Enregistrer</button>
    </template>
    <form>
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
              <textarea v-model="item.description" type="text" placeholder="Mon produit"
              />
            </div>
          </div>
        </div>
        <div class="col">
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

import { ref } from '@vue/reactivity';
const item = ref({
  name:"",
  description:"",
  image:""
})

function save(){
  console.log(item.value);
}

</script>

<style scoped>
</style>