<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item href="/dashboard/customers"> Customers </path-item>
    <path-item :active="true"> Nouveau client</path-item>
  </path-view>
  <alert v-model:show="show" v-if="show" :error="error" :message="message"/>
  <dashboard-card>
    <template #title> Enrigistrer un client </template>
    <template #left>
      <button class="button-outlined" @click="save()">Sauvegarder</button>
    </template>
    <form class="mt-4">
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
                v-model="item.firstName"
                type="text"
                placeholder="Lorem"
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
              v-model="item.email"
                type="email"
                placeholder="foo@bar.tmp"
              />
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div class="mr-16">
              <label>
                Address
              </label>
            </div>
            <div>
              <input
              v-model="item.address"
                type="text"
                placeholder="Carrefour cinquantenaire"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flex items-center mb-6">
            <div class="mr-16">
              <label>
                Prenom
              </label>
            </div>
            <div>
              <input
                v-model="item.lastName"
                type="text"
                placeholder="Ipsum"
              />
            </div>
          </div>
            <div class="flex items-center mb-6">
            <div class="mr-16">
              <label>
                Numero
              </label>
            </div>
            <div>
              <input
              v-model="item.phone"
                type="tel"
                placeholder="+229 _______"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="mb-3 w-96">
              <label
                for="formFileLg"
                class="form-label inline-block mb-2 text-gray-700"
                >Chosir une image</label
              >
              <input

                @change="(e)=>item.image = e.target.value"
                
                id="formFileLg"
                type="file"
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
              v-model="item.verified"
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
const show = ref(false);
const error = ref(false);
const message = ref("");
// import { create } from "../../../api/customer";
import { create } from "../../../api/mock/customer";
// import { create } from "../../../api/mock/error/customer";
const item = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    })

function save() {
  create(item,item => {
  show.value = true
  error.value = false
  message.value = "Customer enregistrer"
},msg => {
  show.value = true
  error.value = true
  message.value = msg.error
})
}
</script>

<style scoped>
</style>