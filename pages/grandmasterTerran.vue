<template>
  <main>
    <TheProfileCard seriesName="grandmasterTerran" />
    <TheMMRLineChart
      seriesName="grandmasterTerran"
      :loading="getIsLadderDataLoading"
    />
    <LazyTheRaceWinrateChart
      seriesName="grandmasterTerran"
      :loading="getIsLadderDataLoading"
    />
    <LazyTheMapBarChart
      seriesName="grandmasterTerran"
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
    ...mapActions("grandmasterTerran", ["fetchMetaData", "fetchLadderData"])
  },
  created() {
    this.fetchLadderData();
    this.fetchMetaData();
  },
  computed: {
    ...mapGetters("grandmasterTerran", ["getIsLadderDataLoading"])
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
