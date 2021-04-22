import { chartData } from "./chartData.js";

export const chartOptions = {
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
    pointFormat: `<span style="color:white">MMR:</span> {point.y}
        <br>Map: {point.map}`,
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
    labels: {
      useHTML: true,
      formatter: function() {
        return new Date(this.value * 1000).toLocaleString();
      },
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
      data: chartData
    }
  ],
  credits: {
    enabled: false
  }
};
