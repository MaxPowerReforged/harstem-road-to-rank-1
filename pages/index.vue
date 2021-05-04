<template>
  <main>
    <TheProfileCard seriesName="roadRankOne" />
    <TheMMRLineChart
      seriesName="roadRankOne"
      :loading="getIsLadderDataLoading"
    />
    <LazyTheRaceWinrateChart
      seriesName="roadRankOne"
      :loading="getIsLadderDataLoading"
    />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { lateralPageTransition } from "@/utils/transitions";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  transition: lateralPageTransition,
  methods: {
    ...mapActions("roadRankOne", ["fetchMetaData", "fetchLadderData"]),
    ...mapGetters("roadToRankOne", ["getLadderData"])
  },
  created() {
    this.fetchLadderData();
    this.fetchMetaData();
  },
  computed: {
    ...mapGetters("roadRankOne", ["getIsLadderDataLoading"])
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
