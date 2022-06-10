<template>
  <nav class="bg-white mb-4 p-1 navbar-view icons dashboard-card">
    <div class="ms-1">
      <ul class="list-reset flex">
        <li>
          <router-link to="/dashboard/email"><MailIcon /></router-link>
        </li>
        <li>
          <router-link to="/dashboard/chat"><ChatAltIcon /></router-link>
        </li>
        <li>
          <router-link to="/dashboard/calendrier"><CalendarIcon /></router-link>
        </li>
        <li>
          <router-link to="/dashboard/tasks"><ClipboardListIcon /></router-link>
        </li>
      </ul>
    </div>
    <ul class="flex items-center list-reset">
      <li>
        <router-link to="/dashboard/e-com"><TranslateIcon /></router-link>
      </li>
      <li>
        <router-link to="/dashboard/e-com"><MoonIcon /></router-link>
      </li>
      <li>
        <router-link to="/dashboard/e-com"><SearchIcon /></router-link>
      </li>
      <li>
        <router-link to="/dashboard/e-com"><ShoppingCartIcon /></router-link>
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
  props: ["nom", "role", "profile"],
  components: {
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
.navbar-view {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-right: auto !important;
  margin-left: auto !important;
  border-radius: 10px;
}
.navbar-view li {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.navbar-view li:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
.navbar-view svg {
  --tw-text-opacity: 1;
  color: rgba(30, 64, 175, var(--tw-text-opacity));
  height: 30px;
}
</style>
