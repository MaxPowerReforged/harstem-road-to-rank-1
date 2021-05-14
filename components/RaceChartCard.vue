<template>
  <div class="race-chart-card">
    <div class="race-pie-chart-container">
      <div class="race-icon-chart" :class="iconClass" v-html="icon"></div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <span>PvP: 3/4<br />80%</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { raceChartOptions } from "./raceChartOptions";

export default Vue.extend({
  data() {
    return {
      chartOptions: raceChartOptions
    };
  },
  props: {
    seriesName: {
      type: String as PropType<
        "roadRankOne" | "grandmasterTerran" | "grandmasterZerg"
      >,
      required: true
    },
    chartData: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.chartOptions.series.data = this.chartData;
  }
});
</script>

<style>
.race-pie-chart-container {
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.race-icon-chart {
  position: absolute;
  margin: auto;
  height: 25px;
  width: 25px;
  z-index: 100;
  margin-top: -10px;
  margin-left: 2px;
}

.race-icon-chart > svg {
  height: 25px;
}

.icon-protoss {
  color: #dec93e;
}

.icon-protoss {
  filter: drop-shadow(0 0 15px #dec93e);
}

.icon-zerg {
  color: #9e1b51;
}

.icon-zerg {
  filter: drop-shadow(0 0 15px #681236);
}

.icon-terran {
  color: #5887bd;
}

.icon-terran {
  filter: drop-shadow(0 0 15px #5887bd);
}

.race-chart-card {
  display: inline-flex;
  justify-content: center;
  width: 185px;
  height: 220px;
  flex-direction: column;
}

.race-chart-card > span {
  text-align: center;
}
</style>
