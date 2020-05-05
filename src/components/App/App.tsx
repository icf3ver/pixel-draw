import React from "react";
import Screen from "../Screen/Screen";
import { Props, Colors} from "./types";
import styles from "./App.module.css";
export default class App extends React.PureComponent<Props, Colors> {
    state: Colors = {
        pixelPositions: {},
        selectedColor: "red"
    };

    handlePixelClick = (pixelId: string) => {
        const {pixelPositions, selectedColor} = this.state;
        console.log(pixelId);
        
        const newPixelPositions = {
            ...pixelPositions,
            [pixelId]: selectedColor
        };

        this.setState({pixelPositions: newPixelPositions, selectedColor: selectedColor});
    };

    renderColumn() {
        const { columns, rows } = this.props;
        const { pixelPositions } = this.state;
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