<template>
  <article class="chart-sheet">
    <h2>Ladder MMR</h2>
    <highcharts :options="chartOptions"></highcharts>
  </article>
</template>

<script>
import { chartOptions } from "./chartOptions";

export default {
  data() {
    return {
      chartOptions: chartOptions
    };
  },
  methods: {
    async getLadderData(firestore) {
      const snapshot = await firestore.collection("harstemRoadRankOne").get();
      snapshot.forEach(match => {
        this.chartOptions.series.data.push(
          this.translateDataObject(match.data())
        );
      });
    },
    translateDataObject(match) {
      delete Object.assign(match, { ["y"]: match["mmr"] })["mmr"];
      delete Object.assign(match, { ["x"]: match["date"] })["date"];

      return match;
    }
  },
  mounted() {
    this.getLadderData(this.$fire.firestore);
  }
};
</script>

<style>
.chart-sheet {
  height: 500px;
  width: 800px;
  margin-top: 40px;
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

.highcharts-tooltip {
  background: rgba(20, 36, 51, 0.8)
    linear-gradient(0deg, rgba(20, 61, 102, 0.2), rgba(20, 61, 102, 0) 50%);
  border: 2px solid #22476b;
  box-shadow: inset 0 0 20px rgb(102 179 255 / 20%);
  border-radius: 5px;
}
</style>
