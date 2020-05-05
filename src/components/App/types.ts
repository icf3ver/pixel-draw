export interface PixelPositions {
    [key: string]: Color;
}

export type Color = "red" | "green" | "blue" | "white" | "";

export interface Props {
    columns: number;
    rows: number;
}

export interface Colors {
    pixelPositions: PixelPositions;
    selectedColor: Color;
}