<template>
  <div class="race-chart-card">
    <div class="race-pie-chart-container">
      <div class="race-icon-chart" :class="iconClass" v-html="icon"></div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <span
      >{{ raceFromSeries }}v{{ race.charAt(0).toUpperCase() }}:
      {{ winrateData.wins }}/{{ winrateData.losses }}<br />{{
        winratePercentage
      }}%</span
    >
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Vue, { PropType } from "vue";
import { IRaceWinrate } from "~/types/interfaces/IRaceWinrate";

export default Vue.extend({
  props: {
    seriesName: {
      type: String as PropType<
        "roadRankOne" | "grandmasterTerran" | "grandmasterZerg"
      >,
      required: true
    },
    winrateData: {
      type: Object as PropType<IRaceWinrate>,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    race: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chartPoints: []
    };
  },
  computed: {
    iconClass() {
      if (this.race === "protoss") return "icon-protoss";
      if (this.race === "terran") return "icon-terran";
      if (this.race === "zerg") return "icon-zerg";
    },
    factionColor() {
      if (this.race === "protoss") return "#dec93e";
      if (this.race === "terran") return "#799fca";
      if (this.race === "zerg") return "#9e1b51";
    },
    factionShadowColor() {
      if (this.race === "protoss") return "#c4ad18";
      if (this.race === "terran") return "#5887bd";
      if (this.race === "zerg") return "#681236";
    },
    raceFromSeries() {
      if (this.seriesName === "roadRankOne") return "P";
      if (this.seriesName === "grandmasterTerran") return "T";
      if (this.seriesName === "grandmasterZerg") return "Z";
    },
    winratePercentage() {
      if (this.winrateData.wins === 0 && this.winrateData.losses === 0)
        return 0;
      return (
        (this.winrateData.wins /
          (this.winrateData.wins + this.winrateData.losses)) *
        100
      ).toFixed(0);
    },
    chartOptions() {
      return {
        chart: {
          type: "pie",
          backgroundColor: "transparent",
          width: 185,
          height: 150
        },
        plotOptions: {
          pie: {
            borderColor: "black",
            dataLabels: false,
            borderWidth: 0,
            allowPointSelect: false,
            animation: true,
            innerSize: "93%",
            size: 80
          },
          series: {
            enableMouseTracking: false,
            shadow: {
              color: this.factionShadowColor,
              width: 9,
              offsetX: 0,
              offsetY: 0
            }
          }
        },
        tooltip: {
          enabled: false
        },
        title: {
          text: ""
        },
        series: [{ data: this.chartPoints }],
        credits: {
          enabled: false
        }
      };
    }
  },
  created() {
    this.chartPoints = [
      {
        y: this.winrateData.wins,
        color: this.factionColor
      },
      {
        y: this.winrateData.losses,
        color: "black"
      }
    ];
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
  filter: drop-shadow(0 0 15px #c4ad18);
}

.icon-zerg {
  color: #9e1b51;
}

.icon-zerg {
  filter: drop-shadow(0 0 15px #681236);
}

.icon-terran {
  color: #799fca;
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
