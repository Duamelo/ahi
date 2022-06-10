<template>
  <aside class="sidebar bg-white me-3" aria-label="Sidebar">
    <div class="fw-bolder text-center mb-24 mt-3">
      AHI <br />
      MARKETPLACE <br />
    </div>
    <div class="fw-bolder text-center mb-3">PAGES & APPS <br /></div>
    <ul class="icons space-y-2 p-2">
      <item href="/dashboard/email">
        <template #icon> <MailIcon /> </template>
        Email
      </item>
      <item href="/dashboard/chat">
        <template #icon> <ChatAltIcon /> </template>
        Chat
      </item>
      <item href="/dashboard/calendrier">
        <template #icon> <CalendarIcon /> </template>
        Calendrier
      </item>
      <item href="/dashboard/tasks">
        <template #icon> <ClipboardListIcon /> </template>
        Tasks
      </item>
      <item href="/dashboard/e-com">
        <template #icon> <ShoppingCartIcon /> </template>
        E-COM
      </item>
      <item href="/dashboard/user">
        <template #icon> <UserIcon /> </template>
        User
      </item>
      <item href="/dashboard/catalogues"> CATALOGUES </item>
      <item href="/dashboard/customers"> CUSTOMERS </item>
      <item href="/dashboard/sales"> SALES </item>
      <item href="/dashboard/settings"> SETTINGS </item>
      <item href="/dashboard/marketting"> MARKETING </item>
    </ul>
  </aside>
</template>

<script>
import Item from "./MenuItem.vue";
import {
  MailIcon,
  ChatAltIcon,
  CalendarIcon,
  ClipboardListIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/vue/outline";

export default {
  components: {
    Item,
    MailIcon,
    ChatAltIcon,
    CalendarIcon,
    ClipboardListIcon,
    ShoppingCartIcon,
    UserIcon,
  },
};
</script>

<style>
.sidebar {
  /* width: 12%; */
  /* margin: 1rem !important; */
  margin-left: 1.5rem !important;
  max-height: 55.7rem;
  border-radius: 10px;
}
</style>
