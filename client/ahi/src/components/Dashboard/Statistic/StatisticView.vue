<template>
  <Card class="statistic-card">
    <template #title> Statistics </template>
    <div class="row row-cols-2 justify-center icons">
      <Item name="Clients" :count="clients">
        <template #icon>
          <MailIcon class="bg-purple-900 p-1 rounded-3xl text-white" />
        </template>
      </Item>
      <Item name="Revenue" :count="revenue">
        <template #icon>
          <ChatAltIcon class="bg-purple-900 p-1 rounded-3xl text-white" />
        </template>
      </Item>
      <Item name="Produits" :count="produits">
        <template #icon>
          <CalendarIcon class="bg-purple-900 p-1 rounded-3xl text-white" />
        </template>
      </Item>
      <Item name="Ventes" :count="ventes">
        <template #icon>
          <ClipboardListIcon class="bg-purple-900 p-1 rounded-3xl text-white" />
        </template>
      </Item>
    </div>
  </Card>
</template>

<script>
import Card from "../DashboardCard.vue";
import Item from "./StatisticItem.vue";
import {
  MailIcon,
  ChatAltIcon,
  CalendarIcon,
  ClipboardListIcon,
} from "@heroicons/vue/outline";

export default {
  components: {
    Item,
    Card,
    MailIcon,
    ChatAltIcon,
    CalendarIcon,
    ClipboardListIcon,
  },
  props: ["clients", "revenue", "produits", "ventes"],
};
</script>

<style></style>
