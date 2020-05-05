import React from "react";
import Screen from "../Screen/Screen";
import Palette from "../Palette/Palette";
import { Props, Colors, Color} from "./types";
import styles from "./App.module.css";
export default class App extends React.PureComponent<Props, Colors> {
    colors: Array<Color> = ["red", "green", "blue", "white"];

    state: Colors = {
        pixelPositions: {},
        selectedColor: "red"
    };

    handlePixelClick = (pixelId: string) => {
        const {pixelPositions, selectedColor} = this.state;
        
        const newPixelPositions = {
            ...pixelPositions,
            [pixelId]: selectedColor
        };

        this.setState({pixelPositions: newPixelPositions, selectedColor: selectedColor});
    };

    handleColorSelect = (color: string) => {
        const {pixelPositions} = this.state;

        this.setState({pixelPositions: pixelPositions, selectedColor: color as Color});
    }

    renderColumn() {
        const { columns, rows } = this.props;
        const { pixelPositions } = this.state;
        return (
            <>
            <Screen
            columns = {columns}
            rows = {rows}
            pixelPositions={pixelPositions}
            onPixelClick={this.handlePixelClick}
            />
            <Palette 
            positions = {this.colors}
            onSelect = {this.handleColorSelect}
            />
            </>
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