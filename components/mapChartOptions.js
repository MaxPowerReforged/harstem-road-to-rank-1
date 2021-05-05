export const mapChartOptions = {
  chart: {
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
      pointWidth: 10,
      borderWidth: 3,
      dataLabels: {
        enabled: true,
        format: "<span>{point.y}</span>",
        style: {
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
    labels: {
      useHTML: true,
      formatter: function() {
        const label =
          '<img src="' + this.value + '" style="width: 50px; height: 50px;">';
        return "<p>testing</p>";
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
      data: [
        {
          y: 18,
          color: "white",
          borderColor: "white",
          name: "Iron Hills",
          faction: "ironHills",
          wins: 12,
          loses: 4, //TODO is not loses, it is total
          total: 7,
          map: "romanticide"
        },
        {
          y: 45,
          color: "white",
          borderColor: "white",
          name: "Gondor",
          faction: "gondor",
          wins: 3,
          loses: 4,
          total: 7,
          map: "oxide"
        },
        {
          y: 67,
          color: "white",
          name: "Lothlorien",
          faction: "lothlorien",
          color: "white",
          borderColor: "white",
          wins: 3,
          loses: 4,
          total: 7,
          map: "jagannatha"
        },
        {
          y: 35,
          color: "white",
          borderColor: "white",
          name: "Angmar",
          faction: "angmar",
          wins: 3,
          loses: 4,
          total: 7,
          map: "lightshade"
        },
        {
          y: 53,
          color: "white",
          borderColor: "white",
          name: "Mordor",
          faction: "mordor",
          wins: 4,
          loses: 4,
          total: 8,
          map: "blackburn"
        }
      ]
    }
  ],
  credits: {
    enabled: false
  }
};
