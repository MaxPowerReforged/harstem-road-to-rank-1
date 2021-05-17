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
// @ts-nocheck
import Vue, { PropType } from "vue";
import { IMapWinrate } from "@/types/interfaces/IMapWinrate";

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
      chartData: []
    };
  },
  computed: {
    getWinratePerMap() {
      return this.$store.getters[this.seriesName + "/getWinratePerMap"];
    },
    chartOptions() {
      return {
        chart: {
          context: null,
          type: "column",
          backgroundColor: "transparent",
          width: 800,
          style: {
            fontFamily: "Eurostile",
            fontSize: "14px"
          },
          scrollablePlotArea: {
            minWidth: 750,
            opacity: 0.8
          }
        },
        title: false,
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            color: "#A3C5E1",
            shadow: {
              color: "#4585C4",
              width: 9,
              offsetX: 0,
              offsetY: 0
            },
            pointWidth: 3,
            pointPadding: 0.25,
            borderColor: "#A3C5E1",
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "<span>{point.y}</span>",
              style: {
                color: "white",
                textOutline: "none",
                fontWeight: "regular"
              }
            },
            marker: {
              fillColor: "#E0ECF5",
              enabled: false
            }
          }
        },
        tooltip: {
          useHTML: true,
          headerFormat: "",
          pointFormat: `<span>{point.name}:</span> {point.y:.2f}%
        <br>Wins: {point.wins}
        <br>Losses: {point.losses}`,
          backgroundColor: "rgba(20, 36, 51, 0.9)",
          borderRadius: 5,
          boxShadow: "inset 0 0 20px rgb(102 179 255 / 20%)",
          hideDelay: 1000,
          style: {
            color: "#83ADD8",
            border: "2px solid #22476b",
            fontFamily: "Source Sans Pro",
            pointerEvents: "auto",
            fontSize: "14px"
          }
        },
        xAxis: {
          type: "category",
          lineColor: "#22476b",
          tickColor: "#22476b",
          labels: {
            style: {
              color: "white"
            },
            rotation: -52,
            formatter() {
              return this.value.substring(0, this.value.length - 3);
            }
          },
          scrollbar: {
            enabled: true
          }
        },
        yAxis: {
          labels: {
            format: "{value}",
            style: {
              color: "white"
            }
          },
          title: {
            text: "Winrate per Map",
            style: {
              color: "white",
              fontFamily: "Eurostile"
            }
          },
          gridLineColor: "#22476b"
        },
        series: [{ data: [] }],
        credits: {
          enabled: false
        }
      };
    }
  },
  watch: {
    getWinratePerMap: function() {
      this.chartOptions.series[0].data = this.getWinratePerMap;
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
