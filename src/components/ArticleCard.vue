<template>
  <div class="flex flex-col bg-white rounded-lg">
    <router-link class="flex flex-col" to="/products">
      <!-- <img src="@/assets/images/img_ordi_1.png" alt="Image - Ordinateur 1" /> -->
      <img
        src="https://loremflickr.com/200/200/laptop"
        alt="Image - Ordinateur 1"
      />
      <div class="flex flex-col gap-2 w-4/5 mx-auto mb-3">
        <div class="font-bold">{{ title }}</div>
        <div class="w-full">{{ desc }}</div>
        <div class="flex flex-row gap-5">
          <div class="flex flex-row">
            <img
              class="w-1/5"
              v-for="i in nbrEtoiles"
              :key="i"
              src="@/assets/icons/ic_star_yellow.svg"
              alt="Icône - Star"
            />
            <img
              class="w-1/5"
              v-for="i in note_total - nbrEtoiles"
              :key="i"
              src="@/assets/icons/ic_star_white.svg"
              alt="Icône - Star 2"
            />
          </div>
          <div class="font-medium">({{ nbrAvis }} avis)</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "nbrEtoiles", "nbrAvis"],
  data() {
    return {
      note_total: 5,
    };
  },
};
</script>
