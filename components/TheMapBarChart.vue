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
import { IMapWinrate } from "@/types/interfaces/IMapWinrate";
import { mapGetters } from "vuex";
import { mapChartOptions } from "./mapChartOptions";

export default Vue.extend({
  props: {
    seriesName: {
      type: String as PropType<
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
      chartData: []
    };
  },
  computed: {
    ...mapGetters("roadRankOne", ["getWinratePerMap"])
  },
  created() {
    this.chartOptions.series[0].data = this.processWinrateForChart(
      this.getWinratePerMap as any
    );
  },
  methods: {
    processWinrateForChart(mapWinrates: IMapWinrate[]): any {
      let processedWinrates = [] as any[];
      mapWinrates.forEach(mapWinrate => {
        let percentage = 0;
        if (mapWinrate.wins === 0 && mapWinrate.losses === 0) percentage = 0;
        else {
          percentage = parseFloat(
            (
              (mapWinrate.wins / (mapWinrate.wins + mapWinrate.losses)) *
              100
            ).toFixed(0)
          );
        }
        processedWinrates.push({
          name: mapWinrate.map,
          wins: mapWinrate.wins,
          losses: mapWinrate.losses,
          y: percentage
        });
      });
      console.log(processedWinrates);
      return processedWinrates as any[];
    }
  }
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
