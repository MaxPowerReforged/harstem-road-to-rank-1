import Vue from "vue";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import brokenAxis from "highcharts/modules/broken-axis";

brokenAxis(Highcharts);
Vue.use(HighchartsVue, {
  highcharts: Highcharts
});
