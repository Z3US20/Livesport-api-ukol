import React from "react";
import Item from "./Item";

function Teams({ teams }) {

  return (
    <div>
      <div className="results">
       {teams.map((item,key) => (
          <Item key={key} item={item} />
        ))}   
      </div>
    </div>
  );
}

export default Teams;