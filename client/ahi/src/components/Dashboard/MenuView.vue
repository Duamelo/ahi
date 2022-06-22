<template>
  <aside class="sidebar me-3" aria-label="Sidebar">
    <div class="mb-24 mt-3">
      AHI <br />
      MARKETPLACE <br />
    </div>
    <div class="mb-4">PAGES & APPS <br /></div>
    <ul class="space-y-2">
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
      <item href="/dashboard/product">
        <template #icon> <UserGroupIcon /> </template>
        Products
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
  UserGroupIcon,
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
    UserGroupIcon,
  },
};
</script>

<style scoped>
/* Xl*/
@media (min-width: 1024px) {
  .sidebar {
    width: 14.7%;
    max-height: 68rem;
    grid-column: auto;
  }
}

/* Laptop */
@media (min-width: 870px) and (max-width: 1024px) {
  .sidebar {
    width: 20%;
    max-height: 68rem;
    grid-column: auto;
  }
}
/* Tablet */
@media (min-width: 425px) and (max-width: 870px) {
  .sidebar {
    width: 29%;
    max-height: 68rem;
    display: none;
  }
}
/* Mobile */
@media (max-width: 425px) {
  .sidebar {
    width: 49%;
    max-height: 68rem;
    display: none;

  }
}

.sidebar {
  background-color: white;
  font-weight: bold;
  text-align: center;
  margin-left: 1rem;
  border-radius: 10px;
  font-size: 18px;
}
</style>
