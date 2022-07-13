<template>
  <aside class="sidebar transition ease-in-out me-3" aria-label="Sidebar" :class="{'show':  show}">
    
    <div class="mb-24 mt-3 header">
      AHI <br />
      MARKETPLACE <br />
    </div>
    <div class="mb-4 mt-2 md:mt-0">PAGES & APPS <br /></div>
    <span class="nav-lg-none" @click="s_witch()"> x </span>
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
  props: ["show"],
  // emits: ["update:page_index","update:limit_index"],
  methods: {
      s_witch() {
        this.$emit("update:show", !this.show);
      }
    },
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
/* Xl &&  Laptop */
@media (min-width: 870px){
  
  .sidebar {
    width: 20%;
    margin-left: 1rem;
    max-height: 68rem;
    grid-column: auto;
  }
  .sidebar.show{
        display: none;
  }
}

/* Tablet  && Mobile*/
@media  (max-width: 870px) {
  .header{
    display: none;
  }
  .sidebar {
    display: none;
    max-height: 68rem;
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    overflow-y: auto;
    height: 100vh;
    margin: 0;
  }
  .sidebar.show{
    display: inline-block;
  }
}

/* XL */
@media (min-width: 1024px) {
  .sidebar {
    width: 14.7%;
  }
}

/* Laptop */
@media (min-width: 870px) and (max-width: 1024px) {
  .sidebar {
    width: 20%;
  }
}

/* Tablet */
@media (min-width: 425px) and (max-width: 870px)  {
  .sidebar {
    width: 23%;
  }
}

/* Mobile */
@media (max-width: 425px) {
  .sidebar {
    width: 47%;
  }
}

.sidebar {
  background-color: white;
  
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  font-size: 18px;
}
</style>
