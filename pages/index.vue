<template>
  <main>
    <TheProfileCard />
    <TheMMRLineChart />
    <LazyTheRaceWinrateChart />
  </main>
</template>

<script>
import { lateralPageTransition } from "@/utils/transitions";
import { mapActions } from "vuex";

export default {
  meta: {
    depth: 1
  },
  transition: lateralPageTransition,
  methods: {
    //...mapActions("roadToRankOne", ["fetchMetaData", "fetchLadderData"])
  },
  created() {
    //this.fetchMetaData();
    //this.fetchLadderData();
  }
};
</script>

<style>
main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>
