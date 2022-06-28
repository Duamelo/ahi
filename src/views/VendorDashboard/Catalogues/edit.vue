<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item href="/dashboard/catalogues">Catalogues</path-item>
    <path-item :active="true"> {{ $route.params.id }}</path-item>
  </path-view>
  <dashboard-card>
    <template #title> Changer un Catalogue </template>
    <template #left>
      <button class="button-outlined" @click="save()"> Sauvegarder </button>
    </template>
    <form>
      <div class="row">
        <div class="col">
          <div class="flex items-center mb-6">
            <div class="mr-16">
              <label>
                Nom
              </label>
            </div>
            <div>
              <input
                type="text"
                placeholder="Ma collection"
                v-model="item.nom"
              />
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div>
              <label>
                Description
              </label>
            </div>
            <div class="w-100">
              <textarea
                type="text"
                placeholder="Ma collection"
                v-model="item.description"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flex justify-center">
            <div class="mb-3 w-96">
              <div class="mb-4 flex justify-around">
                  <img :src="item.image" class="max-w-full h-auto rounded-full" />
                </div>
              <label
                for="formFileLg"
                class="form-label inline-block mb-2 text-gray-700"
                >Changer l'image</label
              >
              <input
                
                @change="(e)=>item.image = e.target.value"
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
import { ref } from '@vue/reactivity';
const item = ref({
  nom: "Lorem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptas minima fuga suscipit aut ex obcaecati voluptatem ipsa rem facilis odit consequuntur animi cumque voluptatum, esse atque saepe ea officia.",
  image: "https://picsum.photos/seed/picsum/200/200",
})

function save(){
  console.log(item.value);
}
</script>

<style scoped>
</style>