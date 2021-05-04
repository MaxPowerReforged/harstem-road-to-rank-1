<template>
  <article
    class="chart-sheet-winrates"
    :class="{ 'loading-chart-sheet-winrates': loading }"
  >
    <h2>Race Winrate</h2>
    <div class="chart-container">
      <RaceChartCard
        :chartData="chartData"
        :icon="iconProtoss"
        v-if="!loading"
      />
      <RaceChartCard
        :chartData="chartData"
        :icon="iconTerran"
        v-if="!loading"
      />
      <RaceChartCard :chartData="chartData" :icon="iconZerg" v-if="!loading" />
      <div
        class="loading-placeholder loading-placeholder-winrate"
        v-if="loading"
      >
        <b-spinner class="spinner" label="Loading..."></b-spinner>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
// @ts-ignore
import iconProtoss from "~/assets/icons/symbol-protoss.svg?raw";
// @ts-ignore
import iconTerran from "~/assets/icons/symbol-terran.svg?raw";
// @ts-ignore
import iconZerg from "~/assets/icons/symbol-zerg.svg?raw";

export default Vue.extend({
  props: {
    seriesName: {
      type: Object as PropType<
        "roadRankOne" | "grandmasterTerran" | "grandmasterZerg"
      >,
      required: true
    },
    loading: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  data() {
    return {
      iconProtoss: iconProtoss,
      iconTerran: iconTerran,
      iconZerg: iconZerg,
      chartData: [
        {
          y: 2,
          color: "#A3C5E1"
        },
        {
          y: 5,
          color: "black"
        }
      ]
    };
  }
});
</script>

<style>
.chart-sheet-winrates {
  margin-top: 40px;
  margin-bottom: 50px;
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

.loading-chart-sheet-winrates {
  height: 258px;
  width: 555px;
}

.chart-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.loading-placeholder-winrate {
  margin-top: 150px;
}
</style>
