<template>
  <Card class="statistic-card">
    <template #title> Statistics </template>
    <div
      class="
        grid
        lg:grid-cols-2
        md:grid-cols-1
        sm:grid-cols-2
        gap-y-4 gap-2
        mt-2
      "
    >
      <Item name="Clients" :count="clients">
        <template #icon>
          <MailIcon />
        </template>
      </Item>
      <Item name="Revenue" :count="revenue">
        <template #icon>
          <ChatAltIcon />
        </template>
      </Item>
      <Item name="Produits" :count="produits">
        <template #icon>
          <CalendarIcon />
        </template>
      </Item>
      <Item name="Ventes" :count="ventes">
        <template #icon>
          <ClipboardListIcon />
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

<style>
.statistic-card .row span {
  font-size: 16px;
}
</style>
