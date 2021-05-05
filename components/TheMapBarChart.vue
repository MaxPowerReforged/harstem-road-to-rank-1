<template>
  <article class="chart-sheet-maps">
    <h2>Winrate by Map</h2>
    <div class="chart-wrapper-maps">
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
import { mapChartOptions } from "./mapChartOptions";

export default Vue.extend({
  props: {
    seriesName: {
      type: Object as PropType<
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
      chartOptions: mapChartOptions,
      romanticide: "",
      oxide: "",
      lightshade: "",
      jagannatha: "",
      blackburn: "",
      beckettIndustries: "",
      atmospheres: ""
    };
  },
  methods: {
    ...mapGetters("roadRankOne", ["getLadderData"])
  },
  created() {
    //this.chartOptions.series.data = this.getLadderData();
  },
  async fetch() {
    this.romanticide = await this.$cloudinary.image.url(
      "Harstem-Stats-Road-To-Rank-1/maps/romanticide.jpg",
      {
        fetch_format: "auto",
        crop: "scale",
        quality: "auto",
        width: "auto"
      }
    );
    this.oxide = await this.$cloudinary.image.url(
      "Harstem-Stats-Road-To-Rank-1/maps/oxide.jpg",
      {
        fetch_format: "auto",
        crop: "scale",
        quality: "auto",
        width: "auto"
      }
    );
    this.lightshade = await this.$cloudinary.image.url(
      "Harstem-Stats-Road-To-Rank-1/maps/lightshade.jpg",
      {
        fetch_format: "auto",
        crop: "scale",
        quality: "auto",
        width: "auto"
      }
    );
    this.jagannatha = await this.$cloudinary.image.url(
      "Harstem-Stats-Road-To-Rank-1/maps/jagannatha.jpg",
      {
        fetch_format: "auto",
        crop: "scale",
        quality: "auto",
        width: "auto"
      }
    );
    this.blackburn = await this.$cloudinary.image.url(
      "Harstem-Stats-Road-To-Rank-1/maps/blackburn.jpg",
      {
        fetch_format: "auto",
        crop: "scale",
        quality: "auto",
        width: "auto"
      }
    );
    this.beckettIndustries = await this.$cloudinary.image.url(
      "Harstem-Stats-Road-To-Rank-1/maps/beckettIndustries.jpg",
      {
        fetch_format: "auto",
        crop: "scale",
        quality: "auto",
        width: "auto"
      }
    );
    this.atmospheres = await this.$cloudinary.image.url(
      "Harstem-Stats-Road-To-Rank-1/maps/atmospheres.jpg",
      {
        fetch_format: "auto",
        crop: "scale",
        quality: "auto",
        width: "auto"
      }
    );
  }
});
</script>

<style>
article {
  position: relative;
}

.chart-sheet-maps {
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

.chart-wrapper-maps {
  width: 100%;
  overflow: auto;
}
</style>
