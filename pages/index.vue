<template>
  <main>
    <TheProfileCard />
    <TheMMRLineChart />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {}
});
</script>

<style>
main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
</style>
