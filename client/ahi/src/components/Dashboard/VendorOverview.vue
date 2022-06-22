<template>
  <dashboard-card class="mb-3 mt-9" :collapsible="true">
    <template #title> Overview </template>
    <template #left>
      <ul class="flex list-disc fw-bolder">
        <li class="me-4 gains_color">Gains</li>
        <li class="depenses_color">Dépenses</li>
      </ul>
    </template>
    <div class="chart-container px-2">
      <canvas
        width="200"
        height="200"
        aria-label="Dashboard Venndeur Overview"
        role="img"
      ></canvas>
    </div>
    <div class="flex justify-end mt-10">
      <button type="button" class="button-outlined">
        {{ annee }}
      </button>
    </div>
  </dashboard-card>
</template>

<script>
import DashboardCard from "./DashboardCard.vue";
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
  components: { DashboardCard },
  props: ["gains", "annee", "depenses"],
  mounted() {
    const ctx = this.$el.querySelector("canvas");
    Chart.defaults.font.size = 20
    Chart.defaults.font.weight = "bold"
    new Chart(ctx, {
      defaults:{
        font:{
          size:32,
          weight:"bold"
        }
      },
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Gains",
            data: this.gains,
            backgroundColor: "#1E3C87",
            borderColor: "#1E3B77",
            borderRadius: 10,
            borderWidth: 1,
            barThickness: 10,
          },
          {
            label: "Depenses",
            data: this.depenses,
            backgroundColor: "#FFBD14",
            borderRadius: 10,
            barThickness: 10,
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              padding: 20,
              backdropPadding: {
                x: 10,
                y: 4,
              },
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks:{
               padding: 20,
              
            }
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  },
};
</script>

<style>
.chart-container {
  position: relative;
  margin: auto;
  height: 411px;
  width: 69vw;
}
.gains_color {
  color: #1e3c87;
}
.depenses_color {
  color: #ffbd14;
}
</style>
