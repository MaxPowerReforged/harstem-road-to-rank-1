<template>
  <article class="chart-sheet">
    <h2>Ladder MMR</h2>
    <div class="chart-wrapper">
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <div class="loading-placeholder" v-if="loading">
      <b-spinner class="spinner" label="Loading..."></b-spinner>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { chartOptions } from "./chartOptions";

export default Vue.extend({
  data() {
    return {
      chartOptions: chartOptions,
      loading: true
    };
  },
  methods: {
    ...mapGetters("roadRankOne", ["getLadderData"])
  },
  created() {
    this.chartOptions.series.data = this.getLadderData();
  }
});
</script>

<style>
article {
  position: relative;
}

.chart-sheet {
  height: 500px;
  width: 800px;
  max-width: 90vw;
  margin-top: 40px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 15px;
  background: rgba(20, 36, 51, 0.8)
    linear-gradient(0deg, rgba(20, 61, 102, 0.2), rgba(20, 61, 102, 0) 50%);
  border: 2px solid #22476b;
  box-shadow: inset 0 0 20px rgb(102 179 255 / 20%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-wrapper {
  width: 100%;
  overflow: auto;
}

.highcharts-tooltip {
  background: rgba(20, 36, 51, 0.8)
    linear-gradient(0deg, rgba(20, 61, 102, 0.2), rgba(20, 61, 102, 0) 50%);
  border: 2px solid #22476b;
  box-shadow: inset 0 0 20px rgb(102 179 255 / 20%);
  border-radius: 5px;
}

.loading-placeholder {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.spinner {
  width: 100px;
  height: 100px;
  border-width: 1px;
  box-shadow: 0 0 9px #4585c4, 0 0 9px #4585c4 inset;
}
</style>
