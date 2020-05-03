import { PixelPositions } from "../App/types";

export interface Props {
  columns: number;
  rows: number;
  pixelPositions: PixelPositions;
  onPixelClick: (id: string) => any;
}