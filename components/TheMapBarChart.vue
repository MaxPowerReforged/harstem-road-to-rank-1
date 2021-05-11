<template>
  <article class="chart-sheet-maps">
    <h2>Winrate by Map</h2>
    <div class="chart-wrapper-maps">
      <highcharts v-if="!loading" :options="chartOptions"></highcharts>
    </div>
    <div class="loading-placeholder" v-if="loading">
      <b-spinner class="spinner" label="Loading..."></b-spinner>
    </div>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { mapGetters } from "vuex";
import { mapChartOptions } from "./mapChartOptions";

export default Vue.extend({
  props: {
    seriesName: {
      type: Object as PropType<
        "roadRankOne" | "grandmasterTerran" | "grandmasterZerg"
      >,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      chartOptions: mapChartOptions,
      maps: [],
      chartData: [
        {
          y: 18,
          name: "Iron Hills",
          faction: "ironHills",
          wins: 12,
          loses: 4, //TODO is not loses, it is total
          total: 7
        },
        {
          y: 45,
          name: "Gondor",
          faction: "gondor",
          wins: 3,
          loses: 4,
          total: 7
        },
        {
          y: 67,
          name: "Lothlorien",
          faction: "lothlorien",
          wins: 3,
          loses: 4,
          total: 7
        },
        {
          y: 35,
          name: "Angmar",
          faction: "angmar",
          wins: 3,
          loses: 4,
          total: 7
        },
        {
          y: 53,
          name: "Mordor",
          faction: "mordor",
          wins: 4,
          loses: 4,
          total: 8
        }
      ]
    };
  },
  methods: {
    ...mapGetters("roadRankOne", ["getLadderData"]),
    ...mapGetters("maps", ["getMaps"])
  },
  created() {
    this.chartOptions.series[0].data = this.chartData as any;
    this.chartOptions.xAxis.categories = this.getMaps();
  },
  async fetch() {}
});
</script>

<style>
article {
  position: relative;
}

.chart-sheet-maps {
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

.chart-wrapper-maps {
  width: 100%;
  overflow: auto;
}
</style>
