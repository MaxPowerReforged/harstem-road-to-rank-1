<template>
  <article class="chart-sheet">
    <h2>Race Winrate</h2>
    <div class="race-pie-chart-container">
      <div class="race-icon-chart" v-html="iconProtoss"></div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <div class="race-pie-chart-container">
      <div class="race-icon-chart" v-html="iconTerran"></div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <div class="race-pie-chart-container">
      <div class="race-icon-chart" v-html="iconZerg"></div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <div class="loading-placeholder" v-if="loading">
      <b-spinner class="spinner" label="Loading..."></b-spinner>
    </div>
  </article>
</template>

<script>
import iconProtoss from "~/assets/icons/symbol-protoss.svg?raw";
import iconTerran from "~/assets/icons/symbol-terran.svg?raw";
import iconZerg from "~/assets/icons/symbol-zerg.svg?raw";
export default {
  data() {
    return {
      iconProtoss: iconProtoss,
      iconTerran: iconTerran,
      iconZerg: iconZerg,
      chartOptions: {
        chart: {
          type: "pie",
          backgroundColor: "transparent",
          width: 185,
          height: 200
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
              color: "#4585C4",
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
        series: [
          {
            data: [
              {
                y: 2,
                color: "#A3C5E1"
              },
              {
                y: 5,
                color: "black"
              }
            ]
          }
        ],
        credits: {
          enabled: false
        }
      }
    };
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

.race-pie-chart-container {
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.race-icon-chart {
  color: #a3c5e1;
  position: absolute;
  margin: auto;
  height: 25px;
  width: 25px;
  z-index: 100;
  margin-top: -10px;
  margin-left: 2px;
}

.race-icon-chart > svg {
  filter: drop-shadow(0 0 15px #4585c4);
  height: 25px;
}
</style>
