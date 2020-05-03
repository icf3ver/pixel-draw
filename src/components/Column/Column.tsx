import React from "react";
import Pixel from "../Pixel/Pixel";
import styles from "./Column.module.css";
import { Props } from "./types";

export default class Column extends React.PureComponent<Props>{

    render() {
        const { column, rows, pixelPositions, onPixelClick } = this.props;
        const pixels = [];

        for (let row = 0; row < rows; row++) {
            const pixelId = '${row}:${column}';
            const pixelColor = pixelPositions[pixelId];
            pixels.push(
                <Pixel
                key = {pixelId}
                id = {pixelId}
                color = {pixelColor}
                onClick = {onPixelClick}
                />
            );

        }

        return <div className = {styles.column}>{pixels}</div>;

    }
}