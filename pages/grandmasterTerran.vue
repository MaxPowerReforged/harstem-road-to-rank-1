<template>
  <main>
    <TheProfileCard seriesName="grandmasterTerran" />
    <TheMMRLineChart seriesName="grandmasterTerran" />
    <LazyTheRaceWinrateChart seriesName="grandmasterTerran" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { lateralPageTransition } from "@/utils/transitions";
import { mapActions } from "vuex";

export default Vue.extend({
  transition: lateralPageTransition,
  methods: {
    ...mapActions("grandmasterTerran", ["fetchMetaData", "fetchLadderData"])
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
