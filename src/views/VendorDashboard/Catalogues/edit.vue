<template>
  <path-view class="mb-3">
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item href="/dashboard/catalogues">Catalogues</path-item>
    <path-item :active="true"> {{ $route.params.id }}</path-item>
  </path-view>
  <alert v-model:show="show" v-if="show" :error="error" :message="message"/>
  <dashboard-card>
    <template #title> Changer un Catalogue </template>
    <template #left>
      <button class="button-outlined" @click="save()">Sauvegarder</button>
    </template>
    <form>
      <div class="row">
        <div class="col">
          <div class="flex items-center mb-6">
            <div class="mr-16">
              <label> Nom </label>
            </div>
            <div>
              <input
                type="text"
                placeholder="Ma collection"
                v-model="item.name"
              />
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div>
              <label> Description </label>
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
<script>

export default {
  setup(){
  get(
    this.$router.params.id,
    (value) => {
      item.value = value;
    },
   _error => {
      show.value = true;
      error.value = true;
        message.value = _error.message;
    }
  );
  }
}
</script>

<script setup>
import DashboardCard from "../../../components/Dashboard/DashboardCard.vue";
import PathItem from "../../../components/Path/PathItem.vue";
import PathView from "../../../components/Path/PathView.vue";
import { ref } from "@vue/reactivity";
import Alert from "../../../components/Dashboard/Alert.vue";
import { get,put } from "../../../api/category";
// import { get, put } from "../../../api/mock/category";
// import { get,put } from "../../../api/mock/error/category";
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
    item,
    (item) => {
      show.value = true;
      error.value = false;
      message.value = "Catalogue mise a jour";
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