export const raceChartOptions = {
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
  series: {
    data: []
  },
  credits: {
    enabled: false
  }
};
