import { GetterTree, ActionTree, MutationTree } from "vuex";

export const state = () => ({
  maps: [] as object[]
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  getmaps: state => state.maps
};

export const mutations: MutationTree<RootState> = {
  setmaps: (state, maps: object[]) => {
    state.maps = maps;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async fetchMaps({ commit }) {
    const mapNames = [
      "romanticide",
      "oxide",
      "lightshade",
      "jagannatha",
      "blackburn",
      "beckettIndustries",
      "atmospheres"
    ];
    let maps: object[];
    mapNames.forEach(mapName => {
      const mapUrl = await this.$cloudinary.image.url();
    });
  }
};
