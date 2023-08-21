import React from "react";

export const Tile = (props) => {

  const tiles = Object.values(props.description).map( (value) => <p className="tile">{value}</p>)

  return (
    <div className="tile-container">
      <p className="tile-title" >{props.name}</p>
      {tiles}
    </div>
  );
};
