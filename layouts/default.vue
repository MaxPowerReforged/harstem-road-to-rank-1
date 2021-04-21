<template>
  <div>
    <div
      class="background"
      :style="
        `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImageURL});`
      "
    >
      <TheNavBar />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const context = useContext();
    const backgroundImageURL: String = getBackgroundImageURL(
      context.$cloudinary
    );
    return {
      backgroundImageURL
    };
  }
});

function getBackgroundImageURL(cloudinary: any) {
  return cloudinary.image.url(
    "Harstem-Stats-Road-To-Rank-1/2916673_opwk41.jpg",
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
.background {
  min-height: 100vh;
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
