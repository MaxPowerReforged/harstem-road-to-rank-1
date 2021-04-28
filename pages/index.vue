<template>
  <main>
    <TheProfileCard />
    <TheMMRLineChart />
  </main>
</template>

<script>
import { lateralPageTransition } from "@/utils/transitions";
export default {
  meta: {
    depth: 1
  },
  transition: lateralPageTransition
};
</script>

<style>
main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
</style>
