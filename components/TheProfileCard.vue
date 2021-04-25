<template>
  <aside class="profile-sheet">
    <h2>Harstem</h2>
    <ul class="stats">
      <li>Race: Protoss <img :src="protossIcon" alt="Protoss icon" /></li>
      <li>MMR: 6629</li>
      <li>Rank: 22</li>
      <li>Wins: 12</li>
      <li>Losses: 12</li>
      <li>
        Watch:
        <a
          target="_blank"
          href="https://youtube.com/playlist?list=PLbVNzAA7sXzDbrxTpRDs-cF05yJgW0NRC"
          >YT playlist</a
        >
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const context = useContext();
    const protossIcon: String = getProtossIcon(context.$cloudinary);
    return {
      protossIcon
    };
  }
});

function getProtossIcon(cloudinary: any) {
  return cloudinary.image.url(
    "Harstem-Stats-Road-To-Rank-1/race-symbol-protoss_osk6l7.png",
    {
      fetch_format: "auto",
      crop: "scale",
      quality: "auto",
      width: "auto"
    }
  );
}
</script>

<style>
.profile-sheet {
  height: 500px;
  width: 300px;
  margin-top: 40px;
  padding: 15px;
  background: rgba(20, 36, 51, 0.8)
    linear-gradient(0deg, rgba(20, 61, 102, 0.2), rgba(20, 61, 102, 0) 50%);
  border: 2px solid #22476b;
  box-shadow: inset 0 0 20px rgb(102 179 255 / 20%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats {
  width: 100%;
  list-style: none;
  padding: 0;
  margin-left: 30px;
}

.stats > li {
  margin-top: 10px;
}
</style>
