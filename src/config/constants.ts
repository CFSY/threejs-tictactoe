import { swatch } from "../assets"
import state from "../store"

export interface TabElement {
  name: string
  icon: string
}

export type Tile = "_" | "X" | "O"

export const EditorTabs: TabElement[] = [
  {
    name: "colorpicker",
    icon: swatch,
  },
]

export const GridPositions: number[][] = [
  [-0.2, 0.2, 0],
  [0, 0.2, 0],
  [0.2, 0.2, 0],
  [-0.2, 0, 0],
  [0, 0, 0],
  [0.2, 0, 0],
  [-0.2, -0.2, 0],
  [0, -0.2, 0],
  [0.2, -0.2, 0],
]

export const WinConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export const VictoryLineInfo = [
  { positon: [0, 0.2, 0.03], rotation: [0, 0, Math.PI / 2], length: 0.5 },
  { positon: [0, 0, 0.03], rotation: [0, 0, Math.PI / 2], length: 0.5 },
  { positon: [0, -0.2, 0.03], rotation: [0, 0, Math.PI / 2], length: 0.5 },
  { positon: [-0.2, 0, 0.03], rotation: [0, 0, 0], length: 0.5 },
  { positon: [0, 0, 0.03], rotation: [0, 0, 0], length: 0.5 },
  { positon: [0.2, 0, 0.03], rotation: [0, 0, 0], length: 0.5 },
  { positon: [0, 0, 0.03], rotation: [0, 0, Math.PI / 4], length: 0.6 },
  { positon: [0, 0, 0.03], rotation: [0, 0, -Math.PI / 4], length: 0.6 },
]

export const DefaultBoard: Tile[][] = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
]

export const resetBoard = () => {
  state.currentPlayer = "X"
  state.board = JSON.parse(JSON.stringify(DefaultBoard))
  state.blockInput = false
  state.gameComplete = false
  state.victoryLineIndex = -1
}
