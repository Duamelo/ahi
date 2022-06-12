<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item href="/dashboard/customers"> Customers </path-item>
    <path-item :active="true"> {{ $route.params.id }}</path-item>
  </path-view>
  <dashboard-card>
    <template #title> Modifier un client </template>
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
                v-model="item.nom"
                placeholder="lorem"
              />
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div class="mr-16">
              <label>
                Email
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
                @change="(e)=>item.image = e.target.value"
                id="inline-password"
                type="email"
                placeholder="foo@bar.tmp"
                v-model="item.email"
              />
            </div>
          </div>
           <div class="flex items-center mb-6">
            <div class="mr-16">
              <label>
                Verifié
              </label>
            </div>
            <div>
              <input
                class="
                  form-check-input
                  appearance-none
                  h-4
                  w-4
                  border border-gray-300
                  rounded-sm
                  bg-white
                  checked:bg-blue-600 checked:border-blue-600
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                id="inline-password"
                type="checkbox"
                placeholder="Mon produit"
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
                >Chosir une image</label
              >
              <input
                
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
  email:"lorem@picsum.org",
  image: "https://picsum.photos/seed/picsum/200/200",
  verfied: true
})

function save(){
  console.log(item.value);
}
</script>

<style scoped>
</style>