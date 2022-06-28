<template>
  <div  class="flex items-center">
    <div class="me-1 ms-1">
      <span class="font-bold">
        {{ nom }}
        <br />
      </span>
      <span class="font-light">
        {{ role }}
      </span>
    </div>
    <a :to="href">
      <img :src="profile" class="profile me-1" />
    </a>
  </div>
</template>

<script>
export default {
  props: ["href", "nom", "profile", "role"],
};
</script>

<style>
.profile {
  border-radius: 2px;
  width: 2rem /* 32px */;
  height: 2rem /* 32px */;
}
</style>
