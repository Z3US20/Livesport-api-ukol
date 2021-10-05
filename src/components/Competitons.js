import React from "react";
import Item from "./Item";

function Competitons({ competitons }) {
  return (
    <div>
      <div className="results">
       {competitons.map((item,key) => (
          <Item key={key} item={item} />
        ))}   
      </div>
    </div>
  );
}

export default Competitons;