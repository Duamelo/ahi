<template>
  <Card class="statistic-card">
    <template #title> Statistics </template>
    <div class="row row-cols-2 justify-around icons mt-2">
      <Item name="Clients" class="mb-9 me-4" :count="clients">
        <template #icon>
          <MailIcon />
        </template>
      </Item>
      <Item name="Revenue"  class="mb-9" :count="revenue">
        <template #icon>
          <ChatAltIcon />
        </template>
      </Item>
      <Item name="Produits" class="me-4 mb-3" :count="produits">
        <template #icon>
          <CalendarIcon />
        </template>
      </Item>
      <Item name="Ventes" :count="ventes" class="mb-1">
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
.statistic-card  .row span{
  font-size: 16px;
}
</style>
