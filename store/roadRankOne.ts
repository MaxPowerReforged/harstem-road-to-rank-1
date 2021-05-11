import { GetterTree, ActionTree, MutationTree } from "vuex";
import { IMatchChart } from "~/types/interfaces/IMatchChart";
import { IMatchData } from "~/types/interfaces/IMatchData";
import { IMetaData } from "~/types/interfaces/IMetaData";

export const state = () => ({
  metaData: {} as IMetaData,
  ladderData: [] as IMatchData[],
  isLadderDataLoading: true as boolean
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  getMetaData: state => state.metaData,
  getLadderData: state => state.ladderData,
  getChartLadderData: state => {
    const tempList = state.ladderData;
    return tempList as IMatchChart[];
  },
  getIsLadderDataLoading: state => {
    return state.isLadderDataLoading;
  }
};

export const mutations: MutationTree<RootState> = {
  setMetaData: (state, metaData: IMetaData) => {
    state.metaData = metaData;
  },
  emptyLadderData: state => {
    state.ladderData = [];
  },
  setLadderData: (state, match: IMatchData) => {
    state.ladderData.push(match);
  },
  setIsLadderDataLoading: (state, isLoading: boolean) => {
    state.isLadderDataLoading = isLoading;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async fetchMetaData({ commit }) {
    const metaData = await this.$fire.firestore
      .collection("harstemRoadRankOneMetadata")
      .doc("lastRecord")
      .get();
    commit("setMetaData", JSON.parse(JSON.stringify(metaData.data())));
  },
  async fetchLadderData({ commit }) {
    commit("emptyLadderData");
    commit("setIsLadderDataLoading", true);
    const snapshot = await this.$fire.firestore
      .collection("harstemRoadRankOne")
      .get();
    snapshot.forEach(match => {
      const matchData = match.data();
      delete Object.assign(matchData, { ["y"]: matchData["mmr"] })["mmr"];
      commit("setLadderData", JSON.parse(JSON.stringify(matchData)));
    });
    commit("setIsLadderDataLoading", false);
  }
};
