<template>
  <div>
    <b-navbar class="navBar" toggleable="lg" type="dark">
      <b-navbar-brand to="/"
        ><b-img
          class="sc2-logo"
          :src="logoURL"
          center
          fluid
          alt="Starcraft 2 logo"
        ></b-img
      ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item to="/">Road to Rank I</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const context = useContext();
    const logoURL: String = getLogoURL(context.$cloudinary);
    return {
      logoURL
    };
  }
});

function getLogoURL(cloudinary: any) {
  return cloudinary.image.url(
    "Harstem-Stats-Road-To-Rank-1/sc2_icon_lrultt.png",
    {
      fetch_format: "auto",
      crop: "scale",
      quality: "auto",
      width: 45
    }
  );
}
</script>

<style scoped>
.navBar {
  background: rgba(20, 36, 51, 0.8)
    linear-gradient(0deg, rgba(20, 61, 102, 0.2), rgba(20, 61, 102, 0) 50%);
  border: 2px solid #22476b;
  box-shadow: inset 0 0 20px rgb(102 179 255 / 20%);
}

.sc2-logo {
  transition: all 0.3s ease;
}

.sc2-logo:hover {
  filter: brightness(1.3);
}
</style>
