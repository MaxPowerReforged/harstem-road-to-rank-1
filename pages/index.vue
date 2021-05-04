<template>
  <main>
    <TheProfileCard seriesName="roadRankOne" />
    <TheMMRLineChart seriesName="roadRankOne" />
    <LazyTheRaceWinrateChart seriesName="roadRankOne" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { lateralPageTransition } from "@/utils/transitions";
import { mapActions } from "vuex";

export default Vue.extend({
  transition: lateralPageTransition,
  methods: {
    ...mapActions("roadRankOne", ["fetchMetaData", "fetchLadderData"])
  },
  created() {
    this.fetchLadderData();
    this.fetchMetaData();
  }
});
</script>

<style>
main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>
