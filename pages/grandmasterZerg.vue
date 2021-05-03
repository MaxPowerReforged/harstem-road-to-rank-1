<template>
  <main>
    <TheProfileCard />
    <TheMMRLineChart />
    <LazyTheRaceWinrateChart />
  </main>
</template>

<script>
import { lateralPageTransition } from "@/utils/transitions";
import Vue from "vue";

export default {
  transition: lateralPageTransition
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
