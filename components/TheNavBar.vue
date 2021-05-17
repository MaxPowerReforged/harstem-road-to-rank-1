<template>
  <div class="wrapper">
    <b-navbar class="navBar" toggleable="lg" type="dark">
      <b-navbar-brand
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
          <b-nav-item
            class="nav-link"
            exact-active-class="active-nav-link"
            exact
            :to="{ path: '/', query: { id: 2323 } }"
            >Road to Rank I</b-nav-item
          >
          <b-nav-item
            class="nav-link"
            exact-active-class="active-nav-link"
            exact
            :to="{ path: '/grandmasterTerran', query: { id: 2356 } }"
            >Grandmaster with Terran</b-nav-item
          >
          <b-nav-item
            class="nav-link"
            exact-active-class="active-nav-link"
            exact
            :to="{ path: '/grandmasterZerg', query: { id: 2465 } }"
            >Grandmaster with Zerg</b-nav-item
          >
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
      width: 40
    }
  );
}
</script>

<style scoped>
.navBar {
  background: rgba(20, 36, 51, 0.9)
    linear-gradient(0deg, rgba(20, 61, 102, 0.2), rgba(20, 61, 102, 0) 50%);
  border: 2px solid #22476b;
  box-shadow: inset 0 0 20px rgb(102 179 255 / 20%);
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  height: 50px;
}

.sc2-logo {
  transition: all 0.3s ease;
}

.sc2-logo:hover {
  filter: brightness(1.3);
}

.wrapper {
  position: sticky;
  top: 0;
}
</style>
