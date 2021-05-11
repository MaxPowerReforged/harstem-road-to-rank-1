import { GetterTree, ActionTree, MutationTree } from "vuex";

export const state = () => ({
  maps: [] as string[]
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  getMaps: state => state.maps
};

export const mutations: MutationTree<RootState> = {
  setMaps: (state, maps: string[]) => {
    state.maps = maps;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async fetchMaps({ commit }) {
    const mapNames = [
      "Romanticide",
      "Oxide",
      "Lightshade",
      "Jagannatha",
      "Blackburn",
      "BeckettIndustries",
      "Atmospheres"
    ];
    let maps: string[] = [];
    mapNames.forEach(mapName => {
      maps.push(mapName);
      //const mapUrl = await this.$cloudinary.image.url();
    });
    commit("setMaps", maps);
  }
};
