<template>
  <main>
    <TheProfileCard seriesName="grandmasterZerg" />
    <TheMMRLineChart
      seriesName="grandmasterZerg"
      :loading="getIsLadderDataLoading"
    />
    <LazyTheRaceWinrateChart
      seriesName="grandmasterZerg"
      :loading="getIsLadderDataLoading"
    />
    <LazyTheMapBarChart
      seriesName="grandmasterZerg"
      :loading="getIsLadderDataLoading"
    />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { lateralPageTransition } from "@/utils/transitions";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  transition: lateralPageTransition,
  methods: {
    ...mapActions("grandmasterZerg", ["fetchMetaData", "fetchLadderData"])
  },
  created() {
    this.fetchLadderData();
    this.fetchMetaData();
  },
  computed: {
    ...mapGetters("grandmasterZerg", ["getIsLadderDataLoading"])
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
