import React from "react";
import {Tile} from "../tile/Tile";
export const TileList = (props) => {

    const List = props.list.map( (item) => {

        const { name, ...description } = item;

        return <Tile name={name} description={description}/>
    })


    return (
        <div>
            {List}
        </div>
    );
};
