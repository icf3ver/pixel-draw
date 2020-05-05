import React from "react";
import Pixel from "../Pixel/Pixel";
import styles from "./Palette.module.css";
import { Props } from "./types";

export default class Palette extends React.PureComponent<Props>{

    render (){
        const {positions, onSelect} = this.props;
        const palette = [];

        for (let i = 0; i < positions.length; i++){
            palette.push(
            <Pixel
            key = {positions[i] as string}
            id = {positions[i] as string}
            color = {positions[i]}
            onClick = {onSelect}
            />
            );
        }

        return <div className = {styles.palette}> {palette} </div>
    }

}