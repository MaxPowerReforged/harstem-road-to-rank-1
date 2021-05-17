<template>
  <aside class="profile-sheet">
    <h2>Harstem</h2>
    <ul class="stats">
      <li>Race: {{ race }} <img :src="icon" :alt="race + ' icon'" /></li>
      <li>MMR: {{ getMetaData.mmr }}</li>
      <li>Rank: {{ getMetaData.rank }}</li>
      <li>Wins: {{ getMetaData.wins }}</li>
      <li>Losses: {{ getMetaData.losses }}</li>
      <li>
        Watch:
        <a
          target="_blank"
          :href="playlistLink"
          >YT playlist</a
        >
      </li>
    </ul>
    <h4>Latest Video:</h4>
    <iframe
      width="250px"
      :src="'https://www.youtube.com/embed/' + latestVideo"
    ></iframe>
  </aside>
</template>

<script lang="ts">
// @ts-nocheck
import Vue, { PropType } from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  props: {
    seriesName: {
      type: String as PropType<
        "roadRankOne" | "grandmasterTerran" | "grandmasterZerg"
      >,
      required: true
    }
  },
  data() {
    return {
      latestVideo: "" as string
    };
  },
  created() {
    this.getLatestVideo();
  },
  computed: {
    getMetaData() {
      return this.$store.getters[`${this.seriesName}/getMetaData`];
    },
    race() {
      if(this.seriesName === "roadRankOne") return "Protoss";
      if(this.seriesName === "grandmasterTerran") return "Terran";
      if(this.seriesName === "grandmasterZerg") return "Zerg";
    },
    icon() {
      return require(`~/assets/icons/symbol-${this.race.toLowerCase()}.png`)
    },
    playlistLink() {
      if(this.seriesName === "roadRankOne") return "https://youtube.com/playlist?list=PLbVNzAA7sXzDbrxTpRDs-cF05yJgW0NRC";
      if(this.seriesName === "grandmasterTerran") return "https://youtube.com/playlist?list=PLbVNzAA7sXzC2KdK1CkJcBmPW2BH09FTj";
      if(this.seriesName === "grandmasterZerg") return "https://youtube.com/playlist?list=PLbVNzAA7sXzB0KxW1HaroKhN1ziHQQr58";
    }
  },
  methods: {
    async getLatestVideo() {
      this.latestVideo = await this.$youtubeService.getLastYoutubeVideoFromPlaylist(
        this.seriesName
      );
    }
  }
});
</script>

<style>
.profile-sheet {
  height: 500px;
  width: 300px;
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

.stats {
  width: 100%;
  list-style: none;
  padding: 0;
  margin-left: 30px;
}

.stats > li {
  margin-top: 10px;
}
</style>
