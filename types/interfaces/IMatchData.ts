export interface IMatchData {
  date?: number;
  decision: "Win" | "Loss" | "Draw";
  map: string;
  mmr?: number;
  opponent?: string;
  opponentMmr?: number;
  opponentRace?: "protoss" | "terran" | "zerg";
  youtubeLink?: string;
}
