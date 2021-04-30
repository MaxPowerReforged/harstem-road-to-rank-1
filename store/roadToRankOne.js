export const state = () => ({
  metaData: {},
  ladderData: []
});

export const getters = {
  getMetaData: state => state.metaData,
  getLadderData: state => state.ladderData
};

export const mutations = {
  setMetaData: (state, metaData) => (state.metaData = metaData),
  setLadderData: (state, matchData) => state.ladderData.push(matchData)
};

export const actions = {
  async fetchMetaData({ commit }) {
    const ladderData = await this.$fire.firestore
      .collection("harstemRoadRankOneMetadata")
      .doc("lastRecord")
      .get();
    commit("setMetaData", ladderData);
  },
  async fetchLadderData({ commit }) {
    const snapshot = await this.$fire.firestore
      .collection("harstemRoadRankOne")
      .get();
    snapshot.forEach(match => {
      const matchData = match.data();
      delete Object.assign(matchData, { ["y"]: matchData["mmr"] })["mmr"];
      delete Object.assign(matchData, { ["x"]: matchData["date"] })["date"];
      commit("setLadderData", matchData);
    });
  }
};
