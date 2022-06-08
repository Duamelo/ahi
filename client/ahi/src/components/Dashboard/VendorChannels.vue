<template>
  <dashboard-card class="mb-3">
    <template #title> Channels </template>
    <template #left>
      <a class="text-black" href="#none"
        ><QuestionMarkCircleIcon class="w-5 h-5"
      /></a>
    </template>
    <div class="row justify-around row mb-3">
      <div class="col-5">
        <canvas
          width="200"
          height="200"
          aria-label="Dashboard Venndeur Channels"
          role="img"
        ></canvas>
      </div>
      <div class="col-5 my-auto">
        <ul class="list-disc fw-bolder fs-5">
          <li class="me-4 gains_color">Instagram</li>
          <li class="facebook_color">Facebook</li>
          <li class="depenses_color">Snapchat</li>
        </ul>
      </div>
    </div>
    <div class="row ms-1">
      <span class="col-9 fw-bold"
        >Plus de recommendation avec un taux de reconversion des visiteurs de
        60%</span
      >
    </div>
  </dashboard-card>
</template>

<script>
import DashboardCard from "./DashboardCard.vue";
import { QuestionMarkCircleIcon } from "@heroicons/vue/outline";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default {
  components: { DashboardCard, QuestionMarkCircleIcon },
  props: ["instagram", "facebook", "snapchat"],
  mounted() {
    const ctx = this.$el.querySelector("canvas");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Instagram", "Facebook", "Snapchat"],
        datasets: [
          {
            label: "Gains",
            data: [this.facebook, this.snapchat, this.instagram],
            backgroundColor: ["#29B9AD", "#FFBA08", "#1E3C87"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  },
};
//  #29B9AD;
</script>

<style>
.facebook_color {
  color: #29b9ad;
}
</style>
