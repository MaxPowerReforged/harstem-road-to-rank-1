export interface IMatchChart {
  x: number;
  decision: "Win" | "Loss" | "Draw";
  map: string;
  y: number;
  opponent?: string;
  opponentMmr?: number;
  opponentRace?: "protoss" | "terran" | "zerg";
  youtubeLink?: string;
}
