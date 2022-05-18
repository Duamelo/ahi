<template>
  <aside class="sidebar bg-white rounded me-3" aria-label="Sidebar">
    <div class="fw-bolder text-center mb-16 mt-3">
      AHI <br />
      MARKETPLACE <br />
    </div>
    <div class="fw-bolder text-center mb-3">PAGES & APPS <br /></div>
    <ul class="icons space-y-2 p-2">
      <item href="/Email">
        <template #icon> <MailIcon /> </template>
        Email
      </item>
      <item href="/Chat">
        <template #icon> <ChatAltIcon /> </template>
        Chat
      </item>
      <item href="/Calendrier">
        <template #icon> <CalendarIcon /> </template>
        Calendrier
      </item>
      <item href="/Tasks">
        <template #icon> <ClipboardListIcon /> </template>
        Tasks
      </item>
      <item href="/E-COM">
        <template #icon> <ShoppingCartIcon /> </template>
        E-COM
      </item>
      <item href="/User">
        <template #icon> <UserIcon /> </template>
        User
      </item>
      <item href="/CATALOGUES"> CATALOGUES </item>
      <item href="/CUSTOMERS"> CUSTOMERS </item>
      <item href="/SALES"> SALES </item>
      <item href="/SETTINGS"> SETTINGS </item>
      <item href="/MARKETING"> MARKETING </item>
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

<style >
.sidebar {
  /* width: 12%; */
  /* margin: 1rem !important; */
  margin-left: 1.5rem !important;
}
.sidebar svg {
  --tw-text-opacity: 1;
  color: rgba(30, 64, 175, var(--tw-text-opacity));
  width: 25px;
  height: 25px;
}
</style>
