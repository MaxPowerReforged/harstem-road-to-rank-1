<template>
  <main>
    <TheProfileCard />
    <TheMMRLineChart />
    <LazyTheRaceWinrateChart />
  </main>
</template>

<script>
import Vue from "vue";
import { lateralPageTransition } from "@/utils/transitions";

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
