import React from "react";
import classNames from "classnames";
import styles from "./Pixel.module.css";
import { Props } from "./types";

export default class Pixel extends React.PureComponent<Props> {
    render(){
        const {id, color, onClick = () => {} } = this.props;
        const pixelCssClass = classNames(styles.pixel,  color === "red" ? styles.red :
                                                        color === "green" ? styles.green :
                                                        color === "blue" ? styles.blue : 
                                                        styles.white);
        return (
            <div className = {styles.pixel} onClick = { () => onClick(id)}>
                {color && <div className = {pixelCssClass}/>}
            </div>
        );
    }
}