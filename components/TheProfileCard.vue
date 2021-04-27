<template>
  <aside class="profile-sheet">
    <h2>Harstem</h2>
    <ul class="stats">
      <li>Race: Protoss <img :src="protossIcon" alt="Protoss icon" /></li>
      <li>MMR: {{ profileData.mmr }}</li>
      <li>Rank: {{ profileData.rank }}</li>
      <li>Wins: {{ profileData.wins }}</li>
      <li>Losses: {{ profileData.losses }}</li>
      <li>
        Watch:
        <a
          target="_blank"
          href="https://youtube.com/playlist?list=PLbVNzAA7sXzDbrxTpRDs-cF05yJgW0NRC"
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

<script>
export default {
  data() {
    return {
      latestVideo: "",
      protossIcon: require("~/assets/icons/symbol-protoss.png"),
      profileData: ""
    };
  },
  created() {
    this.getLatestVideo();
    this.getProfileData();
  },
  methods: {
    async getLatestVideo() {
      this.latestVideo = await this.$youtubeService.getLastYoutubeVideoFromPlaylist();
    },
    async getProfileData() {
      const firestoreData = await this.$fire.firestore
        .collection("harstemRoadRankOneMetadata")
        .doc("lastRecord")
        .get();
      this.profileData = firestoreData.data();
    }
  }
};
</script>

<style>
.profile-sheet {
  height: 500px;
  width: 300px;
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
