<template>
<path-view>
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item active="true" href="/dashboard/product">Products</path-item>
  </path-view>  
</template>

<script setup>
import PathItem from "../../components/Path/PathItem.vue";
import PathView from "../../components/Path/PathView.vue";
import DashboardCard from "../../components/Dashboard/DashboardCard.vue";
</script>

<style>

</style>