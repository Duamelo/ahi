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
    <img :src="profile" class="w-8 h-8 me-1" />
  </a>
</template>

<script>
export default {
  props: ["href", "nom", "profile", "role"],
};
</script>

<style></style>
