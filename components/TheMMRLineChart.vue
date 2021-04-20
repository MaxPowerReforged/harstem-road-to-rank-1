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
        chart: {
          type: "column",
          backgroundColor: "transparent",
          width: 800
        },
        xAxis: {
          type: "category"
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            maxPointWidth: 40,
            borderWidth: 3,
            dataLabels: {
              enabled: true,
              format: '<span style="color:{point.color}">{point.y}%</span>',
              style: {
                textOutline: "none",
                fontWeight: "regular"
              }
            }
          }
        },
        tooltip: {
          headerFormat: "",
          pointFormat: `<span style="color:{point.color}">{point.name}:</span> {point.y:.2f}%
              <br>Wins: {point.wins}
              <br>Losses: {point.loses}
              <br>Total: {point.total}`,
          backgroundColor: colors.dark,
          style: {
            color: colors.primaryBrighter
          },
          borderRadius: 0
        },
        xAxis: {
          labels: {
            useHTML: true,
            formatter: function() {
              return (
                '<img src="' +
                imgSrc[this.value] +
                '" style="width: 50px; height: 50px;">'
              );
            }
          },
          lineColor: colors.primaryDarker,
          tickColor: colors.primaryDarker
        },
        yAxis: {
          labels: {
            format: "{value}%",
            style: {
              color: colors.primaryDarker
            }
          },
          title: {
            text: "Relative faction winrate",
            style: {
              color: colors.primaryDarker
            }
          },
          gridLineColor: colors.primaryDarker
        },
        series: [
          {
            data: [
              {
                y: 18,
                color: colors["ironHillsPrimary"], //TODO generate dynamically via faction name
                borderColor: colors["ironHillsSecondary"],
                name: "Iron Hills",
                faction: "ironHills",
                wins: this.$t("navBar.statistics.general"),
                loses: 4, //TODO is not loses, it is total
                total: 7
              },
              {
                y: 45,
                color: colors["gondorPrimary"],
                borderColor: colors["gondorSecondary"],
                name: "Gondor",
                faction: "gondor",
                wins: 3,
                loses: 4,
                total: 7
              },
              {
                y: 67,
                color: "green",
                name: "Lothlorien",
                faction: "lothlorien",
                color: colors["lothlorienPrimary"],
                borderColor: colors["lothlorienSecondary"],
                wins: 3,
                loses: 4,
                total: 7
              },
              {
                y: 35,
                color: colors["angmarPrimary"],
                borderColor: colors["angmarSecondary"],
                name: "Angmar",
                faction: "angmar",
                wins: 3,
                loses: 4,
                total: 7
              },
              {
                y: 53,
                color: colors["mordorPrimary"],
                borderColor: colors["mordorSecondary"],
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
</style>
