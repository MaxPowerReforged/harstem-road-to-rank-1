<template>
  <article class="chart-sheet">
    <h2>Ladder MMR</h2>
    <highcharts :options="chartOptions"></highcharts>
  </article>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        title: false,
        chart: {
          type: "line",
          backgroundColor: "transparent",
          width: 800,
          style: {
            fontFamily: "Eurostile",
            fontSize: "14px"
          }
        },
        xAxis: {
          type: "category"
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
            marker: {
              fillColor: "#E0ECF5"
            }
          }
        },
        tooltip: {
          headerFormat: "",
          pointFormat: `<span style="color:white">{point.name}:</span> {point.y}
              <br>Wins: {point.wins}
              <br>Losses: {point.loses}
              <br>Total: {point.total}`,
          backgroundColor: "rgba(20, 36, 51, 0.9)",
          borderRadius: 5,
          boxShadow: "inset 0 0 20px rgb(102 179 255 / 20%)",
          style: {
            color: "#83ADD8",
            border: "2px solid #22476b",
            fontFamily: "Source Sans Pro"
          }
        },
        xAxis: {
          // labels: {
          //   useHTML: true,
          //   formatter: function() {
          //     return (
          //       '<img src="' +
          //       imgSrc[this.value] +
          //       '" style="width: 50px; height: 50px;">'
          //     );
          //   }
          // },
          labels: {
            format: "{value}",
            style: {
              color: "white"
            }
          },
          lineColor: "#22476b",
          tickColor: "#22476b"
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
        series: [
          {
            data: [
              {
                y: 6657,
                name: "Angmar",
                faction: "angmar",
                wins: 3,
                loses: 4,
                total: 7
              },
              {
                y: 6678,
                name: "Mordor",
                faction: "mordor",
                wins: 4,
                loses: 4,
                total: 8
              },
              {
                y: 6646,
                name: "Mordor",
                faction: "mordor",
                wins: 4,
                loses: 4,
                total: 8
              },
              {
                y: 6687,
                name: "Mordor",
                faction: "mordor",
                wins: 4,
                loses: 4,
                total: 8
              },
              {
                y: 6658,
                name: "Mordor",
                faction: "mordor",
                wins: 4,
                loses: 4,
                total: 8
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

.highcharts-tooltip {
  background: rgba(20, 36, 51, 0.8)
    linear-gradient(0deg, rgba(20, 61, 102, 0.2), rgba(20, 61, 102, 0) 50%);
  border: 2px solid #22476b;
  box-shadow: inset 0 0 20px rgb(102 179 255 / 20%);
  border-radius: 5px;
}
</style>
