export interface PixelPositions {
    [key: string]: ColorTypes;
}

export type ColorTypes = "red" | "green" | "blue" | "white";

export interface Props {
    columns: number;
    rows: number;
}

export interface Colors {
    pixelPositions: PixelPositions;
    selectedColor: string;
}