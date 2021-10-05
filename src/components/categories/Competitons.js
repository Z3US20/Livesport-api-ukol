import React from "react";
import Item from "../Item";

function Competitons({ competitons }) {
  
  return (
      <div className="results">
       {competitons.map((item,key) => (
          <Item key={key} item={item} />
        ))}   
      </div>
  );
}

export default Competitons;