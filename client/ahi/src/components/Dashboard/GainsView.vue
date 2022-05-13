<template>
  <Card>
    <template #title> Gains </template>
    <div class="row">
      <div class="col-9">
        Ce mois ci <br />
        <div class="text-purple-700">{{ benefices }} de bénnéfices</div>
        <br />
        <span class="font-light">
          Plus de {{ rapport }}% d'income par rapport au mois passé
        </span>
      </div>
      <div class="col-3 text-3xl text-center">
        <!-- <svg width="200" height="200"> -->
        <!-- <circle -->
        <!-- cx="100" -->
        <!-- cy="90" -->
        <!-- r="75" -->
        <!-- fill="white" -->
        <!-- stroke-width="30" -->
        <!-- stroke="purple" -->
        <!-- ></circle> -->
        <!-- <text fill="black" x="60" y="85"> -->
        <!-- {{ entries }}% -->
        <!-- <tspan x="50" y="125">entries</tspan> -->
        <!-- </text> -->
        <!-- </svg> -->
        {{ entries }}%<br />entries
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

<style></style>
