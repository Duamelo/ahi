<template>
  <path-view>
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item href="/dashboard/catalogues">Catalogues</path-item>
    <path-item :active="true"> Nouveau catalogue</path-item>
  </path-view>
  <dashboard-card>
    <template #title> Creer un Catalogue </template>
    <template #left>
      <button @click="save()" class="btn">Enregistrer</button>
    </template>
    <form>
      <div class="row">
        <div class="col">
          <div class="flex items-center mb-6">
            <div class="mr-16">
              <label
                class="block text-gray-500 font-bold text-right mb-1 pr-4"
                for="inline-password"
              >
                Nom
              </label>
            </div>
            <div>
              <input
                class="
                  bg-gray-200
                  appearance-none
                  border-2 border-gray-200
                  rounded
                  w-full
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500
                "
                v-model="item.name"

                id="inline-password"
                type="text"
                placeholder="Ma collection"
              />
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div>
              <label
                class="block text-gray-500 font-bold text-right mb-1 pr-4"
                for="inline-password"
              >
                Description
              </label>
            </div>
            <div class="w-100">
              <textarea
                class="
                  bg-gray-200
                  appearance-none
                  border-2 border-gray-200
                  rounded
                  w-full
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500
                "
                id="inline-password"
                v-model="item.description"
                type="text"
                placeholder="Ma collection"
              />
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
                class="
                  form-control
                  block
                  w-full
                  px-2
                  py-1.5
                  text-xl
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
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