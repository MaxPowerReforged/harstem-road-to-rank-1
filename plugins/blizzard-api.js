import { sc2 } from "blizzard.js";

const sc2Api = sc2.createInstance({
  //key: process.env.BLIZZARD_CLIENT_ID,
  //secret: process.env.BLIZZARD_CLIENT_SECRET
  key: "e0b1f42ddce34b9ebcea7204c74343ad",
  secret: "5zSwwPYyapS6Umw1gL03jyzgw3INKKn4"
});

export default ({ app }, inject) => {
  inject("sc2Api", sc2Api);
};
