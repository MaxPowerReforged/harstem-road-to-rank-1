export const mapChartOptions = {
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
  xAxis: {
    type: "category"
  },
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
        <br>Losses: {point.loses}
        <br>Total: {point.total}`,
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
    categories: [],
    lineColor: "#22476b",
    tickColor: "#22476b",
    labels: {
      style: {
        color: "white"
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
  series: [
    {
      data: []
    }
  ],
  credits: {
    enabled: false
  }
};
