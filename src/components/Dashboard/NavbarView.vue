<template>
  <nav class="navbar-view dashboard-card">
    <div class="ms-1">
      <ul class="list-reset flex">
        <li class="nav-lg-none">
          <router-link to="#" @click="s_witch()" ><MenuIcon /></router-link>
        </li>
        <li>
          <router-link to="/dashboard/email"><MailIcon /></router-link>
        </li>
        <li class="nav-md-none">
          <router-link to="/dashboard/chat"><ChatAltIcon /></router-link>
        </li>
        <li class="nav-md-none">
          <router-link to="/dashboard/calendrier"><CalendarIcon /></router-link>
        </li>
        <li class="nav-md-none">
          <router-link to="/dashboard/tasks"><ClipboardListIcon /></router-link>
        </li>
      </ul>
    </div>
    <ul class="flex items-center list-reset">
      <li class="nav-md-none">
        <router-link to="/dashboard/e-com"><TranslateIcon /></router-link>
      </li>
      <li class="nav-md-none">
        <router-link to="/dashboard/e-com"><MoonIcon /></router-link>
      </li>
      <li class="nav-md-none">
        <router-link to="/dashboard/product"><SearchIcon /></router-link>
      </li>
      <li class="nav-md-none">
        <router-link to="/dashboard/product"><ShoppingCartIcon /></router-link>
      </li>
      <li>
        <router-link to="/dashboard/user"><BellIcon /></router-link>
      </li>
      <li class="me-1 my-1">
        <profile-view
          to="/profile"
          :nom="nom"
          :role="role"
          :profile="profile"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import ProfileView from "./NavbarProfile.vue";

import {
  MenuIcon,
  MailIcon,
  ChatAltIcon,
  CalendarIcon,
  ClipboardListIcon,
  ShoppingCartIcon,
  BellIcon,
  SearchIcon,
  MoonIcon,
  TranslateIcon,
} from "@heroicons/vue/outline";

export default {
  props: ["nom", "role", "profile","show_sidebar"],
  // emits: ["update:page_index","update:limit_index"],
  methods: {
      s_witch() {
        this.$emit("update:show_sidebar", !this.show_sidebar);
      }
    },
  components: {
    MenuIcon,
    ProfileView,
    MailIcon,
    ChatAltIcon,
    CalendarIcon,
    ClipboardListIcon,
    ShoppingCartIcon,
    BellIcon,
    SearchIcon,
    MoonIcon,
    TranslateIcon,
  },
};
</script>

<style>
/* Tablet && Mobile */
@media (max-width: 870px) {
  .nav-md-none{
    display: none!important;;
  }

  .navbar-view {
    z-index: 2;
    position: fixed;
    top: 0;
    left:0;
    display: flex;
    overflow: hidden;
    border-radius: 0;
  }
}
@media (min-width: 870px) {
  .nav-lg-none{
    display: none!important;
  }
}
.navbar-view {
  background: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 0px;
  margin-right: 20px;
  margin-bottom: 2rem;
  padding-bottom: 2px;
  padding-top: 2px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
}
.navbar-view li {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #1e3c87;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.175rem 0.275rem;
  margin: 0rem 0.3rem;
  font-size: 1rem;
  border-radius: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.navbar-view li:hover {
  background-color: #1e3c87;
  color: white;
}
.navbar-view svg {
  color: rgba(30, 64, 175, var(--tw-text-opacity));
  height: 33.7px;
}

.navbar-view a {
  color: inherit;
}
</style>
