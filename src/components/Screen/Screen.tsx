import React from "react";
import Column from "../Column/Column";
import styles from "./Screen.module.css";
import { Props } from "./types";

export default class Board extends React.PureComponent<Props> {
    render() {
        const {columns, rows, pixelPositions, onPixelClick} = this.props;
        const columnsComponents = [];

        for (let column = 0; column < columns; column++){    
            columnsComponents.push(
                <Column
                key = {column}
                column = {column}
                rows = {rows}
                pixelPositions={pixelPositions}
                onPixelClick={onPixelClick}
                />
            );
        }

        return <div className = {styles.screen}>{columnsComponents}</div>
    }
}