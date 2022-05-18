<template>
  <a :href="href" class="flex hover:text-black items-center">
    <div class="me-1 ms-1">
      <span class="font-bold">
        {{ nom }}
        <br />
      </span>
      <span class="font-light">
        {{ role }}
      </span>
    </div>
    <img :src="profile" class="profile me-1" />
  </a>
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
