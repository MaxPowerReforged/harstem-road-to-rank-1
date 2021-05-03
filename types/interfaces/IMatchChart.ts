export interface IMatchChart {
  x: number;
  decision: "win" | "lose" | "draw";
  map: string;
  y: number;
  opponent?: string;
  opponentMmr?: number;
  opponentRace?: "protoss" | "terran" | "zerg";
  youtubeLink?: string;
}
