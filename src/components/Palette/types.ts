import {Color} from "../App/types"

export interface Props{
    positions: Array<Color>;
    onSelect: (id: string) => any;
}