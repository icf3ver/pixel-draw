import { PixelPositions } from "../App/types";

export interface Props {
  column: number;
  rows: number;
  pixelPositions: PixelPositions;
  onPixelClick: (id: string) => any;
}