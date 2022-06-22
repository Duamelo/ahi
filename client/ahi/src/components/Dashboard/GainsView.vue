<template>
  <Card>
    <template #title> Gains </template>
    <div class="grid sm:grid-cols-6 gap-5">
      <div class="xl:col-span-4 md:col-span-3 sm:col-span-6">
        Ce mois ci <br />
        <div class="text-purple-700">{{ benefices }} de bénnéfices</div>
        <br />
        <span class="font-light ">
          Plus de {{ rapport }}% d'income par rapport au mois passé
        </span>
      </div>
      <div class="xl:col-span-2 md:col-span-3 sm:col-span-6  text-3xl text-center fw-bold" >
        <svg width="200" height="200" class="-mt-8">
          <circle
            cx="100"
            cy="90"
            r="75"
            fill="white"
            stroke-width="21"
            stroke="#29B9AD"
          ></circle>
          <text fill="black" x="60" y="85">
            <tspan x="70" y="80">{{ entries }}%</tspan>
            <tspan x="50" y="120">entries</tspan>
          </text>
        </svg>
        <!-- {{ entries }}%<br />entries -->
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "./DashboardCard.vue";

export default {
  components: { Card },
  props: ["benefices", "rapport", "entries"],
};
</script>

<style scoped>
svg {
  width: auto;
  height: auto;
}
</style>
