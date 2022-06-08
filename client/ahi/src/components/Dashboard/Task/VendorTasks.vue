<template>
  <dashboard-card class="mb-3">
    <template #title>Tasks</template>
    <template #left>
      <a class="text-black" href="#none"
        ><ClipboardListIcon class="w-5 h-5"
      /></a>
    </template>
    <ul class="m-2">
      <item>Contacter le service de maintenances</item>
      <item>Faire valider le nouveau produit</item>
      <item>Faire la refonte de la boutique</item>
      <item>
        Préparer les affiches de com <br />
        pour les nouveaux produit
      </item>
    </ul>
    <div class="flex justify-end">
      <button type="button" class="btn btn-outline-primary">+</button>
    </div>
  </dashboard-card>
</template>

<script>
import DashboardCard from "../DashboardCard.vue";
import Item from "./VendorTaskItem.vue";
import { ClipboardListIcon } from "@heroicons/vue/outline";
export default {
  components: { DashboardCard, Item, ClipboardListIcon },
};
</script>

<style></style>
