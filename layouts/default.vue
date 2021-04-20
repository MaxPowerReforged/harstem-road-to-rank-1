<template>
  <div>
    <div :style="`background-image: url(${backgroundImageURL});`">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const context = useContext();
    const backgroundImageURL = getBackgroundImageURL(context.$cloudinary);
    console.log(backgroundImageURL);
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

<style></style>
