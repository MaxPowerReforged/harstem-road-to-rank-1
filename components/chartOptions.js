export const chartOptions = {
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
    formatter: function() {
      const formattedDate = new Date(this.x * 1000).toLocaleString();
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
      tooltipHTML += `<br><span style="color:white">MMR gain:</span> ${this.y -
        previousY}`;
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
      formatter: function() {
        return new Date(this.value * 1000).toLocaleDateString();
      },
      style: {
        color: "white"
      }
    },
    lineColor: "#22476b",
    tickColor: "#22476b",
    scrollbar: {
      enabled: true
    },
    breaks: [
      {
        from: 1619447908,
        to: 1619848868,
        gapSize: 400000
      }
    ]
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
    data: []
  },
  credits: {
    enabled: false
  }
};
