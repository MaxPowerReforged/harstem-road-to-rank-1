<template>
  <main>
    <TheProfileCard />
    <TheMMRLineChart />
  </main>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  }
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
