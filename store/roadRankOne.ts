import { GetterTree, ActionTree, MutationTree } from "vuex";
import { IMatchChart } from "~/types/interfaces/IMatchChart";
import { IMatchData } from "~/types/interfaces/IMatchData";
import { IMetaData } from "~/types/interfaces/IMetaData";
import { IRaceWinrate } from "~/types/interfaces/IRaceWinrate";

interface looseObject {
  [key: string]: any;
}

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
  getWinratePerFaction: state => {
    let protossWinrate: IRaceWinrate = {
      faction: "protoss",
      wins: 0,
      losses: 0
    };
    let zergWinrate: IRaceWinrate = {
      faction: "zerg",
      wins: 0,
      losses: 0
    };
    let terranWinrate: IRaceWinrate = {
      faction: "terran",
      wins: 0,
      losses: 0
    };
    state.ladderData.forEach(match => {
      if (match.opponentRace === "protoss") {
        if (match.decision === "Win") protossWinrate.wins += 1;
        else protossWinrate.losses += 1;
      }
      if (match.opponentRace === "terran") {
        if (match.decision === "Win") terranWinrate.wins += 1;
        else terranWinrate.losses += 1;
      }
      if (match.opponentRace === "zerg") {
        if (match.decision === "Win") zergWinrate.wins += 1;
        else zergWinrate.losses += 1;
      }
    });
    const winrates = {
      protoss: protossWinrate,
      terran: terranWinrate,
      zerg: zergWinrate
    };
    return winrates;
  },
  getWinratePerMap: state => {
    console.log(state.ladderData);
    const mapNames = [
      ...new Set(
        state.ladderData.map(match => {
          match.map;
        })
      )
    ];
    console.log(mapNames);
    let mapWinrates: looseObject = {};
    mapNames.forEach(mapName => {
      mapWinrates[mapName] = {
        name: mapName,
        wins: 0,
        losses: 0
      };
    });
    state.ladderData.forEach(match => {
      if (match.decision === "Win") mapWinrates[match.map].wins += 1;
      if (match.decision === "Lose") mapWinrates[match.map].loses += 1;
    });
    return Object.values(mapWinrates);
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
