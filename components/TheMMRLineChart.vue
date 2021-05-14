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
import Vue, { PropType } from "vue";
import { mapGetters } from "vuex";

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
      chartPoints: []
    };
  },
  computed: {
    chartOptions() {
      const ctx = this;

      return {
        title: false,
        chart: {
          type: "line",
          backgroundColor: "transparent",
          style: {
            fontFamily: "Eurostile",
            fontSize: "14px"
          },
          scrollablePlotArea: {
            minWidth: 750,
            opacity: 0.8
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            color: "#A3C5E1", // for hover maybe "#83ADD8",
            shadow: {
              color: "#4585C4",
              width: 9,
              offsetX: 0,
              offsetY: 0
            },
            maxPointWidth: 40,
            borderWidth: 3,
            dataLabels: {
              enabled: false
            },
            stickyTracking: false,
            marker: {
              fillColor: "#E0ECF5",
              enabled: false
            }
          }
        },
        tooltip: {
          useHTML: true,
          headerFormat: "",
          formatter: function(): string {
            const formattedDate = new Date(
              this.point.date * 1000
            ).toLocaleString();
            const thisIndex = this.series.data.indexOf(this.point);
            let previousY = 0;
            if (thisIndex === 0) previousY = this.y;
            else previousY = this.series.data[thisIndex - 1].y;
            let tooltipHTML = `<span style="color:white">Date:</span> ${formattedDate}`;
            if (this.point.opponent) {
              const opponentName = this.point.opponent
                .replace(/</g, "&lt")
                .replace(/>/g, "&gt");
              tooltipHTML += `<br><span style="color:white">VS:</span> ${opponentName} (${this.point.opponentRace
                .charAt(0)
                .toUpperCase()}): ${this.point.opponentMmr}`;
            }
            tooltipHTML += `<br><span style="color:white">Result:</span> ${this.point.decision}`;
            tooltipHTML += `<br><span style="color:white">MMR gain:</span> ${this
              .y - previousY}`;
            tooltipHTML += `<br><span style="color:white">Map:</span> ${this.point.map}`;
            tooltipHTML += `<br><span style="color:white">MMR:</span> ${this.y}`;
            if (this.point.youtubeLink)
              tooltipHTML += `<br><a target="_blank" href="${this.point.youtubeLink}">Watch</a>`;
            return tooltipHTML;
          },
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
          labels: {
            useHTML: true,
            formatter: function(): string {
              const index = this.value;
              return new Date(
                ctx.chartPoints[index].date * 1000
              ).toLocaleDateString();
            },
            style: {
              color: "white"
            }
          },
          lineColor: "#22476b",
          tickColor: "#22476b",
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
            text: "MMR",
            style: {
              color: "white",
              fontFamily: "Eurostile"
            }
          },
          gridLineColor: "#22476b"
        },
        series: {
          data: this.chartPoints
        },
        credits: {
          enabled: false
        }
      };
    }
  },
  methods: {
    ...mapGetters("roadRankOne", ["getLadderData"])
  },
  created() {
    this.chartPoints = this.getLadderData();
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
