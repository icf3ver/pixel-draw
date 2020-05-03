import React from "react";
import Screen from "../Screen/Screen";
import { Props, Colors} from "./types";
import styles from "./App.module.css";
export default class App extends React.PureComponent<Props, Colors> {
    positions: Colors = {
        pixelPositions: {},
        selectedColor: "white"
    };

    handlePixelClick = (tileId: string) => {
        //TODO
    };

    renderColumn() {
        const { columns, rows } = this.props;
        const { pixelPositions } = this.positions;
        return (
            <Screen
            columns = {columns}
            rows = {rows}
            pixelPositions={pixelPositions}
            onPixelClick={this.handlePixelClick}
            />
        );
    }

    render() {
        return (
        <div className={styles.app}>
            {this.renderColumn()}
        </div>
        );
    }
}